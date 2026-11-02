# Deploy and Host Build Awesome on Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template/build-awesome?referralCode=sLjDXb&utm_medium=integration&utm_source=button&utm_campaign=build-awesome)

[Build Awesome](https://www.11ty.dev/), formerly Eleventy (11ty), is a simple static site generator: it turns Markdown and templates into plain HTML. This template is a small working site with pages and a blog. Railway builds it when you push, and Caddy serves the result.

## About Hosting Build Awesome

One service, no database and no volume. Your content lives in Git, so there's nothing to back up on the server.

- **Built at deploy.** The Dockerfile runs the generator, then throws Node away. Only Caddy and your HTML stay running, so the site uses very little memory.
- **Real 404 pages.** A missing URL gets your `404` page with a proper 404 status.
- **Compressed.** Pages are served with zstd or gzip.

## Common Use Cases

- A personal blog or portfolio
- Documentation or a project site
- A fast marketing site that has no server code to patch

## Dependencies for Build Awesome Hosting

- Nothing external. A GitHub account is needed once you want to edit the site.

### Deployment Dependencies

- [Build Awesome documentation](https://www.11ty.dev/docs/)
- [Build Awesome on GitHub](https://github.com/11ty/buildawesome)

### Implementation Details

**Make it yours.** In the service's Settings, under Source, [eject from the template](https://docs.railway.com/templates/deploy#eject-from-template-repository). That copies the code into your own GitHub account, and every push then redeploys the site.

**Add a post.** Create a Markdown file in `src/posts/`:

```markdown
---
title: Hello
date: 2026-11-02
---
Your text here.
```

**Preview locally.** Run `npm install`, then `npm start`.

## Why Deploy Build Awesome on Railway?

Railway is a singular platform to deploy your infrastructure stack. Railway will host your infrastructure so you don't have to deal with configuration, while allowing you to vertically and horizontally scale it.

By deploying Build Awesome on Railway, you are one step closer to supporting a complete full-stack application with minimal burden. Host your servers, databases, AI agents, and more on Railway.
