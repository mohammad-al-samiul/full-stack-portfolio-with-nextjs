import React, { ReactNode } from "react";

import Footer from "@/src/components/UI/footer/Footer";
import { Navbar } from "@/src/components/UI/navbar/Navbar";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
