# medium-story

**medium-story** is a package used to fetch medium stories.

## Features

* Fetch stories from medium.com, by rss feed.
* Works in both browser and node environment.
* Typescript support.

## Usage

### Node

```typescript
import getMediumStories from 'medium-story'

async someFunc () {
    const stories = await getMediumStories('Your-Medium-Username')

    for (const story of stories.items) {
        console.log(story.title)
        // title: string;
        // link: string;
        // pubDate: Date;
        // content: string;
        // creator: string;
        // guid: string;
        // categories: string[];
        // isoDate: Date;
    }
}
```

### Browser

```typescript
import getMediumStories from 'medium-story'

async someFunc () {
    const stories = await getMediumStories('Your-Medium-Username', { cors: true })

    for (const story of stories.items) {
        console.log(story.title)
        // title: string;
        // link: string;
        // pubDate: Date;
        // content: string;
        // creator: string;
        // guid: string;
        // categories: string[];
        // isoDate: Date;
    }
}
```

## Types

```typescript
export interface Story {
    title: string;
    link: string;
    pubDate: Date;
    content: string;
    creator: string;
    guid: string;
    categories: string[];
    isoDate: Date;
}
export interface StoriesResult {
    items: Story[];
    feedUrl: string;
    image: {
        link: string;
        url: string;
        title: string;
    };
    title: string;
    description: string;
    webMaster: string;
    generator: string;
    link: string;
    lastBuildDate: Date;
}
declare type corsFunc = (url: string) => string;
export interface getStoriesOptions {
    cors?: boolean | corsFunc;
    timeout?: number;
}
export default function getStories(username: string, options?: getStoriesOptions): Promise<StoriesResult>;
export {};
```

## Explain

**medium-story** use [medium feeds](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds) to get latest stories from specified account.

Thanks to [cors.io](https://cors.io/), you can use it in browser, too!

Due to medium's limit, you can only get recent **10** stories.