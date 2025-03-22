import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import logo from "../../logos/moneysmith_name_logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="md:px-[80px] px-[20px] flex justify-between text-[#EBEFF7] bg-[#121B2B] font-nunito">
        <div className="flex py-[24px]" onClick={() => navigate("/")}>
          <img
            alt="MoneySmith logo"
            src={logo}
            className="w-[152px] h-[24px] cursor-pointer"
          />
        </div>

        <div className="py-[24px] hidden md:block">
          <ul
            className="flex gap-[40px] text-[18px]"
            style={{
              fontFamily: '"Nunito sans", "Roboto", "Arial", sans-serif',
            }}
          >
            <li
              onClick={() => navigate("/#customer_app")}
              className="cursor-pointer"
            >
              Customer Mobile
            </li>
            <li
              onClick={() => navigate("/#vendor_app")}
              className="cursor-pointer font-nunito"
            >
              Vendor Mobile
            </li>
            {/* <li onClick={() => navigate("/blog")}>Blog</li> */}
            <li
              onClick={() => navigate("/about")}
              className="cursor-pointer font-nunito"
            >
              About Us
            </li>
          </ul>
        </div>

        <div className="py-[12px] hidden md:block">
          <Button
            onClick={() => navigate("/about#contact_us")}
            className="bg-gradient-to-r from-[#345DAB] to-[#212FAB]"
            sx={{
              paddingX: "24px",
              paddingY: "16px",
              borderRadius: "12px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Contact Us
            </Typography>
          </Button>
        </div>

        <div className="md:hidden py-[25px]" onClick={handleToggle}>
          {open ? (
            <AiOutlineClose size="20px" />
          ) : (
            <AiOutlineMenu size="20px" />
          )}
        </div>
      </div>

      {open && (
        <div className="flex py-[20px] text-center bg-[#121B2B] text-[#EBEFF7] flex-col">
          <div className="flex justify-center">
            <ul
              className="flex flex-col justify-end  text-[18px]"
              style={{
                fontFamily: '"Nunito sans", "Roboto", "Arial", sans-serif',
              }}
            >
              <li
                onClick={() => navigate("/#customer_app")}
                className="cursor-pointer font-nunito py-[10px]"
              >
                Customer Mobile
              </li>
              <li
                onClick={() => navigate("/#vendor_app")}
                className="cursor-pointer font-nunito py-[10px]"
              >
                Vendor Mobile
              </li>
              {/* <li onClick={() => navigate("/blog")}>Blog</li> */}
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer font-nunito py-[10px]"
              >
                About Us
              </li>
            </ul>
          </div>

          <div className="py-[12px] flex justify-center">
            <Button
              onClick={() => navigate("/about#contact_us")}
              className="bg-gradient-to-r from-[#345DAB] to-[#212FAB]"
              sx={{
                paddingX: "24px",
                paddingY: "16px",
                borderRadius: "12px",
                textTransform: "capitalize",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Contact Us
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
