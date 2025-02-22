// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    eslintPluginUnicorn.configs['flat/recommended'],
    tseslint.configs.recommendedTypeChecked,
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        ignores: [
            '.cache',
            '.git',
            'dist',
            'docs',
            'misc',
            'node_modules',
            'temp',
            'eslint.config.mjs',
            'src/api_gen/**',
        ],
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    },
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],

            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'off',

            '@typescript-eslint/no-inferrable-types': [
                'error',
                {
                    ignoreParameters: true,
                },
            ],

            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-enum-comparison': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/only-throw-error': 'off',
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/return-await': ['error', 'always'],

            '@typescript-eslint/typedef': [
                'error',
                {
                    parameter: true,
                    propertyDeclaration: true,
                },
            ],

            'import/extensions': [
                'error',
                'never',
                {
                    ignorePackages: true,
                    pattern: {
                        json: 'always',
                    },
                },
            ],

            'import/no-useless-path-segments': [
                'error',
                {
                    noUselessIndex: true,
                },
            ],
            'import/no-relative-parent-imports': 'error',

            'import/no-extraneous-dependencies': 'error',
            'import/no-unresolved': 'off',

            'import/order': [
                'error',
                {
                    alphabetize: {
                        caseInsensitive: true,
                        order: 'asc',
                    },
                    pathGroups: [
                        {
                            pattern: '@app/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@config/**',
                            group: 'internal',
                        },
                        {
                            pattern: '@lang/**',
                            group: 'internal',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin', 'object'],

                    groups: [
                        ['builtin', 'external', 'object', 'type'],
                        ['internal', 'unknown', 'parent', 'sibling', 'index'],
                    ],

                    'newlines-between': 'always',
                },
            ],

            'no-return-await': 'off',
            'no-unused-vars': 'off',
            'prefer-const': 'off',

            quotes: [
                'error',
                'single',
                {
                    allowTemplateLiterals: true,
                },
            ],

            'sort-imports': [
                'error',
                {
                    allowSeparatedGroups: true,
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                },
            ],

            'unicorn/prefer-node-protocol': 'error',
            'unicorn/prefer-top-level-await': 'off',
            'unicorn/no-null': 'off',
        },
    }
);
