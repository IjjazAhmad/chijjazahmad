import React from "react";
import {
  LinkedinIcon,
  XIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import { trackSocialShare } from "../Analytics/GoogleAnalytics";

const SocialShare = ({
  url = "https://chijjazahmad.vercel.app",
  title = "Hire Ijjaz Ahmad - Expert MERN Stack Developer",
  description = "Check out this talented MERN Stack developer from Pakistan! Expert in React.js, Next.js, Node.js, and React Native. 50+ projects completed.",
  hashtags = [
    "MERNDeveloper",
    "PakistanTech",
    "ReactDeveloper",
    "HireDeveloper",
    "FaisalabadDev",
  ],
  size = 40,
  round = true,
  showLabels = false,
  className = "",
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const fullText = encodeURIComponent(`${title}\n\n${description}`);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${fullText}&hashtags=${hashtags.join(",")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${fullText}`,
    whatsapp: `https://wa.me/?text=${fullText}%0A%0A${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${fullText}`,
  };

  const handleShare = (platform, shareUrl) => {
    trackSocialShare(platform, url);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`social-share ${className}`}>
      {showLabels && <span className="share-label">Share:</span>}

      <button
        onClick={() => handleShare("LinkedIn", shareLinks.linkedin)}
        className="social-share-button"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon size={size} round={round} />
        {showLabels && <span>LinkedIn</span>}
      </button>

      <button
        onClick={() => handleShare("Twitter", shareLinks.twitter)}
        className="social-share-button"
        aria-label="Share on X/Twitter"
      >
        <XIcon size={size} round={round} />
        {showLabels && <span>X/Twitter</span>}
      </button>

      <button
        onClick={() => handleShare("Facebook", shareLinks.facebook)}
        className="social-share-button"
        aria-label="Share on Facebook"
      >
        <FacebookIcon size={size} round={round} />
        {showLabels && <span>Facebook</span>}
      </button>

      <button
        onClick={() => handleShare("WhatsApp", shareLinks.whatsapp)}
        className="social-share-button"
        aria-label="Share on WhatsApp"
      >
        <WhatsappIcon size={size} round={round} />
        {showLabels && <span>WhatsApp</span>}
      </button>

      <button
        onClick={() => handleShare("Telegram", shareLinks.telegram)}
        className="social-share-button"
        aria-label="Share on Telegram"
      >
        <TelegramIcon size={size} round={round} />
        {showLabels && <span>Telegram</span>}
      </button>
    </div>
  );
};

// Project-specific share component
export const ProjectShare = ({
  projectTitle,
  projectUrl,
  projectDescription,
}) => {
  const shareUrl = projectUrl || "https://chijjazahmad.vercel.app/project";
  const shareTitle = `Check out ${projectTitle} - Built by Ijjaz Ahmad`;
  const shareDescription =
    projectDescription ||
    `${projectTitle} - A project developed by Ijjaz Ahmad, MERN Stack Developer from Faisalabad, Pakistan.`;

  return (
    <SocialShare
      url={shareUrl}
      title={shareTitle}
      description={shareDescription}
      size={32}
      className="project-share"
    />
  );
};

// Blog post share component
export const BlogShare = ({ postTitle, postUrl, postExcerpt }) => {
  const shareUrl = postUrl || "https://chijjazahmad.vercel.app/blog";
  const shareTitle = `${postTitle} | Ijjaz Ahmad's Dev Blog`;

  return (
    <SocialShare
      url={shareUrl}
      title={shareTitle}
      description={postExcerpt}
      hashtags={["WebDev", "MERNStack", "ReactJS", "TechBlog", "PakistanDev"]}
      size={36}
      showLabels={true}
      className="blog-share"
    />
  );
};

export default SocialShare;
