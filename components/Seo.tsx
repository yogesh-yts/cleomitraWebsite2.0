import React from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  siteName?: string;
  children?: React.ReactNode; // Optional children property
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  url,
  siteName,
  children,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Cleomitra" />
      <meta name="robots" content="index, follow" />
      <link rel="apple-touch-icon" href="/180x180Logo.png" />
      <link
        rel="icon"
        href="/192x192.png"
        sizes="192x192"
        type="image/png"
      ></link>
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.cleomitra.com/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      {siteName && <meta property="og:site_name" content={siteName} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta
        name="twitter:image"
        content="https://www.cleomitra.com/cleomitra11.png"
      />

      {children}
    </>
  );
};

export default Seo;
