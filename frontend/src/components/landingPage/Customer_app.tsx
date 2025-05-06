import { Button, Chip, Typography } from "@mui/material";
import React from "react";
import customer_app from "../../assets/customer_app/phone.png";
import lightning from "../../assets/customer_app/lightning.png";
import security from "../../assets/customer_app/security.png";
import accessible from "../../assets/customer_app/accessible.png";
import cards from "../../assets/customer_app/cards.png";
import scan_to_pay from "../../assets/customer_app/scan_to_pay.png";
import tap_to_pay from "../../assets/customer_app/tap_to_pay.png";
import { motion } from "framer-motion";

const Customer_app = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] pt-[32px] pb-[40px]">
        <div className="flex justify-center px-[24px] py-[12px] font-lato">
          <Chip
            label="Customer App"
            variant="filled"
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              color: "#F56630",
              borderColor: "#F566301A",
              backgroundColor: "#F566301A",

              //fontWeight: 600,
              height: "53px",
              width: "200px",
              borderRadius: "40px",
            }}
          />
        </div>

        <div className="font-lato flex justify-center text-center text-[#FAFAFA]">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
            }}
          >
            Take full control of <br /> your payments
          </Typography>
        </div>

        <div className="font-nunito flex justify-center text-center text-[#D0D5DD]">
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "'Nunito Sans', sans-serif",
            }}
            variant="body2"
          >
            Join thousands enjoying stress-free transactions with Moneysmith
          </Typography>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[40px] justify-center pb-[40px]">
        <div className="flex justify-center">
          <div className="bg-[#162748] md:ml-[1rem] relative flex justify-center rounded-[40px] md:w-[648px] w-[350px] md:h-[566px] h-[312px] ">
            <div className="md:pt-[73px] pt-[40px] md:w-[438px] md:h-[493px] w-[241px] h-[272px]">
              <img src={customer_app} alt="Customer app illustration" />
            </div>

            <motion.img
              src={tap_to_pay}
              alt="Tap to pay"
              className="absolute top-[5rem] md:top-[9.5rem] md:left-10 right-60 w-[82px] h-[30px] md:w-[167px] md:h-[50px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <motion.img
              src={scan_to_pay}
              alt="Scan to pay"
              className="absolute top-[7rem] md:top-[13rem] left-[15rem] md:left-[28rem] w-[82px] h-[30px] md:w-[167px] md:h-[50px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />

            <img
              src={cards}
              alt="Cards"
              className="absolute md:-bottom-[8rem] -bottom-[3rem] left-1/2 transform -translate-x-1/2 md:h-[293px] h-[146px] w-[250px] md:w-[479px]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#0E192F] md:ml-[1rem] md:py-[60px] py-[30px] px-[40px] rounded-[40px] md:w-[592px] md:h-[498px] w-[350px]">
            <div className="flex flex-col gap-[8px]">
              <img src={lightning} alt="Lightning fasr" />
              <img src={security} alt="Rock-solid security" />
              <img src={accessible} alt="Always accessible" />
            </div>

            <div className="flex gap-[12px]  md:gap-[24px] md:mt-[40px] mt-[20px]">
              <Button
                className="bg-gradient-to-r from-[#345DAB] to-[#212FAB]"
                sx={{
                  paddingX: "24px",
                  paddingY: "16px",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  width: "137px",
                  height: "54px",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
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
                  width: "137px",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  View Demo
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_app;
