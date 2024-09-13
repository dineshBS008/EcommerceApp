import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/policyimg.png"
            alt="contactus"
            style={{ width: "100%", height: "505px" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mb-4">
            <p style={{ fontWeight: "bold" }}>Privacy Policy:</p>
            We collect and protect your personal data for order processing and
            site improvement.
          </p>
          <p className="mt-3">
            <p style={{ fontWeight: "bold" }}>Return & Refund Policy:</p> You
            can return products within 30 days of purchase if they meet our
            return conditions. Refunds will be processed within 7-10 business
            days.
          </p>
          <p className="mt-3">
            <p style={{ fontWeight: "bold" }}>Shipping Policy: </p> We offer
            worldwide shipping with varying costs and delivery times.
          </p>
          <p className="mt-3">
            <p style={{ fontWeight: "bold" }}>Terms of Service: </p>By using our
            site, you agree to our terms and conditions.
          </p>
          <p className="mt-3">
            <p style={{ fontWeight: "bold" }}>Payment Policy:</p> All
            transactions are encrypted. We accept major payment methods.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
