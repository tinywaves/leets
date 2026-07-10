import { defineConfig } from '@dhzh/eslint-config';

export default defineConfig({
  configs: {
    unicorn: {
      overrides: {
        'unicorn/prefer-spread': 'off',
      },
    },
  },
});
