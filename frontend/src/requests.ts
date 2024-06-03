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

export type Serie = {
  id: number;
  attributes: {
    title: string;
    photo: Photo[];
  }
}
[
  {
    "id": 2,
    "caption": "STOP WAR",
    "file": {
      "data": {
        "id": 3,
        "attributes": {
          "name": "stopwar.jpg",
          "alternativeText": null,
          "caption": null,
          "width": 1280,
          "height": 857,
          "formats": {
            "large": {
              "ext": ".jpg",
              "url": "/uploads/large_stopwar_30c555ab80.jpg",
              "hash": "large_stopwar_30c555ab80",
              "mime": "image/jpeg",
              "name": "large_stopwar.jpg",
              "path": null,
              "size": 65.69,
              "width": 1000,
              "height": 670,
              "sizeInBytes": 65692
            },
            "small": {
              "ext": ".jpg",
              "url": "/uploads/small_stopwar_30c555ab80.jpg",
              "hash": "small_stopwar_30c555ab80",
              "mime": "image/jpeg",
              "name": "small_stopwar.jpg",
              "path": null,
              "size": 20.95,
              "width": 500,
              "height": 335,
              "sizeInBytes": 20946
            },
            "medium": {
              "ext": ".jpg",
              "url": "/uploads/medium_stopwar_30c555ab80.jpg",
              "hash": "medium_stopwar_30c555ab80",
              "mime": "image/jpeg",
              "name": "medium_stopwar.jpg",
              "path": null,
              "size": 40.82,
              "width": 750,
              "height": 502,
              "sizeInBytes": 40816
            },
            "thumbnail": {
              "ext": ".jpg",
              "url": "/uploads/thumbnail_stopwar_30c555ab80.jpg",
              "hash": "thumbnail_stopwar_30c555ab80",
              "mime": "image/jpeg",
              "name": "thumbnail_stopwar.jpg",
              "path": null,
              "size": 6.34,
              "width": 233,
              "height": 156,
              "sizeInBytes": 6338
            }
          },
          "hash": "stopwar_30c555ab80",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 99.78,
          "url": "/uploads/stopwar_30c555ab80.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2024-06-03T18:06:52.600Z",
          "updatedAt": "2024-06-03T18:06:52.600Z"
        }
      }
    }
  }
]

export function fetchSeries(): Promise<StrapiResponse<Serie[]>> {
  return fetch(import.meta.env.VITE_API_URL + '/series?populate=photo.file', {
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
    }
  }).then(response => response.json());
}
