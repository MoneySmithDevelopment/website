import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar_Footer from "../container/Navbar_Footer";
import contact from "../assets/contact.png";

const About = () => {
  return (
    <Navbar_Footer>
      {/**About MoneySmith */}
      <div className="flex flex-col gap-[30px] justify-center  ">
        <div className="py-[40px] px-[80px]">
          <div className="font-lato">
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", color: "#FFFFFF" }}
            >
              Company Info
            </Typography>
          </div>

          <div className="flex justify-between ">
            <div>
              <div className="font-lato my-[10px]">
                <Typography
                  variant="h3"
                  sx={{ fontSize: "32px", color: "#FFFFFF" }}
                >
                  About MoneySmith
                </Typography>
              </div>

              <div className="flex flex-col gap-[10px] font-nunito">
                <Typography sx={{ fontSize: "18px", color: "#F9FAFB" }}>
                  MoneySmith is your all-in-one financial companion, built to{" "}
                  <br /> make managing money effortless and secure.
                </Typography>

                <Typography sx={{ fontSize: "18px", color: "#F9FAFB" }}>
                  Whether you're using it for personal expenses or business{" "}
                  <br />
                  payments, MoneySmith helps you stay on top of your <br />{" "}
                  finances in just a few taps.
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] w-[556px]">
              <Typography sx={{ fontSize: "18px", color: "#F9FAFB" }}>
                With features like biometric authentication and seamless <br />{" "}
                card aggregation, your transactions are quick and safe. <br />{" "}
                Plus, with real-time tracking and instant updates, you'll <br />{" "}
                always know where your money's going.
              </Typography>
              <Typography sx={{ fontSize: "18px", color: "#F9FAFB" }}>
                Say goodbye to confusion and hello to smart, secure <br />{" "}
                financial control with MoneySmith.
              </Typography>
            </div>
          </div>
        </div>

        {/**Banner section */}

        <div className="bg-[#1627481A]  ">
          <div className="flex flex-col my-[75px] mx-[80px] text-center gap-[10px] text-[#D0D5DD]">
            <div className="flex justify-center">
              <Typography fontSize="64px" fontWeight={600}>
                Say bye to payment <br /> stress, enjoy effortless <br />{" "}
                transactions!
              </Typography>
            </div>

            <div className="flex  justify-center gap-[23px] mt-[40px]">
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
                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>
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
                <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>
                  View Demo
                </Typography>
              </Button>
            </div>
          </div>
        </div>

        {/**Contact section */}
        <div
          className="flex justify-between py-[40px] px-[80px]  "
          id="contact_us"
        >
          <div className="flex flex-col gap-[10px]">
            <Typography
              variant="h3"
              sx={{ fontSize: "32px", color: "#FFFFFF" }}
            >
              Got a quick question or <br /> need assistance?
            </Typography>

            <Typography sx={{ fontSize: "18px", color: "#F9FAFB" }}>
              Whether you’re unsure about something or just <br /> need a fast
              response, we’ve got you covered! <br /> If you’re a business owner
              looking for support, <br /> our team is always here to assist.
              Just reach out and <br /> we’ll be right back at you!
            </Typography>
          </div>

          <div>
            <img src={contact} alt="Contact info" />
          </div>
        </div>
      </div>
    </Navbar_Footer>
  );
};

export default About;
