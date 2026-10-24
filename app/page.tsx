import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WfLink from "@/components/WfLink";
import WebflowPage from "@/components/WebflowPage";
import BuildDeckSnap from "@/components/BuildDeckSnap";

export const metadata: Metadata = {
  "title": "Venteru – Webflow Ecommerce Website Template",
  "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
  "openGraph": {
    "title": "Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ec01bad5-d3c2-b836-a416-64348b00929f\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a620231d-d1b2-92b3-4fa1-02c2b58dc5ea\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"453c93a1-7bac-76a9-7d33-e125749be15a\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"61d38df0-3988-138e-dc0c-39fa97d37560\"] {height:0px;}.ticker-section .ticker-vh {height:400vh;}.build-section .build-vh {height:800vh;} .build-card-details-block {height:498px;box-sizing:border-box;display:flex;flex-flow:column;justify-content:space-between;} .build-card-paragraph-wrap {margin-bottom:0;} .build-card-details-block .build-card-details-wrap {order:-1;} .build-card-image-wrapper {height:538px;max-height:538px;} .build-card-image-wrap {height:538px;} .build-card-details-block._01,.build-card-image-wrap._01 {z-index:6;} .build-card-details-block._02,.build-card-image-wrap._02 {z-index:5;} .build-card-details-block._03,.build-card-image-wrap._03 {z-index:4;} .build-card-details-block._04,.build-card-image-wrap._04 {z-index:3;} .build-card-details-block._05,.build-card-image-wrap._05 {z-index:2;} .build-card-details-block._06,.build-card-image-wrap._06 {z-index:1;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a620231d-d1b2-92b3-4fa1-02c2b58dc5ea\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ec01bad5-d3c2-b836-a416-64348b00929f\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"453c93a1-7bac-76a9-7d33-e125749be15a\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"61d38df0-3988-138e-dc0c-39fa97d37560\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"0ca1c63d-3caa-fdea-d7ee-785eba8de431\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b2455b65-5a30-a8c5-fee5-22cef40d91dd\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"00623e33-80b9-7389-9817-94478d883059\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"41b2a97b-929e-a32b-f2d0-5a167f9e8812\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"fe4b5e1e-c2ab-c2ab-d577-f173816ad319\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"71d40d14-f7bc-ffa8-0a05-15f480bcf3bf\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d37a9590-7693-53d9-069f-0a42d45a4706\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ff36eade-380e-ed5e-39af-c268f20e2870\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"bd7ceb28-db93-d246-c804-f9d1f94e7ea6\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7823\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"862cdd11-4b88-f726-6f8a-f5d944de0df5\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"dd2561d6-65f8-0f34-9ce0-e12f3e7c7d29\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e29bf30c-eabb-15b4-1f44-d8b6f28ac192\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}.ticker-section .ticker-vh {height:400vh;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7855\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7866\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a620231d-d1b2-92b3-4fa1-02c2b58dc5ea\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ec01bad5-d3c2-b836-a416-64348b00929f\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"453c93a1-7bac-76a9-7d33-e125749be15a\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"61d38df0-3988-138e-dc0c-39fa97d37560\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"0ca1c63d-3caa-fdea-d7ee-785eba8de431\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b2455b65-5a30-a8c5-fee5-22cef40d91dd\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"00623e33-80b9-7389-9817-94478d883059\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"41b2a97b-929e-a32b-f2d0-5a167f9e8812\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"fe4b5e1e-c2ab-c2ab-d577-f173816ad319\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"71d40d14-f7bc-ffa8-0a05-15f480bcf3bf\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d37a9590-7693-53d9-069f-0a42d45a4706\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ff36eade-380e-ed5e-39af-c268f20e2870\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"bd7ceb28-db93-d246-c804-f9d1f94e7ea6\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7823\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"862cdd11-4b88-f726-6f8a-f5d944de0df5\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"dd2561d6-65f8-0f34-9ce0-e12f3e7c7d29\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e29bf30c-eabb-15b4-1f44-d8b6f28ac192\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7855\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7866\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a620231d-d1b2-92b3-4fa1-02c2b58dc5ea\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ec01bad5-d3c2-b836-a416-64348b00929f\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"453c93a1-7bac-76a9-7d33-e125749be15a\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"61d38df0-3988-138e-dc0c-39fa97d37560\"] {height:0px;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"0ca1c63d-3caa-fdea-d7ee-785eba8de431\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b2455b65-5a30-a8c5-fee5-22cef40d91dd\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"00623e33-80b9-7389-9817-94478d883059\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"41b2a97b-929e-a32b-f2d0-5a167f9e8812\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"fe4b5e1e-c2ab-c2ab-d577-f173816ad319\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"71d40d14-f7bc-ffa8-0a05-15f480bcf3bf\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d37a9590-7693-53d9-069f-0a42d45a4706\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ff36eade-380e-ed5e-39af-c268f20e2870\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"bd7ceb28-db93-d246-c804-f9d1f94e7ea6\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7823\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"862cdd11-4b88-f726-6f8a-f5d944de0df5\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"dd2561d6-65f8-0f34-9ce0-e12f3e7c7d29\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"e29bf30c-eabb-15b4-1f44-d8b6f28ac192\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7855\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"1a555941-b9c6-2e5b-7cad-ac62a9fd7866\"] {-webkit-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);filter: blur(5px);opacity:0;}}" }} />
      <style dangerouslySetInnerHTML={{ __html: "@media (min-width:768px) {.feature-widget {justify-content:flex-start;} .feature-widget-title {flex:0 0 38%;min-width:0;} .feature-widget-paragraph {flex:1 1 auto;max-width:none;} .feature-widget-step-text {flex:0 0 auto;white-space:nowrap;}}" }} />
      <WebflowPage pageId="690ed4953a93ad5efefde57a" />
      <BuildDeckSnap />
      <section id="home" className="home-v1-hero-section home-v2-hero-section">
        <div className="w-layout-blockcontainer home-v1-container w-container">
          <div className="hero-v1-layout-wrapper">
            <div className="hero-v1-layout">
              <div className="hero-v1-title-wrap w-clearfix">
                <h1 data-w-id="24e695bf-7590-08c1-5c7c-4868d2c24ff9" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="hero-v1-title" {...{ "scrolltitlestagger": "" }}>
                  Youth Link
                </h1>
              </div>
              <div data-w-id="5efef720-6294-cad2-3d32-e314526a49c1" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="hero-v1-sub-title-wrap">
                <p className="hero-v1-paragraph">
                  A strong Muslim community that develops character, skills, networks and practical capacity to serve society.
                </p>
                <h2 className="hero-v1-sub-title">
                  A Networking Platform
                </h2>
              </div>
              <div data-w-id="994ba6b9-f8db-e0e7-d8a0-8d3e5787ff28" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="hero-tags-block">
                <div className="hero-v1-button-wrap">
                  <WfLink href="/join-youthlink" data-wf--button-secondary--variant="base" data-w-id="32553714-37bd-221b-94b4-3f9b111a1591" className="button-secondary w-inline-block">
                    <div className="button-texts-wrap">
                      <div className="button-secondary-texts-wrap">
                        <div className="button-secondary-text">
                          Join YouthLink Now
                        </div>
                        <div className="button-secondary-text absolute">
                          Join YouthLink Now
                        </div>
                      </div>
                      <div className="button-secondary-bg-wrap">
                        <div className="button-secondary-bg-circle-wrap">
                          <div className="button-secondary-bg-circle" />
                        </div>
                      </div>
                    </div>
                    <div className="button-icons-wrap">
                      <div className="button-secondary-icons-wrap">
                        <img src="/690ed4943a93ad5efefde551/691067c4a3d7e3f2bf5239ad_Secondary-arrow-right.svg" loading="lazy" alt="" className="button-secondary-icon" />
                        <img src="/690ed4943a93ad5efefde551/691067c4a3d7e3f2bf5239ad_Secondary-arrow-right.svg" loading="lazy" alt="" className="button-secondary-icon absolute" />
                      </div>
                      <div className="button-secondary-bg-wrap-v2">
                        <div className="button-secondary-bg-circle-wrap-v2">
                          <div className="button-secondary-bg-circle-v2" />
                        </div>
                      </div>
                    </div>
                  </WfLink>
                </div>
                <div className="hero-tags-warp">
                  <div className="link-tag">
                    <div className="tag-text">
                      Academia
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                  <div className="link-tag">
                    <div className="tag-text">
                      Technology
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                  <div className="link-tag">
                    <div className="tag-text">
                      Leadership
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                  <div className="link-tag">
                    <div className="tag-text">
                      Research
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                  <div className="link-tag">
                    <div className="tag-text">
                      Skills
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                  <div className="link-tag">
                    <div className="tag-text">
                      Tazkiyah
                    </div>
                    <img src="/690ed4943a93ad5efefde551/691c9a2332c512865caa19b3_Tag%20Icon.svg" loading="lazy" alt="" className="tag-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="community" className="ticker-section">
        <div data-w-id="91cc6de6-f580-9964-e359-2b0264f1ae10" className="ticker-vh">
          <div className="ticker-sticky">
            <div className="w-layout-blockcontainer container w-container">
              <div className="ticker-layout">
                <div className="ticker-images-block">
                  <img src="/690ed4943a93ad5efefde551/6921d59ee84e31385968b26c_ticker%20image%2001.png" loading="lazy" style={{ opacity: "0" } as CSSProperties} data-w-id="948157eb-a1d1-0661-6a04-9f3c432d8363" alt="Ticker Image" className="ticker-image-01" />
                  <img src="/690ed4943a93ad5efefde551/6921d5fe59954226fe38afd2_ticker%20image%2002.png" loading="lazy" style={{ opacity: "0" } as CSSProperties} data-w-id="f2c6cfd4-a172-b446-1691-56c73423e9fb" alt="Ticker Image" className="ticker-image-02" />
                </div>
                <div className="ticker-middle-text-wrap">
                  <h3 data-w-id="4cc21da1-7b51-c2a9-9050-d5dd434102cc" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="ticker-middle-text">
                    An active community, not a crowd
                  </h3>
                </div>
                <div className="ticker-images-block _02">
                  <img src="/690ed4943a93ad5efefde551/6921d6ed844eb575bd24a69a_ticker%20image%2003.png" loading="lazy" style={{ opacity: "0" } as CSSProperties} data-w-id="ee4c0164-1d92-3cf6-0963-2a23a7035472" alt="Ticker Image" className="ticker-image-03" />
                  <img src="/690ed4943a93ad5efefde551/6921d7384ab7d6f6ed3a7bdd_ticker%20image%2004.png" loading="lazy" style={{ opacity: "0" } as CSSProperties} data-w-id="ee4c0164-1d92-3cf6-0963-2a23a7035473" alt="Ticker Image" className="ticker-image-04" />
                </div>
                <div className="ticker-block">
                  <div data-w-id="862cdd11-4b88-f726-6f8a-f5d944de0df5" className="ticker-card _01">
                    
                    <div className="ticker-number-wrapper">
                      <h3 className="ticker-number">
                        01
                      </h3>
                      <h4 className="ticker-card-title">
                        Character and spiritual growth
                      </h4>
                    </div>
                    <ul className="ticker-card-list">
                      <li>Tazkiyah</li>
                      <li>Islamic understanding</li>
                      <li>Responsibility and moral strength</li>
                    </ul>
                  </div>
                  <div data-w-id="dd2561d6-65f8-0f34-9ce0-e12f3e7c7d29" className="ticker-card _02">
                    <div className="ticker-number-wrapper">
                      <h3 className="ticker-number">
                        02
                      </h3>
                      <h4 className="ticker-card-title">
                        Knowledge and skills
                      </h4>
                    </div>
                    <ul className="ticker-card-list">
                      <li>Academia</li>
                      <li>Technology</li>
                      <li>Communication</li>
                      <li>Leadership</li>
                      <li>Research and practical skills</li>
                    </ul>
                  </div>
                  <div data-w-id="e29bf30c-eabb-15b4-1f44-d8b6f28ac192" className="ticker-card _03">
                    <div className="ticker-number-wrapper">
                      <h3 className="ticker-number">
                        03
                      </h3>
                      <h4 className="ticker-card-title">
                        Collective capacity
                      </h4>
                    </div>
                    <ul className="ticker-card-list">
                      <li>Like-minded networks</li>
                      <li>Projects</li>
                      <li>Service</li>
                      <li>Economic awareness</li>
                      <li>Political awareness</li>
                      <li>Community problem solving</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-join" className="build-section">
        <div data-w-id="b1423ca7-8f84-1251-2cc7-992c8daa5508" className="build-vh">
          <div className="build-sticky">
            <div className="bulid-wrapper">
              <div className="build-bg-image" />
              <h2 data-w-id="71d40d14-f7bc-ffa8-0a05-15f480bcf3bf" className="build-title">
                Why join YouthLink
              </h2>
              <div className="build-cards-mobile-wrapper">
                <div data-w-id="d37a9590-7693-53d9-069f-0a42d45a4706" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001-p-500.jpg 500w, /690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg 652w" alt="Real work" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        Exposure to active teams, projects and real work from the start.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            01
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          Real work
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="ff36eade-380e-ed5e-39af-c268f20e2870" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg 652w" alt="A like-minded network" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        A network of Muslims who share your values and direction.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            02
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          A like-minded network
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="bd7ceb28-db93-d246-c804-f9d1f94e7ea6" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg 652w" alt="Learning and skills" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        Learning, courses, sessions and practical skill development.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            03
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          Learning and skills
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="1a555941-b9c6-2e5b-7cad-ac62a9fd7823" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg 652w" alt="Contribute as you grow" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        Opportunities to contribute according to your skills and readiness.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            04
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          Contribute as you grow
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="1a555941-b9c6-2e5b-7cad-ac62a9fd7855" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001-p-500.jpg 500w, /690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg 652w" alt="Local and project communities" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        Connection with university, city, area and project based communities.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            05
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          Local and project communities
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="1a555941-b9c6-2e5b-7cad-ac62a9fd7866" className="build-mobile-card">
                  <div className="build-card-image-wrap">
                    <img src="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg 652w" alt="A structured journey" className="build-card-image" />
                  </div>
                  <div className="build-card-details-block">
                    <div className="build-card-paragraph-wrap">
                      <p className="build-card-paragraph">
                        A clear path instead of entering an unorganised public group.
                      </p>
                    </div>
                    <div className="build-card-details-wrap">
                      <div className="build-number-block">
                        <div className="card-active-number-wrap">
                          <h3 className="card-active-number">
                            06
                          </h3>
                        </div>
                        <div className="card-divider">
                          <h3 className="card-divider-text">
                            /
                          </h3>
                        </div>
                        <div className="card-deactive-number-wrap">
                          <h3 className="card-deactive-number">
                            06
                          </h3>
                        </div>
                      </div>
                      <div className="build-card-details-title-wrap">
                        <h3 className="build-card-details-title">
                          A structured journey
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="build-cards-wrapper">
                <div className="build-card">
                  <div className="build-card-inner-wrapper">
                    <div className="build-details-wrapper">
                      <div className="build-card-details-block _01">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            A clear path instead of entering an unorganised public group.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                06
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              A structured journey
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="build-card-details-block _02">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            Connection with university, city, area and project based communities.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                05
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              Local and project communities
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="build-card-details-block _03">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            Opportunities to contribute according to your skills and readiness.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                04
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              Contribute as you grow
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="build-card-details-block _04">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            Learning, courses, sessions and practical skill development.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                03
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              Learning and skills
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="build-card-details-block _05">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            A network of Muslims who share your values and direction.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                02
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              A like-minded network
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="build-card-details-block _06">
                        <div className="build-card-paragraph-wrap">
                          <p className="build-card-paragraph">
                            Exposure to active teams, projects and real work from the start.
                          </p>
                        </div>
                        <div className="build-card-details-wrap">
                          <div className="build-number-block">
                            <div className="card-active-number-wrap">
                              <h3 className="card-active-number">
                                01
                              </h3>
                            </div>
                            <div className="card-divider">
                              <h3 className="card-divider-text">
                                /
                              </h3>
                            </div>
                            <div className="card-deactive-number-wrap">
                              <h3 className="card-deactive-number">
                                06
                              </h3>
                            </div>
                          </div>
                          <div className="build-card-details-title-wrap">
                            <h3 className="build-card-details-title">
                              Real work
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="build-card-image-wrapper">
                      <div className="build-card-image-wrap _06">
                        <img src="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001-p-500.jpg 500w, /690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg 652w" alt="Real work" className="build-card-image" />
                      </div>
                      <div className="build-card-image-wrap _05">
                        <img src="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg 652w" alt="A like-minded network" className="build-card-image" />
                      </div>
                      <div className="build-card-image-wrap _04">
                        <img src="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg 652w" alt="Learning and skills" className="build-card-image" />
                      </div>
                      <div className="build-card-image-wrap _03">
                        <img src="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg 652w" alt="Contribute as you grow" className="build-card-image" />
                      </div>
                      <div className="build-card-image-wrap _02">
                        <img src="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001-p-500.jpg 500w, /690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg 652w" alt="Local and project communities" className="build-card-image" />
                      </div>
                      <div className="build-card-image-wrap _01">
                        <img src="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg" loading="lazy" sizes="(max-width: 652px) 100vw, 652px, 100vw" srcSet="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg 652w" alt="A structured journey" className="build-card-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="features-layout">
            <div className="features-title-block">
              <h2 data-w-id="d26c6e64-d90e-9db3-dc2e-b5bf2c3cce1f" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="features-title">
                Why join YouthLink new?
              </h2>
              <img src="/690ed4943a93ad5efefde551/691f26169d03058859ce3185_star%20Icon.png" loading="lazy" width="Auto" height="Auto" alt="" data-w-id="38d3b390-796f-f209-6b2c-1d28c6311cb3" style={{ WebkitTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)", opacity: "0" } as CSSProperties} className="features-decoration-image" />
            </div>
            <div className="features-details-block">
              <div className="features-quick-link-wrapper">
                <WfLink href="/products" data-w-id="549f30cd-595b-152c-1e1c-ed106db437a8" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="vision-quick-link-box features-quick-link w-inline-block">
                  <div className="desktop">
                    <h3 className="heading-06 features-quick-link-text">
                      {"Explore "}
                      <br />
                      How We Invest
                    </h3>
                  </div>
                  <div className="mobile">
                    <h3 className="heading-06 features-quick-link-text">
                      Explore How We Invest
                    </h3>
                  </div>
                  <div className="vision-quick-icons-wrapper features-quick-icons-wrapper">
                    <div className="vision-quick-icons-wrap">
                      <img src="/690ed4943a93ad5efefde551/69185bd104ea93a1200e66dd_Arrow-right%20(5).svg" loading="lazy" width="20" height="20" alt="" style={{ WebkitTransform: "translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" } as CSSProperties} className="vision-quick-icon" />
                      <img src="/690ed4943a93ad5efefde551/69185bd104ea93a1200e66dd_Arrow-right%20(5).svg" loading="lazy" width="20" height="20" alt="" style={{ WebkitTransform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" } as CSSProperties} className="vision-quick-icon absoute" />
                    </div>
                  </div>
                </WfLink>
              </div>
              <div className="features-widgets">
                <div data-w-id="653fc921-cf01-a30c-070a-0afcd75d1734" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget _1st">
                  <h3 className="feature-widget-title">
                    Real work
                  </h3>
                  <p className="feature-widget-paragraph">
                    Exposure to active teams, projects and real work from the start.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 01
                  </h4>
                </div>
                <div data-w-id="9b68cdcc-f1b6-9345-4b61-774a6ac36bf2" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
                <div data-w-id="66aecbe6-1415-4ad8-985e-71d565a34546" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget">
                  <h3 className="feature-widget-title">
                    A like-minded network
                  </h3>
                  <p className="feature-widget-paragraph">
                    A network of Muslims who share your values and direction.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 02
                  </h4>
                </div>
                <div data-w-id="fba8eea2-4f02-c99d-9abc-8c3fc05af83d" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
                <div data-w-id="a30e7ff4-bb5d-8cfd-8805-a5c5d93e24a9" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget">
                  <h3 className="feature-widget-title">
                    Learning and skills
                  </h3>
                  <p className="feature-widget-paragraph">
                    Learning, courses, sessions and practical skill development.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 03
                  </h4>
                </div>
                <div data-w-id="e72a400c-f38f-4047-ac6b-9685471a0b60" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
                <div data-w-id="e961fd20-0e5a-c918-ecb6-45b0e93dd4fd" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget">
                  <h3 className="feature-widget-title">
                    Contribute as you grow
                  </h3>
                  <p className="feature-widget-paragraph">
                    Opportunities to contribute according to your skills and readiness.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 04
                  </h4>
                </div>

                <div data-w-id="e72a400c-f38f-4047-ac6b-9685471a0b60" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
                <div data-w-id="e961fd20-0e5a-c918-ecb6-45b0e93dd4fd" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget">
                  <h3 className="feature-widget-title">
                    Local and project communities
                  </h3>
                  <p className="feature-widget-paragraph">
                    Connection with university, city, area and project based communities.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 05
                  </h4>
                </div>

                <div data-w-id="e72a400c-f38f-4047-ac6b-9685471a0b60" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
                <div data-w-id="e961fd20-0e5a-c918-ecb6-45b0e93dd4fd" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="feature-widget">
                  <h3 className="feature-widget-title">
                    A structured journey
                  </h3>
                  <p className="feature-widget-paragraph">
                    A clear path instead of entering an unorganised public group.
                  </p>
                  <h4 className="feature-widget-step-text">
                    Step 06
                  </h4>
                </div>


                <div data-w-id="33e70bb5-7723-298b-1981-d21ba003c7fe" style={{ width: "0%" } as CSSProperties} className="features-horizontal-line" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section id="stories" data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d908" className="case-study-section-v2">
        <div className="w-layout-blockcontainer container-xl w-container">
          <div className="case-study-title-wrap-v2">
            <h2 data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d90b" className="heading-02 case-study-title-v2">
             
              Why Join YouthLink 3
            </h2>
          </div>
        </div>
        <div data-w-id="f0300e8e-8962-0b30-f193-5262663e3b9a" className="case-study-item _1st">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _1st">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg" loading="lazy" alt="Real work" sizes="100vw" srcSet="/690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001-p-500.jpg 500w, /690ed4943a93ad5efefde551/692590305a30a07c21124089_Build%20image%2001.jpg 652w" className="case-study-image-v2 _1st" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _1st">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /><path d="M12 11v3" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _1st">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              01
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              Real work
                            </h3>
                          </div>
                          <WfLink href="/case-study/biogenera-health-pioneering-the-future-of-human-longevity" data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d921" className="case-widget-default-icon-wrapper _1st w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _1st">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            Exposure to active teams, projects and real work from the start.
                          </p>
                        </div>
                        <WfLink href="/case-study/biogenera-health-pioneering-the-future-of-human-longevity" data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d928" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d92c" className="case-horizontal-line" />
        <div data-w-id="9658764a-02e9-9672-3831-c95993a9bc47" className="case-study-item _2nd">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _2nd">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/69214d9c909c35183dd5a2fa_760ce1014bb6015278da3b94689ee5b6_Tab%20Image%2002.jpg" loading="lazy" alt="A like-minded network" className="case-study-image-v2 _2nd" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _2nd">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M12 7.5V12" /><path d="M12 12 6.8 16.2" /><path d="M12 12l5.2 4.2" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _2nd">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              02
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              A like-minded network
                            </h3>
                          </div>
                          <WfLink href="/case-study/turning-vision-into-venture-lessons-from-the-early-stage" data-w-id="c1fc8711-868a-37b4-790c-f605d16e3624" className="case-widget-default-icon-wrapper _2nd w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _2nd">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            A network of Muslims who share your values and direction.
                          </p>
                        </div>
                        <WfLink href="/case-study/turning-vision-into-venture-lessons-from-the-early-stage" data-w-id="c1fc8711-868a-37b4-790c-f605d16e362b" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="0e347656-ff5b-3bdb-63c7-2355f3652e1f" className="case-horizontal-line" />
        <div data-w-id="594f5faf-d5cd-9330-40cb-bc4abb61a99c" className="case-study-item _3rd">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _3rd">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg" loading="lazy" alt="Learning and skills" sizes="100vw" srcSet="/690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae68a101ec642cef90be_Build%20image%2003.jpg 652w" className="case-study-image-v2 _3rd" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _3rd">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 6.5c-1.6-1.6-4-2-8-2v13c4 0 6.4.4 8 2 1.6-1.6 4-2 8-2v-13c-4 0-6.4.4-8 2z" /><path d="M12 6.5v13" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _3rd">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              03
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              Learning and skills
                            </h3>
                          </div>
                          <WfLink href="/case-study/investing-in-a-sustainable-future-innovation-with-purpose" data-w-id="c340d455-98ab-a80c-60d6-ba22897fb749" className="case-widget-default-icon-wrapper _3rd w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _3rd">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            Learning, courses, sessions and practical skill development.
                          </p>
                        </div>
                        <WfLink href="/case-study/investing-in-a-sustainable-future-innovation-with-purpose" data-w-id="c340d455-98ab-a80c-60d6-ba22897fb750" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="456b6af9-5106-8f8d-1793-0bfb32515898" className="case-horizontal-line" />
        <div data-w-id="a804e890-6744-0f43-95fa-43795080084b" className="case-study-item _4th">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _4th">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg" loading="lazy" alt="Contribute as you grow" sizes="100vw" srcSet="/690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925ae0672ea1f6dffb44578_Build%20image%2002.jpg 652w" className="case-study-image-v2 _4th" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _4th">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21v-7" /><path d="M12 14c0-3 1.8-5 5-5h2c0 3-1.8 5-5 5h-2z" /><path d="M12 11c0-3-1.8-5-5-5H5c0 3 1.8 5 5 5h2z" /><path d="M3 21h18" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _4th">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              04
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              Contribute as you grow
                            </h3>
                          </div>
                          <WfLink href="/case-study/rethinking-venture-why-founders-need-more-than-funding" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c2fe" className="case-widget-default-icon-wrapper _4th w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _4th">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            Opportunities to contribute according to your skills and readiness.
                          </p>
                        </div>
                        <WfLink href="/case-study/rethinking-venture-why-founders-need-more-than-funding" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c305" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="cdeef5e8-6608-cc19-2c3a-62da6e1d653e" className="case-horizontal-line" />
        <div data-w-id="a804e890-6744-0f43-95fa-437950800855" className="case-study-item _5th">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _5th">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg" loading="lazy" alt="Local and project communities" sizes="100vw" srcSet="/690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004-p-500.jpg 500w, /690ed4943a93ad5efefde551/6925aead9c847c982434bafc_Build%20image%2004.jpg 652w" className="case-study-image-v2 _5th" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _5th">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _5th">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              05
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              Local and project communities
                            </h3>
                          </div>
                          <WfLink href="/case-study" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c3e5" className="case-widget-default-icon-wrapper _5th w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _5th">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            Connection with university, city, area and project based communities.
                          </p>
                        </div>
                        <WfLink href="/case-study" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c3f5" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="cdeef5e8-6608-cc19-2c3a-62da6e1d6555" className="case-horizontal-line" />
        <div data-w-id="a804e890-6744-0f43-95fa-437950800866" className="case-study-item _6th">
          <div className="w-dyn-list">
            <div role="list" className="case-study-widgets-block w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="case-study-widget-wrapper-v2 _6th">
                  <div className="case-study-widget-v2">
                    <div className="case-study-image-wrap-v2">
                      <img src="/690ed4943a93ad5efefde551/69214ecdcc14538de48313b1_Tab%20Image%2004.jpg" loading="lazy" alt="A structured journey" className="case-study-image-v2 _6th" />
                      <div className="case-study-sm-icon-image case-study-sm-icon-tile _6th">
                        <svg className="case-study-sm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="5" cy="5" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M7.5 5H14a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6.5" /></svg>
                      </div>
                    </div>
                    <div className="case-study-details-block-v2">
                      <div className="case-widget-heading-wrap-v2">
                        <div className="case-widget-head-wrap-v2 _6th">
                          <div className="case-widget-head-texts-wrap">
                            <div className="case-widget-head-text">
                              Case Study
                            </div>
                            <div className="case-widget-head-text">
                              06
                            </div>
                          </div>
                        </div>
                        <div className="case-widget-title-wrapper">
                          <div className="case-widget-title-wrap">
                            <h3 className="heading-04 case-widget-tite">
                              A structured journey
                            </h3>
                          </div>
                          <WfLink href="/case-study" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c3e6" className="case-widget-default-icon-wrapper _6th w-inline-block">
                            <div className="case-widget-icon-wrap-v2">
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon" />
                              <img src="/690ed4943a93ad5efefde551/691c188ac30f358ea112632d_Arrow-right%20(7).svg" loading="lazy" alt="" className="case-widget-default-icon absolute" />
                            </div>
                          </WfLink>
                        </div>
                      </div>
                      <div className="case-widget-details-wrap-v2 _6th">
                        <div className="case-widget-paragraph-wrap-v2">
                          <p className="case-widget-paragraph">
                            A clear path instead of entering an unorganised public group.
                          </p>
                        </div>
                        <WfLink href="/case-study" data-w-id="9cfc57a4-3839-8c63-1aca-c65be1e5c3f6" className="case-widget-icon-wrapper-v2 w-inline-block">
                          <div className="case-widget-icon-wrap-v2">
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2" />
                            <img src="/690ed4943a93ad5efefde551/691589f2c379af623999edc4_Arrow-right%20(4).svg" loading="lazy" alt="" className="case-widget-icon-v2 absolute" />
                          </div>
                        </WfLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="cdeef5e8-6608-cc19-2c3a-62da6e1d6566" className="case-horizontal-line" />
        <div data-w-id="9cd82217-ca48-7075-ec5e-dad743d5d930" className="case-study-button-wrap">
          <WfLink href="/case-study" data-w-id="a4fba6a7-8c00-1e2d-d023-867188af9019" className="button-primary-v2 w-inline-block">
            <div className="button-primary-texts-wrap-v2">
              <div className="button-primary-text">
                See All Case Studies
              </div>
              <div className="button-primary-text absolute">
                See All Case Studies
              </div>
            </div>
            <div className="button-primary-icons-wrap-v2">
              <img alt="" src="/690ed4943a93ad5efefde551/69132af21a9c59ea8802016c_Arrow-right-white.svg" loading="lazy" className="button-primary-icon" />
              <img alt="" src="/690ed4943a93ad5efefde551/69132af21a9c59ea8802016c_Arrow-right-white.svg" loading="lazy" className="button-primary-icon absolute" />
            </div>
          </WfLink>
        </div>
      </section>
      <section id="member-journey" className="invesment-sticky-section">
        <div data-w-id="58c3777a-1a57-e3be-6595-e9a72d3710ca" className="invesment-contents-wrapper">
          <div className="invesment-sticky-contents">
            <div className="invesment-cirle-main">
              <h2 data-w-id="0ca1c63d-3caa-fdea-d7ee-785eba8de431" className="invesment-title">
                The member journey
              </h2>
              <div className="invesment-content-rotate">
                <div className="invesment-cards-wrapper">
                  <div data-w-id="b2455b65-5a30-a8c5-fee5-22cef40d91dd" className="invesment-card">
                    <div className="item-head-wrapper">
                      <h3 className="item-card-title desktop">
                        
                        Discover
                      </h3>
                      <h3 className="item-card-title mobile">
                        Discover
                      </h3>
                      <img src="/690ed4943a93ad5efefde551/691ecd861c3b3c5cd4ca69ad_item%20icon.png" loading="lazy" alt="" className="item-card-icon" />
                    </div>
                    <p className="item-card-text">Media, public groups, projects or referrals</p>
                    <div className="item-card-image-wrap item-card-visual">
                      <svg className="item-card-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polygon points="15.5 8.5 13.8 13.8 8.5 15.5 10.2 10.2 15.5 8.5" /></svg>
                    </div>
                  </div>
                  
                  <div data-w-id="00623e33-80b9-7389-9817-94478d883059" className="invesment-card _02">
                    <div className="item-head-wrapper">
                      <h3 className="item-card-title desktop">
                        
                        Apply
                      </h3>
                      <h3 className="item-card-title mobile">
                        Apply
                      </h3>
                      <img src="/690ed4943a93ad5efefde551/691ecd861c3b3c5cd4ca69ad_item%20icon.png" loading="lazy" alt="" className="item-card-icon" />
                    </div>
                    <p className="item-card-text">Visit the website and complete the joining form.</p>
                    <div className="item-card-image-wrap item-card-visual">
                      <svg className="item-card-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" /><path d="M14 3v5h5" /><path d="M8 13h5" /><path d="M8 17h3" /><path d="M20.5 7.5 15 13l-2 .5.5-2 5.5-5.5a1.4 1.4 0 0 1 2 2z" /></svg>
                    </div>
                  </div>
                  
                  <div data-w-id="41b2a97b-929e-a32b-f2d0-5a167f9e8812" className="invesment-card _03">
                    <div className="item-head-wrapper">
                      <h3 className="item-card-title desktop">
                        
                        Batch
                      </h3>
                      <h3 className="item-card-title mobile">
                        Batch
                      </h3>
                      <img src="/690ed4943a93ad5efefde551/691ecd861c3b3c5cd4ca69ad_item%20icon.png" loading="lazy" alt="" className="item-card-icon" />
                    </div>
                    <p className="item-card-text">Join a structured introductory batch and orientation process.</p>
                    <div className="item-card-image-wrap item-card-visual">
                      <svg className="item-card-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20v-1.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5V20" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" /><path d="M18.5 13.6a5 5 0 0 1 3 4.4V20" /></svg>
                    </div>
                  </div>
                  
                  <div data-w-id="fe4b5e1e-c2ab-c2ab-d577-f173816ad319" className="invesment-card _04">
                    <div className="item-head-wrapper">
                      <h3 className="item-card-title desktop">
                        
                        Contribute
                      </h3>
                      <h3 className="item-card-title mobile">
                        Contribute
                      </h3>
                      <img src="/690ed4943a93ad5efefde551/691ecd861c3b3c5cd4ca69ad_item%20icon.png" loading="lazy" alt="" className="item-card-icon" />
                    </div>
                    <p className="item-card-text">Enter the relevant community, course, project or responsibility pathway.</p>
                    <div className="item-card-image-wrap item-card-visual">
                      <svg className="item-card-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21v-7" /><path d="M12 14c0-3 1.8-5 5-5h2c0 3-1.8 5-5 5h-2z" /><path d="M12 11c0-3-1.8-5-5-5H5c0 3 1.8 5 5 5h2z" /><path d="M3 21h18" /></svg>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="initiatives" className="cta-section">
        <div className="w-layout-blockcontainer container-xl w-container">
          <div className="cta-layout">
            <div className="cta-title-wrap">
              <h2 className="display-100 cta-title">
                Bring a New Initiative
              </h2>
            </div>
            <div className="cta-bottom-contents-block">
              <div className="cta-paragraph-wrap">
                <p className="cta-paragraph-wrap">
                  Have an initiative that can serve the Ummah and society? Bring your idea into the YouthLink network and explore how it can be developed with the right people, skills and support.
                </p>
              </div>
              <div className="cta-form-wrapper" style={{ display: "flex", justifyContent: "flex-end" }}>
                <WfLink href="/join-youthlink?intent=initiative" className="button-primary w-inline-block">
                  <div className="button-primary-texts-wrap">
                    <div className="button-primary-text">
                      Bring an Initiative
                    </div>
                    <div className="button-primary-text absolute">
                      Bring an Initiative
                    </div>
                  </div>
                  <div className="button-primary-icons-wrap">
                    <img src="/690ed4943a93ad5efefde551/690f246cb861f5da2e0f2d3b_Arrow-right.svg" loading="lazy" alt="" className="button-primary-icon" />
                    <img src="/690ed4943a93ad5efefde551/690f246cb861f5da2e0f2d3b_Arrow-right.svg" loading="lazy" alt="" className="button-primary-icon absolute" />
                  </div>
                  <div className="button-primary-bg-wrap">
                    <div className="button-bg-primary-circle-wrap">
                      <div className="button-primary-bg-circle" />
                    </div>
                  </div>
                </WfLink>
              </div>
            </div>
            <img src="/690ed4943a93ad5efefde551/6913447850ccc506b27e38e3_cta%20star%20icon.png" loading="lazy" alt="" className="star-icon" />
          </div>
        </div>
      </section>
      <section id="faq" data-wf--faq-section--variant="faq-v2" className="faq-section">
        <div className="w-layout-blockcontainer container-xl w-container">
          <div className="faq-layout w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
            <div className="faq-title-block w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
              <h2 data-w-id="ae803a46-f828-138b-f20a-b152d2f05886" className="heading-02 faq-title-01 w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                Frequently Asked Questions
              </h2>
              <h2 data-w-id="ae9f5464-1aa0-d7e8-05d8-d1324edefc7b" className="heading-02 faq-title-02 w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                What Founders Often Ask Us
              </h2>
              <p data-w-id="8b7a5fdd-ecc5-8b75-712e-270f75fcd944" className="faq-paragraph-v2 w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                We understand that building a company — and finding the right partner — raises a lot of questions.
              </p>
            </div>
            <div className="w-layout-grid faq-widgets-block w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
              <div className="faq-widgets-wrapper">
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f05893" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      What kinds of companies does Venteru invest in?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Exploring how Biogenera Health is transforming the future of wellness through biotech innovation. With Venteru’s early-stage investment.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="85367580-2caa-88d5-5fb7-0d0702765882" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      At what stage do you typically invest?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Venteru invests early, backing innovative startups with capital and insights to drive impactful, scalable global growth forward.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f0589c" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      What regions does Venteru focus on?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Venteru invests globally, focusing on emerging regions where innovation, sustainability, and technology drive measurable long-term impact.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f058a5" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      How can a startup pitch to Venteru?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Startups can pitch to Venteru by submitting proposals online, highlighting innovation, traction, and potential for scalable growth.
                    </p>
                  </nav>
                </div>
              </div>
              <div className="faq-widgets-wrapper">
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f058af" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      Does Venteru offer operational support?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Yes, Venteru provides operational support, offering strategic guidance, mentorship, and resources to help startups scale effectively.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f058b8" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      How long does your investment process take?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Venteru’s investment process typically takes a few months, ensuring thorough evaluation, due diligence, and strategic alignment.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f058c1" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      What types of startups does Venteru invest in?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Venteru invests in innovative, high-potential startups across technology, biotech, and sustainability sectors with scalable global impact.
                    </p>
                  </nav>
                </div>
                <div data-delay="400" data-hover="false" data-w-id="ae803a46-f828-138b-f20a-b152d2f058ca" className="faq-widget w-dropdown">
                  <div className="faq-widget-title-wrap w-dropdown-toggle">
                    <h3 className="faq-widget-title w-variant-716f6be5-43cf-952e-a048-c24ed1487ef7">
                      How does the investment process work?
                    </h3>
                    <div className="faq-icon-wrap">
                      <img src="/690ed4943a93ad5efefde551/6913311b8f4f62782b24144a_faq%20icon.svg" loading="lazy" alt="" className="faq-icon" />
                    </div>
                  </div>
                  <nav className="faq-widget-details w-dropdown-list">
                    <p className="faq-widget-details-text">
                      Venteru’s investment process involves application review, due diligence, strategic evaluation, and collaborative partnership to accelerate startup growth.
                    </p>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" className="cta-section">
        <div className="w-layout-blockcontainer container-xl w-container">
          <div className="cta-layout">
            <div className="cta-title-wrap">
              <h1 data-w-id="7535baea-aebd-fe8c-0ccd-49ed65df0474" className="display-100 cta-title">
                Let’s Build the Future Together!
              </h1>
            </div>
            <div data-w-id="7535baea-aebd-fe8c-0ccd-49ed65df0476" className="cta-bottom-contents-block">
              <div className="cta-paragraph-wrap">
                <p className="cta-paragraph-wrap">
                  Whether you’re a founder with a breakthrough idea, a partner seeking collaboration, or an investor ready to shape!
                </p>
              </div>
              <div className="cta-form-wrapper">
                <div className="cta-form-block w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="cta-form" data-wf-page-id="690ed4953a93ad5efefde57a" data-wf-element-id="7535baea-aebd-fe8c-0ccd-49ed65df047c" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                    <input className="cta-input w-input" maxLength={256} name="email" data-name="Email" placeholder="Write your e-mail here" type="email" id="email" required />
                    <div className="cta-submit-button">
                      <input type="submit" data-wait="Please wait..." className="cta-submit-btn w-button" value="Submit" />
                      <div className="submit-icon-wrap">
                        <img src="/690ed4943a93ad5efefde551/69132af21a9c59ea8802016c_Arrow-right-white.svg" loading="lazy" alt="" className="submit-icon" />
                      </div>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="/690ed4943a93ad5efefde551/6913447850ccc506b27e38e3_cta%20star%20icon.png" loading="lazy" data-w-id="7535baea-aebd-fe8c-0ccd-49ed65df0488" alt="" className="star-icon" />
          </div>
        </div>
      </section>
    </>
  );
}
