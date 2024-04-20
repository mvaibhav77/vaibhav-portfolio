import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ContactMe } from "./components/ContactMe";
import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import MouseHighlighter from "./components/MouseHighlighter";

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
      <body className={roboto.className}>
        <Theme
          appearance="dark"
          accentColor="violet"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          {/* <MouseHighlighter /> */}

          <Navbar />
          <Box className="w-[90%] mx-auto">{children}</Box>
          <ContactMe />
        </Theme>
      </body>
    </html>
  );
}
