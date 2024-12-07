import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cookieParser from 'cookie-parser';
import { createServer as createViteServer } from 'vite'
import { langMiddleware } from './server/middlewares/lang';
import { HTMLReplacement } from './server/utils/HTMLReplacement';
import { readAndOptionallyTransformTemplate } from './server/utils/template';
import { defaultHost } from './app.config';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.info('Running in production mode');
}

const app = express();
app.use(cookieParser());
app.use(langMiddleware);


if (isProduction) {
  app.use(express.static(path.resolve(__dirname, 'dist/client'), {
    index: false
  }))
}

const vite = !isProduction ? await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom'
}) : undefined;

if (vite) {
  app.use(vite.middlewares)
  console.info('Running in development mode, Vite is running');
}

const relativeTemplatePath = isProduction ? 'dist/client/index.html' : 'index.html';
const templatePath = path.resolve(__dirname, relativeTemplatePath);

app.use('*', async (req, res, next) => {
  const pathName = req.originalUrl
  const host = req.get('host') ?? defaultHost;
  const scheme = req.protocol;

  try {
    const template = await readAndOptionallyTransformTemplate(templatePath, pathName, vite);
    const { render } = !vite ?
      // @ts-expect-error - expect error because of dynamic import
      await import('./dist/server/entry-server.js') : await vite.ssrLoadModule('/src/entry-server.tsx')
    const appHtml = await render(pathName);
    const html = HTMLReplacement(template, appHtml, scheme, host, pathName, req.locale);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    console.error(e);
    next(e)
  }
})

app.listen(5173);