# detect-dup

> Webアプリ開発支援ツールキット：JavaScript コード重複検出（モジュラー版）

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Shell Script](https://img.shields.io/badge/Shell-Bash-green.svg)](https://www.gnu.org/software/bash/)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS-blue.svg)]()

---

## 🗒️ 概要 (Overview)

`detect-dup` は、**Webアプリケーション開発**における品質向上とメンテナンス性改善をサポートする  
高度な **コード重複検出ツールキット** です。

### ✨ 主な特徴

- 📝 **5つの検出カテゴリ**：テキスト、構造、パターン、関数、基本的重複を個別に実行可能
- 🔍 **複数ウィンドウサイズ対応**：異なるサイズで一括スキャン、最適な検出粒度を発見
- 📊 **多様な出力形式**：Console（カラー表示）、JSON、CSV形式に対応
- ⚡ **高性能**：並列処理とキャッシュ機能による高速スキャン
- 🛡️ **堅牢性**：クロスプラットフォーム対応、エラーハンドリング強化
- 🎯 **CI/CD統合**：GitHub Actions、Jenkins等のパイプラインに簡単統合
- 🧪 **包括的テストスイート**：50パターンのベンチマークデータで検証済み

---

## 🚀 インストール

### Homebrew（推奨）
```bash
# Homebrew Tap を追加
brew tap your-username/detect-dup-tap

# detect-dup をインストール
brew install detect-dup
```

### 手動インストール
```bash
# リポジトリをクローン
git clone https://github.com/your-username/detect-dup.git
cd detect-dup

# 実行権限を付与
chmod +x detect_dup

# パスに追加（オプション）
sudo ln -s "$(pwd)/detect_dup" /usr/local/bin/detect-dup
```

---

## 💡 使い方

### 基本的な使用法

```bash
# すべての検出を実行（デフォルト）
detect-dup ./src

# 特定の検出タイプのみ実行
detect-dup --basic ./project 5
detect-dup --structural --patterns ./src
```

### 📐 ウィンドウサイズ機能

```bash
# 複数ウィンドウサイズで自動スキャン (3,5,7,10,15,20)
detect-dup --window-scan ./src

# カスタム範囲でスキャン
detect-dup --range 5:15 ./project

# 特定検出タイプ + 複数ウィンドウ
detect-dup --text --window-scan ./src
detect-dup --basic --range 3:8 ./project
```

### 📊 出力形式オプション

```bash
# JSON形式で出力（CI/CD統合用）
detect-dup --all --output json ./src > duplicates.json

# CSV形式で出力（分析用）
detect-dup --patterns --output csv ./project > report.csv

# 詳細ログ付きコンソール出力
detect-dup --verbose --all ./src
```

---

## 🎛️ コマンドオプション

### 検出タイプ

| オプション | 説明 | 対象 |
|-----------|------|------|
| `-a, --all` | すべての検出を実行（デフォルト） | 全パターン |
| `-t, --text` | テキストレベル重複検出 | 多行テキスト、文字列 |
| `-s, --structural` | 構造的重複検出 | if-else、ループ、try-catch |
| `-p, --patterns` | パターンベース検出 | API使用、配列操作 |
| `-f, --functional` | 関数・機能的重複検出 | 関数定義、メソッド |
| `-b, --basic` | 基本的重複検出 | 単純コピー&ペースト |

### ウィンドウサイズオプション

| オプション | 説明 | 例 |
|-----------|------|-----|
| `[WINDOW_SIZE]` | 固定ウィンドウサイズ | `detect-dup ./src 7` |
| `-w, --window-scan` | 複数サイズで自動スキャン | `3,5,7,10,15,20` |
| `-r, --range START:END` | カスタム範囲スキャン | `-r 5:12` |

### 出力・その他

| オプション | 説明 | 値 |
|-----------|------|-----|
| `-o, --output FORMAT` | 出力形式選択 | `console`, `json`, `csv` |
| `-v, --verbose` | 詳細出力モード | 進捗・デバッグ情報表示 |
| `-l, --list` | 検出タイプ一覧表示 | ヘルプ情報 |
| `-h, --help` | ヘルプ表示 | 使用方法 |

---

## 📋 検出タイプ詳細

### 📝 TEXT（テキストレベル）
- **多行テキスト重複**：指定行数での完全一致検出
- **文字列リテラル重複**：同一文字列定数の検出
- **コメント重複**：重複コメントパターン
- **変数名パターン**：類似命名規則の発見

### 🏗️ STRUCTURAL（構造的）
- **制御フロー重複**：if-else、switch文の構造比較
- **ループ構造重複**：for、while文の抽象化比較
- **try-catch構造**：例外処理パターンの検出
- **ネスト構造**：深いネスト構造の類似性分析

### 🎯 PATTERNS（パターンベース）
- **API使用パターン**：同一ライブラリの類似利用
- **配列操作チェーン**：map、filter、reduce組み合わせ
- **Promiseチェーン**：非同期処理パターン
- **正規表現パターン**：同一regex利用箇所

### 🔧 FUNCTIONAL（関数・機能的）
- **関数定義重複**：同一機能の異なる実装
- **メソッド重複**：クラスメソッドの類似実装
- **アロー関数パターン**：ES6+関数記法の重複
- **コールバック重複**：イベントハンドラーの類似性

### ⚡ BASIC（基本的）
- **多行重複**：指定行数での基本的重複
- **コピー&ペースト検出**：直接的な重複コード
- **識別子正規化**：変数名を抽象化した比較

---

## 🧪 テストデータセット

detect_dupには包括的なテストデータセットが含まれており、検出精度とパフォーマンスを定量的に評価できます。

### 📊 テストデータ構成

#### 📁 ファイル構成（`test_data/`）
```
test_data/
├── README.md              # テスト詳細説明
├── answer_key.json        # 正解データ（期待結果）
├── run_test.sh           # テスト実行スクリプト
├── basic_duplicates.js    # 基本的重複パターン (5パターン)
├── text_duplicates.js     # テキストレベル重複 (10パターン)
├── structural_duplicates.js # 構造的重複 (10パターン)
├── pattern_duplicates.js  # パターンベース重複 (10パターン)
├── functional_duplicates.js # 関数的重複 (10パターン)
└── semantic_clones.js     # セマンティッククローン (5パターン)
```

#### 🎯 テストパターン分類

| カテゴリ | パターン数 | 検出期待度 | 内容 |
|---------|-----------|-----------|------|
| **BASIC** | 5 | 95% | 単純コピー&ペースト |
| **TEXT** | 10 | 85% | 文字列・コメント重複 |
| **STRUCTURAL** | 10 | 70% | 制御フロー構造 |
| **PATTERNS** | 10 | 60% | API・配列操作パターン |
| **FUNCTIONAL** | 10 | 65% | 関数・メソッド重複 |
| **SEMANTIC** | 5 | 10% | セマンティッククローン（検出困難） |

### 🚀 テスト実行方法

#### 基本テスト
```bash
# テストディレクトリに移動
cd detect_dup/test_data

# 自動テストスクリプト実行
./run_test.sh

# 手動テスト
../detect_dup --all --output json ./
../detect_dup --text --output json ./
../detect_dup --structural --output json ./
```

#### パフォーマンス評価
```bash
# 結果をJSONで保存
../detect_dup --all --output json ./ > results.json

# 統計情報取得
wc -l *.js  # 総行数
find . -name "*.js" | wc -l  # ファイル数
```

### 📈 評価指標

#### 精度指標
- **Precision (精度)**: TP / (TP + FP)
- **Recall (再現率)**: TP / (TP + FN)  
- **F1-Score**: 2 * (Precision * Recall) / (Precision + Recall)

#### 期待されるパフォーマンス
- **全体検出率**: 75%
- **総重複パターン**: 50個
- **検出可能パターン**: 45個 (90%)
- **検出困難パターン**: 5個 (10%)

#### カテゴリ別期待値
- **高精度** (90%+): BASIC、TEXT系
- **中精度** (60-75%): STRUCTURAL、PATTERNS、FUNCTIONAL系
- **低精度** (10-20%): SEMANTIC系（将来の改善目標）

### 🔍 テストデータの特徴

#### ✅ 検出可能パターン (45パターン)
- 完全一致重複
- 変数名のみ変更
- 構造的類似性
- パターンベース重複

#### ⚠️ 検出困難パターン (5パターン)
- セマンティッククローン
- ES6+構文の違い
- 実装アプローチの違い
- 同一機能・異なる表現

---

## 📊 出力例

### Console出力（カラー表示）
```
=== テキストレベル重複検出 (ウィンドウサイズ: 5) ===
[TEXT_MULTILINE_W5] Hash: a1b2c3d4 (Window: 5)
  src/components/Header.js:12
  src/pages/Home.js:45

=== 構造的重複検出 ===
[STRUCTURAL_IF] Hash: e5f6g7h8
  src/utils/validation.js:23
  src/services/auth.js:67
  src/components/Form.js:89

=== パターンベース重複検出 ===
[PATTERN_ARRAY] Hash: i9j0k1l2
  src/data/processors.js:34
  src/helpers/transform.js:12
```

### JSON出力（CI/CD統合用）
```json
[
  {
    "type": "TEXT_MULTILINE_W5",
    "hash": "a1b2c3d4567890ab",
    "locations": ["src/components/Header.js:12", "src/pages/Home.js:45"],
    "window_size": 5
  },
  {
    "type": "STRUCTURAL_IF",
    "hash": "e5f6g7h8901234cd",
    "locations": ["src/utils/validation.js:23", "src/services/auth.js:67"]
  }
]
```

### CSV出力（分析用）
```csv
type,hash,locations,window_size
TEXT_MULTILINE_W5,a1b2c3d4567890ab,"src/components/Header.js:12,src/pages/Home.js:45",5
STRUCTURAL_IF,e5f6g7h8901234cd,"src/utils/validation.js:23,src/services/auth.js:67",
```

---

## 🔧 CI/CD統合

### GitHub Actions
```yaml
name: Code Duplication Check

on: [push, pull_request]

jobs:
  duplication-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install detect-dup
        run: |
          curl -L https://github.com/your-username/detect-dup/releases/latest/download/detect-dup -o detect-dup
          chmod +x detect-dup
      
      - name: Run duplication detection
        run: |
          ./detect-dup --all --output json ./src > duplicates.json
          
      - name: Check for duplications
        run: |
          if [ -s duplicates.json ] && [ "$(cat duplicates.json)" != "[]" ]; then
            echo "重複コードが検出されました"
            cat duplicates.json
            exit 1
          else
            echo "重複コードは検出されませんでした"
          fi
      
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: duplication-report
          path: duplicates.json
```

### Jenkins Pipeline
```groovy
pipeline {
    agent any
    
    stages {
        stage('Duplication Check') {
            steps {
                sh 'detect-dup --all --output json ./src > duplicates.json'
                
                script {
                    def duplicates = readJSON file: 'duplicates.json'
                    if (duplicates.size() > 0) {
                        currentBuild.result = 'UNSTABLE'
                        echo "重複コードが ${duplicates.size()} 件検出されました"
                    }
                }
                
                archiveArtifacts artifacts: 'duplicates.json'
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'duplicates.json',
                    reportName: 'Duplication Report'
                ])
            }
        }
    }
}
```

---

## ⚙️ 設定ファイル

### `.detect-dup.conf`（将来実装予定）
```bash
# デフォルト設定
DEFAULT_WINDOW=5
OUTPUT_FORMAT=console
VERBOSE=false

# 除外パターン
IGNORE_PATTERNS=(
    "node_modules/*"
    "*.min.js"
    "dist/*"
    "build/*"
    "coverage/*"
)

# 検出設定
MIN_DUPLICATE_LINES=3
MAX_WINDOW_SIZE=20
ENABLE_CACHE=true

# 出力設定
SHOW_CONTEXT=true
COLOR_OUTPUT=true
```

---

## 🧪 使用例・ベストプラクティス

### 開発ワークフロー統合

#### 1. **コードレビュー前チェック**
```bash
# プルリクエスト作成前に実行
detect-dup --all --verbose ./src

# 新規追加ファイルのみチェック
git diff --name-only --diff-filter=A | grep "\.js$" | xargs -r detect-dup --basic
```

#### 2. **リファクタリング計画**
```bash
# 段階的なウィンドウサイズで重複の粒度を分析
detect-dup --range 3:15 --output csv ./src > refactor-candidates.csv

# 関数レベルの重複に集中
detect-dup --functional --structural --output json ./src
```

#### 3. **プロジェクト健全性監視**
```bash
# 定期的な健全性チェック（週次バッチ）
detect-dup --all --output json ./src > weekly-duplicates.json

# 重複率の計算
TOTAL_LINES=$(find ./src -name "*.js" -exec wc -l {} + | tail -1 | awk '{print $1}')
DUPLICATE_COUNT=$(cat weekly-duplicates.json | jq length)
echo "重複率: $(echo "scale=2; $DUPLICATE_COUNT / $TOTAL_LINES * 100" | bc)%"
```

### パフォーマンス最適化

#### 大規模プロジェクト対応
```bash
# 段階的検出で効率化
detect-dup --basic ./src                    # 高速な基本チェック
detect-dup --structural --patterns ./src    # 中程度の詳細検出
detect-dup --text --functional ./src        # 詳細な分析
```

#### 特定ディレクトリ集中
```bash
# コンポーネントディレクトリのみ
detect-dup --all ./src/components

# 複数ディレクトリの個別分析
for dir in ./src/components ./src/utils ./src/services; do
    echo "=== $dir ==="
    detect-dup --all "$dir"
done
```

---

## 🎯 開発ロードマップ

### v1.0.0 ✅ **完了**
- [x] 基本的な重複検出機能
- [x] 5つの検出カテゴリー実装
- [x] 複数ウィンドウサイズ対応
- [x] JSON/CSV出力形式
- [x] クロスプラットフォーム対応

### v1.1.0 🚧 **開発中**
- [ ] 設定ファイル対応（`.detect-dup.conf`）
- [ ] 除外パターン機能（`.gitignore`スタイル）
- [ ] キャッシュ機能による高速化
- [ ] HTML形式レポート出力
- [ ] プラグインアーキテクチャ基盤

### v1.2.0 📋 **計画中**
- [ ] AST（抽象構文木）ベース解析
- [ ] TypeScript対応（`.ts`, `.tsx`）
- [ ] セマンティッククローン検出
- [ ] GitHub/GitLab統合プラグイン
- [ ] Web UI ダッシュボード

### v2.0.0 🔮 **将来計画**
- [ ] 機械学習ベースの重複検出
- [ ] リアルタイム監視機能
- [ ] 自動リファクタリング提案
- [ ] IDE統合（VS Code拡張）
- [ ] クラウドサービス版

---

## 🤝 Contributing

### 開発参加方法

1. **Issue作成** - バグ報告・機能要求
2. **Fork & Clone** - リポジトリをフォーク
3. **ブランチ作成** - `feature/new-detection` 等
4. **開発** - コード変更・テスト追加
5. **Pull Request** - 変更内容の説明

### 開発環境セットアップ

```bash
# リポジトリクローン
git clone https://github.com/your-username/detect-dup.git
cd detect-dup

# 開発用依存関係インストール
npm install  # テストツール等

# テスト実行
./test/run_tests.sh

# 開発版実行
./detect_dup_modular.sh --help
```

### コントリビューションガイドライン

- **コードスタイル**: ShellCheck準拠
- **テスト**: 新機能には必ずテストを追加
- **ドキュメント**: README・コメントの更新
- **互換性**: 既存機能の破壊的変更禁止

詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

---

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照してください。

---

## 🆘 サポート・お問い合わせ

### トラブルシューティング

#### よくある問題

**Q: `realpath: command not found` エラーが発生する**
```bash
# macOSの場合、coreutilsをインストール
brew install coreutils

# または、Python3が利用可能であれば自動で代替処理されます
```

**Q: 大きなプロジェクトで処理が遅い**
```bash
# 段階的検出で効率化
detect-dup --basic ./src  # まず高速チェック

# 並列処理が可能な環境では
find ./src -name "*.js" | xargs -P $(nproc) -I {} detect-dup {}
```

**Q: 結果が空/重複が検出されない**
```bash
# 詳細ログで問題を特定
detect-dup --verbose --all ./src

# ファイル数確認
find ./src -name "*.js" | wc -l
```

### サポートチャンネル

- 🐛 **バグ報告**: [GitHub Issues](https://github.com/your-username/detect-dup/issues)
- 💡 **機能要求**: [GitHub Discussions](https://github.com/your-username/detect-dup/discussions)
- 📧 **その他**: support@detect-dup.dev
- 📖 **ドキュメント**: [Wiki](https://github.com/your-username/detect-dup/wiki)

---

## 🔗 関連リンク

- **公式サイト**: https://detect-dup.dev
- **GitHub**: https://github.com/your-username/detect-dup
- **Homebrew Tap**: https://github.com/your-username/homebrew-detect-dup
- **Docker Hub**: https://hub.docker.com/r/detectdup/detect-dup
- **NPM Package**: https://www.npmjs.com/package/detect-dup-cli

---

*最終更新: 2025年6月*