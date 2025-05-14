import { Tooltip, Typography } from "@mui/material";
import React from "react";
import moneysmith_logo from "../../logos/moneysmith_name_logo.png";
import instagram_logo from "../../logos/instagram.png";
import twitter_logo from "../../logos/twitter.png";
import linkedin_logo from "../../logos/linkedin.png";
import google_play from "../../assets/googleplay.png";
import app_store from "../../assets/appstore.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#121B2B] text-white flex flex-col md:flex-row justify-between px-[30px] md:px-[80px] py-[20px] md:py-[40px]">
      <div className="flex flex-col gap-[40px] font-nunito">
        <img
          src={moneysmith_logo}
          alt="MoneySmith logo"
          className="w-[227px] h-[40px]"
        />

        <div className=" md:hidden">
          <Typography
            sx={{
              fontSize: "18px",
              color: "#98A2B3",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            A budget isn’t a punishment, it’s a game plan. Use MoneySmith’s
            budgeting tools to set spending limits and get alerts before you go
            overboard.
          </Typography>
        </div>

        <div className="hidden md:block">
          <Typography
            sx={{
              fontSize: "18px",
              color: "#98A2B3",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Effortless payments start here. <br /> One secure wallet for
            all your cards.
          </Typography>
        </div>

        <Typography sx={{ fontSize: "17px", color: "#D0D3D9" }}>
          2025 © All rights reserved, Moneysmith
        </Typography>
      </div>

      <div className="md:pt-[3%] pt-[10%] flex flex-col gap-[24px] font-nunito">
        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Company
        </Typography>

        <ul className="text-[#D0D3D9] flex flex-col cursor-pointer font-nunito gap-[12px]">
          <li onClick={() => navigate("/about")}>About Us</li>
          <li>
            <a href="mailto:support@moneysmithng.com" target="_blank">
              Support
            </a>
          </li>
          <li onClick={() => navigate("/#faqs")}>FAQs</li>
          {/* <li>Blog</li> */}
          <li onClick={() => navigate("/about#contact_us")}>Contact Us</li>
        </ul>
      </div>

      <div className="md:pt-[3%] pt-[10%] flex flex-col gap-[24px] font-nunito">
        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Legal
        </Typography>

        <ul className="text-[#D0D3D9] flex flex-col gap-[12px] font-nunito">
          <li>Partner with us</li>
          <li>Privacy Policy</li>
          <li>T&Cs</li>
        </ul>
      </div>

      <div className="md:pt-[3%] pt-[10%] flex flex-col  md:gap-[40px] gap-[20px] font-nunito">
        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Connect with us
        </Typography>

        <div className="flex gap-[10px]">
          <div className="bg-[#FFFFFF0D] rounded-full p-[10px]">
            <Tooltip title="LinkedIn" placement="top">
              <a
                href="https://www.linkedin.com/company/moneysmithng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin_logo} alt="Linkedin logo" />
              </a>
            </Tooltip>
          </div>

          <div className="bg-[#FFFFFF0D] rounded-full p-[10px]">
            <Tooltip title="Instagram" placement="top">
              <a
                href=" https://www.instagram.com/moneysmith_hq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram_logo} alt="Instagram logo" />
              </a>
            </Tooltip>
          </div>

          <div className="bg-[#FFFFFF0D] rounded-full p-[10px]">
            <Tooltip title="Twitter" placement="top">
              <a
                href="https://x.com/moneysmith_hq "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter_logo} alt="Twitter logo" />
              </a>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[12px]">
          <img src={google_play} alt="Google play" className="w-[10rem]" />

          <img src={app_store} alt="Apple store" className="w-[10rem]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
