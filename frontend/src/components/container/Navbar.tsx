import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import logo from "../../logos/moneysmith_name_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[80px] flex justify-between text-[#EBEFF7] bg-[#121B2B] font-nunito">
      <div className="flex py-[24px]" onClick={() => navigate("/")}>
        <img alt="MoneySmith logo" src={logo} className="w-[152px] h-[24px]" />
      </div>

      <div className="py-[24px]">
        <ul className="flex gap-[40px] text-[18px]">
          <li onClick={() => navigate("/home#customer_app")}>
            Customer Mobile
          </li>
          <li onClick={() => navigate("/home#vendor_app")}>Vendor Mobile</li>
          {/* <li onClick={() => navigate("/blog")}>Blog</li> */}
          <li onClick={() => navigate("/about")}>About Us</li>
        </ul>
      </div>

      <div className="py-[12px]">
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
          <Typography sx={{ color: "#FFFFFF", fontSize: "16px" }}>
            Contact Us
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
