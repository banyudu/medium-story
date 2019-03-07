import * as assert from 'power-assert'
import getStories, { StoriesResult } from './index'

describe('get normal user', async () => {
  it('result is an array', async () => {
    const stories: StoriesResult = (await getStories('Medium', { cors: true })) as StoriesResult
    assert.ok(stories.items instanceof Array)
  })

  it('result is not empty', async () => {
    const stories: StoriesResult = (await getStories('Medium', { cors: true })) as StoriesResult
    assert.notEqual(stories.items.length, 0)
  })
})

describe('get noexistent user', async () => {
  it('result is an array', async () => {
    const stories: StoriesResult = (await getStories('adfdfadfkkkkadf99889009888', { cors: true })) as StoriesResult
    assert.ok(stories.items instanceof Array)
  })

  it('result is not empty', async () => {
    const stories: StoriesResult = (await getStories('adfdfadfkkkkadf99889009888', { cors: true })) as StoriesResult
    assert.equal(stories.items.length, 0)
  })
})