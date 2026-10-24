"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import WfLink from "./WfLink";

/** Top-level nav items. Hash hrefs scroll to a homepage section. */
const NAV_ITEMS = [
  { href: "/", label: "Home", section: "home" },
  { href: "/#community", label: "Vision and Community", section: "community" },
  { href: "/projects", label: "Projects" },
  { href: "/#member-journey", label: "Member Journey", section: "member-journey" },
  { href: "/feedback", label: "Feedback and Complaint" },
] as const;

const SPY_SECTIONS = NAV_ITEMS.flatMap((i) => ("section" in i ? [i.section] : []));

/**
 * Scroll-spy for the homepage: reports which homepage `<section id>` currently
 * sits under the fixed navbar so the matching nav link can be highlighted.
 */
function useSectionSpy(enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
      const probeY = 60; // roughly the vertical middle of the navbar
      let current: HTMLElement | null = null;
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom > probeY) {
          current = el;
          break;
        }
      }
      if (!current && sections.length) current = sections[0];
      // Sections without their own nav link (e.g. FAQ) keep the previous
      // nav link active until the next linked section arrives.
      if (current && !SPY_SECTIONS.includes(current.id as (typeof SPY_SECTIONS)[number])) {
        const idx = sections.indexOf(current);
        current = null;
        for (let i = idx - 1; i >= 0; i--) {
          if (SPY_SECTIONS.includes(sections[i].id as (typeof SPY_SECTIONS)[number])) {
            current = sections[i];
            break;
          }
        }
      }
      setActiveId(current?.id ?? null);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return activeId;
}

/**
 * Site-wide navbar, rendered once from the root layout. Every page uses the
 * same "base" header variant so the layout never shifts between routes.
 */
