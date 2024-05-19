import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/_shared/Navbar";
import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import Footer from "./components/_shared/Footer";
import MouseHighlighter from "./components/_shared/MouseHighlighter";
import { HoverProvider } from "./context/MouseContext";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Vaibhav Shukla | Portfolio",
  description: "This is my portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="favicon"
          sizes="<generated>"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${roboto.className} overflow-x-hidden `}>
        <Analytics />
        <Theme
          appearance="dark"
          accentColor="violet"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <HoverProvider>
            <MouseHighlighter />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </HoverProvider>
        </Theme>
      </body>
    </html>
  );
}
