export class Blog {
  constructor(
    public uid: string,
    public author: string,
    public title: string,
    public description?: string,
    public content?: string
  ) {}
}
