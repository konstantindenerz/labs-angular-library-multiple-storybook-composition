module.exports = {
  "stories": [
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },
  refs: {
    'foo-lib': {
      title: "Foo Lib",
      url: "http://localhost:8080/",
      expanded: true // optional, true by default
    },
    'bar-lib': {
      title: "Bar Lib",
      url: "http://localhost:8081/",
      expanded: true // optional, true by default
    }
  }
}
