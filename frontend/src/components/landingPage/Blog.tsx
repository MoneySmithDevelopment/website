import { Typography } from "@mui/material";
import React from "react";
import blog_image from "../../assets/blog_image.png";

const Blog = () => {
  return (
    <div className="py-[75px] px-[80px] flex gap-[40px]  justify-center">
      <div className="flex gap-[25px] flex-col">
        <img src={blog_image} alt="blog banner" />

        <div className="flex justify-between pt-[40px]">
          <div className="bg-[#345DAB33] text-center rounded-[8px] py-[8px] px-[16px]">
            <Typography
              sx={{
                color: "#345DAB",
                fontSize: "20px",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              General
            </Typography>
          </div>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", color: "white", paddingTop: "7px" }}
          >
            13 March, 2025
          </Typography>
        </div>

        <div>
          <Typography
            sx={{
              color: "white",
              fontSize: "36px",
              lineHeight: "100%",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            From Piggy Banks to Phone Taps: How <br /> MoneySmith Is Changing
            the Payment <br /> Game
          </Typography>
        </div>

        <div>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#D0D5DD",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            If someone had told your grandfather he’d one day pay for things
            from the <br /> comfort of his home, he would’ve laughed it off.
          </Typography>
        </div>
      </div>

      <div className="flex gap-[25px] flex-col">
        <img src={blog_image} alt="blog banner" />

        <div className="flex justify-between pt-[40px]">
          <div className="bg-[#345DAB33] text-center rounded-[8px] py-[8px] px-[16px]">
            <Typography
              sx={{
                color: "#345DAB",
                fontSize: "20px",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              General
            </Typography>
          </div>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", color: "white", paddingTop: "7px" }}
          >
            13 March, 2025
          </Typography>
        </div>

        <div>
          <Typography
            sx={{
              color: "white",
              fontSize: "36px",
              lineHeight: "100%",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            From Piggy Banks to Phone Taps: How <br /> MoneySmith Is Changing
            the Payment <br /> Game
          </Typography>
        </div>

        <div>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#D0D5DD",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            If someone had told your grandfather he’d one day pay for things
            from the <br /> comfort of his home, he would’ve laughed it off.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Blog;
