import matter from "gray-matter";

// Configure your GitHub repository here
// The blog will fetch .md files from this repo/path
const GITHUB_OWNER = "Gaurang105"; // Your GitHub username
const GITHUB_REPO = "blog"; // Repository name where you store blog posts
const GITHUB_BRANCH = "main";
const BLOG_PATH = "posts"; // Folder in the repo containing .md files

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: number;
  tags?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function fetchFromGitHub(path: string): Promise<Response> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      // Add your GitHub token here if you hit rate limits
      // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  
  return response;
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  try {
    const response = await fetchFromGitHub(BLOG_PATH);
    
    if (!response.ok) {
      console.error("Failed to fetch blog posts:", response.status);
      return [];
    }
    
    const files = await response.json();
    
    if (!Array.isArray(files)) {
      return [];
    }
    
    const posts: BlogPostMeta[] = [];
    
    for (const file of files) {
      if (file.name.endsWith(".md")) {
        const slug = file.name.replace(/\.md$/, "");
        const post = await getPostBySlug(slug);
        
        if (post) {
          posts.push({
            slug: post.slug,
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            readingTime: post.readingTime,
            tags: post.tags,
          });
        }
      }
    }
    
    // Sort by date, newest first
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchFromGitHub(`${BLOG_PATH}/${slug}.md`);
    
    if (!response.ok) {
      return null;
    }
    
    const fileData = await response.json();
    
    // GitHub returns base64 encoded content
    const content = Buffer.from(fileData.content, "base64").toString("utf-8");
    const { data, content: markdownContent } = matter(content);
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || markdownContent.slice(0, 160) + "...",
      content: markdownContent,
      readingTime: calculateReadingTime(markdownContent),
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const response = await fetchFromGitHub(BLOG_PATH);
    
    if (!response.ok) {
      return [];
    }
    
    const files = await response.json();
    
    if (!Array.isArray(files)) {
      return [];
    }
    
    return files
      .filter((file: { name: string }) => file.name.endsWith(".md"))
      .map((file: { name: string }) => file.name.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}
