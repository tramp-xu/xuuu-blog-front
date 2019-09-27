// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': require('path').resolve(__dirname, 'src')
  })
);