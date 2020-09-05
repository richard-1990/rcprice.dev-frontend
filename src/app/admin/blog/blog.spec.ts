import { Blog } from './blog'

describe('Blog', () => {
  it('should create an instance', () => {
    expect(
      new Blog({ title: 'Example Blog', author: 'sanfoiawhfowiq29' })
    ).toBeTruthy()
  })
})
