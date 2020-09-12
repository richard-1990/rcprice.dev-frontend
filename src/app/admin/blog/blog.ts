export class Blog {
  author: string
  title: string
  description?: string
  content?: string
  tags?: Tag[]

  constructor({
    author,
    title,
    description = null,
    content = null,
    tags = null,
  }) {
    this.author = author
    this.title = title
    this.description = description
    this.content = content
    this.tags = tags
  }
}

export class Tag {
  constructor(public name: string) {
    this.name = name
  }
}
