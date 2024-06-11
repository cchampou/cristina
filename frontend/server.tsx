import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import express from 'express'
import {createServer as createViteServer} from 'vite'
import {findRouteByPath} from './src/router';
import {replaceTitle} from "./src/utils/html";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DEFAULT_TITLE = 'Cristina Coellen';

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.info('Running in production mode');
}

function htmlReplacement(template: string, serverHtml: string, path: string) {
  const htmlWithoutTitle = template.replace(`<!--ssr-outlet-->`, serverHtml);
  const routeConfig = findRouteByPath(path);
  if (!routeConfig) {
    return template;
  }
  const withTitle = replaceTitle(htmlWithoutTitle, routeConfig.title || DEFAULT_TITLE);
  const withDescription = withTitle.replace('<!--meta-description-->', `<meta name="description" content="${routeConfig.description}">`);
  return withDescription;
}

async function createServer() {
  const app = express()

  app.use(express.static(path.resolve(__dirname, 'dist/client'), {
    index: false
  }))

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, 'dist/client/index.html'),
        'utf-8',
      );
      const pathName = url;
      // @ts-ignore
      const {render} = await import('./dist/server/entry-server.js');
      const appHtml = await render(pathName);
      const html = htmlReplacement(template, appHtml, pathName);
      res.status(200).set({'Content-Type': 'text/html'}).end(html)
    } catch (e) {
      console.error(e);
      next(e)
    }
  })

  app.listen(5173)
}

async function createDevServer() {
  const app = express()

  const vite = await createViteServer({
    server: {middlewareMode: true},
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      )
      template = await vite.transformIndexHtml(url, template)
      const pathName = url;
      const {render} = await vite.ssrLoadModule('/src/entry-server.tsx')
      const appHtml = await render(pathName);
      const html = htmlReplacement(template, appHtml, pathName);
      res.status(200).set({'Content-Type': 'text/html'}).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e)
    }
  })

  app.listen(5173)
}

if (!isProduction) {
  void createDevServer();
} else {
  void createServer();
}