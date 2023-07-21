module.exports = {
    root: true,
    env: {
        node: true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        "@vue/typescript/recommended"
    ],
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "parserOptions": {
        "sourceType":"module",
        "ecmaVersion": 2020,
    },
    "settings": {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.ts',
                    '.scss',
                    '.vue'
                ]
            }
        }
    },
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "vue/multi-word-component-names": "off",
        "vue/no-v-for-template-key": "off",
        "vue/no-multiple-template-root": "off",
        "no-consile": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": "off",
        "prefer-const": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-empty": "off",
        "no-undef":"off",
    },
    // overrides: [
    //     {
    //         files: [
    //             '**/__tests__/*.{j,t}s?(x)',
    //             '**/tests/unit/**/*.spec.{j,t}s?(x)'
    //         ],
    //         env: {
    //             jest: true
    //         }
    //     }
    // ]
}
