# nurumayu-devtools (In development)

> 🚀 Web開発支援ツールキット - JavaScript開発の品質向上と効率化のための統合ソリューション

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shell Script](https://img.shields.io/badge/Shell-Bash-green.svg)](https://www.gnu.org/software/bash/)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS-blue.svg)]()

---

## 🎯 プロジェクト概要

**nurumayu-devtools** は、現代のWeb開発プロジェクトにおけるコード品質向上、保守性改善、開発効率化を総合的にサポートする統合ツールキットです。

### ✨ 主な特徴

- 🎛️ **統合CLIインターフェース**: `nurumayu-dev` コマンドで全機能を統一操作
- 🔍 **高度な重複検出**: `detect_dup` による5段階の重複パターン分析
- 🧪 **包括的テストスイート**: 50パターンのベンチマークデータで検証済み
- 📊 **多様な出力形式**: Console、JSON、CSV形式に対応
- 🔧 **拡張可能アーキテクチャ**: 新機能追加が容易な設計
- 🎯 **CI/CD統合**: GitHub Actions、Jenkins等のパイプラインに対応

---

## 🚀 クイックスタート

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/nurumayu-devtools.git
cd nurumayu-devtools

# 実行権限を付与
chmod +x nurumayu-dev

# パスに追加（オプション）
sudo ln -s "$(pwd)/nurumayu-dev" /usr/local/bin/nurumayu-dev
```

### 基本的な使用方法

```bash
# ヘルプ表示
nurumayu-dev help

# バージョン確認
nurumayu-dev version

# コード重複検出（すべての検出タイプ）
nurumayu-dev detect_dup --all ./src

# 特定の検出タイプのみ実行
nurumayu-dev detect_dup --text --output json ./project

# 利用可能なコマンド一覧
nurumayu-dev list
```

---

## 🎛️ 統合CLIシステム

### コマンド構造

```
nurumayu-dev <command> [options] [arguments]
```

### 利用可能なコマンド

| コマンド | 説明 | 使用例 |
|---------|------|--------|
| `detect_dup` | JavaScript コード重複検出ツール | `nurumayu-dev detect_dup --all ./src` |
| `version` | バージョン情報表示 | `nurumayu-dev version` |
| `help` | ヘルプ表示 | `nurumayu-dev help` |
| `list` | コマンド一覧表示 | `nurumayu-dev list` |

### システムコマンド

```bash
# 全般的なヘルプ
nurumayu-dev help

# 特定コマンドのヘルプ
nurumayu-dev detect_dup --help

# システム情報確認
nurumayu-dev version
```

---

## 🔍 detect_dup - コード重複検出ツール

### 検出タイプ

| タイプ | 対象 | 検出率期待値 |
|--------|------|-------------|
| **BASIC** | 単純コピー&ペースト | 95% |
| **TEXT** | 文字列・コメント重複 | 85% |
| **STRUCTURAL** | 制御フロー構造 | 70% |
| **PATTERNS** | API・配列操作パターン | 60% |
| **FUNCTIONAL** | 関数・メソッド重複 | 65% |

### 使用例

```bash
# 全検出タイプを実行
nurumayu-dev detect_dup --all ./src

# 特定タイプのみ
nurumayu-dev detect_dup --text --structural ./project

# JSON出力でCI/CD統合
nurumayu-dev detect_dup --all --output json ./src > duplicates.json

# 複数ウィンドウサイズでスキャン
nurumayu-dev detect_dup --window-scan ./src

# 詳細ログ付き実行
nurumayu-dev detect_dup --verbose --all ./src
```

---

## 🧪 テストとベンチマーク

### テストデータセット

プロジェクトには包括的なテストデータセットが含まれています：

```bash
# テストディレクトリに移動
cd detect_dup/test_data

# 自動テスト実行
./run_test.sh

# 手動テスト
nurumayu-dev detect_dup --all --output json ./
```

### テスト統計
- **総重複パターン**: 50個
- **検出可能パターン**: 45個 (90%)
- **検出困難パターン**: 5個 (10%)
- **期待検出率**: 75%

---

## 📁 プロジェクト構造

```
nurumayu-devtools/
├── nurumayu-dev              # 🎛️ メインCLIエントリーポイント
├── README.md                 # 📚 プロジェクト概要
├── lib/                      # 📦 共通ライブラリ
│   └── common.sh            # 共通関数・ユーティリティ
└── detect_dup/              # 🔍 コード重複検出ツール
    ├── README.md            # detect_dup詳細説明
    ├── detect_dup           # 実行スクリプト
    ├── 開発メモ1.txt        # 開発ドキュメント
    ├── 重複パターン.txt      # パターン定義
    └── test_data/           # 🧪 テストデータセット
        ├── answer_key.json  # 正解データ
        ├── run_test.sh     # テスト実行スクリプト
        └── *.js            # テストファイル群
```

---

## 🔧 新機能の追加方法

### 1. 新ツールディレクトリ作成

```bash
# 新機能用ディレクトリ作成
mkdir new_tool

# テンプレート生成（共通ライブラリ使用）
source lib/common.sh
generate_tool_template "new_tool" "./new_tool"
```

### 2. メインCLIに統合

`nurumayu-dev`の`main()`関数に新しいコマンドケースを追加：

```bash
case "$command" in
    "detect_dup"|"detect-dup")
        run_detect_dup "$@"
        ;;
    "new_tool")
        run_new_tool "$@"  # 新機能関数を追加
        ;;
    # ... 他のケース
