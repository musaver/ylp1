import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_ID = "690ed4943a93ad5efefde551";

// Same as Webflow's head snippet: marks <html> as JS-enabled (and touch) before
// first paint so interaction initial states apply without a flash.
const W_MOD_JS =
  '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);';

const CURRENCY_SETTINGS = `window.__WEBFLOW_CURRENCY_SETTINGS = ${JSON.stringify({
  currencyCode: "USD",
  symbol: "$",
  decimal: ".",
  fractionDigits: 2,
  group: ",",
  template:
    '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
  hideDecimalForWholeNumbers: false,
})};`;

export const metadata: Metadata = {
  title: "Venteru – Webflow Ecommerce Website Template",
  description:
    "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
  icons: {
    icon: "/690ed4943a93ad5efefde551/692c4311042f850b65bd37a7_fav%20icon.png",
    apple: "/690ed4943a93ad5efefde551/692c433030d14f77be87daf6_webclip.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-wf-site={SITE_ID} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@300;400;500;600;700&family=Mona+Sans:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="/690ed4943a93ad5efefde551/css/venteru.webflow.shared.db0dbfe57.css" />
        <script dangerouslySetInnerHTML={{ __html: W_MOD_JS }} />
        <script dangerouslySetInnerHTML={{ __html: CURRENCY_SETTINGS }} />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
