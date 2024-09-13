import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/aboutUs.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-5">
            Welcome to KathmanduGift Hub, your go-to platform for unique and
            thoughtful gifts. We are dedicated to providing you with the finest
            selection of gifts for every occasion, focusing on quality,
            creativity, and customer satisfaction. Founded in 2023,
            KathmanduGift Hub was born from a passion for helping people express
            love and appreciation through meaningful presents. Over the years,
            we have grown into a trusted name in the gifting industry, committed
            to making every moment special. Thank you for choosing us to be a
            part of your cherished moments. We look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
