import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STARS - Statistics Team Athletic Rendering Software",
  openGraph: {
    title: "STARS - Statistics Team Athletic Rendering Software",
    description:
      "Auto generate ESPN inspired sports broadcast graphics for your university.",
    images: [
      {
        url: "https://google.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STARS - Statistics Team Athletic Rendering Software",
    description:
      "STARS - Statistics Team Athletic Rendering Software",
    images: ["https://google.com"],
    creator: "@newmanjustin",
  },
  metadataBase: new URL("https://google.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
