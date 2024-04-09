export {}

declare global {

  interface IBlog {
    id: string
    title: string
    author: string
    url: string
    userId: string
  }

  type NewBlog = Omit<IBlog, 'id' | 'userId'>

  interface IUser {
    token: string;
    username: string;
    name: string;
    id: string
  }
}