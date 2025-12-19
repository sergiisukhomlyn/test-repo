// cucumber.cjs
const common = {
  loader: ['ts-node/esm'],
  import: ['src/**/*.ts'],
  tags: 'not @skip',
  format: ['@cucumber/pretty-formatter'],
  formatOptions: { snippetInterface: 'async-await' }
};

const ci = {
  ...common,
  format: [
    ...common.format,
    'json:reports/cucumber.json',
    'html:reports/cucumber.html',
    'junit:reports/cucumber.xml'
  ],
  retry: 3
};

const local = { ...ci, retry: 0 };

module.exports = { default: common, ci, local };
