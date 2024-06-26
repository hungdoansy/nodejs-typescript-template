module.exports = {
    // this line is required for pnpm
    plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],

    semi: false,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: false,
    trailingComma: "es5",
    bracketSameLine: false,
    endOfLine: "auto",
    overrides: [
        {
            files: "*.yml",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.yaml",
            options: {
                tabWidth: 2,
            },
        },
    ],
    importOrder: [
        "<THIRD_PARTY_MODULES>",
        "^@/(app|assets|components|constants|hooks|lib|pages|store|types)(/.+)?$",
        "\\.(c|le|sc)ss$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
