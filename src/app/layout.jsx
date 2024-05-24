import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import "../assets/css/bootstrap.css"
import Header from "@/components/Header";
import Script from 'next/script'
import TanstackProvider from "@/providers/TanstackProvider";
import AuthProvider from "@/providers/AuthProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
import { blogs } from "@/utils/blogs";
import Hotjar from '@hotjar/browser';

const siteId = 3920275;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-roboto'
})

export default async function RootLayout({ children }) {

  const session = await getServerSession()
  console.log('SESSION del layout', session)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Salud Mental Estudiantil UDP</title>
        <link rel="stylesheet" id="bootstrap_css-css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" type="text/css" media="all" />
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" id="bootstrap_js-js" strategy="afterInteractive"></Script>
        <Script src="https://kit.fontawesome.com/7a6fedca6c.js" ></Script>
        <Script id="fontawesome" src="https://kit.fontawesome.com/a790242b27.js" ></Script>
        <Script id="hotjar" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:
            `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3921307,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`
        }}></Script>
      </head>
      <body className={`${roboto_init.variable}`}>
        <AuthProvider session={session}>
          <TanstackProvider>
            <Header />
            {/* {blogs.length > 0 && <ImageSlider slides={blogs.slice(0, 5)} />} */}

            {children}
          </TanstackProvider>
        </AuthProvider>
        <Script src="./bot.js" data-args="Salud mental, #FFFFFF, #AA3C80FF, ./bot_salud_mental.png" id="bot"></Script>
      </body>
    </html>
  );
}
