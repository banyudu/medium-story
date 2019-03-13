# medium-story

**medium-story** is a package used to fetch medium stories.

## Features

* Fetch stories from medium.com, by rss feed.
* Works in both browser and node environment.
* Typescript support.

## Usage

### Node

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(171%2C184%2C195%2C100)&t=seti&wt=none&l=application%2Ftypescript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=13px&lh=133%25&si=false&code=import%2520getMediumStories%2520from%2520'medium-story'%250A%250Aconst%2520stories%2520%253D%2520await%2520getMediumStories('Your-Medium-Username')&es=2x&wm=false"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

### Browser

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(171%2C184%2C195%2C100)&t=seti&wt=none&l=application%2Ftypescript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=13px&lh=133%25&si=false&code=import%2520getMediumStories%2520from%2520'medium-story'%250A%250Aconst%2520stories%2520%253D%2520await%2520getMediumStories('Your-Medium-Username'%252C%2520%257B%2520cors%253A%2520true%2520%257D)&es=2x&wm=false"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

## Types

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(171%2C184%2C195%2C100)&t=seti&wt=none&l=application%2Ftypescript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=13px&lh=133%25&si=false&code=export%2520interface%2520Story%2520%257B%250A%2520%2520%2520%2520title%253A%2520string%253B%250A%2520%2520%2520%2520link%253A%2520string%253B%250A%2520%2520%2520%2520pubDate%253A%2520Date%253B%250A%2520%2520%2520%2520content%253A%2520string%253B%250A%2520%2520%2520%2520creator%253A%2520string%253B%250A%2520%2520%2520%2520guid%253A%2520string%253B%250A%2520%2520%2520%2520categories%253A%2520string%255B%255D%253B%250A%2520%2520%2520%2520isoDate%253A%2520Date%253B%250A%257D%250Aexport%2520interface%2520StoriesResult%2520%257B%250A%2520%2520%2520%2520items%253A%2520Story%255B%255D%253B%250A%2520%2520%2520%2520feedUrl%253A%2520string%253B%250A%2520%2520%2520%2520image%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520link%253A%2520string%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520url%253A%2520string%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520title%253A%2520string%253B%250A%2520%2520%2520%2520%257D%253B%250A%2520%2520%2520%2520title%253A%2520string%253B%250A%2520%2520%2520%2520description%253A%2520string%253B%250A%2520%2520%2520%2520webMaster%253A%2520string%253B%250A%2520%2520%2520%2520generator%253A%2520string%253B%250A%2520%2520%2520%2520link%253A%2520string%253B%250A%2520%2520%2520%2520lastBuildDate%253A%2520Date%253B%250A%257D%250Adeclare%2520type%2520corsFunc%2520%253D%2520(url%253A%2520string)%2520%253D%253E%2520string%253B%250Aexport%2520interface%2520getStoriesOptions%2520%257B%250A%2520%2520%2520%2520cors%253F%253A%2520boolean%2520%257C%2520corsFunc%253B%250A%2520%2520%2520%2520timeout%253F%253A%2520number%253B%250A%257D%250Aexport%2520default%2520function%2520getStories(username%253A%2520string%252C%2520options%253F%253A%2520getStoriesOptions)%253A%2520Promise%253CStoriesResult%253E%253B%250Aexport%2520%257B%257D%253B&es=2x&wm=false"
  style="transform:scale(0.7); width:1024px; height:473px; border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

## Explain

**medium-story** use [medium feeds](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds) to get latest stories from specified account.

Thanks to [cors.io](https://cors.io/), you can use it in browser, too!

Due to medium's limit, you can only get recent **10** stories.