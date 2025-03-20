import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const vendor_faqs = [
  {
    id: 1,
    question: "Do I need to be linked to a specific bank to use MoneySmith?",
    answer:
      "No, you don’t need to be linked to a specific bank. Our app supports multiple banks, allowing you to connect your preferred account seamlessly. Whether you use one bank or multiple, you can easily manage transactions without restrictions.",
  },
  {
    id: 2,
    question: "Is there a transaction limit on MoneySmith?",
    answer:
      "MoneySmith does not impose a strict transaction limit, but your bank may have certain limits. Check with your bank for specific details.",
  },
  {
    id: 3,
    question: "Can I use MoneySmith for business transactions?",
    answer:
      "Yes, MoneySmith supports both personal and business transactions. You can manage payments efficiently for your business needs.",
  },
];

const Customer = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ((prevId) => (prevId === id ? null : id)); // Toggle logic
  };

  return (
    <div className="p-[40px]">
      <div className="bg-[#0C1527] p-[40px] rounded-[40px] gap-[24px]">
        <Typography
          variant="h4"
          sx={{
            fontSize: "28px",
            color: "#FAFAFA",
            paddingX: "15px",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          For Customers
        </Typography>
        {vendor_faqs.map((faq) => (
          <>
            <div key={faq.id} className="flex">
              {/* Question Section */}
              <div
                className="flex justify-between cursor-pointer p-[16px] w-1/2"
                onClick={() => toggleFAQ(faq.id)}
              >
                <Typography
                  className="text-white"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {faq.question}
                </Typography>
              </div>

              {/* Answer Section (Only Show if Open) */}

              <div className="w-[689px]">
                {openFAQ === faq.id && (
                  <div className="bg-[#102A4D] font-nunito flex justify-between p-[16px] gap-[8px] rounded-[8px] mb-[8px] ">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#EBEFF7",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#EBEFF7",
                        cursor: "pointer",
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <FiMinus />
                    </Typography>
                  </div>
                )}

                {!openFAQ || openFAQ !== faq.id ? (
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <Typography sx={{ color: "#EBEFF7" }}>
                      <IoMdAdd />
                    </Typography>
                  </div>
                ) : null}
              </div>
            </div>

            <hr className="my-[10px] border-[#344054]" />
          </>
        ))}

        <div className="pt-[20px] flex flex-col gap-[24px] ml-[17px]">
          <div className="font-lato">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#FAFAFA",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
              variant="h6"
            >
              Don’t see your question?
            </Typography>
          </div>

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
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Contact Support
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
