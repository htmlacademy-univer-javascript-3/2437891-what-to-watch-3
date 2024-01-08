export type Film = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type Promo = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    videoLink: string;
    genre: string;
    released: number;
    isFavorite: boolean;
}

export type AuthData = {
  email: string;
  password: string;
}

export type UserData = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export type FilmInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type Comment = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type CreateCommentRequest = {
  filmId: string;
  comment: string;
  rating: number;
}
