import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { BlogPost, uniq } from '../utils'

const postsDirectory = join(process.cwd(), 'public/blog')

export const getPostsByTag = (tag: string) => {
  return getAllPosts().filter((post) => post.tags.includes(tag))
}

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string): BlogPost => {
  // const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = join(postsDirectory, slug, 'content.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const post: BlogPost = {
    title: data.title,
    excerpt: data.excerpt,
    content,
    date: data.date,
    tags: data.tags,
    slug,
    cover: {
      image: data.coverImage,
      alt: data.coverImageAlt,
      width: data.coverImageWidth,
      height: data.coverImageHeight
    }
  }

  return post
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()

  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1: BlogPost, post2: BlogPost) => {
      const match = post1.date > post2.date ? -1 : 1

      return match
    })
}

export const getAllTags = () => {
  const tags: Array<string> = []

  getAllPosts().map((post) => post.tags.map((tag) => tags.push(tag)))

  return uniq(tags)
}
