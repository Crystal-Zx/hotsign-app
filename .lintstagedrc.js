export default {
  '*.{js,jsx,ts,tsx,mjs,cjs}': [
    'npm run lint:prettier',
    'npm run lint:eslint',
    'npm run lint:spellcheck',
  ],
  '*.{json,less,scss,html,md}': ['npm run lint:prettier', 'npm run lint:spellcheck'],
};
