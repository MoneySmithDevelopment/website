import { Chip, Typography } from "@mui/material";
import React from "react";
import Customer from "../faqs/Customer";
import Vendor from "../faqs/Vendor";

const FAQs = () => {
  return (
    <div className="md:p-[40px] ">
      <div className="flex flex-col gap-[16px] pt-[32px] pb-[40px]">
        <div className="flex justify-center px-[24px] py-[12px] font-lato">
          <Chip
            label="FAQs"
            variant="filled"
            sx={{
              fontSize: "24PX",
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
              fontSize: "40px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
            }}
          >
            Feeling independent?👀
          </Typography>
        </div>

        <div className="font-nunito flex justify-center text-center text-[#D0D5DD]">
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#D0D5DD",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
            variant="body2"
          >
            If you'd like to find answers on your own, feel free to explore our
            FAQ section for quick solutions!
          </Typography>
        </div>
      </div>

      <Customer />
      <Vendor />
    </div>
  );
};

export default FAQs;
