import { ViteDevServer } from 'vite';
import fs from 'node:fs';

export async function readAndOptionallyTransformTemplate(templatePath: string, pathName: string, vite?: ViteDevServer) {
  return !vite ? fs.readFileSync(
    templatePath,
    'utf-8',
  ) : await vite.transformIndexHtml(pathName, fs.readFileSync(
    templatePath,
    'utf-8',
  ));
}