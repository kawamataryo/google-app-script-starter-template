# **ここにプロジェクト名を入れる**

**ここにこのプロジェクトの説明を書く**

## Links

- **関連するspreadsheetsやGASへのリンク**
- **関連するesaへのリンク**
- **関連するslack channelへのリンク**

## 使い方

### 事前準備

1. [Create a repo from this template on GitHub](https://github.com/graffer-inc/gas-google-app-script-starter-template/generate)
2. [Turn on the Apps Script API](https://script.google.com/home/usersettings)
3. `$ yarn install`
4. Fix the `project_id` in `.clasp.json`

```.clasp.json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./dist"
}
```

5. Login to clasp

```
$ yarn clasp login
```

6. Get values from local file

```
cat ~/.clasprc.json
```

7. Set the values to GitHub Secrets

[Open actions secrets](./settings/secrets/actions)
* GAS_CLIENT_ID
* GAS_CLIENT_SECRET
* GAS_REFRESH_TOKEN

### 開発方法

#### Build

Build project with Webpack.

```
npm run build
```

#### Deploy

Deploy project with clasp.
(or `git push origin main`)

```
npm run deploy
```
