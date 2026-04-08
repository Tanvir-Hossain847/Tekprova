import { Geist, Geist_Mono, Space_Grotesk, Oxanium } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const oxaniumHeading = Oxanium({subsets:['latin'],variable:'--font-heading'});

const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", spaceGrotesk.variable, oxaniumHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
