import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">{children}</div>
  );
}
