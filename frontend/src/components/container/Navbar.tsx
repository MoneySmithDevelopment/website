import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import logo from "../../logos/moneysmith_name_logo.png";

const Navbar = () => {
  return (
    <div className="px-[80px] flex justify-between text-[#EBEFF7] bg-[#121B2B] font-nunito">
      <div className="flex py-[24px]">
        <img alt="MoneySmith logo" src={logo} className="w-[152px] h-[24px]" />
      </div>

      <div className="py-[24px]">
        <ul className="flex gap-[40px] text-[18px]">
          <li>Customer Mobile</li>
          <li>Vendor Mobile</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="py-[12px]">
        <Button
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
