export {}

declare global {

  interface IBlog {
    title: string
    author: string
  }

  interface IUser {
    token: string;
    username: string;
    name: string;
  }
}