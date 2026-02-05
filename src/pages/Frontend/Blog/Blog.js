import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "../../../components/SEO/SEOHead";
import {
  blogPosts,
  blogCategories,
  getPostsByCategory,
} from "../../../config/blog";
import { BlogShare } from "../../../components/SocialShare/SocialShare";
import Newsletter from "../../../components/Newsletter/Newsletter";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setFilteredPosts(getPostsByCategory(activeCategory));
  }, [activeCategory]);

  // Blog page SEO schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Ijjaz Ahmad's Development Blog",
    description:
      "Web development tutorials, React.js tips, MERN Stack guides, and mobile app development insights from a professional developer in Pakistan.",
    url: "https://chijjazahmad.vercel.app/blog",
    author: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      url: "https://chijjazahmad.vercel.app",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://chijjazahmad.vercel.app/blog/${post.slug}`,
    })),
  };

  // Breadcrumb schema
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
        name: "Blog",
        item: "https://chijjazahmad.vercel.app/blog",
      },
    ],
  };

  return (
    <div className="blog__page">
      <SEOHead
        title="MERN Stack Development Blog | React.js Tips & Tutorials | Ijjaz Ahmad"
        description="Explore web development tutorials, React.js tips, Next.js guides, and mobile app development insights. Learn from a professional MERN Stack developer with 50+ projects experience."
        keywords="web development blog, React.js tutorials, MERN Stack guide, Next.js tips, React Native development, JavaScript tutorials, Node.js guide, MongoDB tutorials, full stack development blog, Pakistan developer blog"
        canonical="/blog"
        ogType="blog"
        schemaData={blogSchema}
        breadcrumbData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <section className="blog__hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto py-5 text-center">
              <div className="hero__label" data-aos="fade-down">
                &lt; dev_insights /&gt;
              </div>
              <h1
                className="hero__title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Development Blog
              </h1>
              <p
                className="hero__subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Insights, tutorials, and tips on MERN Stack, React.js, and
                mobile development from my 3+ years of professional experience
              </p>
              <nav
                aria-label="Breadcrumb"
                className="hero__breadcrumb"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link to="/">Home</Link>
                <i className="fa-solid fa-chevron-right"></i>
                <span className="active">Blog</span>
              </nav>
            </div>
          </div>
        </div>
        <div className="hero__bg__grid"></div>
      </section>

      {/* Blog Content */}
      <section className="blog__content py-5">
        <div className="container py-5">
          {/* Categories Filter */}
          <div className="blog__categories mb-5" data-aos="fade-up">
            <div className="categories__wrapper">
              {blogCategories.map((category) => (
                <button
                  key={category.slug}
                  className={`category__btn ${
                    activeCategory === category.slug ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="row g-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <article className="blog__card">
                    <div className="blog__card__image">
                      <div className="image__placeholder">
                        <i className="fa-solid fa-code"></i>
                      </div>
                      {post.featured && (
                        <span className="featured__badge">Featured</span>
                      )}
                    </div>
                    <div className="blog__card__content">
                      <div className="blog__card__meta">
                        <span className="category">{post.category}</span>
                        <span className="read-time">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime} min read
                        </span>
                      </div>
                      <h2 className="blog__card__title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="blog__card__excerpt">{post.excerpt}</p>
                      <div className="blog__card__footer">
                        <div className="author">
                          <span className="author__name">{post.author}</span>
                          <span className="publish__date">
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="read__more">
                          Read More
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="card__corner top-right"></div>
                    <div className="card__corner bottom-left"></div>
                  </article>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p>No posts found in this category.</p>
              </div>
            )}
          </div>

          {/* Share Blog Section */}
          <div className="blog__share text-center mt-5" data-aos="fade-up">
            <h4>Share This Blog</h4>
            <p>Know someone who would benefit from these articles?</p>
            <BlogShare
              postTitle="Development Blog by Ijjaz Ahmad"
              postUrl="https://chijjazahmad.vercel.app/blog"
              postExcerpt="Check out web development tutorials and tips from a professional MERN Stack developer!"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Blog;
