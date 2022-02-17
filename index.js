module.exports = {
  "rules": {
    "color-no-invalid-hex": true,

    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,

    "named-grid-areas-no-invalid": true,

    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,

    "string-no-newline": true,

    "unit-no-unknown": true,

    "custom-property-no-missing-var-function": true,

    "property-no-unknown": true,

    "keyframe-declaration-no-important": true,

    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,

    "block-no-empty": true,

    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,

    "media-feature-name-no-unknown": true,

    "at-rule-no-unknown": true,

    "comment-no-empty": true,

    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,

    "alpha-value-notation": "number",

    "color-function-notation": "modern",

    "length-zero-no-unit": true,

    "function-url-no-scheme-relative": true,

    "number-max-precision": 4,

    "shorthand-property-no-redundant-values": true,

    "value-no-vendor-prefix": true,

    "property-no-vendor-prefix": true,

    "declaration-block-single-line-max-declarations": 1,

    "selector-max-attribute": 2,
    "selector-max-class": 3,
    "selector-max-combinators": 2,
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 1,
    "selector-max-pseudo-class": 2,
    "selector-max-type": 1,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",

    "media-feature-name-no-vendor-prefix": true,

    "at-rule-no-vendor-prefix": true,

    "max-nesting-depth": 2,

    "no-unknown-animations": true,

    "color-hex-case": "lower",
    "color-hex-length": "short",

    "font-family-name-quotes": "always-where-recommended",

    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",

    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,

    "string-quotes": "double",

    "unit-case": "lower",

    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    "property-case": "lower",

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",

    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": "always-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-type-case": "lower",

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    "rule-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never-single-line",

    "at-rule-empty-line-before": ["always", {
      "except": [
        "first-nested",
        "blockless-after-blockless"
      ],
      "ignore": ["after-comment"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",

    "comment-empty-line-before": "always",
    "comment-whitespace-inside": "always",

    "indentation": [2, { "baseIndentLevel": 1 }],
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "no-empty-first-line": true,
    "no-irregular-whitespace": true,
  },
}
