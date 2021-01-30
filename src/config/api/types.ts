export interface User {
  name: string;
  last_name: string;
  mail: string;
}

export type AuthResponse = User;

export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image_url: string | null;
}

export type BooksResponse = Book[];
