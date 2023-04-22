module.exports = {
  branches: ["main"], // 指定在哪个分支下要执行发布操作
  plugins: [
    // "@semantic-release/commit-analyzer", // 解析 commit 信息，默认就是 Angular 规范
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          { "type": "docs", "release": "patch" },
          { "type": "refactor", "release": "patch" },
          { "type": "style", "release": "patch" },
          { "type": "ci", "release": "patch" },
          { "type": "chore", "release": "patch" }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "parserOpts": {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        "presetConfig": {
          "types": [
            {
              "type": "breaking",
              "section": "❗ Breaking ❗",
              "hidden": false
            },
            { "type": "feat", "section": "✨ Feature ✨", "hidden": false },
            { "type": "fix", "section": "🐛 Bugfix 🐛", "hidden": false },
            { "type": "hotfix", "section": "🔥 Hotfix 🔥", "hidden": false },
            {
              "type": "BREAKING",
              "section": "❗ Breaking ❗",
              "hidden": false
            },
            { "type": "HOTFIX", "section": "🔥 Hotfix 🔥", "hidden": false }
          ]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md", // 把发布日志写入该文件
      },
    ],
    // "@semantic-release/npm", // 发布到NPM
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"], // 前面说到日志记录和版本好是新增修改的，需要 push 回 Git
      },
    ],
  ],
};
