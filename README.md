# Jims-Lil-Svelte-Website
A cool little webapp that I made with Svelte!


# Usage

Please use node v12.16.1 (just because that's what I used when beginning this project):
```bash
nvm use
```

To start local [Rollup](https://rollupjs.org) HMR server:
```bash
npm run dev
```

Then you can visit the site at: http://localhost:5000

_Note: By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`._

To create a production build:
```bash
npm run build
```

_Note: You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com)._


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximize compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

# Deploying

## Deploying to Github Pages
Run this command, and it should push your "public" folder to the gh-pages branch.
```
npm run deploy-gh
```
For my project, it then updates the site here:


## Deploying Other Places

The default Svelte README I started with for this project had these instructions for deploying to zeit and surge. I only deployed to gh-pages, but I figured this might be usedful so I included them here. 

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

# Scaffolding

This proejct was created with the [degit](https://github.com/Rich-Harris/degit) Svelte cli:
```bash
npx degit sveltejs/template svelte-app
```