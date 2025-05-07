import { Alert, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Navbar_Footer from "../container/Navbar_Footer";

const Delete = () => {
  const steps = [
    {
      title: "Log In",
      detail: "Open the MoneySmith app and enter your passcode.",
    },
    {
      title: "Navigate to your profile",
      detail: "Tap the profile icon at the bottom right of your screen.",
    },
    {
      title: "Tap ‘Account’ under Preferences",
      detail: "On the new page, under the Preferences section, tap Account.",
    },
    {
      title: "Select ‘Close MoneySmith Account’",
      detail:
        "Scroll down and tap Close MoneySmith Account at the bottom of the profile menu.",
    },
    {
      title: "Confirm Deletion",
      detail:
        "Once you’ve read everything carefully, tap “Confirm Deletion” to continue.",
    },
    {
      title: "You’ll See This Message:",
      detail: `• Success: Your account has been deleted. Thank you for being a part of MoneySmith. If you ever decide to come back, we’ll be here.`,
    },
  ];

  return (
    <Navbar_Footer>
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <Typography
          variant="h5"
          className="font-bold text-center text-[#EBEFF7]"
          sx={{
            fontFamily: '"Nunito sans", "Roboto", "Arial", sans-serif',
          }}
        >
          Closing Your MoneySmith Account?
        </Typography>
        <Typography
          className="text-center text-gray-400 py-[.5rem]"
          sx={{
            fontFamily: '"Nunito sans", "Roboto", "Arial", sans-serif',
          }}
        >
          We’ll miss you, but if you’re sure, here’s a quick guide to help you
          through it.
        </Typography>

        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-md"
            sx={{ backgroundColor: "#0E192F" }}
          >
            <CardContent>
              <Typography variant="h6" className="font-semibold text-white">
                Step {index + 1}: {step.title}
              </Typography>
              <Typography className="text-gray-400 mt-1 whitespace-pre-line">
                {step.detail}
              </Typography>
            </CardContent>
          </Card>
        ))}

        <Alert severity="warning">
          <Typography className="font-bold">
            What Happens When You Delete Your Account?
          </Typography>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>
              All account data — deletion is permanent, and your account can’t
              be recovered.
            </li>
            <li>
              Your transaction history — past activity will no longer be
              accessible.
            </li>
            <li>
              Your Digital MoneySmith card — you won’t be able to make payments
              through the app anymore.
            </li>
          </ul>
        </Alert>
      </div>
    </Navbar_Footer>
  );
};

export default Delete;
