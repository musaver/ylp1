"use client";

import { useEffect } from "react";

/**
 * Snap controller for the "Why join YouthLink" card deck (`.build-vh`).
 *
 * The deck itself is animated by Webflow IX2 ("while scrolling in view",
 * action list a-81). Its progress is
 *   p = (innerHeight - rect.top) / (innerHeight + rect.height)
 * and the cards slide by one block height during short "move" windows that
 * sit between the HOLDS below (percent of p).
 *
 * This component never touches the animation. When the user stops scrolling
 * and the visible card is not whole (or the scroll position is inside a move
 * window), it scrolls the page to the centre of the nearest hold so a complete
 * card is always shown at rest.
 */

// Must match the keyframes written into a-81 (see scratchpad/retune_build.py):
// holds 42–46, 49–55, 58–64, 67–73, 76–82, 85–100 → centres below.
const HOLDS = [44, 52, 61, 70, 79, 88];
// Move windows between the holds (cards slide here). Outside these the user
// is free to scroll on; the controller must never pull them back.
const MOVES: Array<[number, number]> = [
  [46, 49],
  [55, 58],
  [64, 67],
  [73, 76],
  [82, 85],
];
const PARTIAL_PX = 4; // rendered offset tolerance for a "whole" card
const IDLE_MS = 120;
const DESKTOP = "(min-width: 992px)";

export default function BuildDeckSnap() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(".build-vh");
    const wrapper = track?.querySelector<HTMLElement>(".build-details-wrapper");
    const blocks = track?.querySelectorAll<HTMLElement>(".build-card-details-block");
    if (!track || !wrapper || !blocks?.length) return;
    const probe = blocks[blocks.length - 1]; // bottom block = first card

    const desktop = window.matchMedia(DESKTOP);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let idleTimer: number | undefined;
    let snapTarget: number | null = null;
    let pointerDown = false;
    let lastY = window.scrollY;
    let direction = 1;

    const progress = () => {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      return { p: ((vh - rect.top) / (vh + rect.height)) * 100, rect, vh };
    };

    const scrollYFor = (pPct: number, rect: DOMRect, vh: number) =>
      window.scrollY + rect.top - (vh - (pPct / 100) * (vh + rect.height));

    const renderedPartial = () => {
      const h = probe.getBoundingClientRect().height;
      if (!h) return false;
      const offset = probe.getBoundingClientRect().top - wrapper.getBoundingClientRect().top;
      const rem = ((offset % h) + h) % h;
      return Math.min(rem, h - rem) > PARTIAL_PX;
    };

    const settle = () => {
      if (!desktop.matches || pointerDown) return;
      if (snapTarget !== null) {
        // Our own smooth scroll ended: if it reached its target this idle is
        // ours and we are done. If the user interrupted it, fall through and
        // judge the new resting position like any other stop.
        const reached = Math.abs(window.scrollY - snapTarget) <= 2;
        snapTarget = null;
        if (reached) return;
      }
      const { p, rect, vh } = progress();
      const inMove = MOVES.some(([a, b]) => p > a && p < b);
      const inDeck = p > MOVES[0][0] && p < MOVES[MOVES.length - 1][1];
      // Act only when stopped inside a transition, or when the rendered card
      // is still split while we are between the first and last transition.
      if (!inMove && !(inDeck && renderedPartial())) return;

      // Nearest hold centre; on a tie keep going the way the user was scrolling.
      let target = HOLDS[0];
      for (const h of HOLDS) {
        const d = Math.abs(p - h);
        const best = Math.abs(p - target);
        if (d < best || (d === best && (direction > 0 ? h > target : h < target))) target = h;
      }

      const top = Math.round(scrollYFor(target, rect, vh));
      snapTarget = reducedMotion.matches ? null : top;
      window.scrollTo({ top, behavior: reducedMotion.matches ? "auto" : "smooth" });
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) direction = y > lastY ? 1 : -1;
      lastY = y;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(settle, IDLE_MS);
    };
    const onScrollEnd = () => {
      window.clearTimeout(idleTimer);
      settle();
    };
    const onPointerDown = () => {
      pointerDown = true;
    };
    const onPointerUp = () => {
      pointerDown = false;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(settle, IDLE_MS);
    };

    const supportsScrollEnd = "onscrollend" in window;
    window.addEventListener("scroll", onScroll, { passive: true });
    if (supportsScrollEnd) window.addEventListener("scrollend", onScrollEnd);
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", onScroll);
      if (supportsScrollEnd) window.removeEventListener("scrollend", onScrollEnd);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return null;
}
