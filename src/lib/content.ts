import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectMeta {
  title: string;
  description: string;
  tags: string[];
  date: string;
  slug: string;
}

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime?: string;
}

export function getProjects(): ProjectMeta[] {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  
  const projects = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      return {
        title: data.title || '',
        description: data.description || '',
        tags: data.tags || [],
        date: data.date || '',
        slug: file.replace(/\.mdx?$/, ''),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return projects;
}

export function getProjectBySlug(slug: string) {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  // Try .mdx first, then .md
  let filePath = path.join(projectsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(projectsDir, `${slug}.md`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title || '',
      description: data.description || '',
      tags: data.tags || [],
      date: data.date || '',
      slug,
    },
    content,
  };
}

export function getBlogPosts(): BlogMeta[] {
  const blogDir = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Calculate reading time (roughly 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        slug: file.replace(/\.mdx?$/, ''),
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string) {
  const blogDir = path.join(contentDirectory, 'blog');
  
  // Try .mdx first, then .md
  let filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, `${slug}.md`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Calculate reading time
  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / 200)} min read`;

  return {
    meta: {
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      slug,
      readingTime,
    },
    content,
  };
}
