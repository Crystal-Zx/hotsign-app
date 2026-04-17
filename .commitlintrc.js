const TYPES = [
  { value: 'feat', name: '✨ 新增：新功能' },
  { value: 'fix', name: '🐛 修复：修复缺陷' },
  { value: 'docs', name: '📝 文档：文档更新' },
  {
    value: 'refactor',
    name: '♻️  重构：代码重构（未新增代码也未修复 BUG）',
  },
  { value: 'perf', name: '⚡️ 优化：性能优化' },
  { value: 'test', name: '🧪 测试：测试相关' },
  { value: 'build', name: '📦️ 构建：修改构建流程或辅助工具' },
  { value: 'chore', name: '🎫 杂项：其他修改' },
  { value: 'revert', name: '⏪️ 回滚：回滚提交' },
];

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    /**
     * [Level, Applicable, Value]
     * - Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
     * - Applicable [always|never]: never inverts the rule.
     *    - always means must obey this rule.
     *    - never means must not obey this rule.
     * - Value: value to use for this rule.
     */
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 108],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', TYPES.map(({ value }) => value)],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'scope-empty': [2, 'never'],
  },
  prompt: {
    types: TYPES,
    messages: {
      type: '选择一种你的提交类型: \n',
      customScope: '请输入修改范围\n',
      subject: '简要描述更改内容: \n',
      body: '详细说明更改内容(可选)：\n',
      footer: '关联的 issue，例如：#31, #34(可选): \n',
      confirmCommit: '✅ 确定提交说明? \n',
    },
    skipQuestions: ['scope', 'body', 'footerPrefix', 'footer', 'breaking'], // 跳过“详细描述”和“底部信息”,
    defaultScope: '___CUSTOM___:',
  },
};
