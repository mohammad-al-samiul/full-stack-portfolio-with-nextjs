import React, { ReactNode } from "react";

import { Navbar } from "@/src/components/UI/navbar/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