export default function Header() {
  const container = "container-xl w-container";
  const menuWrap = "navbar-menu-wrap w-nav-menu";
  const navLink = "navbar-link w-inline-block";
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";
  const activeSection = useSectionSpy(isHome);

  return (
    <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-wf--header--variant="base" data-easing="ease" data-collapse="medium" data-w-id="1ba0e07a-5e96-61ae-f789-49995d1ba0e1" role="banner" data-duration="400">
      <div className={container}>
        <div className="navbar-layout">
          <WfLink href="/" className="navbar-logo-wrap w-nav-brand">
            <img src="/logo.png" loading="lazy" alt="Navbar Logo" className="navbar-logo" />
          </WfLink>
          <div className="navbar-menu-block">
            <nav role="navigation" className={menuWrap}>
              {NAV_ITEMS.map((item) => {
                const section = "section" in item ? item.section : undefined;
                // On the homepage, section links (incl. Home) are highlighted
                // by the scroll-spy only; elsewhere WfLink matches the route.
                const spied = isHome && section !== undefined;
                const isActiveSection = spied && activeSection === section;
                return (
                  <WfLink
                    key={item.href}
                    href={item.href}
                    className={isActiveSection ? `${navLink} w--current` : navLink}
                    current={spied ? isActiveSection : undefined}
                    aria-current={isActiveSection ? "location" : undefined}
                  >
                    <div className="navbar-link-text">
                      {item.label}
                    </div>
                  </WfLink>
                );
              })}
            </nav>
          </div>
          <div className="navbar-button-block">
            <div className="navbar-cart-wrapper" style={{ display: "none" } as CSSProperties}>
              <div data-open-product="" data-wf-cart-type="modal" data-wf-cart-query={"query Dynamo3 {\n  database {\n    id\n    commerceOrder {\n      comment\n      extraItems {\n        name\n        pluginId\n        pluginName\n        price {\n          decimalValue\n          string\n          unit\n          value\n        }\n      }\n      id\n      startedOn\n      statusFlags {\n        hasDownloads\n        hasSubscription\n        isFreeOrder\n        requiresShipping\n      }\n      subtotal {\n        decimalValue\n        string\n        unit\n        value\n      }\n      total {\n        decimalValue\n        string\n        unit\n        value\n      }\n      updatedOn\n      userItems {\n        count\n        id\n        price {\n          value\n          unit\n          decimalValue\n          string\n        }\n        product {\n          id\n          cmsLocaleId\n          draft\n          archived\n          f_ec_product_type_2dr10dr: productType {\n            id\n            name\n          }\n          f_name_: name\n          f_sku_properties_3dr: skuProperties {\n            id\n            name\n            enum {\n              id\n              name\n              slug\n            }\n          }\n        }\n        rowTotal {\n          decimalValue\n          string\n          unit\n          value\n        }\n        sku {\n          cmsLocaleId\n          draft\n          archived\n          f_main_image_4dr: mainImage {\n            url\n            file {\n              size\n              origFileName\n              createdOn\n              updatedOn\n              mimeType\n              width\n              height\n              variants {\n                origFileName\n                quality\n                height\n                width\n                s3Url\n                error\n                size\n              }\n            }\n            alt\n          }\n          f_sku_values_3dr: skuValues {\n            property {\n              id\n            }\n            value {\n              id\n            }\n          }\n          id\n        }\n        subscriptionFrequency\n        subscriptionInterval\n        subscriptionTrial\n      }\n      userItemsCount\n    }\n  }\n  site {\n    commerce {\n      id\n      businessAddress {\n        country\n      }\n      defaultCountry\n      defaultCurrency\n      quickCheckoutEnabled\n    }\n  }\n}"} data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper cart" data-node-type="commerce-cart-wrapper">
                <a className="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#">
                  <img src="/690ed4943a93ad5efefde551/69102458354fc80ec6e9ee6d_cart%20icon.svg" loading="lazy" alt="" className="cart-icon" />
                  <div className="none w-inline-block">
                    Cart
                  </div>
                  <div className="cart-quantity-wrapper">
                    <div className="cart-bracket-text">
                      (
                    </div>
                    <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" className="w-commerce-commercecartopenlinkcount cart-quantity">
                      0
                    </div>
                    <div>
                      )
                    </div>
                  </div>
                </a>
                <div style={{ display: "none" } as CSSProperties} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal" data-node-type="commerce-cart-container-wrapper">
                  <div data-node-type="commerce-cart-container" role="dialog" className="w-commerce-commercecartcontainer cart-container">
                    <div className="w-commerce-commercecartheader">
                      <h4 className="w-commerce-commercecartheading cart-header-title">
                        Your Cart
                      </h4>
                      <a className="w-commerce-commercecartcloselink cart-close-icon-wrap w-inline-block" role="button" aria-label="Close cart" data-node-type="commerce-cart-close-link">
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div className="w-commerce-commercecartformwrapper">
                      <form style={{ display: "none" } as CSSProperties} className="w-commerce-commercecartform" data-node-type="commerce-cart-form">
                        <script type="text/x-wf-template" id="wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7f6" dangerouslySetInnerHTML={{ __html: "%3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20cart-product-image%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20cart-product-title%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7fc%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7fc%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22cart-remove-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E" }} />
                        <div className="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7f6">
                          <div className="w-commerce-commercecartitem">
                            <img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" alt="" className="w-commerce-commercecartitemimage cart-product-image w-dyn-bind-empty" />
                            <div className="w-commerce-commercecartiteminfo">
                              <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" className="w-commerce-commercecartproductname cart-product-title w-dyn-bind-empty" />
                              <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">
                                $ 0.00 USD
                              </div>
                              <script type="text/x-wf-template" id="wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7fc" dangerouslySetInnerHTML={{ __html: "%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E" }} />
                              <ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-72d8468e-c0f0-d5a1-c267-c7e5c179e7fc">
                                <li>
                                  <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" className="w-dyn-bind-empty" />
                                  <span>
                                    {": "}
                                  </span>
                                  <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" className="w-dyn-bind-empty" />
                                </li>
                              </ul>
                              <a href="#" role="button" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" className="cart-remove-button w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart">
                                <div>
                                  Remove
                                </div>
                              </a>
                            </div>
                            <input aria-label="Update quantity" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D" className="w-commerce-commercecartquantity" required pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" defaultValue="1" />
                          </div>
                        </div>
                        <div className="w-commerce-commercecartfooter">
                          <div aria-atomic="true" aria-live="polite" className="w-commerce-commercecartlineitem">
                            <div className="cart-subtotal-text">
                              Subtotal
                            </div>
                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" className="w-commerce-commercecartordervalue cart-product-total-price" />
                          </div>
                          <div>
                            <div data-node-type="commerce-cart-quick-checkout-actions" style={{ display: "none" } as CSSProperties}>
                              <a data-node-type="commerce-cart-apple-pay-button" role="button" aria-label="Apple Pay" aria-haspopup="dialog" style={{ backgroundImage: "-webkit-named-image(apple-pay-logo-white)", backgroundSize: "100% 50%", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" } as CSSProperties} className="w-commerce-commercecartapplepaybutton apple-pay" tabIndex={0}>
                                <div />
                              </a>
                              <a data-node-type="commerce-cart-quick-checkout-button" role="button" tabIndex={0} aria-haspopup="dialog" style={{ display: "none" } as CSSProperties} className="w-commerce-commercecartquickcheckoutbutton">
                                <svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                  <defs>
                                    <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" />
                                    <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" />
                                  </defs>
                                  <g fill="none" fillRule="evenodd">
                                    <path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" />
                                    <path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" />
                                    <g transform="translate(0 4)">
                                      <mask id="google-mark-b" fill="#fff">
                                        <use xlinkHref="#google-mark-a" />
                                      </mask>
                                      <path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" />
                                    </g>
                                    <mask id="google-mark-d" fill="#fff">
                                      <use xlinkHref="#google-mark-c" />
                                    </mask>
                                    <path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" />
                                  </g>
                                </svg>
                                <svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                  <g fill="none" fillRule="evenodd">
                                    <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                                    <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                                    <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                                    <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                                  </g>
                                </svg>
                                <div>
                                  Pay with browser.
                                </div>
                              </a>
                            </div>
                            <WfLink href="/checkout" className="w-commerce-commercecartcheckoutbutton checkout-button-2" data-loading-text="Hang Tight..." data-node-type="cart-checkout-button" {...{ "value": "Continue to Checkout" }}>
                              Continue to Checkout
                            </WfLink>
                          </div>
                        </div>
                      </form>
                      <div className="w-commerce-commercecartemptystate">
                        <div aria-label="This cart is empty" aria-live="polite">
                          No items found.
                        </div>
                      </div>
                      <div aria-live="assertive" style={{ display: "none" } as CSSProperties} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate">
                        <div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">
                          Product is not available in this quantity.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-button-wrap">
              <WfLink data-w-id="9c2ee2da-fed8-7195-4eec-8d2db31200a2" href="/join-youthlink" className="button-primary w-inline-block">
                <div className="button-primary-texts-wrap">
                  <div className="button-primary-text">
                    Join YouthLink
                  </div>
                  <div className="button-primary-text absolute">
                    Join YouthLink
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
          <div className="menu-button w-nav-button">
            <div className="navbar-menubar-block">
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-overlay" />
    </div>
  );
}
