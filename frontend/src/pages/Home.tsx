import { Button, Typography } from "@mui/material";
import React from "react";
import Navbar_Footer from "../container/Navbar_Footer";
import hero_illustration from "../assets/hero_illustration.png";
import Customer_app from "../components/landingPage/Customer_app";

const Home = () => {
  return (
    <Navbar_Footer>
      {/*Hero seciton*/}
      <div className="text-white flex flex-col pt-[100px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-center font-lato">
            <Typography variant="h4" sx={{ fontSize: "28px" }}>
              MONEYSMITH
            </Typography>
          </div>

          <div className="flex justify-center font-lato">
            <Typography sx={{ fontSize: "64px" }}>
              Fast. Stress-Free. <span className="text-orange-600">Secure</span>
            </Typography>
          </div>

          <div className="flex justify-center text-center font-nunito">
            <Typography sx={{ fontSize: "18px" }}>
              Say goodbye to complaints and cash hassles—say hello to
              contactless <br /> payments. MoneySmith turns your what-ifs into
              reality!
            </Typography>
          </div>

          <div className="flex justify-center gap-[23px] mt-[40px]">
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

        <div className="flex justify-center mt-[25px]">
          <img
            src={hero_illustration}
            alt="Tap to pay. NFC Enabled"
            //className="h-[1280px] w-[585px]"
          />
        </div>
      </div>

      {/*Customer App seciton*/}
      <div id="customer_app">
        <Customer_app />
      </div>
    </Navbar_Footer>
  );
};

export default Home;
