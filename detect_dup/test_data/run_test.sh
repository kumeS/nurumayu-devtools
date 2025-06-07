#!/bin/bash

# ======================================
# detect_dup テストランナー
# ======================================

echo "🧪 detect_dup テストデータセット実行"
echo "================================="

# ベースディレクトリの設定
BASE_DIR=$(dirname "$0")
DETECT_DUP="../detect_dup"
RESULTS_DIR="$BASE_DIR/results"

# 結果ディレクトリを作成
mkdir -p "$RESULTS_DIR"

# 実行権限確認
if [ ! -x "$DETECT_DUP" ]; then
    echo "⚠️  detect_dupスクリプトに実行権限がありません"
    chmod +x "$DETECT_DUP"
    echo "✅ 実行権限を追加しました"
fi

# タイムスタンプ
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo ""
echo "📊 テスト実行開始: $TIMESTAMP"
echo ""

# 1. 全体テスト（全タイプ検出）
echo "🔍 1. 全体重複検出テスト"
echo "---------------------------------"
if "$DETECT_DUP" --all --output json "$BASE_DIR" > "$RESULTS_DIR/all_duplicates_$TIMESTAMP.json" 2>&1; then
    echo "✅ 全体テスト完了: $RESULTS_DIR/all_duplicates_$TIMESTAMP.json"
else
    echo "❌ 全体テスト失敗"
fi

# 2. 個別カテゴリテスト
categories=("text" "structural" "patterns" "functional" "basic")

for category in "${categories[@]}"; do
    echo ""
    echo "🔍 2.$((${#categories[@]} - ${#categories[@]} + $(echo "${categories[@]}" | tr ' ' '\n' | grep -n "$category" | cut -d: -f1))). ${category^^}重複検出テスト"
    echo "---------------------------------"
    
    if "$DETECT_DUP" --$category --output json "$BASE_DIR" > "$RESULTS_DIR/${category}_duplicates_$TIMESTAMP.json" 2>&1; then
        echo "✅ $category テスト完了: $RESULTS_DIR/${category}_duplicates_$TIMESTAMP.json"
    else
        echo "❌ $category テスト失敗"
    fi
done

# 3. パフォーマンステスト
echo ""
echo "🏃 3. パフォーマンステスト"
echo "---------------------------------"
echo "実行時間計測中..."

start_time=$(date +%s.%N)
"$DETECT_DUP" --all --quiet "$BASE_DIR" > /dev/null 2>&1
end_time=$(date +%s.%N)

execution_time=$(echo "$end_time - $start_time" | bc -l)
echo "✅ 実行時間: ${execution_time}秒"

# 4. 統計情報の取得
echo ""
echo "📈 4. 統計情報"
echo "---------------------------------"

total_files=$(find "$BASE_DIR" -name "*.js" | wc -l)
total_lines=$(find "$BASE_DIR" -name "*.js" -exec wc -l {} + | tail -n 1 | awk '{print $1}')

echo "📁 総ファイル数: $total_files"
echo "📝 総行数: $total_lines"

# 結果ファイルが存在する場合の統計
if [ -f "$RESULTS_DIR/all_duplicates_$TIMESTAMP.json" ]; then
    # JSONが有効かチェック
    if python3 -m json.tool "$RESULTS_DIR/all_duplicates_$TIMESTAMP.json" > /dev/null 2>&1; then
        echo "📊 結果ファイル: 有効なJSON形式"
    else
        echo "⚠️  結果ファイル: JSON形式ではありません（エラーログの可能性）"
    fi
fi

echo ""
echo "🎯 テスト完了"
echo "================================="
echo "📂 結果ディレクトリ: $RESULTS_DIR"
echo "📋 正解データ: $BASE_DIR/answer_key.json"
echo ""
echo "次のステップ:"
echo "1. 結果ファイルを確認"
echo "2. answer_key.jsonと比較して精度を計算"
echo "3. パフォーマンス分析"
echo "" 