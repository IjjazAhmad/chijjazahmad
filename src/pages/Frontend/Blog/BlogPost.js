import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { marked } from "marked";
import SEOHead from "../../../components/SEO/SEOHead";
import { getPostBySlug, getRelatedPosts } from "../../../config/blog";
import { BlogShare } from "../../../components/SocialShare/SocialShare";
import Newsletter from "../../../components/Newsletter/Newsletter";

// Configure marked for clean HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // Parse markdown content to HTML (must be before conditional return)
  const parsedContent = useMemo(() => {
    if (!post) return "";
    return marked.parse(post.content);
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://chijjazahmad.vercel.app${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      url: "https://chijjazahmad.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      logo: {
        "@type": "ImageObject",
        url: "https://chijjazahmad.vercel.app/images/myPic.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://chijjazahmad.vercel.app/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://chijjazahmad.vercel.app/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="blog__post__page">
      <SEOHead
        title={`${post.title} | Ijjaz Ahmad's Dev Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        articleData={articleSchema}
        breadcrumbData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <section className="blog__post__hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto py-5">
              <nav
                aria-label="Breadcrumb"
                className="post__breadcrumb"
                data-aos="fade-down"
              >
                <Link to="/">Home</Link>
                <i className="fa-solid fa-chevron-right"></i>
                <Link to="/blog">Blog</Link>
                <i className="fa-solid fa-chevron-right"></i>
                <span className="active">{post.title}</span>
              </nav>

              <div className="post__meta" data-aos="fade-up">
                <span className="category">{post.category}</span>
                <span className="date">
                  <i className="fa-regular fa-calendar"></i>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="read-time">
                  <i className="fa-regular fa-clock"></i>
                  {post.readTime} min read
                </span>
              </div>

              <h1
                className="post__title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {post.title}
              </h1>

              <p
                className="post__excerpt"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {post.excerpt}
              </p>

              <div
                className="post__author__hero"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="author__avatar">
                  <img
                    src="/images/myPic.jpg"
                    alt="Ijjaz Ahmad - MERN Stack Developer"
                    loading="lazy"
                  />
                </div>
                <div className="author__info">
                  <span className="author__name">{post.author}</span>
                  <span className="author__title">MERN Stack Developer</span>
                </div>
                <div className="hero__divider"></div>
                <div className="post__stats">
                  <span>
                    <i className="fa-regular fa-eye"></i>
                    {post.content.split(/\s+/).length} words
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__bg__grid"></div>
        <div className="hero__glow hero__glow--left"></div>
        <div className="hero__glow hero__glow--right"></div>
      </section>

      {/* Post Content */}
      <section className="blog__post__content py-5">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar - Table of Contents */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="post__sidebar" data-aos="fade-right">
                <div className="sidebar__tags">
                  <h5>
                    <i className="fa-solid fa-tags"></i> Tags
                  </h5>
                  <div className="tags__list">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sidebar__share">
                  <h5>
                    <i className="fa-solid fa-share-nodes"></i> Share
                  </h5>
                  <div className="share__buttons">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title
                      )}&url=${encodeURIComponent(
                        `https://chijjazahmad.vercel.app/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share__btn share__btn--twitter"
                      aria-label="Share on Twitter"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        `https://chijjazahmad.vercel.app/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share__btn share__btn--linkedin"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `${post.title} - https://chijjazahmad.vercel.app/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share__btn share__btn--whatsapp"
                      aria-label="Share on WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <Link to="/blog" className="sidebar__back">
                  <i className="fa-solid fa-arrow-left"></i>
                  All Articles
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {/* Tags - Mobile Only */}
              <div className="post__tags d-lg-none" data-aos="fade-up">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <article
                className="post__body"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{
                  __html: parsedContent,
                }}
              />

              {/* Share Section */}
              <div className="post__share" data-aos="fade-up">
                <h4>Share This Article</h4>
                <BlogShare
                  postTitle={post.title}
                  postUrl={`https://chijjazahmad.vercel.app/blog/${post.slug}`}
                  postExcerpt={post.excerpt}
                />
              </div>

              {/* Author Bio */}
              <div className="author__bio" data-aos="fade-up">
                <div className="author__image">
                  <img
                    src="/images/myPic.jpg"
                    alt="Ijjaz Ahmad - MERN Stack Developer"
                    loading="lazy"
                  />
                </div>
                <div className="author__content">
                  <h4>About the Author</h4>
                  <h5>{post.author}</h5>
                  <p>
                    Ijjaz Ahmad is a professional MERN Stack developer from
                    Faisalabad, Pakistan with 3+ years of experience building
                    web and mobile applications. He specializes in React.js,
                    Next.js, Node.js, and React Native development.
                  </p>
                  <div className="author__links">
                    <a
                      href="https://github.com/IjjazAhmad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ijjazahmad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://wa.me/923267876344"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related__posts py-5">
          <div className="container py-5">
            <h3 className="section__title text-center mb-5" data-aos="fade-up">
              Related Articles
            </h3>
            <div className="row g-4">
              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={relatedPost.id}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <article className="blog__card">
                    <div className="blog__card__image">
                      <div className="image__placeholder">
                        <i className="fa-solid fa-code"></i>
                      </div>
                    </div>
                    <div className="blog__card__content">
                      <div className="blog__card__meta">
                        <span className="category">{relatedPost.category}</span>
                        <span className="read-time">
                          <i className="fa-regular fa-clock"></i>
                          {relatedPost.readTime} min read
                        </span>
                      </div>
                      <h4 className="blog__card__title">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="read__more"
                      >
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="card__corner top-right"></div>
                    <div className="card__corner bottom-left"></div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default BlogPost;
