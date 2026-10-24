"use client";

import { useLayoutEffect } from "react";
import { startWebflow } from "@/lib/webflow";

/**
 * Rendered at the top of every page. Sets the page's Webflow id on <html>
 * and (re)starts the Webflow runtime once the page's DOM is committed.
 */
export default function WebflowPage({ pageId }: { pageId: string }) {
  useLayoutEffect(() => {
    startWebflow(pageId);
  }, [pageId]);

  return null;
}
