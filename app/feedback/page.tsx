import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WfLink from "@/components/WfLink";
import WebflowPage from "@/components/WebflowPage";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback and Complaints - YouthLink",
  description: "Share feedback about YouthLink or raise a complaint or concern. Both are read by the YouthLink team and handled confidentially.",
  openGraph: {
    title: "Feedback and Complaints - YouthLink",
    description: "Share feedback about YouthLink or raise a complaint or concern. Both are read by the YouthLink team and handled confidentially.",
    images: ["https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback and Complaints - YouthLink",
    description: "Share feedback about YouthLink or raise a complaint or concern. Both are read by the YouthLink team and handled confidentially.",
    images: ["https://cdn.prod.website-files.com/690ed4943a93ad5efefde551/692c45e5af5da766d88df153_Seo%20imge.png"],
  },
};

export default function FeedbackPage() {
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
                      Feedback and Complaints
                    </h1>
                  </div>
                  <div className="contact-details-paragraph-wrap">
                    <p className="contact-details-paragraph">
                      {"We want to hear from you. Use this page to send feedback about the website, our public communication, activities, projects or your journey with the community, or to raise a complaint or concern about something that did not go as it should. Choose the option that fits, fill in the short form and the YouthLink team will review it. Complaints and concerns are handled confidentially and you will hear back by email."}
                    </p>
                    <div className="contact-email-wrap">
                      <WfLink href="/contect-us" className="contact-link w-inline-block">
                        <div>
                          Need something else? Contact us
                        </div>
                      </WfLink>
                    </div>
                  </div>
                </div>
                <div className="contact-image-wrapper">
                  <img className="contact-image" src="/690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image.jpg" alt="YouthLink community members talking together" sizes="(max-width: 625px) 100vw, 625px" loading="lazy" srcSet="/690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image-p-500.jpg 500w, /690ed4943a93ad5efefde551/69147c23a4660437fe37e1c9_f772846b5b06ca5e2e2e47e15b6620d7_Contact%20us%20image.jpg 625w" />
                </div>
              </div>
              <div className="contact-form-wrapper-block">
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
