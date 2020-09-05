export class Blog {
  author: string;
  title: string;
  description?: string;
  content?: string;
  tags?: string;

  constructor({
    author,
    title,
    description = null,
    content = null,
    tags = null,
  }) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.content = content;
    this.tags = tags;
  }
}

class Label {
  constructor(public name: string) {}
}
