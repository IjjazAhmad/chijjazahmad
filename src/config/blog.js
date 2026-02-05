// Blog posts data - Add more posts here
export const blogPosts = [
  {
    id: 1,
    slug: "how-to-build-ai-apps-with-nextjs",
    title: "How to Build AI-Powered Applications with Next.js in 2026",
    excerpt:
      "Learn step-by-step how to integrate AI capabilities into your Next.js applications using OpenAI API, LangChain, and modern AI tools. Complete guide with code examples.",
    content: `
# How to Build AI-Powered Applications with Next.js in 2026

Building AI-powered applications has become increasingly accessible with modern tools and frameworks. In this comprehensive guide, I'll walk you through creating intelligent applications using Next.js, one of the most popular React frameworks for production-ready web applications.

## Why Choose Next.js for AI Applications?

Next.js offers several advantages that make it ideal for AI-powered applications:

- **Server-Side Rendering (SSR)**: Process AI requests on the server, keeping API keys secure
- **API Routes**: Built-in API endpoints for AI integrations
- **Edge Functions**: Low-latency AI responses with edge computing
- **Streaming Support**: Real-time AI response streaming for chat applications

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest ai-app --typescript --tailwind --app
cd ai-app
npm install openai langchain
\`\`\`

## Setting Up OpenAI Integration

Create an API route for AI interactions:

\`\`\`typescript
// app/api/chat/route.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { messages } = await request.json();
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
    stream: true,
  });

  return new Response(completion.toReadableStream());
}
\`\`\`

## Building the Chat Interface

Create a React component for the chat UI with real-time streaming support.

## Best Practices

1. **Rate Limiting**: Implement rate limiting to prevent abuse
2. **Error Handling**: Gracefully handle API errors
3. **Caching**: Cache common responses to reduce API costs
4. **Security**: Never expose API keys on the client side

## Conclusion

Building AI applications with Next.js provides a solid foundation for scalable, production-ready applications. The combination of React's component model and Next.js's server capabilities creates an ideal environment for AI integrations.

If you need help building an AI-powered application, feel free to [contact me](/contact) to discuss your project requirements.
    `,
    category: "Web Development",
    tags: ["Next.js", "AI", "OpenAI", "React", "TypeScript", "LangChain"],
    author: "Ijjaz Ahmad",
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-15",
    readTime: 8,
    featured: true,
    image: "/images/blog/ai-nextjs.jpg",
  },
  {
    id: 2,
    slug: "react-native-tips-for-mobile-development",
    title: "10 Essential React Native Tips for Professional Mobile Development",
    excerpt:
      "Master React Native development with these proven tips and best practices. From performance optimization to navigation patterns, learn what makes apps successful.",
    content: `
# 10 Essential React Native Tips for Professional Mobile Development

After developing numerous React Native applications including the Rafiq Islamic App (available on Google Play Store), I've gathered essential tips that every mobile developer should know.

## 1. Use TypeScript from the Start

TypeScript catches bugs early and improves developer experience:

\`\`\`typescript
interface UserProps {
  name: string;
  email: string;
  avatar?: string;
}

const UserCard: React.FC<UserProps> = ({ name, email, avatar }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};
\`\`\`

## 2. Optimize List Performance

Use FlatList with proper optimization:

\`\`\`typescript
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true}
  getItemLayout={getItemLayout}
/>
\`\`\`

## 3. Implement Proper Navigation

Use React Navigation with type-safe routing for better maintainability.

## 4. Handle Offline States

Implement offline support using AsyncStorage and NetInfo for better user experience.

## 5. Optimize Images

Use FastImage for better image loading performance and caching.

## 6. Use Hermes Engine

Enable Hermes for faster startup times and reduced memory usage.

## 7. Implement Error Boundaries

Catch JavaScript errors and display fallback UI instead of crashing.

## 8. Profile Performance Regularly

Use React DevTools and Flipper to identify performance bottlenecks.

## 9. Follow Platform Guidelines

Respect iOS Human Interface Guidelines and Material Design principles.

## 10. Write Unit Tests

Use Jest and React Native Testing Library for reliable testing.

## Conclusion

These tips have helped me deliver high-quality mobile applications to clients worldwide. If you're looking for a React Native developer for your project, [let's connect](/contact)!
    `,
    category: "Mobile Development",
    tags: [
      "React Native",
      "Mobile Development",
      "iOS",
      "Android",
      "TypeScript",
      "Performance",
    ],
    author: "Ijjaz Ahmad",
    publishedAt: "2026-01-05",
    updatedAt: "2026-01-12",
    readTime: 10,
    featured: true,
    image: "/images/blog/react-native-tips.jpg",
  },
  {
    id: 3,
    slug: "complete-guide-mern-stack-2026",
    title: "The Complete MERN Stack Development Guide for 2026",
    excerpt:
      "Everything you need to know about MERN Stack development in 2026. From MongoDB to React.js, master the full stack with this comprehensive guide.",
    content: `
# The Complete MERN Stack Development Guide for 2026

As a MERN Stack developer with over 50 projects completed, I've witnessed the evolution of this powerful technology stack. Here's your complete guide to mastering MERN in 2026.

## What is MERN Stack?

MERN stands for:
- **M**ongoDB - NoSQL database
- **E**xpress.js - Backend framework
- **R**eact.js - Frontend library
- **N**ode.js - JavaScript runtime

## Setting Up Your Development Environment

### Prerequisites

\`\`\`bash
# Install Node.js (v20 or later)
# Install MongoDB or use MongoDB Atlas
# Install VS Code with essential extensions
\`\`\`

## MongoDB Best Practices

### Schema Design

\`\`\`javascript
// models/User.js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });
\`\`\`

## Express.js API Design

### RESTful Architecture

\`\`\`javascript
// routes/api/users.js
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
\`\`\`

## React.js Frontend

### Component Architecture

Use functional components with hooks for cleaner code.

### State Management

Consider Redux Toolkit or Zustand for complex state management.

## Deployment

Deploy your MERN application using:
- **Vercel** - Frontend
- **Railway/Render** - Backend
- **MongoDB Atlas** - Database

## Conclusion

MERN Stack continues to be one of the most versatile and in-demand technology stacks. With proper understanding and practice, you can build any web application from simple websites to complex enterprise solutions.

Need help with your MERN Stack project? [Get in touch](/contact) with me today!
    `,
    category: "Web Development",
    tags: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full Stack",
    ],
    author: "Ijjaz Ahmad",
    publishedAt: "2026-01-01",
    updatedAt: "2026-01-10",
    readTime: 15,
    featured: false,
    image: "/images/blog/mern-stack-guide.jpg",
  },
];

// Blog categories
export const blogCategories = [
  { name: "All", slug: "all" },
  { name: "Web Development", slug: "web-development" },
  { name: "Mobile Development", slug: "mobile-development" },
  { name: "Career Tips", slug: "career-tips" },
  { name: "Tutorials", slug: "tutorials" },
];

// Get post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Get related posts
export const getRelatedPosts = (currentPostId, category, limit = 3) => {
  return blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
};

// Get featured posts
export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
};

// Get posts by category
export const getPostsByCategory = (category) => {
  if (category === "all") return blogPosts;
  return blogPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === category
  );
};
