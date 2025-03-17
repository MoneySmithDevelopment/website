import { Button, Chip, Typography } from "@mui/material";
import React from "react";
import vendor_app from "../../assets/phone.png";
import lightning from "../../assets/lightning.png";
import security from "../../assets/security.png";
import accessible from "../../assets/accessible.png";
import cards from "../../assets/cards.png";
import scan_to_pay from "../../assets/scan_to_pay.png";
import tap_to_pay from "../../assets/tap_to_pay.png";
//import lightning from "../../icons/lightening.png";

const Customer_app = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] pt-[32px] pb-[40px]">
        <div className="flex justify-center px-[24px] py-[12px] font-lato">
          <Chip
            label="Customer App"
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
          <Typography variant="h1" sx={{ fontSize: "40px" }}>
            Take full control of <br /> your payments
          </Typography>
        </div>

        <div className="font-nunito flex justify-center text-center text-[#D0D5DD]">
          <Typography sx={{ fontSize: "18px" }} variant="body2">
            Join thousands enjoying stress-free transactions with Moneysmith
          </Typography>
        </div>
      </div>

      <div className="flex gap-[40px] justify-center pb-[40px]">
        <div className="bg-[#162748] relative flex justify-center rounded-[40px] w-[648px] h-[566px] ">
          <div className="pt-[73px]">
            <img src={vendor_app} alt="Vendor app illustration" />
          </div>

          <img
            src={tap_to_pay}
            alt="Tap to pay"
            className="absolute top-[8.3rem] left-10"
          />
          <img
            src={scan_to_pay}
            alt="Tap to pay"
            className="absolute top-[13rem] right-10"
          />

          <img
            src={cards}
            alt="Cards"
            className="absolute -bottom-[8rem] left-1/2 transform -translate-x-1/2 h-[293px] w-[479px]"
          />
        </div>

        <div className="bg-[#0E192F] py-[60px] px-[40px] rounded-[40px] w-[592px] h-[498px] mt-[2rem]">
          <div className="flex flex-col gap-[8px]">
            <img src={lightning} alt="Lightning fasr" />
            <img src={security} alt="Rock-solid security" />
            <img src={accessible} alt="Always accessible" />
          </div>

          <div className="flex  gap-[24px] mt-[40px]">
            <Button
              className="bg-gradient-to-r from-[#345DAB] to-[#212FAB]"
              sx={{
                paddingX: "24px",
                paddingY: "16px",
                borderRadius: "12px",
                textTransform: "capitalize",
                width: "137px",
                height: "54px",
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
              }}
            >
              <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                View Demo
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_app;
