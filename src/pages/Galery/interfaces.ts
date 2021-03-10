interface ImageCat {
  link: string;
  id: string;
}

export interface Cats {
  id: string;
  title: string;
  ups: number;
  downs: number;
  images: Array<ImageCat>;
}

export interface UriCat {
  uri: string;
  id: string;
  title: string;
  ups: number;
  downs: number;
}

export interface FormData {
  columns: number;
}
