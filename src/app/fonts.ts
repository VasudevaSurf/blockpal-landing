// src/app/fonts.ts
import localFont from "next/font/local";

// Nunito font for headings
export const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nunito-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

// Satoshi font for body text
export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
