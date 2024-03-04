import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ConvexClientProvider} from "@/providers/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SketchSync",
  description: "Create collaborative workflows for your design teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
<<<<<<< HEAD
          {children}
=======
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
>>>>>>> 8d01f6c (minor changes)
        </body>
      </html>
  );
}
