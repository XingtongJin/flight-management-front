module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // element-ui 按需引入
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
