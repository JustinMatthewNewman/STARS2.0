import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STARS - Statistics Team Athletic Rendering Software 2.0",
  openGraph: {
    title: "STARS - Statistics Team Athletic Rendering Software",
    description:
      "Auto generate ESPN inspired sports broadcast graphics for your university.",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STARS - Statistics Team Athletic Rendering Software",
    description:
      "STARS - Statistics Team Athletic Rendering Software",
    images: [""],
    creator: "@newmanjustin",
  },
  metadataBase: new URL("https://newmanjustin.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
