import React from "react";
import Footer from "../components/container/Footer";
import Navbar from "../components/container/Navbar";
import { ReactNode } from "react";

interface NavbarProp {
  children: ReactNode;
}

const Navbar_Footer: React.FC<NavbarProp> = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="bg-[#0C121D] ">{children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar_Footer;
