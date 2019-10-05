const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
      'alloy',
      'alloy/react',
      'alloy/typescript',
  ],
  env: {
      // 这里填入你的项目用到的环境
      // 它们预定义了不同环境的全局变量，比如：
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
  },
  parserOptions: {
    // 支持最新 JavaScript
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
  },
  globals: {
      // 这里填入你的项目需要的全局变量
      // false 表示这个全局变量不允许被重新赋值，比如：
      //
      // myGlobal: false
  },
  rules: {
      // 这里填入你的项目需要的个性化配置
      "no-invalid-this": OFF,
  },
  settings: {
    "import/ignore": [
      "node_modules"
    ]
  }
};