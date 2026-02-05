import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Ijjaz Ahmad - MERN Stack Developer Faisalabad | Hire Expert Now",
  description = "Hire Ijjaz Ahmad, experienced MERN developer in Faisalabad, Pakistan for React, Next.js, React Native apps. 50+ projects, 3+ years experience, scalable solutions.",
  keywords = "hire MERN developer Faisalabad, React Native developer Pakistan, full stack web developer Punjab, MERN Stack developer Pakistan, React.js expert Faisalabad, hire full stack developer Pakistan, Next.js developer Punjab, mobile app developer Faisalabad, Node.js developer Pakistan, freelance web developer Faisalabad",
  canonical = "",
  ogImage = "/og-image.jpg",
  ogType = "website",
  schemaData = null,
  articleData = null,
  breadcrumbData = null,
  faqData = null,
}) => {
  const siteUrl = "https://chijjazahmad.vercel.app";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default Person Schema for rich snippets
  const defaultPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ijjaz Ahmad",
    givenName: "Ijjaz",
    familyName: "Ahmad",
    jobTitle: "MERN Stack Developer",
    description:
      "Professional Full Stack Developer specializing in MERN Stack, React.js, Next.js, and React Native mobile development with 3+ years of experience.",
    url: siteUrl,
    image: `${siteUrl}/images/myPic.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/ijjazahmad",
      "https://github.com/IjjazAhmad",
      "https://www.facebook.com/ijjazdev",
      "https://www.instagram.com/ch_ijjazahmad",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
      postalCode: "38000",
    },
    email: "ijjazahmad@hotmail.com",
    telephone: "+923267876344",
    alumniOf: {
      "@type": "Organization",
      name: "University of Agriculture Faisalabad",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Mobile App Development",
      "MERN Stack",
      "REST API Development",
      "Full Stack Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Faisalabad, Punjab, Pakistan",
      },
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Git",
        "REST APIs",
      ],
    },
  };

  // WebSite Schema for site search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Ijjaz Ahmad - MERN Stack Developer Portfolio",
    url: siteUrl,
    description:
      "Professional portfolio of Ijjaz Ahmad, a MERN Stack developer from Faisalabad, Pakistan",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Local Business Schema for local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Ijjaz Ahmad - Freelance MERN Developer",
    image: `${siteUrl}/images/myPic.jpg`,
    url: siteUrl,
    telephone: "+923267876344",
    email: "ijjazahmad@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.4504,
      longitude: 73.135,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "MERN Stack Development",
      "React Native Development",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags - SEO Optimized */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Enhanced Robots Directive */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Ijjaz Ahmad - MERN Stack Developer from Faisalabad, Pakistan"
      />
      <meta property="og:site_name" content="Ijjaz Ahmad Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta
        name="twitter:image:alt"
        content="Ijjaz Ahmad - MERN Stack Developer from Faisalabad, Pakistan"
      />
      <meta name="twitter:creator" content="@ijjazahmad" />
      <meta name="twitter:site" content="@ijjazahmad" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Ijjaz Ahmad" />
      <meta name="creator" content="Ijjaz Ahmad" />
      <meta name="publisher" content="Ijjaz Ahmad" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Geographic Tags for Local SEO */}
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Faisalabad, Punjab, Pakistan" />
      <meta name="geo.position" content="31.4504;73.1350" />
      <meta name="ICBM" content="31.4504, 73.1350" />

      {/* Mobile & PWA Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Ijjaz Ahmad" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#00b4d8" />

      {/* Verification Tags - Add your IDs here */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

      {/* Schema.org JSON-LD - Multiple schemas */}
      <script type="application/ld+json">
        {JSON.stringify(defaultPersonSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Custom Schema Data */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}

      {/* Article Schema for Blog Posts */}
      {articleData && (
        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}

      {/* FAQ Schema */}
      {faqData && (
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
