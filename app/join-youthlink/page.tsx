import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WfLink from "@/components/WfLink";
import WebflowPage from "@/components/WebflowPage";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Join YouthLink",
  description: "Apply to join YouthLink. A short application for young people who want to learn, build skills and contribute.",
  openGraph: {
    title: "Join YouthLink",
    description: "Apply to join YouthLink. A short application for young people who want to learn, build skills and contribute.",
    images: ["https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join YouthLink",
    description: "Apply to join YouthLink. A short application for young people who want to learn, build skills and contribute.",
    images: ["https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"],
  },
};

export default function JoinYouthLinkPage() {
  return (
    <>
      <WebflowPage pageId="690eedd17ee9d54895de075a" />
      <section className="contact-section">
        <div className="w-layout-blockcontainer border-container-blcok w-container">
          <div className="container-xl-padding">
            <div className="contact-layout">
              <div className="contact-details-blcok">
                <div className="contact-details-wrapper">
                  <div className="contact-title-wrap">
                    <h1 className="heading-02 contact-title">
                      Join YouthLink
                    </h1>
                  </div>
                  <div className="contact-details-paragraph-wrap">
                    <p className="contact-details-paragraph">
                      {"YouthLink is for young people who want to learn, build real skills and contribute, not just watch from the sidelines. This application is detailed on purpose: it asks you to think about why you want to join and what you will put in. Take your time, answer honestly, and we will be in touch by email."}
                    </p>
                    <div className="contact-email-wrap">
                      <WfLink href="/contect-us" className="contact-link w-inline-block">
                        <div>
                          Have a question first? Contact us
                        </div>
                      </WfLink>
                    </div>
                  </div>
                </div>
                <div className="contact-image-wrapper">
                  <img className="contact-image" src="/690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image.jpg" alt="Young people working together at YouthLink" sizes="(max-width: 625px) 100vw, 625px" loading="lazy" srcSet="/690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image-p-500.jpg 500w, /690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image.jpg 625w" />
                </div>
              </div>
              <div className="contact-form-wrapper-block">
                <JoinForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
