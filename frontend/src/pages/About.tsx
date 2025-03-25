import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar_Footer from "../container/Navbar_Footer";
import contact from "../assets/contact.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Navbar_Footer>
      {/**About MoneySmith */}
      <div className="flex flex-col gap-[30px] justify-center  ">
        <div className="py-[40px] md:px-[80px] px-[20px]">
          <div className="font-lato">
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                color: "#FFFFFF",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Company Info
            </Typography>
          </div>

          <div className="flex flex-col justify-between ">
            <div>
              <div className="font-lato my-[10px] mb-[30px]">
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "32px",
                    color: "#FFFFFF",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  About MoneySmith
                </Typography>
              </div>

              <div className="flex flex-col md:gap-[10px] gap-[30px] font-nunito">
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#D0D5DD",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  MoneySmith is your all-in-one financial companion, built to{" "}
                  <br className="hidden md:block" /> make managing money
                  effortless and secure.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#D0D5DD",
                    fontFamily: "'Nunito Sans', sans-serif",
                    paddingBottom: "20px",
                  }}
                >
                  Whether you're using it for personal expenses or business{" "}
                  <br className="hidden md:block" />
                  payments, MoneySmith helps you stay on top of your{" "}
                  <br className="hidden md:block" /> finances in just a few
                  taps.
                </Typography>
              </div>
            </div>

            <div className="flex flex-col md:gap-[10px] gap-[30px] md:w-[556px]">
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#D0D5DD",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                With features like biometric authentication and seamless{" "}
                <br className="hidden md:block" /> card aggregation, your
                transactions are quick and safe.{" "}
                <br className="hidden md:block" /> Plus, with real-time tracking
                and instant updates, you'll <br className="hidden md:block" />{" "}
                always know where your money's going.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#D0D5DD",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Say goodbye to confusion and hello to smart, secure{" "}
                <br className="hidden md:block" /> financial control with
                MoneySmith.
              </Typography>
            </div>
          </div>
        </div>

        {/**Banner section */}

        <motion.div
          className="bg-[#1627481A]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:py-[40px] py-[25px] md:mx-[80px] mx-[20px] text-center gap-[10px] text-[#D0D5DD]">
            {/* Text Animation */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                fontWeight={600}
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: { xs: "40px", md: "64px" },
                }}
              >
                Say bye to payment <br className="hidden md:block" /> stress,
                enjoy effortless <br className="hidden md:block" />{" "}
                transactions!
              </Typography>
            </motion.div>

            {/* Buttons Animation */}
            <motion.div
              className="flex justify-center gap-[23px] mt-[40px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
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

              <Button
                sx={{
                  paddingX: "24px",
                  paddingY: "16px",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  backgroundColor: "#FAFAFA0D",
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
                  View Demo
                </Typography>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/**Contact section */}
        <motion.div
          className="flex md:flex-row flex-col justify-between md:py-[40px] py-[25px] md:px-[80px] px-[20px]"
          id="contact_us"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Text Section */}
          <motion.div
            className="flex flex-col md:gap-[10px] gap-[20px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                color: "#FFFFFF",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Got a quick question or <br className="hidden md:block" /> need
              assistance?
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#D0D5DD",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Whether you’re unsure about something or just{" "}
              <br className="hidden md:block" /> need a fast response, we’ve got
              you covered! <br className="hidden md:block" /> If you’re a
              business owner looking for support,{" "}
              <br className="hidden md:block" /> our team is always here to
              assist. Just reach out and <br className="hidden md:block" />{" "}
              we’ll be right back at you!
            </Typography>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:mt-[0rem] mt-[2rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={contact} alt="Contact info" />
          </motion.div>
        </motion.div>
      </div>
    </Navbar_Footer>
  );
};

export default About;
