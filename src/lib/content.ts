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
  github?: string;
}

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime?: string;
}

export interface ExperienceMeta {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  slug: string;
  order: number;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface HomeContent {
  name: string;
  title: string;
  greeting: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  skills: Record<string, string[]>;
  education: EducationItem[];
  bio: string;
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
        github: data.github || '',
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
      github: data.github || '',
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

export function getExperiences(): ExperienceMeta[] {
  const experiencesDir = path.join(contentDirectory, 'experiences');
  
  if (!fs.existsSync(experiencesDir)) {
    return [];
  }

  const files = fs.readdirSync(experiencesDir);
  
  const experiences = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(experiencesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      return {
        title: data.title || '',
        company: data.company || '',
        period: data.period || '',
        location: data.location || '',
        description: data.description || '',
        slug: file.replace(/\.mdx?$/, ''),
        order: data.order || 999,
      };
    })
    .sort((a, b) => a.order - b.order);

  return experiences;
}

export function getExperienceBySlug(slug: string) {
  const experiencesDir = path.join(contentDirectory, 'experiences');
  
  let filePath = path.join(experiencesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(experiencesDir, `${slug}.md`);
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title || '',
      company: data.company || '',
      period: data.period || '',
      location: data.location || '',
      description: data.description || '',
      slug,
      order: data.order || 999,
    },
    content,
  };
}

export function getHomeContent(): HomeContent {
  const filePath = path.join(contentDirectory, 'home.md');
  
  if (!fs.existsSync(filePath)) {
    // Return defaults if file doesn't exist
    return {
      name: 'Your Name',
      title: 'Your Title',
      greeting: "Hello, I'm",
      profileImage: '/profile.svg',
      email: '',
      github: '',
      linkedin: '',
      cvPath: '',
      skills: {},
      education: [],
      bio: '',
    };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    name: data.name || 'Your Name',
    title: data.title || 'Your Title',
    greeting: data.greeting || "Hello, I'm",
    profileImage: data.profileImage || '/profile.svg',
    email: data.email || '',
    github: data.github || '',
    linkedin: data.linkedin || '',
    cvPath: data.cvPath || '',
    skills: data.skills || {},
    education: data.education || [],
    bio: content.trim(),
  };
}
