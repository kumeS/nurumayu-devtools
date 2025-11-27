// ============================================
// console-check テストデータ
// ============================================
// 期待される検出: 11件（誤検出: 0件）

// ============================================
// 1. 基本パターン（検出されるべき）
// ============================================

// [1] CRITICAL: console.log
console.log("Basic debug message");

// [2] CRITICAL: console.debug
console.debug("Detailed debugging information");

// [3] WARNING: console.warn
console.warn("Warning message");

// [4] WARNING: console.error (ログフレームワークとして許容される場合もあるが検出)
console.error("Error occurred during processing");

// [5] INFO: console.info
console.info("Informational message");

// [6] WARNING: console.trace
console.trace("Stack trace");

// [7] CRITICAL: alert
alert("Debug alert for testing");

// [8] CRITICAL: debugger
debugger;

// ============================================
// 2. 複数行パターン（検出されるべき）
// ============================================

// [9] CRITICAL: 複数行のconsole.log
console.log(
  "This is a multiline",
  "log statement",
  "for testing purposes"
);

// ============================================
// 3. 複雑なパターン（検出されるべき）
// ============================================

// [10] CRITICAL: オブジェクトのログ
const userData = { name: "test", age: 30 };
console.log("User data:", userData);

// [11] WARNING: 条件付きログ
if (process.env.DEBUG) {
  console.warn("Debug mode is enabled");
}

// ============================================
// 4. 検出されないべきパターン（誤検出防止）
// ============================================

// コメントアウトされたデバッグコード（検出されない）
// console.log("This is commented out");

/*
 * ブロックコメント内のデバッグコード（検出されない）
 * console.debug("Also commented");
 */

// 文字列内のパターン（検出されない）
const message = "Use console.log for debugging";
const tutorial = 'You can use console.debug("value") to inspect variables';

// 関数名や変数名に含まれる場合（検出されない）
function logConsoleMessage() {
  return "This is a logger function";
}

const consoleHandler = {
  log: () => {}
};

// ============================================
// 5. エッジケース
// ============================================

// 間接的な呼び出し（現在の実装では検出困難、将来の改善対象）
const log = console.log;
// log("Indirect call"); // これは検出困難

// テンプレートリテラル内
const value = 42;
console.log(`The value is: ${value}`); // [12] CRITICAL: 検出される

// ============================================
// 期待される検出結果まとめ:
// ============================================
// CRITICAL: 7件 (console.log x3, console.debug x1, alert x1, debugger x1, template literal x1)
// WARNING: 3件 (console.warn x2, console.error x1, console.trace x1)
// INFO: 1件 (console.info x1)
// 総計: 11件
// 誤検出: 0件（コメント、文字列内、関数名は除外）
