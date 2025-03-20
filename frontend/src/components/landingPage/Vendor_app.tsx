import { Chip, Typography, Button } from "@mui/material";
import React from "react";
import vendor_app from "../../assets/vendor_app/phone.png";
import speed from "../../assets/vendor_app/speed.png";
import simple from "../../assets/vendor_app/simple.png";
import scalable from "../../assets/vendor_app/scalable.png";
import refer_friend from "../../assets/vendor_app/refer_friend.png";
import hallway from "../../assets/vendor_app/hallway.png";

const Vendor_app = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] pt-[32px] pb-[40px]">
        <div className="flex justify-center px-[24px] py-[12px] font-lato">
          <Chip
            label="Vendor App"
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
            Get paid, stress free
          </Typography>
        </div>

        <div className="font-nunito flex justify-center text-center text-[#D0D5DD]">
          <Typography
            sx={{ fontSize: "18px", fontFamily: "'Nunito Sans', sans-serif" }}
            variant="body2"
          >
            We make payments seamless so you can focus on what matters.
          </Typography>
        </div>
      </div>

      <div className="flex gap-[40px] justify-center pb-[40px]">
        <div className="bg-[#0E192F] py-[60px] px-[40px] rounded-[40px] w-[592px] h-[498px] mt-[2rem]">
          <div className="flex flex-col gap-[8px]">
            <img src={speed} alt="Speed" />
            <img src={simple} alt="Simple" />
            <img src={scalable} alt="Scalable" />
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

        <div className="bg-[#162748] relative flex justify-center rounded-[40px] w-[648px] h-[566px] ">
          <div className="pt-[70px]">
            <img src={vendor_app} alt="Vendor app illustration" />
          </div>

          <img
            src={refer_friend}
            alt="Cards"
            className="absolute bottom-[7.5rem] left-1/2 transform -translate-x-1/2"
          />

          <img
            src={hallway}
            alt="Cards"
            className="absolute -bottom-[.5rem] left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default Vendor_app;
