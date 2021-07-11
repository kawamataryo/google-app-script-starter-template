# Clasp Webpack template

Starter template for Google App Script development in local.

## 🎨 Features

- Deploy local project with clasp
- Use TypeScript
- Bundle file with Webpack （You can use npm modules）
- Lint code with ESLint 
- Format code with prettier
- Pre commit lint and format with husky and lint-stage

## 🚀 Try it now!
GitHub Template
[Create a repo from this template on GitHub](https://github.com/kawamataryo/clasp-webpack-template/generate)

Fix the `project_id` in `.clasp.json` to your GAS project.

```.clasp.json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./dist"
}
```

## ⚒ Usage

### Build
Build project with Webpack.

```
npm run build
```

### Deploy
Deploy project with clasp.

```
npm run deploy
```
