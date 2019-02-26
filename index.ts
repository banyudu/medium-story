import axios from 'axios'
import RssParser from 'rss-parser'

const parser = new RssParser()

export interface Story {
  title: string
  link: string
  pubDate: Date
  'content:encoded': string
  'dc:creator': string
  guid: string
  categories: string[]
  isoDate: Date
}

export interface StoriesResult {
  items: Story[]
  feedUrl: string
  image: {
    link: string
    url: string
    title: string
  }
  title: string
  description: string
  webMaster: string
  generator: string
  link: string
  lastBuildDate: Date
}

type corsFunc = (url: string) => string

export interface getStoriesOptions {
  cors?: boolean | corsFunc // you need cors option to work in browser
  timeout?: number
}

export default async function getStories(username: string, options: getStoriesOptions = {}): Promise<StoriesResult> {
  let url = `https://medium.com/feed/@${username}`
  if (options.cors) {
    if (typeof options.cors === 'boolean') {
      url = `https://cors.io/?${url}`
    } else {
      url = options.cors(url)
    }
  }

  // get rss
  const res = await axios.get(url, { timeout: options.timeout || 5000})
  
  const result: StoriesResult = await parser.parseString(res.data || '') as any

  // parse dates
  result.lastBuildDate = new Date(result.lastBuildDate)
  for (const item of result.items) {
    item.isoDate = new Date(item.isoDate)
    item.pubDate = new Date(item.pubDate)
  }
  return result
}