xuuu 的博客前端项目
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Create React Typescript App

```
  yarn golbal add create-react-app

  npx create-react-app project-name --typescript
```

## tsconfig.json 配置
```
  {
    "compilerOptions": {
      "target": "es5",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react"
    },
    "include": [
      "src"
    ]
  }
```

## 插件模块
- yarn add react-redux
- yarn add react-router
- yarn add react-router-dom
- yarn add axios
- yarn add antd
- yarn add react-app-rewired
    ```
      用于重写 create-react-app 的配置, 会读取根目录下的 config-overrides.js

      package.json 中 scripts 需要将 react-scripts 修改为 react-app-rewired
    ```
- yarn add styled-components
    ```
      使用 styled-components 来使用写 css/less/sass
    ```
- yarn add babel-plugin-import
  ```
    是一个用于按需加载组件代码和样式的 babel 插件
  ```
- yarn add eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react -D

## 代码检查 eslint

- yarn add eslint prettier -D
- yarn add eslint-config-prettier eslint-plugin-prettier -D
- yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D