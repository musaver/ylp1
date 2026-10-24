/**
 * Loads the Webflow runtime (jQuery, GSAP, Webflow modules, IX2/IX3
 * interactions) once, and re-initialises it after every client-side
 * navigation so animations, sliders, tabs, navbar etc. keep working without
 * full page reloads.
 */

type WebflowApi = {
  destroy: () => void;
  ready: () => void;
  require: (name: string) => any;
  push?: (fn: () => void) => void;
};

declare global {
  interface Window {
    Webflow?: WebflowApi;
    __wf_ix2_data?: unknown;
    __wf_ix3_register?: () => void;
  }
}

// Order matters: jQuery first, GSAP before the Webflow entry (IX3 uses it on init).
const SCRIPTS = [
  "/vendor/jquery-3.5.1.min.js",
  "/vendor/gsap/gsap.min.js",
  "/vendor/gsap/SplitText.min.js",
  "/vendor/webflow/webflow.schunk.1.js",
  "/vendor/webflow/webflow.schunk.2.js",
  "/vendor/webflow/webflow.entry.js",
];

let loader: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

function reinitWebflow() {
  const wf = window.Webflow;
  if (!wf || typeof wf.destroy !== "function") return;

  try {
    wf.require("ix3")?.destroy();
  } catch {
    /* IX3 not present */
  }

  wf.destroy();
  wf.ready();
  wf.require("ix2")?.init(window.__wf_ix2_data);
  window.__wf_ix3_register?.();

  // IX2 fires "page finished loading" interactions on readystatechange;
  // replay it so those animations run after client-side navigation too.
  document.dispatchEvent(new Event("readystatechange"));
}

/** Call once per page render with that page's Webflow page id. */
export function startWebflow(pageId: string) {
  document.documentElement.setAttribute("data-wf-page", pageId);

  if (!loader) {
    // First page: the scripts initialise themselves when they run.
    loader = SCRIPTS.reduce<Promise<void>>((p, src) => p.then(() => loadScript(src)), Promise.resolve());
    loader
      .then(() => {
        // The scripts run after the browser's own readystatechange has already
        // fired, so IX2 would never run its initial "in view" / "page finished"
        // checks. Replay it once Webflow's ready handlers have executed.
        window.Webflow?.push?.(() => {
          setTimeout(() => document.dispatchEvent(new Event("readystatechange")), 0);
        });
      })
      .catch((err) => console.error("[webflow]", err));
    return;
  }

  // Subsequent client-side navigations: re-run Webflow against the new DOM.
  loader.then(reinitWebflow).catch((err) => console.error("[webflow]", err));
}
