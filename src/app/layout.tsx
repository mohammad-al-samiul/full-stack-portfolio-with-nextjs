import "@/src/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { siteConfig } from "../config/site";

import { Providers } from "../lib/Providers";

export const metadata: Metadata = {
  title: {
    default: "my-portfolio",
    template: ``,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body suppressHydrationWarning className={clsx("antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
