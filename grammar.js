/**
 * @file Snapshot format for the cargo-insta snapshot testing library
 * @author Cameron <cameron.studdstreet@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "snap",
  rules: {
    source_file: $ => seq(
      $.header,
      $.body, 
    ),
    header: $ => seq(
      $.tripleDash,
      $.headerContent,
      $.tripleDash,
    ),
    tripleDash: $ => "---\n",
    headerContent: $ => seq(
      $.headerSource,
      $.headerExpression,
    ),
    headerSource: $ => seq(
      "source: ",
      $.restOfLine,
      "\n",
    ),
    headerExpression: $ => seq(
      "expression: ",
      $.restOfLine,
      "\n",
    ),
    restOfLine: $ => new RustRegex('([^\n]+)'),
    body: $ => repeat1(new RustRegex('(.)')),
  }
});
