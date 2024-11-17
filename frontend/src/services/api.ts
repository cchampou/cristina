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

export type FormatKey = 'large' | 'small' | 'medium' | 'thumbnail';

export type Photo = {
  id: number;
  description: string;
  date: string;
  time: string;
  camera: string;
  location: string;
  file: {
    id: number
    name: string;
    formats: Record<FormatKey, Format>
  }
}

export type Collection = {
  id: number;
  documentId: string;
  location?: string | null;
  date: string;
  title: string;
  summary: string;
  photos: Photo[];
}

export enum ReferenceType {
  'video' = 'video',
  'print' = 'print',
}

export type Reference = {
  link: string;
  type: ReferenceType
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

  public static fetchCollection(documentId: string): Promise<StrapiResponse<Collection>> {
    return this.fetch(`/collections/${documentId}?populate=photos.file`);
  }
}
