import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rony Miah Portfolio",
  description:
    "Rony Miah - Junior Full Stack Developer with expertise in creating dynamic and responsive web applications. Skilled in modern web technologies including HTML, CSS, JavaScript, and frameworks like React, Next js and Node.js . Passionate about coding, problem-solving, and continuously learning new technologies to deliver high-quality software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
