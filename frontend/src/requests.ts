export type StrapiResponse<T> = {
  data: T
}

export type Serie = {
  id: number;
  attributes: {
    title: string;
  }
}

export function fetchSeries(): Promise<StrapiResponse<Serie[]>> {
  return fetch(import.meta.env.VITE_API_URL + '/series?populate=Photo.file', {
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
    }
  }).then(response => response.json());
}
