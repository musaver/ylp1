import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WfLink from "@/components/WfLink";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  "title": "Checkout - Venteru – Webflow Ecommerce Website Template",
  "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
  "openGraph": {
    "title": "Checkout - Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Checkout - Venteru – Webflow Ecommerce Website Template",
    "description": "Venteru is a modern Webflow template built for venture capital firms, startup investors, and tech-fund platforms. Clean design, startup-focused layout & ready to launch your investment website.",
    "images": [
      "https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"
    ]
  }
};

export default function CheckoutPage() {
  return (
    <>
      <WebflowPage pageId="690f154a6824cc2ad41ee6f8" />
      <div className="checkout-form-wrapper">
        <div data-node-type="commerce-checkout-form-container" data-wf-checkout-query={"query Dynamo3 {\n  database {\n    id\n    commerceOrder {\n      availableShippingMethods {\n        description\n        id\n        mode\n        name\n        price {\n          decimalValue\n          string\n          unit\n          value\n        }\n        selected\n      }\n      comment\n      customData {\n        checkbox\n        name\n        textArea\n        textInput\n      }\n      customerInfo {\n        billingAddress {\n          addressee\n          city\n          country\n          japanType\n          line1\n          line2\n          postalCode\n          state\n          type\n        }\n        identity {\n          email\n          fullName\n        }\n        shippingAddress {\n          addressee\n          city\n          country\n          japanType\n          line1\n          line2\n          postalCode\n          state\n          type\n        }\n        stripePayment {\n          card {\n            expires {\n              month\n              year\n            }\n            last4\n            provided\n            provider\n          }\n        }\n      }\n      downloadFiles {\n        id\n        name\n        url\n      }\n      extraItems {\n        name\n        pluginId\n        pluginName\n        price {\n          decimalValue\n          string\n          unit\n          value\n        }\n      }\n      id\n      paymentProcessor\n      startedOn\n      statusFlags {\n        billingAddressRequiresPostalCode\n        hasDownloads\n        hasSubscription\n        isFreeOrder\n        needAddress\n        needIdentity\n        needItems\n        needPayment\n        requiresShipping\n        shippingAddressRequiresPostalCode\n        shouldRecalc\n      }\n      subtotal {\n        decimalValue\n        string\n        unit\n        value\n      }\n      total {\n        decimalValue\n        string\n        unit\n        value\n      }\n      updatedOn\n      userItems {\n        count\n        id\n        product {\n          id\n          cmsLocaleId\n          draft\n          archived\n          f_name_: name\n          f_sku_properties_3dr: skuProperties {\n            id\n            name\n            enum {\n              id\n              name\n              slug\n            }\n          }\n        }\n        rowTotal {\n          decimalValue\n          string\n          unit\n          value\n        }\n        sku {\n          cmsLocaleId\n          draft\n          archived\n          f_main_image_4dr: mainImage {\n            url\n            file {\n              size\n              origFileName\n              createdOn\n              updatedOn\n              mimeType\n              width\n              height\n              variants {\n                origFileName\n                quality\n                height\n                width\n                s3Url\n                error\n                size\n              }\n            }\n            alt\n          }\n          f_sku_values_3dr: skuValues {\n            property {\n              id\n            }\n            value {\n              id\n            }\n          }\n          id\n        }\n        subscriptionFrequency\n        subscriptionInterval\n        subscriptionTrial\n      }\n      userItemsCount\n    }\n  }\n  site {\n    commerce {\n      id\n      businessAddress {\n        country\n      }\n      defaultCountry\n      defaultCurrency\n      quickCheckoutEnabled\n    }\n  }\n}"} data-wf-page-link-href-prefix="" className="w-commerce-commercecheckoutformcontainer checkout-form">
          <div className="w-commerce-commercelayoutcontainer container w-container">
            <div data-w-id="690f154a6824cc2ad41ee6fb00000000000c" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="w-commerce-commercelayoutmain">
              <form data-node-type="commerce-checkout-customer-info-wrapper" className="w-commerce-commercecheckoutcustomerinfowrapper customer-info">
                <div className="w-commerce-commercecheckoutblockheader block-header">
                  <h2 className="checkout-title">
                    Customer Info
                  </h2>
                  <div className="required-text">
                    * Required
                  </div>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <label htmlFor="wf-ecom-email" className="w-commerce-commercecheckoutlabel label-text">
                    Email *
                  </label>
                  <input id="wf-ecom-email" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.customerEmail%22%7D%7D%5D" className="w-commerce-commercecheckoutemailinput checkout-input" type="text" name="email" required />
                </fieldset>
              </form>
              <form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-address-wrapper" className="w-commerce-commercecheckoutshippingaddresswrapper shipping-address">
                <div className="w-commerce-commercecheckoutblockheader block-header">
                  <h2 className="checkout-title">
                    Shipping Address
                  </h2>
                  <div className="required-text">
                    * Required
                  </div>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <label htmlFor="wf-ecom-shipping-name" className="w-commerce-commercecheckoutlabel label-text">
                    Full Name *
                  </label>
                  <input id="wf-ecom-shipping-name" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressAddressee%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingfullname checkout-input" name="name" type="text" required />
                  <label htmlFor="wf-ecom-shipping-address" className="w-commerce-commercecheckoutlabel label-text">
                    Street Address *
                  </label>
                  <input id="wf-ecom-shipping-address" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine1%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstreetaddress checkout-input" name="address_line1" type="text" required />
                  <input aria-label="Shipping address optional" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine2%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstreetaddressoptional checkout-input" name="address_line2" type="text" />
                  <div className="w-commerce-commercecheckoutrow">
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-shipping-city" className="w-commerce-commercecheckoutlabel label-text">
                        City *
                      </label>
                      <input id="wf-ecom-shipping-city" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCity%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingcity checkout-input" name="address_city" type="text" required />
                    </div>
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-shipping-state" className="w-commerce-commercecheckoutlabel label-text">
                        State/Province
                      </label>
                      <input id="wf-ecom-shipping-state" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressState%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingstateprovince checkout-input" name="address_state" type="text" />
                    </div>
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-shipping-zip" className="w-commerce-commercecheckoutlabel label-text">
                        Zip/Postal Code *
                      </label>
                      <input id="wf-ecom-shipping-zip" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-shipping-zip-field" className="w-commerce-commercecheckoutshippingzippostalcode checkout-input" name="address_zip" type="text" required />
                    </div>
                  </div>
                  <label htmlFor="wf-ecom-shipping-country" className="w-commerce-commercecheckoutlabel label-text">
                    Country *
                  </label>
                  <select id="wf-ecom-shipping-country" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCountry%22%7D%7D%5D" className="w-commerce-commercecheckoutshippingcountryselector checkout-input" name="address_country">
                    <option value="AF">
                      Afghanistan
                    </option>
                    <option value="AX">
                      Aland Islands
                    </option>
                    <option value="AL">
                      Albania
                    </option>
                    <option value="DZ">
                      Algeria
                    </option>
                    <option value="AS">
                      American Samoa
                    </option>
                    <option value="AD">
                      Andorra
                    </option>
                    <option value="AO">
                      Angola
                    </option>
                    <option value="AI">
                      Anguilla
                    </option>
                    <option value="AG">
                      Antigua and Barbuda
                    </option>
                    <option value="AR">
                      Argentina
                    </option>
                    <option value="AM">
                      Armenia
                    </option>
                    <option value="AW">
                      Aruba
                    </option>
                    <option value="AU">
                      Australia
                    </option>
                    <option value="AT">
                      Austria
                    </option>
                    <option value="AZ">
                      Azerbaijan
                    </option>
                    <option value="BS">
                      Bahamas
                    </option>
                    <option value="BH">
                      Bahrain
                    </option>
                    <option value="BD">
                      Bangladesh
                    </option>
                    <option value="BB">
                      Barbados
                    </option>
                    <option value="BY">
                      Belarus
                    </option>
                    <option value="BE">
                      Belgium
                    </option>
                    <option value="BZ">
                      Belize
                    </option>
                    <option value="BJ">
                      Benin
                    </option>
                    <option value="BM">
                      Bermuda
                    </option>
                    <option value="BT">
                      Bhutan
                    </option>
                    <option value="BO">
                      Bolivia
                    </option>
                    <option value="BQ">
                      Bonaire, Saint Eustatius and Saba
                    </option>
                    <option value="BA">
                      Bosnia and Herzegovina
                    </option>
                    <option value="BW">
                      Botswana
                    </option>
                    <option value="BR">
                      Brazil
                    </option>
                    <option value="IO">
                      British Indian Ocean Territory
                    </option>
                    <option value="VG">
                      British Virgin Islands
                    </option>
                    <option value="BN">
                      Brunei
                    </option>
                    <option value="BG">
                      Bulgaria
                    </option>
                    <option value="BF">
                      Burkina Faso
                    </option>
                    <option value="BI">
                      Burundi
                    </option>
                    <option value="CV">
                      Cabo Verde
                    </option>
                    <option value="KH">
                      Cambodia
                    </option>
                    <option value="CM">
                      Cameroon
                    </option>
                    <option value="CA">
                      Canada
                    </option>
                    <option value="KY">
                      Cayman Islands
                    </option>
                    <option value="CF">
                      Central African Republic
                    </option>
                    <option value="TD">
                      Chad
                    </option>
                    <option value="CL">
                      Chile
                    </option>
                    <option value="CN">
                      China
                    </option>
                    <option value="CX">
                      Christmas Island
                    </option>
                    <option value="CC">
                      Cocos Islands
                    </option>
                    <option value="CO">
                      Colombia
                    </option>
                    <option value="KM">
                      Comoros
                    </option>
                    <option value="CK">
                      Cook Islands
                    </option>
                    <option value="CR">
                      Costa Rica
                    </option>
                    <option value="HR">
                      Croatia
                    </option>
                    <option value="CU">
                      Cuba
                    </option>
                    <option value="CW">
                      Curacao
                    </option>
                    <option value="CY">
                      Cyprus
                    </option>
                    <option value="CZ">
                      Czechia
                    </option>
                    <option value="CD">
                      Democratic Republic of the Congo
                    </option>
                    <option value="DK">
                      Denmark
                    </option>
                    <option value="DJ">
                      Djibouti
                    </option>
                    <option value="DM">
                      Dominica
                    </option>
                    <option value="DO">
                      Dominican Republic
                    </option>
                    <option value="EC">
                      Ecuador
                    </option>
                    <option value="EG">
                      Egypt
                    </option>
                    <option value="SV">
                      El Salvador
                    </option>
                    <option value="GQ">
                      Equatorial Guinea
                    </option>
                    <option value="ER">
                      Eritrea
                    </option>
                    <option value="EE">
                      Estonia
                    </option>
                    <option value="SZ">
                      Eswatini
                    </option>
                    <option value="ET">
                      Ethiopia
                    </option>
                    <option value="FK">
                      Falkland Islands
                    </option>
                    <option value="FO">
                      Faroe Islands
                    </option>
                    <option value="FJ">
                      Fiji
                    </option>
                    <option value="FI">
                      Finland
                    </option>
                    <option value="FR">
                      France
                    </option>
                    <option value="GF">
                      French Guiana
                    </option>
                    <option value="PF">
                      French Polynesia
                    </option>
                    <option value="TF">
                      French Southern Territories
                    </option>
                    <option value="GA">
                      Gabon
                    </option>
                    <option value="GM">
                      Gambia
                    </option>
                    <option value="GE">
                      Georgia
                    </option>
                    <option value="DE">
                      Germany
                    </option>
                    <option value="GH">
                      Ghana
                    </option>
                    <option value="GI">
                      Gibraltar
                    </option>
                    <option value="GR">
                      Greece
                    </option>
                    <option value="GL">
                      Greenland
                    </option>
                    <option value="GD">
                      Grenada
                    </option>
                    <option value="GP">
                      Guadeloupe
                    </option>
                    <option value="GU">
                      Guam
                    </option>
                    <option value="GT">
                      Guatemala
                    </option>
                    <option value="GG">
                      Guernsey
                    </option>
                    <option value="GN">
                      Guinea
                    </option>
                    <option value="GW">
                      Guinea-Bissau
                    </option>
                    <option value="GY">
                      Guyana
                    </option>
                    <option value="HT">
                      Haiti
                    </option>
                    <option value="HN">
                      Honduras
                    </option>
                    <option value="HK">
                      Hong Kong
                    </option>
                    <option value="HU">
                      Hungary
                    </option>
                    <option value="IS">
                      Iceland
                    </option>
                    <option value="IN">
                      India
                    </option>
                    <option value="ID">
                      Indonesia
                    </option>
                    <option value="IR">
                      Iran
                    </option>
                    <option value="IQ">
                      Iraq
                    </option>
                    <option value="IE">
                      Ireland
                    </option>
                    <option value="IM">
                      Isle of Man
                    </option>
                    <option value="IL">
                      Israel
                    </option>
                    <option value="IT">
                      Italy
                    </option>
                    <option value="CI">
                      Ivory Coast
                    </option>
                    <option value="JM">
                      Jamaica
                    </option>
                    <option value="JP">
                      Japan
                    </option>
                    <option value="JE">
                      Jersey
                    </option>
                    <option value="JO">
                      Jordan
                    </option>
                    <option value="KZ">
                      Kazakhstan
                    </option>
                    <option value="KE">
                      Kenya
                    </option>
                    <option value="KI">
                      Kiribati
                    </option>
                    <option value="XK">
                      Kosovo
                    </option>
                    <option value="KW">
                      Kuwait
                    </option>
                    <option value="KG">
                      Kyrgyzstan
                    </option>
                    <option value="LA">
                      Laos
                    </option>
                    <option value="LV">
                      Latvia
                    </option>
                    <option value="LB">
                      Lebanon
                    </option>
                    <option value="LS">
                      Lesotho
                    </option>
                    <option value="LR">
                      Liberia
                    </option>
                    <option value="LY">
                      Libya
                    </option>
                    <option value="LI">
                      Liechtenstein
                    </option>
                    <option value="LT">
                      Lithuania
                    </option>
                    <option value="LU">
                      Luxembourg
                    </option>
                    <option value="MO">
                      Macao
                    </option>
                    <option value="MG">
                      Madagascar
                    </option>
                    <option value="MW">
                      Malawi
                    </option>
                    <option value="MY">
                      Malaysia
                    </option>
                    <option value="MV">
                      Maldives
                    </option>
                    <option value="ML">
                      Mali
                    </option>
                    <option value="MT">
                      Malta
                    </option>
                    <option value="MH">
                      Marshall Islands
                    </option>
                    <option value="MQ">
                      Martinique
                    </option>
                    <option value="MR">
                      Mauritania
                    </option>
                    <option value="MU">
                      Mauritius
                    </option>
                    <option value="YT">
                      Mayotte
                    </option>
                    <option value="MX">
                      Mexico
                    </option>
                    <option value="FM">
                      Micronesia
                    </option>
                    <option value="MD">
                      Moldova
                    </option>
                    <option value="MC">
                      Monaco
                    </option>
                    <option value="MN">
                      Mongolia
                    </option>
                    <option value="ME">
                      Montenegro
                    </option>
                    <option value="MS">
                      Montserrat
                    </option>
                    <option value="MA">
                      Morocco
                    </option>
                    <option value="MZ">
                      Mozambique
                    </option>
                    <option value="MM">
                      Myanmar
                    </option>
                    <option value="NA">
                      Namibia
                    </option>
                    <option value="NR">
                      Nauru
                    </option>
                    <option value="NP">
                      Nepal
                    </option>
                    <option value="NL">
                      Netherlands
                    </option>
                    <option value="NC">
                      New Caledonia
                    </option>
                    <option value="NZ">
                      New Zealand
                    </option>
                    <option value="NI">
                      Nicaragua
                    </option>
                    <option value="NE">
                      Niger
                    </option>
                    <option value="NG">
                      Nigeria
                    </option>
                    <option value="NU">
                      Niue
                    </option>
                    <option value="NF">
                      Norfolk Island
                    </option>
                    <option value="KP">
                      North Korea
                    </option>
                    <option value="MK">
                      North Macedonia
                    </option>
                    <option value="MP">
                      Northern Mariana Islands
                    </option>
                    <option value="NO">
                      Norway
                    </option>
                    <option value="OM">
                      Oman
                    </option>
                    <option value="PK">
                      Pakistan
                    </option>
                    <option value="PW">
                      Palau
                    </option>
                    <option value="PS">
                      Palestinian Territory
                    </option>
                    <option value="PA">
                      Panama
                    </option>
                    <option value="PG">
                      Papua New Guinea
                    </option>
                    <option value="PY">
                      Paraguay
                    </option>
                    <option value="PE">
                      Peru
                    </option>
                    <option value="PH">
                      Philippines
                    </option>
                    <option value="PN">
                      Pitcairn
                    </option>
                    <option value="PL">
                      Poland
                    </option>
                    <option value="PT">
                      Portugal
                    </option>
                    <option value="PR">
                      Puerto Rico
                    </option>
                    <option value="QA">
                      Qatar
                    </option>
                    <option value="CG">
                      Republic of the Congo
                    </option>
                    <option value="RE">
                      Reunion
                    </option>
                    <option value="RO">
                      Romania
                    </option>
                    <option value="RU">
                      Russia
                    </option>
                    <option value="RW">
                      Rwanda
                    </option>
                    <option value="BL">
                      Saint Barthelemy
                    </option>
                    <option value="SH">
                      Saint Helena
                    </option>
                    <option value="KN">
                      Saint Kitts and Nevis
                    </option>
                    <option value="LC">
                      Saint Lucia
                    </option>
                    <option value="MF">
                      Saint Martin
                    </option>
                    <option value="PM">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="VC">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="WS">
                      Samoa
                    </option>
                    <option value="SM">
                      San Marino
                    </option>
                    <option value="ST">
                      Sao Tome and Principe
                    </option>
                    <option value="SA">
                      Saudi Arabia
                    </option>
                    <option value="SN">
                      Senegal
                    </option>
                    <option value="RS">
                      Serbia
                    </option>
                    <option value="SC">
                      Seychelles
                    </option>
                    <option value="SL">
                      Sierra Leone
                    </option>
                    <option value="SG">
                      Singapore
                    </option>
                    <option value="SX">
                      Sint Maarten
                    </option>
                    <option value="SK">
                      Slovakia
                    </option>
                    <option value="SI">
                      Slovenia
                    </option>
                    <option value="SB">
                      Solomon Islands
                    </option>
                    <option value="SO">
                      Somalia
                    </option>
                    <option value="ZA">
                      South Africa
                    </option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="KR">
                      South Korea
                    </option>
                    <option value="SS">
                      South Sudan
                    </option>
                    <option value="ES">
                      Spain
                    </option>
                    <option value="LK">
                      Sri Lanka
                    </option>
                    <option value="SD">
                      Sudan
                    </option>
                    <option value="SR">
                      Suriname
                    </option>
                    <option value="SJ">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="SE">
                      Sweden
                    </option>
                    <option value="CH">
                      Switzerland
                    </option>
                    <option value="SY">
                      Syria
                    </option>
                    <option value="TW">
                      Taiwan
                    </option>
                    <option value="TJ">
                      Tajikistan
                    </option>
                    <option value="TZ">
                      Tanzania
                    </option>
                    <option value="TH">
                      Thailand
                    </option>
                    <option value="TL">
                      Timor Leste
                    </option>
                    <option value="TG">
                      Togo
                    </option>
                    <option value="TK">
                      Tokelau
                    </option>
                    <option value="TO">
                      Tonga
                    </option>
                    <option value="TT">
                      Trinidad and Tobago
                    </option>
                    <option value="TN">
                      Tunisia
                    </option>
                    <option value="TR">
                      Turkey
                    </option>
                    <option value="TM">
                      Turkmenistan
                    </option>
                    <option value="TC">
                      Turks and Caicos Islands
                    </option>
                    <option value="TV">
                      Tuvalu
                    </option>
                    <option value="VI">
                      U.S. Virgin Islands
                    </option>
                    <option value="UG">
                      Uganda
                    </option>
                    <option value="UA">
                      Ukraine
                    </option>
                    <option value="AE">
                      United Arab Emirates
                    </option>
                    <option value="GB">
                      United Kingdom
                    </option>
                    <option value="US">
                      United States
                    </option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">
                      Uruguay
                    </option>
                    <option value="UZ">
                      Uzbekistan
                    </option>
                    <option value="VU">
                      Vanuatu
                    </option>
                    <option value="VA">
                      Vatican
                    </option>
                    <option value="VE">
                      Venezuela
                    </option>
                    <option value="VN">
                      Vietnam
                    </option>
                    <option value="WF">
                      Wallis and Futuna
                    </option>
                    <option value="EH">
                      Western Sahara
                    </option>
                    <option value="YE">
                      Yemen
                    </option>
                    <option value="ZM">
                      Zambia
                    </option>
                    <option value="ZW">
                      Zimbabwe
                    </option>
                  </select>
                </fieldset>
              </form>
              <form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper shipping-method-2">
                <div className="w-commerce-commercecheckoutblockheader block-header">
                  <h2 className="checkout-title">
                    Shipping Method
                  </h2>
                </div>
                <fieldset className="border-none">
                  <script type="text/x-wf-template" id="wf-template-690f154a6824cc2ad41ee6fb000000000042" dangerouslySetInnerHTML={{ __html: "%3Clabel%20class%3D%22w-commerce-commercecheckoutshippingmethoditem%20shipping-method%22%3E%3Cinput%20required%3D%22%22%20data-wf-bindings%3D%22%255B%257B%2522id%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.id%2522%257D%257D%252C%257B%2522value%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.id%2522%257D%257D%252C%257B%2522checked%2522%253A%257B%2522type%2522%253A%2522Bool%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.selected%2522%257D%257D%255D%22%20type%3D%22radio%22%20name%3D%22shipping-method-choice%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecheckoutshippingmethoddescriptionblock%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-commerce-commerceboldtextblock%20label-text%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.description%2522%257D%257D%255D%22%20class%3D%22shipping-text%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.availableShippingMethods%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22checkout-shipping-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Flabel%3E" }} />
                  <div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist shipping-method-list" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-690f154a6824cc2ad41ee6fb000000000042">
                    <label className="w-commerce-commercecheckoutshippingmethoditem shipping-method">
                      <input required data-wf-bindings="%5B%7B%22id%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22checked%22%3A%7B%22type%22%3A%22Bool%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.selected%22%7D%7D%5D" type="radio" name="shipping-method-choice" />
                      <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                        <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.name%22%7D%7D%5D" className="w-commerce-commerceboldtextblock label-text w-dyn-bind-empty" />
                        <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.description%22%7D%7D%5D" className="shipping-text w-dyn-bind-empty" />
                      </div>
                      <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.price%22%7D%7D%5D" className="checkout-shipping-price">
                        $ 0.00 USD
                      </div>
                    </label>
                  </div>
                  <div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{ display: "none" } as CSSProperties} className="w-commerce-commercecheckoutshippingmethodsemptystate border-none">
                    <div className="emty-text">
                      No shipping methods are available for the address given.
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="w-commerce-commercecheckoutpaymentinfowrapper payment-info">
                <div className="w-commerce-commercecheckoutblockheader block-header">
                  <h2 className="checkout-title">
                    Payment Info
                  </h2>
                  <div className="required-text">
                    * Required
                  </div>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <label htmlFor="" className="w-commerce-commercecheckoutlabel label-text">
                    Card Number *
                  </label>
                  <div data-wf-stripe-element-type="cardNumber" data-wf-style-map={"{}"} className="w-commerce-commercecheckoutcardnumber checkout-input">
                    <div />
                  </div>
                  <div className="w-commerce-commercecheckoutrow">
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="" className="w-commerce-commercecheckoutlabel label-text">
                        Expiration Date *
                      </label>
                      <div data-wf-stripe-element-type="cardExpiry" data-wf-style-map={"{}"} className="w-commerce-commercecheckoutcardexpirationdate checkout-input">
                        <div />
                      </div>
                    </div>
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="" className="w-commerce-commercecheckoutlabel label-text">
                        Security Code *
                      </label>
                      <div data-wf-stripe-element-type="cardCvc" data-wf-style-map={"{}"} className="w-commerce-commercecheckoutcardsecuritycode checkout-input">
                        <div />
                      </div>
                    </div>
                  </div>
                  <div data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" className="w-commerce-commercecheckoutbillingaddresstogglewrapper billing-address-toggle">
                    <input id="billing-address-toggle" data-node-type="commerce-checkout-billing-address-toggle-checkbox" className="w-commerce-commercecheckoutbillingaddresstogglecheckbox checkbox" type="checkbox" defaultChecked />
                    <label htmlFor="billing-address-toggle" className="w-commerce-commercecheckoutbillingaddresstogglelabel checkbox-label">
                      Billing address same as shipping
                    </label>
                  </div>
                </fieldset>
              </div>
              <form data-node-type="commerce-checkout-billing-address-wrapper" style={{ display: "none" } as CSSProperties} className="w-commerce-commercecheckoutbillingaddresswrapper billing-address">
                <div className="w-commerce-commercecheckoutblockheader block-header">
                  <h2 className="checkout-title">
                    Billing Address
                  </h2>
                  <div className="required-text">
                    * Required
                  </div>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <label htmlFor="wf-ecom-billing-name" className="w-commerce-commercecheckoutlabel label-text">
                    Full Name *
                  </label>
                  <input id="wf-ecom-billing-name" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressAddressee%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingfullname checkout-input" name="name" type="text" required />
                  <label htmlFor="wf-ecom-billing-address" className="w-commerce-commercecheckoutlabel label-text">
                    Street Address *
                  </label>
                  <input id="wf-ecom-billing-address" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine1%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstreetaddress checkout-input" name="address_line1" required type="text" />
                  <input aria-label="Billing address optional" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine2%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstreetaddressoptional checkout-input" name="address_line2" type="text" />
                  <div className="w-commerce-commercecheckoutrow">
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-billing-city" className="w-commerce-commercecheckoutlabel label-text">
                        City *
                      </label>
                      <input id="wf-ecom-billing-city" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCity%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingcity checkout-input" name="address_city" type="text" required />
                    </div>
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-billing-state" className="w-commerce-commercecheckoutlabel label-text">
                        State/Province
                      </label>
                      <input id="wf-ecom-billing-state" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressState%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingstateprovince checkout-input" name="address_state" type="text" />
                    </div>
                    <div className="w-commerce-commercecheckoutcolumn">
                      <label htmlFor="wf-ecom-billing-zip" className="w-commerce-commercecheckoutlabel label-text">
                        Zip/Postal Code *
                      </label>
                      <input id="wf-ecom-billing-zip" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-billing-zip-field" className="w-commerce-commercecheckoutbillingzippostalcode checkout-input" name="address_zip" type="text" required />
                    </div>
                  </div>
                  <label htmlFor="wf-ecom-billing-country" className="w-commerce-commercecheckoutlabel">
                    Country *
                  </label>
                  <select id="wf-ecom-billing-country" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCountry%22%7D%7D%5D" className="w-commerce-commercecheckoutbillingcountryselector checkout-input" name="address_country" defaultValue="US">
                    <option value="AF">
                      Afghanistan
                    </option>
                    <option value="AX">
                      Aland Islands
                    </option>
                    <option value="AL">
                      Albania
                    </option>
                    <option value="DZ">
                      Algeria
                    </option>
                    <option value="AS">
                      American Samoa
                    </option>
                    <option value="AD">
                      Andorra
                    </option>
                    <option value="AO">
                      Angola
                    </option>
                    <option value="AI">
                      Anguilla
                    </option>
                    <option value="AG">
                      Antigua and Barbuda
                    </option>
                    <option value="AR">
                      Argentina
                    </option>
                    <option value="AM">
                      Armenia
                    </option>
                    <option value="AW">
                      Aruba
                    </option>
                    <option value="AU">
                      Australia
                    </option>
                    <option value="AT">
                      Austria
                    </option>
                    <option value="AZ">
                      Azerbaijan
                    </option>
                    <option value="BS">
                      Bahamas
                    </option>
                    <option value="BH">
                      Bahrain
                    </option>
                    <option value="BD">
                      Bangladesh
                    </option>
                    <option value="BB">
                      Barbados
                    </option>
                    <option value="BY">
                      Belarus
                    </option>
                    <option value="BE">
                      Belgium
                    </option>
                    <option value="BZ">
                      Belize
                    </option>
                    <option value="BJ">
                      Benin
                    </option>
                    <option value="BM">
                      Bermuda
                    </option>
                    <option value="BT">
                      Bhutan
                    </option>
                    <option value="BO">
                      Bolivia
                    </option>
                    <option value="BQ">
                      Bonaire, Saint Eustatius and Saba
                    </option>
                    <option value="BA">
                      Bosnia and Herzegovina
                    </option>
                    <option value="BW">
                      Botswana
                    </option>
                    <option value="BR">
                      Brazil
                    </option>
                    <option value="IO">
                      British Indian Ocean Territory
                    </option>
                    <option value="VG">
                      British Virgin Islands
                    </option>
                    <option value="BN">
                      Brunei
                    </option>
                    <option value="BG">
                      Bulgaria
                    </option>
                    <option value="BF">
                      Burkina Faso
                    </option>
                    <option value="BI">
                      Burundi
                    </option>
                    <option value="CV">
                      Cabo Verde
                    </option>
                    <option value="KH">
                      Cambodia
                    </option>
                    <option value="CM">
                      Cameroon
                    </option>
                    <option value="CA">
                      Canada
                    </option>
                    <option value="KY">
                      Cayman Islands
                    </option>
                    <option value="CF">
                      Central African Republic
                    </option>
                    <option value="TD">
                      Chad
                    </option>
                    <option value="CL">
                      Chile
                    </option>
                    <option value="CN">
                      China
                    </option>
                    <option value="CX">
                      Christmas Island
                    </option>
                    <option value="CC">
                      Cocos Islands
                    </option>
                    <option value="CO">
                      Colombia
                    </option>
                    <option value="KM">
                      Comoros
                    </option>
                    <option value="CK">
                      Cook Islands
                    </option>
                    <option value="CR">
                      Costa Rica
                    </option>
                    <option value="HR">
                      Croatia
                    </option>
                    <option value="CU">
                      Cuba
                    </option>
                    <option value="CW">
                      Curacao
                    </option>
                    <option value="CY">
                      Cyprus
                    </option>
                    <option value="CZ">
                      Czechia
                    </option>
                    <option value="CD">
                      Democratic Republic of the Congo
                    </option>
                    <option value="DK">
                      Denmark
                    </option>
                    <option value="DJ">
                      Djibouti
                    </option>
                    <option value="DM">
                      Dominica
                    </option>
                    <option value="DO">
                      Dominican Republic
                    </option>
                    <option value="EC">
                      Ecuador
                    </option>
                    <option value="EG">
                      Egypt
                    </option>
                    <option value="SV">
                      El Salvador
                    </option>
                    <option value="GQ">
                      Equatorial Guinea
                    </option>
                    <option value="ER">
                      Eritrea
                    </option>
                    <option value="EE">
                      Estonia
                    </option>
                    <option value="SZ">
                      Eswatini
                    </option>
                    <option value="ET">
                      Ethiopia
                    </option>
                    <option value="FK">
                      Falkland Islands
                    </option>
                    <option value="FO">
                      Faroe Islands
                    </option>
                    <option value="FJ">
                      Fiji
                    </option>
                    <option value="FI">
                      Finland
                    </option>
                    <option value="FR">
                      France
                    </option>
                    <option value="GF">
                      French Guiana
                    </option>
                    <option value="PF">
                      French Polynesia
                    </option>
                    <option value="TF">
                      French Southern Territories
                    </option>
                    <option value="GA">
                      Gabon
                    </option>
                    <option value="GM">
                      Gambia
                    </option>
                    <option value="GE">
                      Georgia
                    </option>
                    <option value="DE">
                      Germany
                    </option>
                    <option value="GH">
                      Ghana
                    </option>
                    <option value="GI">
                      Gibraltar
                    </option>
                    <option value="GR">
                      Greece
                    </option>
                    <option value="GL">
                      Greenland
                    </option>
                    <option value="GD">
                      Grenada
                    </option>
                    <option value="GP">
                      Guadeloupe
                    </option>
                    <option value="GU">
                      Guam
                    </option>
                    <option value="GT">
                      Guatemala
                    </option>
                    <option value="GG">
                      Guernsey
                    </option>
                    <option value="GN">
                      Guinea
                    </option>
                    <option value="GW">
                      Guinea-Bissau
                    </option>
                    <option value="GY">
                      Guyana
                    </option>
                    <option value="HT">
                      Haiti
                    </option>
                    <option value="HN">
                      Honduras
                    </option>
                    <option value="HK">
                      Hong Kong
                    </option>
                    <option value="HU">
                      Hungary
                    </option>
                    <option value="IS">
                      Iceland
                    </option>
                    <option value="IN">
                      India
                    </option>
                    <option value="ID">
                      Indonesia
                    </option>
                    <option value="IR">
                      Iran
                    </option>
                    <option value="IQ">
                      Iraq
                    </option>
                    <option value="IE">
                      Ireland
                    </option>
                    <option value="IM">
                      Isle of Man
                    </option>
                    <option value="IL">
                      Israel
                    </option>
                    <option value="IT">
                      Italy
                    </option>
                    <option value="CI">
                      Ivory Coast
                    </option>
                    <option value="JM">
                      Jamaica
                    </option>
                    <option value="JP">
                      Japan
                    </option>
                    <option value="JE">
                      Jersey
                    </option>
                    <option value="JO">
                      Jordan
                    </option>
                    <option value="KZ">
                      Kazakhstan
                    </option>
                    <option value="KE">
                      Kenya
                    </option>
                    <option value="KI">
                      Kiribati
                    </option>
                    <option value="XK">
                      Kosovo
                    </option>
                    <option value="KW">
                      Kuwait
                    </option>
                    <option value="KG">
                      Kyrgyzstan
                    </option>
                    <option value="LA">
                      Laos
                    </option>
                    <option value="LV">
                      Latvia
                    </option>
                    <option value="LB">
                      Lebanon
                    </option>
                    <option value="LS">
                      Lesotho
                    </option>
                    <option value="LR">
                      Liberia
                    </option>
                    <option value="LY">
                      Libya
                    </option>
                    <option value="LI">
                      Liechtenstein
                    </option>
                    <option value="LT">
                      Lithuania
                    </option>
                    <option value="LU">
                      Luxembourg
                    </option>
                    <option value="MO">
                      Macao
                    </option>
                    <option value="MG">
                      Madagascar
                    </option>
                    <option value="MW">
                      Malawi
                    </option>
                    <option value="MY">
                      Malaysia
                    </option>
                    <option value="MV">
                      Maldives
                    </option>
                    <option value="ML">
                      Mali
                    </option>
                    <option value="MT">
                      Malta
                    </option>
                    <option value="MH">
                      Marshall Islands
                    </option>
                    <option value="MQ">
                      Martinique
                    </option>
                    <option value="MR">
                      Mauritania
                    </option>
                    <option value="MU">
                      Mauritius
                    </option>
                    <option value="YT">
                      Mayotte
                    </option>
                    <option value="MX">
                      Mexico
                    </option>
                    <option value="FM">
                      Micronesia
                    </option>
                    <option value="MD">
                      Moldova
                    </option>
                    <option value="MC">
                      Monaco
                    </option>
                    <option value="MN">
                      Mongolia
                    </option>
                    <option value="ME">
                      Montenegro
                    </option>
                    <option value="MS">
                      Montserrat
                    </option>
                    <option value="MA">
                      Morocco
                    </option>
                    <option value="MZ">
                      Mozambique
                    </option>
                    <option value="MM">
                      Myanmar
                    </option>
                    <option value="NA">
                      Namibia
                    </option>
                    <option value="NR">
                      Nauru
                    </option>
                    <option value="NP">
                      Nepal
                    </option>
                    <option value="NL">
                      Netherlands
                    </option>
                    <option value="NC">
                      New Caledonia
                    </option>
                    <option value="NZ">
                      New Zealand
                    </option>
                    <option value="NI">
                      Nicaragua
                    </option>
                    <option value="NE">
                      Niger
                    </option>
                    <option value="NG">
                      Nigeria
                    </option>
                    <option value="NU">
                      Niue
                    </option>
                    <option value="NF">
                      Norfolk Island
                    </option>
                    <option value="KP">
                      North Korea
                    </option>
                    <option value="MK">
                      North Macedonia
                    </option>
                    <option value="MP">
                      Northern Mariana Islands
                    </option>
                    <option value="NO">
                      Norway
                    </option>
                    <option value="OM">
                      Oman
                    </option>
                    <option value="PK">
                      Pakistan
                    </option>
                    <option value="PW">
                      Palau
                    </option>
                    <option value="PS">
                      Palestinian Territory
                    </option>
                    <option value="PA">
                      Panama
                    </option>
                    <option value="PG">
                      Papua New Guinea
                    </option>
                    <option value="PY">
                      Paraguay
                    </option>
                    <option value="PE">
                      Peru
                    </option>
                    <option value="PH">
                      Philippines
                    </option>
                    <option value="PN">
                      Pitcairn
                    </option>
                    <option value="PL">
                      Poland
                    </option>
                    <option value="PT">
                      Portugal
                    </option>
                    <option value="PR">
                      Puerto Rico
                    </option>
                    <option value="QA">
                      Qatar
                    </option>
                    <option value="CG">
                      Republic of the Congo
                    </option>
                    <option value="RE">
                      Reunion
                    </option>
                    <option value="RO">
                      Romania
                    </option>
                    <option value="RU">
                      Russia
                    </option>
                    <option value="RW">
                      Rwanda
                    </option>
                    <option value="BL">
                      Saint Barthelemy
                    </option>
                    <option value="SH">
                      Saint Helena
                    </option>
                    <option value="KN">
                      Saint Kitts and Nevis
                    </option>
                    <option value="LC">
                      Saint Lucia
                    </option>
                    <option value="MF">
                      Saint Martin
                    </option>
                    <option value="PM">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="VC">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="WS">
                      Samoa
                    </option>
                    <option value="SM">
                      San Marino
                    </option>
                    <option value="ST">
                      Sao Tome and Principe
                    </option>
                    <option value="SA">
                      Saudi Arabia
                    </option>
                    <option value="SN">
                      Senegal
                    </option>
                    <option value="RS">
                      Serbia
                    </option>
                    <option value="SC">
                      Seychelles
                    </option>
                    <option value="SL">
                      Sierra Leone
                    </option>
                    <option value="SG">
                      Singapore
                    </option>
                    <option value="SX">
                      Sint Maarten
                    </option>
                    <option value="SK">
                      Slovakia
                    </option>
                    <option value="SI">
                      Slovenia
                    </option>
                    <option value="SB">
                      Solomon Islands
                    </option>
                    <option value="SO">
                      Somalia
                    </option>
                    <option value="ZA">
                      South Africa
                    </option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="KR">
                      South Korea
                    </option>
                    <option value="SS">
                      South Sudan
                    </option>
                    <option value="ES">
                      Spain
                    </option>
                    <option value="LK">
                      Sri Lanka
                    </option>
                    <option value="SD">
                      Sudan
                    </option>
                    <option value="SR">
                      Suriname
                    </option>
                    <option value="SJ">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="SE">
                      Sweden
                    </option>
                    <option value="CH">
                      Switzerland
                    </option>
                    <option value="SY">
                      Syria
                    </option>
                    <option value="TW">
                      Taiwan
                    </option>
                    <option value="TJ">
                      Tajikistan
                    </option>
                    <option value="TZ">
                      Tanzania
                    </option>
                    <option value="TH">
                      Thailand
                    </option>
                    <option value="TL">
                      Timor Leste
                    </option>
                    <option value="TG">
                      Togo
                    </option>
                    <option value="TK">
                      Tokelau
                    </option>
                    <option value="TO">
                      Tonga
                    </option>
                    <option value="TT">
                      Trinidad and Tobago
                    </option>
                    <option value="TN">
                      Tunisia
                    </option>
                    <option value="TR">
                      Turkey
                    </option>
                    <option value="TM">
                      Turkmenistan
                    </option>
                    <option value="TC">
                      Turks and Caicos Islands
                    </option>
                    <option value="TV">
                      Tuvalu
                    </option>
                    <option value="VI">
                      U.S. Virgin Islands
                    </option>
                    <option value="UG">
                      Uganda
                    </option>
                    <option value="UA">
                      Ukraine
                    </option>
                    <option value="AE">
                      United Arab Emirates
                    </option>
                    <option value="GB">
                      United Kingdom
                    </option>
                    <option value="US">
                      United States
                    </option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">
                      Uruguay
                    </option>
                    <option value="UZ">
                      Uzbekistan
                    </option>
                    <option value="VU">
                      Vanuatu
                    </option>
                    <option value="VA">
                      Vatican
                    </option>
                    <option value="VE">
                      Venezuela
                    </option>
                    <option value="VN">
                      Vietnam
                    </option>
                    <option value="WF">
                      Wallis and Futuna
                    </option>
                    <option value="EH">
                      Western Sahara
                    </option>
                    <option value="YE">
                      Yemen
                    </option>
                    <option value="ZM">
                      Zambia
                    </option>
                    <option value="ZW">
                      Zimbabwe
                    </option>
                  </select>
                </fieldset>
              </form>
              <div className="w-commerce-commercecheckoutorderitemswrapper order-items">
                <div className="w-commerce-commercecheckoutsummaryblockheader block-header">
                  <h2 className="checkout-title">
                    Items in Order
                  </h2>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <script type="text/x-wf-template" id="wf-template-690f154a6824cc2ad41ee6fb000000000086" dangerouslySetInnerHTML={{ __html: "%3Cdiv%20role%3D%22listitem%22%20class%3D%22w-commerce-commercecheckoutorderitem%20order-item%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20item-image%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecheckoutorderitemdescriptionwrapper%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commerceboldtextblock%20label-text%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22w-commerce-commercecheckoutorderitemquantitywrapper%20shipping-text%22%3E%3Cdiv%3EQuantity%3A%20%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%255D%22%3E1%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-690f154a6824cc2ad41ee6fb00000000008f%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecheckoutorderitemoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-690f154a6824cc2ad41ee6fb00000000008f%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.rowTotal%2522%257D%257D%255D%22%20class%3D%22checkout-shipping-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Fdiv%3E" }} />
                  <div role="list" className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-690f154a6824cc2ad41ee6fb000000000086">
                    <div role="listitem" className="w-commerce-commercecheckoutorderitem order-item">
                      <img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" alt="" className="w-commerce-commercecartitemimage item-image w-dyn-bind-empty" />
                      <div className="w-commerce-commercecheckoutorderitemdescriptionwrapper">
                        <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" className="w-commerce-commerceboldtextblock label-text w-dyn-bind-empty" />
                        <div className="w-commerce-commercecheckoutorderitemquantitywrapper shipping-text">
                          <div>
                            {"Quantity: "}
                          </div>
                          <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%5D">
                            1
                          </div>
                        </div>
                        <script type="text/x-wf-template" id="wf-template-690f154a6824cc2ad41ee6fb00000000008f" dangerouslySetInnerHTML={{ __html: "%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E" }} />
                        <ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecheckoutorderitemoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-690f154a6824cc2ad41ee6fb00000000008f">
                          <li>
                            <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" className="w-dyn-bind-empty" />
                            <span>
                              {": "}
                            </span>
                            <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" className="w-dyn-bind-empty" />
                          </li>
                        </ul>
                      </div>
                      <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.rowTotal%22%7D%7D%5D" className="checkout-shipping-price">
                        $ 0.00 USD
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div data-w-id="690f154a6824cc2ad41ee6fb000000000096" style={{ WebkitTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(5px)", opacity: "0" } as CSSProperties} className="w-commerce-commercelayoutsidebar summary-box">
              <div className="w-commerce-commercecheckoutordersummarywrapper order-summary">
                <div className="w-commerce-commercecheckoutsummaryblockheader block-header">
                  <h2 className="checkout-title">
                    Order Summary
                  </h2>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent border-none">
                  <div className="w-commerce-commercecheckoutsummarylineitem">
                    <div>
                      Subtotal
                    </div>
                    <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" className="order-texts" />
                  </div>
                  <script type="text/x-wf-template" id="wf-template-690f154a6824cc2ad41ee6fb0000000000a0" dangerouslySetInnerHTML={{ __html: "%3Cdiv%20class%3D%22w-commerce-commercecheckoutordersummaryextraitemslistitem%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.extraItems%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.extraItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22order-texts%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Fdiv%3E" }} />
                  <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-690f154a6824cc2ad41ee6fb0000000000a0">
                    <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                      <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.name%22%7D%7D%5D" className="w-dyn-bind-empty" />
                      <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.price%22%7D%7D%5D" className="order-texts">
                        $ 0.00 USD
                      </div>
                    </div>
                  </div>
                  <div className="w-commerce-commercecheckoutsummarylineitem">
                    <div className="order-texts">
                      Total
                    </div>
                    <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.total%22%7D%7D%5D" className="w-commerce-commercecheckoutsummarytotal" />
                  </div>
                </fieldset>
              </div>
              <a href="#" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton checkout-button" data-loading-text="Placing Order..." {...{ "value": "Place Order" }}>
                Place Order
              </a>
              <div data-node-type="commerce-cart-quick-checkout-actions" style={{ display: "none" } as CSSProperties}>
                <a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style={{ backgroundImage: "-webkit-named-image(apple-pay-logo-white)", backgroundSize: "100% 50%", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" } as CSSProperties} className="w-commerce-commercecartapplepaybutton" tabIndex={0}>
                  <div />
                </a>
                <a role="button" tabIndex={0} aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style={{ display: "none" } as CSSProperties} className="w-commerce-commercecartquickcheckoutbutton">
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
              <div data-node-type="commerce-checkout-error-state" style={{ display: "none" } as CSSProperties} className="w-commerce-commercecheckouterrorstate">
                <div aria-live="polite" className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue." data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">
                  There was an error processing your customer info. Please try again, or contact us if you continue to have problems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cta-section">
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
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="cta-form" data-wf-page-id="690f154a6824cc2ad41ee6f8" data-wf-element-id="7535baea-aebd-fe8c-0ccd-49ed65df047c" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
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
