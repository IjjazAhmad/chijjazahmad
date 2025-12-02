import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Ijjaz Ahmad - Software Developer | MERN Stack Expert | Available for Hire",
  description = "Professional Software Developer specializing in MERN Stack, React.js, Next.js, Node.js, and mobile app development. 3+ years experience building scalable web applications. Available for freelance projects.",
  keywords = "Software Developer, MERN Stack, React Developer, Next.js, Node.js, Mobile App Development, Web Development, JavaScript, TypeScript, Pakistan Developer, Freelancer, Faisalabad",
  canonical = "",
  ogImage = "/og-image.jpg",
  ogType = "website",
  schemaData = null,
}) => {
  const siteUrl = "https://chijjazahmad.vercel.app";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Ijjaz Ahmad Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Ijjaz Ahmad" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
