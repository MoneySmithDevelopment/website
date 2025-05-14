import { Button, Dialog, DialogContent, Typography, Box } from "@mui/material";
import React, { useState } from "react";

interface Props {
  width: string;
}

const Demo: React.FC<Props> = ({ width }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          paddingX: "24px",
          paddingY: "16px",
          borderRadius: "12px",
          textTransform: "capitalize",
          backgroundColor: "#FAFAFA0D",
          width: width,
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "16px",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          View Demo
        </Typography>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            margin: "auto",
            width: "90vw",
            maxWidth: "900px",
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9 aspect ratio
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/iTJVcQ1_hT8?autoplay=1&loop=1&playlist=iTJVcQ1_hT8"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Demo;
