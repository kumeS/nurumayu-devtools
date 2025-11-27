# naming-checker - JavaScript/TypeScript 命名規則チェッカー

## 概要

`naming-checker`は、JavaScript/TypeScriptプロジェクトにおける命名規則違反を自動検出するツールです。コーディング規約の統一性を確保し、コード品質の向上を支援します。

## ステータス

**⚠️ アルファ版（開発中）**

- バージョン: 1.0.0-alpha
- 実装状況: ~60%完成
- 既知の問題: 複数ファイルのスキャン時にエラーハンドリングの問題あり

## 機能

### 検出パターン

1. **snake_case違反** - 変数・関数がスネークケースを使用
   - ❌ `let user_name = "John"`
   - ✅ `let userName = "John"`

2. **定数命名違反** - 定数が大文字スネークケースでない
   - ❌ `const maxUsers = 100`
   - ✅ `const MAX_USERS = 100`

3. **クラス命名違反** - クラス名がPascalCaseでない
   - ❌ `class userModel {}`
   - ✅ `class UserModel {}`

4. **変数名長違反** - 変数名が短すぎる/長すぎる
   - ❌ `let x = 1` (短すぎる)
   - ✅ `let userId = 1`

## インストール

```bash
# リポジトリをクローン
cd nurumayu-devtools/naming-checker

# 実行権限を付与
chmod +x naming-checker

# テスト実行
./naming-checker test_data
```

## 使用方法

### 基本的な使用

```bash
# ディレクトリをスキャン
./naming-checker ./src

# JSON出力
./naming-checker --output json ./src > report.json

# CSV出力
./naming-checker --output csv ./src > report.csv

# 統計情報付き
./naming-checker --stats ./project
```

### オプション

- `-h, --help` - ヘルプを表示
- `-o, --output <format>` - 出力形式 (console/json/csv)
- `--stats` - 統計情報を表示
- `--allow-snake` - スネークケースを許可
- `--min-length <n>` - 最小変数名長 (デフォルト: 2)
- `--max-length <n>` - 最大変数名長 (デフォルト: 50)

## テストデータ

`test_data/`ディレクトリには検証用のテストファイルが含まれています：

- `good_naming.js` - 正しい命名規則の例
- `bad_naming.js` - 50パターンの命名規則違反
- `answer_key.json` - 期待される検出結果
- `run_test.sh` - 自動テストスクリプト

### テスト実行

```bash
cd test_data
./run_test.sh
```

## 出力例

### Console出力

```
[INFO] Scanning directory: ./src

✗ [SNAKE_CASE] src/user.js:10
  Variable 'user_name' uses snake_case

✗ [CONSTANT] src/config.js:5
  Constant 'apiKey' should be UPPER_SNAKE_CASE

✗ [PASCAL_CASE] src/models.js:15
  Class 'userModel' should be PascalCase
```

### JSON出力

```json
{
  "tool": "naming-checker",
  "version": "1.0.0",
  "violations": [
    {
      "file": "src/user.js",
      "line": 10,
      "type": "SNAKE_CASE",
      "message": "Variable 'user_name' uses snake_case"
    }
  ],
  "summary": {
    "total_files": 5,
    "total_violations": 12
  }
}
```

## CI/CD統合

### GitHub Actions

```yaml
name: Naming Convention Check

on: [push, pull_request]

jobs:
  naming-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run naming-checker
        run: |
          chmod +x naming-checker/naming-checker
          ./naming-checker/naming-checker ./src --output json > naming-report.json
      
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: naming-report
          path: naming-report.json
```

## 既知の問題と制限事項

### 現在の問題

1. **複数ファイルスキャン時のエラー** - 大規模プロジェクトで最初のファイルのみ処理される場合がある
2. **set -euo pipefail との相互作用** - common.shからの設定が原因でエラーハンドリングに問題
3. **部分的な検出** - 一部の命名パターンが検出されない場合がある

### 技術的な課題

- Bashのプロセス置換とサブシェルでの変数スコープ問題
- エラーハンドリングモードの最適化が必要
- より堅牢な正規表現パターンマッチングが必要

## 今後の改善予定

### 短期 (v1.0.0リリースまで)

- [ ] 複数ファイルスキャンの安定化
- [ ] エラーハンドリングの改善
- [ ] テストカバレッジ100%達成

### 中期 (v1.1.0)

- [ ] TypeScript型定義の検証
- [ ] カスタム命名規則のサポート
- [ ] 自動修正機能（--fix フラグ）

### 長期 (v2.0.0)

- [ ] ESLint プラグインとしての提供
- [ ] エディタ統合 (VS Code拡張)
- [ ] 機械学習ベースの命名推奨

## 開発メモ

### デバッグ時の発見事項

1. **Bashのサブシェル問題**: `while ... done < <(find ...)` パターンはサブシェルで実行され、親シェルの変数が更新されない
2. **set -e の影響**: common.shの`set -euo pipefail`が全スクリプトに適用され、想定外の終了が発生
3. **カラーコード**: common.shは`NC`(No Color)を使用、`RESET`は未定義のため別途定義が必要

### 推奨される代替実装

より堅牢な実装には以下を検討：
- Node.jsベースのツールへの移行
- eslint-plugin としての実装
- Python + AST解析による実装

## 貢献

バグ報告や機能要望は、GitHubのIssueでお願いします。

## ライセンス

MIT License

## 作成者

nurumayu-devtools プロジェクト

---

**注意**: このツールは現在開発中です。本番環境での使用前に十分なテストを行ってください。
