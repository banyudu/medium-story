import * as assert from 'power-assert'
import getStories from './index'

describe('get normal user', async () => {
  it('result is an array', async () => {
    const stories = await getStories('Medium')
    assert.ok(stories instanceof Array)
  })

  it('result is not empty', async () => {
    const stories = await getStories('Medium')
    assert.notEqual(stories.length, 0)
  })
})

describe('get noexistent user', async () => {
  it('result is an array', async () => {
    const stories = await getStories('adfdfadfkkkkadf99889009888')
    assert.ok(stories instanceof Array)
  })

  it('result is not empty', async () => {
    const stories = await getStories('adfdfadfkkkkadf99889009888')
    assert.equal(stories.length, 0)
  })
})