export type StrapiResponse<T> = {
  data: T
}

export type Format = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export type Formatkey = 'large' | 'small' | 'medium' | 'thumbnail';

export type Photo = {
  id: number;
  caption: string;
  description: string;
  file: {
    data: {
      id: number
      attributes: {
        name: string;
        formats: Record<Formatkey, Format>
      }
    }
  }
}

export type Collection = {
  id: number;
  attributes: {
    title: string;
    summary: string;
    photos: Photo[];
  }
}

export function fetchCollections(): Promise<StrapiResponse<Collection[]>> {
  return fetch(import.meta.env.VITE_API_URL + '/collections?populate=photos.file', {
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
    }
  }).then(response => response.json());
}

export class ApiService {

  private static apiUrl = import.meta.env.VITE_API_URL;

  private static buildHeaders() {
    return {
      Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
    }
  }

  private static async fetch<T>(pathname: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(this.apiUrl + pathname, {
      headers: this.buildHeaders(),
      ...options
    });
    return response.json();
  }

  public static fetchCollections(): Promise<StrapiResponse<Collection[]>> {
    return this.fetch('/collections?populate=photos.file');
  }
}
