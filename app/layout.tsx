import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/header/NavigationBar";
import Footer from "./components/footer/Footer";
import { ToastProvider } from "./utils/context/toast/toastContext";
import ToastWrapper from "./utils/context/toast/ToastWrapper";
import ScrollUpButton from "./components/general/ScrollUpButton";
// here i would fetch if the user is signed in if they are

export const metadata: Metadata = {
  title: "Carolina HS Portfolio Site",
  description:
    "Portfolio site for web developer, Carolina Henriquez Silva. Here you can find all her prior works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-dark-blue text-primary-white font-primary antialiased min-h-full`}
      >
        <ToastProvider>
          <ToastWrapper />
          <NavigationBar></NavigationBar>
          {children}
          <ScrollUpButton />
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
