import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/coverage/**'],
    },
    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    {
        rules: {
            eqeqeq: ['error', 'always'],
            'prefer-const': 'error',
            'no-var': 'error',
            'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
            'vue/multi-word-component-names': 'off',
        },
    },
    skipFormatting,
);
