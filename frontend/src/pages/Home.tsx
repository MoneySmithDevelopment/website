import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar_Footer from "../container/Navbar_Footer";
import hero_illustration from "../assets/hero_illustration.png";
import Customer_app from "../components/landingPage/Customer_app";
import nfc_logo from "../logos/nfc_logo.png";
import Vendor_app from "../components/landingPage/Vendor_app";
import Blog from "../components/landingPage/Blog";
import FAQs from "../components/landingPage/FAQs";
import { motion } from "framer-motion";
import Demo from "../modals/Demo";

const Home = () => {
  return (
    <Navbar_Footer>
      {/* Hero Section */}
      <motion.div
        className="text-white flex flex-col md:pt-[100px] pt-[50px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col md:gap-[8px]">
          {/* Title */}
          <motion.div
            className="flex text-center justify-center font-lato"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "20px", md: "28px" },
                fontFamily: "'Lato', sans-serif",
              }}
            >
              MONEYSMITH
            </Typography>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="flex text-center justify-center font-lato"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "64px" },
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
              }}
            >
              Fast. Stress-Free.{" "}
              <span className="text-orange-600">Secure.</span>
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-[20px] mt-[40px] px-[15px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Button
              className="bg-gradient-to-r from-[#345DAB] to-[#212FAB]"
              sx={{
                paddingX: "24px",
                paddingY: "16px",
                borderRadius: "12px",
                textTransform: "capitalize",
                width: "180px",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Get the App
              </Typography>
            </Button>

            <Demo />
          </motion.div>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          className="flex justify-center mt-[25px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={hero_illustration} alt="Tap to pay. NFC Enabled" />
        </motion.div>
      </motion.div>

      {/* Customer App Section */}
      <motion.div
        id="customer_app"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Customer_app />
      </motion.div>

      {/* Banner Section */}
      <motion.div
        className="bg-[#5D7DBC] py-[75px] pl-[60px] pr-[80px] flex justify-center text-center font-lato"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative items-center">
          <div className="pl-[1rem]">
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: {
                  xs: "32px",
                  sm: "40px",
                  md: "48px",
                  lg: "56px",
                  xl: "64px",
                },
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Buying or Selling? MoneySmith <br className="hidden md:block" />{" "}
              makes it simple.
            </Typography>
          </div>

          {/* NFC Logo */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={nfc_logo}
              alt="NFC logo"
              className="absolute md:-bottom-[4.7rem] md:-right-[39.7%] -bottom-[4.65rem] -right-[5rem]  h-[15rem]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Vendor App Section */}
      <motion.div
        id="vendor_app"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Vendor_app />
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Blog />
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <FAQs />
      </motion.div>
    </Navbar_Footer>
  );
};

export default Home;
