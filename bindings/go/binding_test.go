package tree_sitter_snap_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_snap "github.com/tree-sitter/tree-sitter-snap/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_snap.Language())
	if language == nil {
		t.Errorf("Error loading cargo-insta snapshot grammar")
	}
}
