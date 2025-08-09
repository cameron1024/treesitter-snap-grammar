import XCTest
import SwiftTreeSitter
import TreeSitterSnap

final class TreeSitterSnapTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_snap())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading cargo-insta snapshot grammar")
    }
}
