"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type WfLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  /** Override the automatic route-based "current" detection. */
  current?: boolean;
};

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

/**
 * Next.js <Link> that also applies Webflow's `w--current` class and
 * `aria-current="page"` to links pointing at the current route, exactly as
 * Webflow does on its own hosted pages.
 */
export default function WfLink({ href, className, current, ...rest }: WfLinkProps) {
  const pathname = usePathname() ?? "/";
  const target = href.split(/[?#]/)[0];
  // Hash links (e.g. "/#faq") are section anchors; their active state is
  // driven by the scroll-spy in the Header rather than by the route.
  const isAnchor = href.includes("#");
  const isCurrent = current ?? (!isAnchor && target !== "" && normalize(target) === normalize(pathname));
  const classes = [className, isCurrent ? "w--current" : null].filter(Boolean).join(" ");

  return (
    <Link
      href={href}
      className={classes || undefined}
      aria-current={isCurrent ? "page" : undefined}
      {...rest}
    />
  );
}
