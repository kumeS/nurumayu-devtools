# nurumayu-devtools

> 🚀 Web開発支援ツールキット - JavaScript開発の品質向上と効率化のための統合ソリューション

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shell Script](https://img.shields.io/badge/Shell-Bash-green.svg)](https://www.gnu.org/software/bash/)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS-blue.svg)]()
[![Status](https://img.shields.io/badge/Status-Alpha-orange.svg)]()

---

## 📑 目次

- [プロジェクト概要](#-プロジェクト概要)
- [実装ステータス](#-実装ステータス)
- [前提条件](#-前提条件)
- [インストール](#-インストール)
- [クイックスタート](#-クイックスタート)
- [統合CLIシステム](#️-統合cliシステム)
- [利用可能なツール](#-利用可能なツール)
  - [detect_dup - コード重複検出](#-detect_dup---コード重複検出)
  - [今後のツール](#-今後のツール)
- [出力形式](#-出力形式)
- [CI/CD統合](#-cicd統合)
- [テストとベンチマーク](#-テストとベンチマーク)
- [プロジェクト構造](#-プロジェクト構造)
- [開発ガイド](#-開発ガイド)
- [トラブルシューティング](#-トラブルシューティング)
- [ロードマップ](#-ロードマップ)
- [貢献方法](#-貢献方法)
- [ライセンス](#-ライセンス)

---

## 🎯 プロジェクト概要

**nurumayu-devtools** は、現代のWeb開発プロジェクトにおけるコード品質向上、保守性改善、開発効率化を総合的にサポートする統合ツールキットです。

### ✨ 主な特徴

- 🎛️ **統合CLIインターフェース**: `nurumayu-dev` コマンドで全機能を統一操作
- 🔍 **高度な重複検出**: 5段階の重複パターン分析（BASIC, TEXT, STRUCTURAL, PATTERNS, FUNCTIONAL）
- 🧪 **包括的テストスイート**: 50パターンのベンチマークデータで検証済み
- 📊 **多様な出力形式**: Console（カラー表示）、JSON、CSV形式に対応
- 🔧 **拡張可能アーキテクチャ**: 新機能追加が容易な設計
- 🎯 **CI/CD統合対応**: GitHub Actions、Jenkins等のパイプラインに統合可能
- 🛡️ **堅牢な共通ライブラリ**: エラーハンドリング、ログ機能を標準装備

---

## 📊 実装ステータス

### 全体進捗: ~40% 完成

| コンポーネント | ステータス | 進捗率 | 備考 |
|--------------|----------|--------|------|
| ✅ **統合CLIシステム** | 完成 | 100% | 全機能動作確認済み |
| ✅ **共通ライブラリ (lib/common.sh)** | 完成 | 100% | 本番環境対応可能 |
| ⚠️ **detect_dup** | 部分実装 | ~60% | 構文エラー修正中（800行目付近） |
| ✅ **テストインフラ** | 完成 | 100% | 50パターンの検証データ |
| 📋 **commentDensity** | 計画段階 | 0% | 研究フェーズ、実装未着手 |
| 📋 **その他ツール** | 未着手 | 0% | ロードマップ参照 |

### 現在利用可能な機能

- ✅ 統合CLIコマンドラインインターフェース
- ✅ 基本的なコード重複検出（5つの検出タイプ）
- ✅ 複数ウィンドウサイズでのスキャン
- ✅ JSON/CSV形式での出力
- ⚠️ 完全な機能動作は構文エラー修正後

### 既知の問題

- ⚠️ **Critical**: detect_dupスクリプトに構文エラー（約800行目付近）
- 📝 commentDensityツールは研究資料のみ存在、実装未着手

---

## 🔧 前提条件

### 必須環境

- **OS**: Linux (Ubuntu 18.04+) または macOS (10.14+)
- **Shell**: Bash 4.0 以上
- **基本ツール**:
  - `git` (バージョン管理)
  - `chmod` (権限管理)

### 推奨環境

- ターミナルでのカラー表示対応
- 開発用: Node.js (JavaScript解析用)

### バージョン確認

```bash
# Bash バージョン確認
bash --version  # 4.0以上が必要

# Git 確認
git --version
```

---

## 📥 インストール

### 手動インストール（推奨）

```bash
# 1. リポジトリをクローン
git clone https://github.com/your-username/nurumayu-devtools.git
cd nurumayu-devtools

# 2. 実行権限を付与
chmod +x nurumayu-dev

# 3. パスに追加（オプション）
sudo ln -s "$(pwd)/nurumayu-dev" /usr/local/bin/nurumayu-dev

# 4. インストール確認
nurumayu-dev version
```

### 開発者向けセットアップ

```bash
# 共通ライブラリが正しくロードされるか確認
source lib/common.sh
log_info "共通ライブラリロード成功"

# テスト実行
cd detect_dup/test_data
./run_test.sh
```

---

## 🚀 クイックスタート

### 基本的な使用方法

```bash
# ヘルプ表示
nurumayu-dev help

# バージョン確認
nurumayu-dev version

# 利用可能なコマンド一覧
nurumayu-dev list

# コード重複検出（全検出タイプ）
nurumayu-dev detect_dup --all ./src

# 特定の検出タイプのみ実行
nurumayu-dev detect_dup --text --structural ./project

# JSON出力でCI/CD統合
nurumayu-dev detect_dup --all --output json ./src > duplicates.json
```

---

## 🎛️ 統合CLIシステム

### コマンド構造

```
nurumayu-dev <command> [options] [arguments]
```

### 利用可能なコマンド

| コマンド | 説明 | ステータス | 使用例 |
|---------|------|----------|--------|
| `detect_dup` | JavaScript コード重複検出ツール | ⚠️ 部分実装 | `nurumayu-dev detect_dup --all ./src` |
| `version` | バージョン情報表示 | ✅ 利用可能 | `nurumayu-dev version` |
| `help` | ヘルプ表示 | ✅ 利用可能 | `nurumayu-dev help` |
| `list` | コマンド一覧表示 | ✅ 利用可能 | `nurumayu-dev list` |

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

## 🛠️ 利用可能なツール

### 🔍 detect_dup - コード重複検出

**ステータス**: ⚠️ 部分実装（~60%完成、構文エラー修正中）

#### 検出タイプ

| タイプ | 対象 | 検出率期待値 | 説明 |
|--------|------|-------------|------|
| **BASIC** | 単純コピー&ペースト | 95% | 完全一致または極めて類似したコードブロック |
| **TEXT** | 文字列・コメント重複 | 85% | 重複した文字列リテラル、コメント |
| **STRUCTURAL** | 制御フロー構造 | 70% | if/for/while等の構造的類似性 |
| **PATTERNS** | API・配列操作パターン | 60% | 繰り返し使われるAPIコールパターン |
| **FUNCTIONAL** | 関数・メソッド重複 | 65% | 機能的に類似した関数実装 |

#### 使用例

```bash
# 全検出タイプを実行
nurumayu-dev detect_dup --all ./src

# 特定タイプのみ
nurumayu-dev detect_dup --text --structural ./project

# 複数ウィンドウサイズでスキャン（3,5,7,10,15,20行）
nurumayu-dev detect_dup --window-scan ./src

# JSON出力でCI/CD統合
nurumayu-dev detect_dup --all --output json ./src > duplicates.json

# CSV出力で分析
nurumayu-dev detect_dup --patterns --output csv ./project > report.csv

# 詳細ログ付き実行
nurumayu-dev detect_dup --verbose --all ./src
```

#### 高度な機能

- **複数ウィンドウサイズ対応**: 3,5,7,10,15,20行の異なる粒度で検出
- **カスタム範囲スキャン**: `--range 5:15` で任意の範囲指定
- **並列処理**: 高速スキャンのための最適化
- **キャッシュ機能**: 大規模プロジェクトでの性能向上

---

### 📋 今後のツール

#### commentDensity - コメント密度分析

**ステータス**: 📋 計画段階（研究フェーズ完了、実装未着手）

**目的**: コードコメントの適切な比率を分析・測定

**研究ベース**:
- OSS平均: ~19% (コード5行に対し1行のコメント)
- 推奨範囲: プロジェクト全体で20-40%
- 関数レベル: 10-30%（Polyspace Function Comment Density標準）
- 参考文献: Arafat & Riehle (2009), He (2019), Codacy

**計画機能**:
- プロジェクト全体のコメント密度測定
- 関数レベルでの詳細分析
- 適正範囲からの逸脱警告
- CI/CDパイプラインとの統合

**実装予定**: 中期ロードマップ（6ヶ月以内）

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
    "locations": [
      "src/components/Header.js:12",
      "src/pages/Home.js:45"
    ],
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

### GitHub Actions

```yaml
name: Code Quality Check
on: [push, pull_request]

jobs:
  duplicate-detection:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup nurumayu-devtools
        run: |
          chmod +x nurumayu-dev

      - name: Run duplicate detection
        run: |
          ./nurumayu-dev detect_dup --all --output json ./src > duplicates.json

      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: duplicate-report
          path: duplicates.json

      - name: Check quality gate
        run: |
          # 重複が閾値以上の場合は失敗
          DUPLICATES=$(jq 'length' duplicates.json)
          if [ "$DUPLICATES" -gt 10 ]; then
            echo "Too many duplicates found: $DUPLICATES"
            exit 1
          fi
```

### Jenkins Pipeline

```groovy
pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'chmod +x nurumayu-dev'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                sh './nurumayu-dev detect_dup --all --output json ./src > duplicates.json'
                archiveArtifacts artifacts: 'duplicates.json', fingerprint: true
            }
        }

        stage('Quality Gate') {
            steps {
                script {
                    def duplicates = readJSON file: 'duplicates.json'
                    if (duplicates.size() > 10) {
                        error("Quality gate failed: Too many duplicates")
                    }
                }
            }
        }
    }
}
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
../detect_dup --all --output json ./ > test_results.json
```

### テスト統計

- **総重複パターン**: 50個（5つのカテゴリー × 10パターン）
- **期待検出率**: 75% (37-38パターン検出目標)
- **検出可能パターン**: 45個 (90%)
- **検出困難パターン**: 5個 (10%) - 意図的な難解ケース

### テストファイル構成

```
test_data/
├── answer_key.json           # 正解データ（期待される検出結果）
├── run_test.sh              # 自動テスト実行スクリプト
├── basic_duplicates.js      # BASIC検出タイプ用テスト
├── text_duplicates.js       # TEXT検出タイプ用テスト
├── structural_duplicates.js # STRUCTURAL検出タイプ用テスト
├── pattern_duplicates.js    # PATTERNS検出タイプ用テスト
├── functional_duplicates.js # FUNCTIONAL検出タイプ用テスト
└── semantic_clones.js       # セマンティック重複（高度なケース）
```

---

## 📁 プロジェクト構造

```
nurumayu-devtools/
├── 📄 nurumayu-dev              # ✅ メインCLIエントリーポイント
├── 📄 README.md                 # 📚 このドキュメント
├── 📄 LICENSE                   # ⚖️ MITライセンス
│
├── 📂 lib/                      # ✅ 共通ライブラリ（本番環境対応）
│   └── common.sh               # ログ、ユーティリティ、テンプレート機能
│
├── 📂 detect_dup/              # ⚠️ コード重複検出ツール（部分実装）
│   ├── 📄 detect_dup           # 実行スクリプト（1777行、構文エラー修正中）
│   ├── 📄 README.md            # detect_dup詳細説明
│   ├── 📄 開発メモ1.txt        # 開発ドキュメント
│   ├── 📄 重複パターン.txt      # パターン定義書
│   └── 📂 test_data/           # ✅ テストデータセット（完成）
│       ├── answer_key.json    # 正解データ
│       ├── run_test.sh       # テスト実行スクリプト
│       └── *.js              # 50パターンのテストファイル
│
└── 📂 commentDensity/          # 📋 コメント密度分析（計画段階）
    └── コメント密度.txt         # 研究資料・文献調査結果
```

### ステータス凡例

- ✅ **完成**: 本番環境で使用可能
- ⚠️ **部分実装**: 動作するが制限事項あり
- 📋 **計画段階**: 未実装、ロードマップ参照

---

## 👨‍💻 開発ガイド

### 新ツールの追加方法

#### 1. ツールディレクトリの作成

```bash
# 新機能用ディレクトリ作成
mkdir new_tool

# 共通ライブラリを使用してテンプレート生成
source lib/common.sh
generate_tool_template "new_tool" "./new_tool"
```

#### 2. メインCLIへの統合

`nurumayu-dev` の `main()` 関数に新しいコマンドケースを追加：

```bash
# nurumayu-dev ファイルを編集
case "$command" in
    "detect_dup"|"detect-dup")
        run_detect_dup "$@"
        ;;
    "new_tool"|"new-tool")  # 新規追加
        run_new_tool "$@"
        ;;
    # ... 他のケース
esac
```

#### 3. ヘルプの更新

- `show_help()` 関数に新コマンドを追加
- `list_commands()` 関数に新機能情報を追加
- README.mdの「利用可能なツール」セクションを更新

### 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/your-username/nurumayu-devtools.git
cd nurumayu-devtools

# ブランチを作成
git checkout -b feature/my-new-feature

# 実行権限を設定
chmod +x nurumayu-dev
chmod +x lib/common.sh

# テスト実行
./nurumayu-dev version
./nurumayu-dev list
```

### コーディング規約

- **Shell Script**: Bash 4.0+ 互換
- **エラーハンドリング**: `set -euo pipefail` を必ず設定
- **ログ出力**: `lib/common.sh` の関数を使用
  - `log_error()` - エラーメッセージ
  - `log_warn()` - 警告
  - `log_info()` - 情報
  - `log_debug()` - デバッグ用
  - `log_success()` - 成功メッセージ
- **カラーコード**: `lib/common.sh` の定数を使用
- **関数**: 小文字+アンダースコア（`my_function`）
- **定数**: 大文字+アンダースコア（`MY_CONSTANT`）

---

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### 1. 実行権限エラー

**症状**:
```
-bash: ./nurumayu-dev: Permission denied
```

**解決方法**:
```bash
chmod +x nurumayu-dev
chmod +x detect_dup/detect_dup
```

#### 2. detect_dup構文エラー

**症状**:
```
detect_dup: line 800: syntax error near unexpected token
```

**現状**: 既知の問題、修正作業中

**回避策**: 現在のところなし。修正版のリリースをお待ちください

**追跡**: GitHub Issues #[TBD]

#### 3. 共通ライブラリが読み込めない

**症状**:
```
lib/common.sh: No such file or directory
```

**解決方法**:
```bash
# プロジェクトルートから実行していることを確認
pwd  # nurumayu-devtools/ であるべき

# または絶対パスで実行
/path/to/nurumayu-devtools/nurumayu-dev
```

#### 4. カラー表示されない

**原因**: ターミナルがカラー出力に対応していない

**解決方法**:
```bash
# TERM環境変数を確認
echo $TERM  # xterm-256color などが望ましい

# 必要に応じて設定
export TERM=xterm-256color
```

### デバッグモード

```bash
# 詳細ログを有効化
export LOG_LEVEL=4  # DEBUG レベル

# コマンド実行
nurumayu-dev detect_dup --verbose --all ./src
```

---

## 📈 ロードマップ

### 短期目標（今後3ヶ月）

- 🔧 **Critical**: detect_dup構文エラーの修正
- 🧪 テストスイートの拡充と自動化
- 📊 テスト結果の可視化と比較ツール
- 📝 ドキュメントの英語版作成

### 中期目標（6ヶ月）

- 📋 **commentDensity**: コメント密度分析ツールの実装
- 🎨 CSS/SCSS 重複検出機能の追加
- 📦 依存関係分析ツールの開発
- 🔍 セキュリティスキャナーの基本実装
- 🐧 Linux パッケージ配布（apt, yum）

### 長期目標（1年）

- 🌐 Web UIダッシュボードの開発
- 🔗 IDEプラグイン（VSCode, IntelliJ）
- 📈 機械学習ベースの重複検出
- 🌍 多言語対応（TypeScript, Python, Go）
- ☁️ クラウド版の提供

### 優先度の考え方

1. **Critical**: 現在のバグ修正（detect_dup構文エラー）
2. **High**: 計画済みツールの実装（commentDensity）
3. **Medium**: 新機能追加（CSS検出、セキュリティ）
4. **Low**: 先進機能（機械学習、クラウド）

---

## 🤝 貢献方法

### バグ報告

バグを発見された場合は、以下の情報を含めてIssueを作成してください：

1. **環境情報**:
   - OS（バージョン含む）
   - Bash バージョン
   - nurumayu-dev バージョン

2. **再現手順**:
   ```bash
   # 実行したコマンド
   nurumayu-dev detect_dup --all ./src
   ```

3. **期待される動作**:
   - 何が起こるべきか

4. **実際の動作**:
   - 何が起こったか（エラーメッセージ含む）

### 機能要望

新機能のアイデアがある場合：

1. **GitHub Discussions** で提案
2. ユースケースと期待される効果を記載
3. 可能であれば、類似ツールや参考資料のリンク

### Pull Request

コードの貢献を歓迎します！

1. **Fork** リポジトリをフォーク
2. **Branch** 新しいブランチを作成
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
3. **Commit** 変更をコミット
   ```bash
   git commit -m "Add awesome feature"
   ```
4. **Push** ブランチにプッシュ
   ```bash
   git push origin feature/my-awesome-feature
   ```
5. **Pull Request** GitHubでPR作成

### コントリビューションガイドライン

- ✅ コーディング規約に従う
- ✅ テストを追加/更新
- ✅ ドキュメントを更新
- ✅ コミットメッセージは明確に
- ✅ 1つのPRで1つの機能/修正

---

## 🙏 謝辞

このプロジェクトは以下の研究・ツールに影響を受けています：

- **重複検出研究**: jscpd, jsinspect
- **コメント密度研究**: Arafat & Riehle (2009), He (2019)
- **シェルスクリプト**: Bash Best Practices

---

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

Copyright (c) 2025 nurumayu-devtools contributors

---

## 📞 サポート & コミュニケーション

- 🐛 **バグ報告**: [GitHub Issues](https://github.com/your-username/nurumayu-devtools/issues)
- 💡 **機能要望・議論**: [GitHub Discussions](https://github.com/your-username/nurumayu-devtools/discussions)
- 📧 **直接連絡**: [TBD - メールアドレス設定後]
- 📖 **ドキュメント**: このREADME および各ツールのREADME.md

---

## 📊 プロジェクト統計

- **コード行数**: ~2,000行（Bash）
- **テストパターン**: 50パターン
- **対応出力形式**: 3種類（Console, JSON, CSV）
- **検出アルゴリズム**: 5カテゴリー
- **メンテナー**: [募集中]

---

**Happy Coding! 🚀**

---

## 🔄 更新履歴

### v1.0.0 (開発中)
- ✅ 統合CLIシステム実装
- ✅ detect_dup 基本機能実装（部分完成）
- ✅ 包括的テストスイート作成
- ⚠️ 構文エラー修正作業中
- 📋 commentDensity 計画策定

---

*最終更新: 2025年1月*
