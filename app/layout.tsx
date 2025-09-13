import { Lato } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#660033" />
        <style>
          @import
          url(&#39;https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap&#39;);
        </style>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1T0L2EN408"
          strategy="afterInteractive"
        /> */}
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1T0L2EN408');
            `,
          }}
        />
        <Script
          id="json-ld-video"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Cleomitra CRM Software Product Demo",
              description:
                "Cleomitra CRM Software product demonstration video showcasing its features and benefits for customer relationship management.",
              thumbnailUrl: "https://www.cleomitra.com/thumbnail.png",
              uploadDate: "2025-06-18T10:00:00+05:30",
              duration: "PT0M58S",
              contentUrl: "https://www.cleomitra.com/cleomitraVideo.mp4",
              publisher: {
                "@type": "Organization",
                name: "Cleomitra",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.cleomitra.com/cleomitra11.png",
                },
              },
            }),
          }}
        />
        <Script
          id="json-ld-software"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Cleomitra CRM Software",
              operatingSystem: "Web, Android, iOS",
              applicationCategory: "BusinessApplication",
              description:
                "Cleomitra CRM Software is a powerful all-in-one customer relationship management solution to manage leads, customers, sales, marketing, and business operations effortlessly.",
              url: "https://www.cleomitra.com",
              image: "https://www.cleomitra.com/cleomitra11.png",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "132",
              },
              author: {
                "@type": "Organization",
                name: "Yakria Tech",
                url: "https://www.yakriatech.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${lato.variable} antialiased`}>
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
