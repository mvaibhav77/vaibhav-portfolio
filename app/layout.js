import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import Footer from "./components/Footer";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import MouseHighlighter from "./components/MouseHighlighter";
import { HoverProvider } from "./context/MouseContext";

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
      </head>
      <body className={`${roboto.className} overflow-x-hidden`}>
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
            <Box className="!w-[90%] !mx-auto">{children}</Box>
            <Footer />
          </HoverProvider>
        </Theme>
      </body>
    </html>
  );
}
