export class Blog {
  author: string;
  title: string;
  description?: string;
  content?: string;
  labels?: string;

  constructor({
    author,
    title,
    description = null,
    content = null,
    labels = null,
  }) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.content = content;
    this.labels = labels;
  }
}

class Label {
  constructor(public name: string) {}
}
