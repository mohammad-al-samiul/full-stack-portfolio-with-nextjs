import React from "react";
import { Image } from "@nextui-org/image";

import Container from "@/src/components/Container";

type BlogPost = {
  id: number;
  title: string;
  author: {
    name: string;
    profilePicture: string;
    bio: string;
    socialLinks: {
      twitter?: string;
      github?: string;
    };
  };
  publishedDate: string;
  categories: string[];
  content: {
    type: "paragraph" | "image" | "quote";
    text?: string;
    src?: string;
    alt?: string;
  }[];
  tags: string[];
  comments: {
    id: number;
    author: string;
    comment: string;
    date: string;
  }[];
};

const blogPost: BlogPost = {
  id: 2,
  title: "Getting Started with Next.js: A Complete Guide for Beginners",
  author: {
    name: "Alex Johnson",
    profilePicture: "https://example.com/profiles/alex-johnson.jpg",
    bio: "Full-Stack Developer and Next.js Enthusiast",
    socialLinks: {
      twitter: "https://twitter.com/alexjohnsondev",
      github: "https://github.com/alexjohnson",
    },
  },
  publishedDate: "2024-11-20",
  categories: ["Web Development", "JavaScript", "Next.js"],
  content: [
    {
      type: "paragraph",
      text: "Next.js is a powerful React-based framework that enables developers to build production-ready web applications with ease.",
    },
    {
      type: "image",
      src: "https://example.com/images/nextjs-intro.jpg",
      alt: "Next.js project setup screenshot",
    },
    {
      type: "paragraph",
      text: "### Key Features of Next.js\n1. **File-Based Routing**\n2. **API Routes**\n3. **Static and Server Rendering**\n4. **Built-in CSS Support**\n5. **Optimized Performance**",
    },
    {
      type: "quote",
      text: "Next.js makes building modern web applications a breeze. – Alex Johnson",
    },
  ],
  tags: ["Next.js", "React", "Web Development"],
  comments: [
    {
      id: 201,
      author: "Emily Smith",
      comment:
        "This guide is super helpful for beginners! Thanks for breaking it down step by step.",
      date: "2024-11-21",
    },
    {
      id: 202,
      author: "Chris Thompson",
      comment:
        "The file-based routing in Next.js is such a game-changer. Great explanation!",
      date: "2024-11-22",
    },
  ],
};

const BlogPostPage: React.FC = () => {
  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            {blogPost.title}
          </h1>
          <div className="flex items-center mt-4 space-x-4">
            <Image
              alt={blogPost.author.name}
              className="w-16 h-16 rounded-full"
              src={blogPost.author.profilePicture}
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {blogPost.author.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {blogPost.author.bio}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Published on{" "}
                {new Date(blogPost.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </header>

        <main className="prose prose-lg dark:prose-invert max-w-3xl">
          {blogPost.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === "image") {
              return (
                <figure key={index} className="mb-6">
                  <Image
                    alt={block.alt}
                    className="rounded-lg w-full"
                    src={block.src}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2">
                    {block.alt}
                  </figcaption>
                </figure>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="pl-4 border-l-4 border-blue-500 italic text-gray-700 dark:text-gray-300"
                >
                  {block.text}
                </blockquote>
              );
            }

            return null;
          })}
        </main>

        <footer className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Comments
          </h3>
          <ul className="space-y-4">
            {blogPost.comments.map((comment) => (
              <li
                key={comment.id}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  {comment.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.comment}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.date).toDateString()}
                </p>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </Container>
  );
};

export default BlogPostPage;
