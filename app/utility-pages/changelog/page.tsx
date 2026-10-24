import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WfLink from "@/components/WfLink";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  "title": "Changelog - Venteru – Webflow Ecommerce Website Template",
  "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
  "openGraph": {
    "title": "Changelog - Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Changelog - Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ]
  }
};

export default function ChangelogPage() {
  return (
    <>
      <WebflowPage pageId="690eee1d93c176cdde61ed4f" />
      <section className="utility-section">
        <div className="w-layout-blockcontainer border-container-blcok w-container">
          <div className="changelog-layout">
            <div className="utility-title-wrap">
              <h1 data-w-id="e65703db-3659-db80-889e-070202137431" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="utility-title">
                What’s new updates
              </h1>
            </div>
            <div className="changelog-widgets-block">
              <div className="container-xl-padding">
                <div data-w-id="55f5aa80-4b80-3e9e-a81c-6cee749c9b60" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="changelog-widget">
                  <div className="changelog-version-text-wrap">
                    <div className="changelog-version-text">
                      March 29th, 2025
                    </div>
                  </div>
                  <div className="changelog-version-texts-wrapper">
                    <h2 className="changelog-version-large-text">
                      v2.0 - Initial release
                    </h2>
                    <p className="changelog-version-paragraph">
                      Venteru  has been released. New features are coming soon as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="changelog-widgets-block">
              <div className="container-xl-padding">
                <div data-w-id="abf3a751-47b0-8407-634f-ff26b9c11b63" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="changelog-widget v1">
                  <div className="changelog-version-text-wrap">
                    <div className="changelog-version-text">
                      March 15th, 2025
                    </div>
                  </div>
                  <div className="changelog-version-texts-wrapper">
                    <h2 className="changelog-version-large-text">
                      v1.0 - Template created
                    </h2>
                    <p className="changelog-version-paragraph">
                      Venteru  has been released. New features are coming soon as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
