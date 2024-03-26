import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/bootstrap.css"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Script from 'next/script'
import TanstackProvider from "@/providers/TanstackProvider";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

import Hotjar from '@hotjar/browser';

const siteId = 3920275;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

import Head from "next/head";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default async function RootLayout({ children }) {

  const session = await getServerSession()
  console.log('SESSION del layout', session)
  
  return (
    <html lang="en">
      <head>
        <title>Salud Mental Estudiantil UDP</title>
        <Script src="https://kit.fontawesome.com/a790242b27.js"></Script>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:
              `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3920275,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`
        }}></Script>
      </head>
      <body className={inter.className}>
        <AuthProvider session={session}>
          <TanstackProvider>
            <Header />
            {children}
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
