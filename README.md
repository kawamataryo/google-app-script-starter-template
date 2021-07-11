# Google App Script starter template

Starter template for Google App Script development in local.

## 🎨 Features

- Deploy local project with [clasp](https://github.com/google/clasp)
- Use TypeScript
- Bundle file with Webpack5 （You can use npm modules）
- Lint code with [ESLint](https://github.com/eslint/eslint) 
- Format code with [prettier](https://github.com/prettier/prettier)
- Pre commit lint and format with [husky](https://github.com/typicode/husky) and [lint-stage](https://github.com/okonet/lint-staged)

## 🚀 Try it now!
GitHub Template
[Create a repo from this template on GitHub](https://github.com/kawamataryo/google-app-script-starter-template/generate)

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