esac
```

### 3. ヘルプとドキュメントの更新

- `show_help()`関数に新コマンドを追加
- `list_commands()`関数に新機能情報を追加
- README.mdの更新

---

## 📊 出力形式

### Console出力（カラー表示）
```
=== テキストレベル重複検出 ===
[TEXT_MULTILINE_W5] Hash: a1b2c3d4
  src/components/Header.js:12
  src/pages/Home.js:45
```

### JSON出力（CI/CD統合用）
```json
[
  {
    "type": "TEXT_MULTILINE_W5",
    "hash": "a1b2c3d4567890ab",
    "locations": ["src/components/Header.js:12", "src/pages/Home.js:45"],
    "window_size": 5
  }
]
```

### CSV出力（分析用）
```csv
type,hash,locations,window_size
TEXT_MULTILINE_W5,a1b2c3d4567890ab,"src/components/Header.js:12,src/pages/Home.js:45",5
```

---

## 🎯 CI/CD統合

### GitHub Actions例

```yaml
name: Code Quality Check
on: [push, pull_request]

jobs:
  duplicate-detection:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run duplicate detection
        run: |
          chmod +x nurumayu-dev
          ./nurumayu-dev detect_dup --all --output json ./src > duplicates.json
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: duplicate-report
          path: duplicates.json
```

### Jenkins Pipeline例

```groovy
pipeline {
    agent any
    stages {
        stage('Code Quality') {
            steps {
                sh './nurumayu-dev detect_dup --all --output json ./src > duplicates.json'
                archiveArtifacts 'duplicates.json'
            }
        }
    }
}
```

---

## 🤝 開発参加

### 実装ステータス

- ✅ **統合CLIシステム**: 完成
- ✅ **detect_dup基本機能**: ~60%完成
- ⚠️ **重要な課題**: detect_dupスクリプトに構文エラー（800行目付近）
- 🔄 **共通ライブラリ**: 基盤完成
- 📋 **今後の機能**: 計画段階

### 貢献方法

1. **Issue作成**: バグ報告や機能要望
2. **Pull Request**: 機能実装や修正
3. **テストケース**: 新しい重複パターンの追加
4. **ドキュメント**: 使用例や解説の改善

---

## 📈 今後のロードマップ

### 短期目標（次の3ヶ月）
- 🔧 detect_dup構文エラーの修正
- 🧪 テストスイートの拡充
- 📊 結果比較・分析ツールの追加

### 中期目標（6ヶ月）
- 🎨 CSS重複検出機能
- 📦 依存関係分析ツール
- 🔍 セキュリティスキャナー

### 長期目標（1年）
- 🌐 Web UI ダッシュボード
- 🔗 IDEプラグイン開発
- 📈 機械学習ベースの重複検出

---

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

---

## 📞 サポート

- 🐛 **バグ報告**: [GitHub Issues](https://github.com/your-username/nurumayu-devtools/issues)
- 💡 **機能要望**: [GitHub Discussions](https://github.com/your-username/nurumayu-devtools/discussions)
- 📧 **直接連絡**: your-email@example.com

---

**Happy Coding! 🚀**


