# 评测产物目录

该目录统一存放可重新生成的测试与浏览器评测产物：

- `screenshots/`：执行 `npm run screenshots` 生成的六个主要页面截图。
- `playwright/`：Playwright 失败截图、trace 和测试级附件。
- `playwright-results.json`：执行 `npm test` 或 `npm run screenshots` 生成的结构化测试报告。

生成前需要先执行：

```bash
npm ci
npm run test:install
```

然后执行：

```bash
npm test
npm run screenshots
```

根目录 `screenshots/` 是任务当前视觉基线；本目录中的
`artifacts/screenshots/` 是按照当前代码重新生成的评测证据。
