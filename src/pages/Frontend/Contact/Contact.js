import EnhancedContactForm from "../../../components/Form/EnhancedContactForm";
import SEOHead from "../../../components/SEO/SEOHead";
import SocialShare from "../../../components/SocialShare/SocialShare";

const Contact = () => {
  // Contact Page Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ijjaz Ahmad",
    description:
      "Get in touch with Ijjaz Ahmad for web development projects, mobile app development, or technical consulting.",
    url: "https://chijjazahmad.vercel.app/contact",
    mainEntity: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      email: "ijjazahmad@hotmail.com",
      telephone: "+923267876344",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faisalabad",
        addressRegion: "Punjab",
        addressCountry: "Pakistan",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+923267876344",
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
        areaServed: "Worldwide",
      },
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chijjazahmad.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://chijjazahmad.vercel.app/contact",
      },
    ],
  };

  return (
    <div className="contact__page">
      <SEOHead
        title="Contact Ijjaz Ahmad - Hire MERN Stack Developer | WhatsApp +92 326 7876344"
        description="Contact Ijjaz Ahmad for your web and mobile development projects. Available via WhatsApp +92 326 7876344 or email ijjazahmad@hotmail.com. Based in Faisalabad, Pakistan, serving clients worldwide."
        keywords="contact MERN developer, hire React developer Pakistan, WhatsApp developer Faisalabad, email web developer Punjab, freelance developer contact, hire full stack developer Pakistan"
        canonical="/contact"
        schemaData={contactSchema}
        breadcrumbData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <div className="contact__hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto py-5 text-center">
              <div className="hero__label" data-aos="fade-down">
                &lt; get_in_touch /&gt;
              </div>
              <h1
                className="hero__title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let's Work Together
              </h1>
              <p
                className="hero__subtitle"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Have a project in mind? I'm here to help bring your ideas to
                life. Reach out and let's discuss how we can create something
                amazing together.
              </p>
              <nav
                aria-label="Breadcrumb"
                className="hero__breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span>Home</span>
                <i className="fa-solid fa-chevron-right"></i>
                <span className="active">Contact</span>
              </nav>
              <div className="hero__decoration">
                <div className="decoration__line"></div>
                <div className="decoration__dot"></div>
                <div className="decoration__line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__bg__grid"></div>
      </div>

      {/* Enhanced Contact Form Section */}
      <EnhancedContactForm />

      {/* Contact CTA */}
      <section className="contact__cta py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2>Prefer Social Media?</h2>
              <p className="mb-4">
                Connect with me on your preferred platform. I'm active on
                LinkedIn, GitHub, and social media. Don't forget to share my
                portfolio with anyone who might need a developer!
              </p>
              <div className="social__links d-flex justify-content-center gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/in/ijjazahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/IjjazAhmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  aria-label="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.facebook.com/ijjazdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  aria-label="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/ch_ijjazahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  aria-label="Instagram Profile"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="share__section">
                <p className="mb-2">Share my portfolio:</p>
                <SocialShare
                  url="https://chijjazahmad.vercel.app/contact"
                  title="Hire Ijjaz Ahmad - MERN Stack Developer from Pakistan"
                  description="Need a skilled web developer? Contact Ijjaz Ahmad for React, Next.js, and mobile app development!"
                  size={36}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
