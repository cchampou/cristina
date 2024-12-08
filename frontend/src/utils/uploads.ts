export function getUploadURL(path: string) {
  const baseURL = import.meta.env.VITE_API_URL;
  const URLWithoutAPISuffix = baseURL.replace('/api', '');
  return URLWithoutAPISuffix + path;
}
