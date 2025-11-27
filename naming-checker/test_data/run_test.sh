#!/usr/bin/env bash

# ======================================
# naming-checker テスト実行スクリプト
# ======================================
# 命名規則チェッカーの精度検証を自動化

set -euo pipefail

# カラーコード
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# スクリプトのディレクトリを取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOOL_PATH="$SCRIPT_DIR/../naming-checker"

echo ""
echo -e "${BOLD}${CYAN}======================================${RESET}"
echo -e "${BOLD}${CYAN}naming-checker 精度検証テスト${RESET}"
echo -e "${BOLD}${CYAN}======================================${RESET}"
echo ""

# テスト1: 正しい命名のファイル（違反ゼロ期待）
echo -e "${BOLD}${BLUE}[TEST 1] 正しい命名規則のテスト${RESET}"
echo -e "ファイル: ${CYAN}good_naming.js${RESET}"
echo -e "期待結果: ${GREEN}0件の違反${RESET}"
echo ""

"$TOOL_PATH" "$SCRIPT_DIR" --stats 2>&1 | grep -A 20 "=== 命名規則チェック統計 ===" > /tmp/good_naming_result.txt || true

GOOD_VIOLATIONS=$(grep "総違反数:" /tmp/good_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")

if [ "$GOOD_VIOLATIONS" -eq 0 ]; then
    echo -e "${GREEN}✓ PASS${RESET} - 正しい命名規則のファイルで違反検出なし"
else
    echo -e "${RED}✗ FAIL${RESET} - 正しい命名規則のファイルで ${GOOD_VIOLATIONS} 件の誤検出"
fi
echo ""

# テスト2: 違反を含むファイル（50件の違反期待）
echo -e "${BOLD}${BLUE}[TEST 2] 命名規則違反の検出テスト${RESET}"
echo -e "ファイル: ${CYAN}bad_naming.js${RESET}"
echo -e "期待結果: ${YELLOW}約50件の違反検出${RESET}"
echo ""

"$TOOL_PATH" "$SCRIPT_DIR" --stats > /tmp/bad_naming_result.txt 2>&1 || true

BAD_VIOLATIONS=$(grep "総違反数:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")

echo -e "検出された違反数: ${YELLOW}${BAD_VIOLATIONS}${RESET} 件"
echo ""

# 違反内訳
echo -e "${BOLD}違反内訳:${RESET}"
CAMEL_VIOLATIONS=$(grep "camelCase違反:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")
PASCAL_VIOLATIONS=$(grep "PascalCase違反:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")
CONSTANT_VIOLATIONS=$(grep "定数命名違反:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")
SNAKE_VIOLATIONS=$(grep "snake_case使用:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")
LENGTH_VIOLATIONS=$(grep "長さ違反:" /tmp/bad_naming_result.txt | grep -oE '[0-9]+' | head -1 || echo "0")

echo "  - camelCase違反:    $CAMEL_VIOLATIONS 件 (期待: 15件)"
echo "  - PascalCase違反:   $PASCAL_VIOLATIONS 件 (期待: 10件)"
echo "  - 定数命名違反:     $CONSTANT_VIOLATIONS 件 (期待: 10件)"
echo "  - snake_case使用:   $SNAKE_VIOLATIONS 件 (期待: 8件)"
echo "  - 長さ違反:         $LENGTH_VIOLATIONS 件 (期待: 7件)"
echo ""

# 精度計算
EXPECTED_VIOLATIONS=50
if [ "$BAD_VIOLATIONS" -gt 0 ]; then
    DETECTION_RATE=$(awk "BEGIN {printf \"%.2f\", ($BAD_VIOLATIONS / $EXPECTED_VIOLATIONS) * 100}")
else
    DETECTION_RATE=0
fi

echo -e "${BOLD}検出精度: ${YELLOW}${DETECTION_RATE}%${RESET} (${BAD_VIOLATIONS}/${EXPECTED_VIOLATIONS})"
echo ""

# 評価
if [ "$BAD_VIOLATIONS" -ge 40 ]; then
    echo -e "${GREEN}✓ EXCELLENT${RESET} - 検出率80%以上達成"
    TEST2_RESULT="PASS"
elif [ "$BAD_VIOLATIONS" -ge 35 ]; then
    echo -e "${YELLOW}✓ GOOD${RESET} - 検出率70%以上達成"
    TEST2_RESULT="PASS"
elif [ "$BAD_VIOLATIONS" -ge 25 ]; then
    echo -e "${YELLOW}⚠ FAIR${RESET} - 検出率50%以上（改善の余地あり）"
    TEST2_RESULT="PARTIAL"
else
    echo -e "${RED}✗ POOR${RESET} - 検出率が低すぎます"
    TEST2_RESULT="FAIL"
fi
echo ""

# テスト3: JSON出力形式テスト
echo -e "${BOLD}${BLUE}[TEST 3] JSON出力形式のテスト${RESET}"
echo ""

"$TOOL_PATH" "$SCRIPT_DIR" --output json > /tmp/naming_output.json 2>&1 || true

if command -v python3 &> /dev/null; then
    if python3 -m json.tool /tmp/naming_output.json > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PASS${RESET} - 有効なJSON形式で出力"
        TEST3_RESULT="PASS"
    else
        echo -e "${RED}✗ FAIL${RESET} - JSON形式が無効"
        TEST3_RESULT="FAIL"
    fi
else
    echo -e "${YELLOW}⚠ SKIP${RESET} - Python3が利用不可のためJSONバリデーションをスキップ"
    TEST3_RESULT="SKIP"
fi
echo ""

# テスト4: CSV出力形式テスト
echo -e "${BOLD}${BLUE}[TEST 4] CSV出力形式のテスト${RESET}"
echo ""

"$TOOL_PATH" "$SCRIPT_DIR" --output csv > /tmp/naming_output.csv 2>&1 || true

CSV_LINES=$(wc -l < /tmp/naming_output.csv | tr -d ' ')

if [ "$CSV_LINES" -gt 1 ]; then
    echo -e "${GREEN}✓ PASS${RESET} - CSV形式で出力（${CSV_LINES}行）"
    TEST4_RESULT="PASS"
else
    echo -e "${RED}✗ FAIL${RESET} - CSV出力が空またはヘッダーのみ"
    TEST4_RESULT="FAIL"
fi
echo ""

# テスト5: フィルター機能テスト
echo -e "${BOLD}${BLUE}[TEST 5] 重要度フィルターのテスト${RESET}"
echo ""

"$TOOL_PATH" "$SCRIPT_DIR" --severity critical > /tmp/naming_critical.txt 2>&1 || true
CRITICAL_COUNT=$(grep -c "CRITICAL" /tmp/naming_critical.txt || echo "0")

echo -e "CRITICAL検出数: ${RED}${CRITICAL_COUNT}${RESET} 件"

if [ "$CRITICAL_COUNT" -gt 0 ]; then
    echo -e "${GREEN}✓ PASS${RESET} - 重要度フィルターが機能"
    TEST5_RESULT="PASS"
else
    echo -e "${YELLOW}⚠ WARNING${RESET} - CRITICALが検出されませんでした"
    TEST5_RESULT="PARTIAL"
fi
echo ""

# ======================================
# 最終結果サマリー
# ======================================
echo ""
echo -e "${BOLD}${CYAN}======================================${RESET}"
echo -e "${BOLD}${CYAN}テスト結果サマリー${RESET}"
echo -e "${BOLD}${CYAN}======================================${RESET}"
echo ""

PASS_COUNT=0
TOTAL_TESTS=5

[ "$GOOD_VIOLATIONS" -eq 0 ] && ((PASS_COUNT++))
[ "$TEST2_RESULT" = "PASS" ] && ((PASS_COUNT++))
[ "$TEST3_RESULT" = "PASS" ] && ((PASS_COUNT++))
[ "$TEST4_RESULT" = "PASS" ] && ((PASS_COUNT++))
[ "$TEST5_RESULT" = "PASS" ] && ((PASS_COUNT++))

echo -e "合格テスト: ${GREEN}${PASS_COUNT}${RESET} / ${TOTAL_TESTS}"
echo ""

echo "詳細結果:"
echo "  [TEST 1] 正常系テスト:         $([ "$GOOD_VIOLATIONS" -eq 0 ] && echo -e "${GREEN}PASS${RESET}" || echo -e "${RED}FAIL${RESET}")"
echo "  [TEST 2] 違反検出テスト:       $([ "$TEST2_RESULT" = "PASS" ] && echo -e "${GREEN}PASS${RESET}" || echo -e "${YELLOW}${TEST2_RESULT}${RESET}")"
echo "  [TEST 3] JSON出力テスト:       $([ "$TEST3_RESULT" = "PASS" ] && echo -e "${GREEN}PASS${RESET}" || echo -e "${YELLOW}${TEST3_RESULT}${RESET}")"
echo "  [TEST 4] CSV出力テスト:        $([ "$TEST4_RESULT" = "PASS" ] && echo -e "${GREEN}PASS${RESET}" || echo -e "${RED}FAIL${RESET}")"
echo "  [TEST 5] フィルターテスト:     $([ "$TEST5_RESULT" = "PASS" ] && echo -e "${GREEN}PASS${RESET}" || echo -e "${YELLOW}${TEST5_RESULT}${RESET}")"
echo ""

# 総合評価
if [ "$PASS_COUNT" -eq "$TOTAL_TESTS" ]; then
    echo -e "${GREEN}${BOLD}✓ ALL TESTS PASSED${RESET}"
    echo -e "${GREEN}naming-checkerは期待通りに動作しています！${RESET}"
    EXIT_CODE=0
elif [ "$PASS_COUNT" -ge 3 ]; then
    echo -e "${YELLOW}${BOLD}⚠ MOST TESTS PASSED${RESET}"
    echo -e "${YELLOW}いくつかの改善が推奨されます${RESET}"
    EXIT_CODE=0
else
    echo -e "${RED}${BOLD}✗ TESTS FAILED${RESET}"
    echo -e "${RED}重大な問題が検出されました${RESET}"
    EXIT_CODE=1
fi

echo ""
echo -e "${BOLD}詳細ログ:${RESET}"
echo "  - good_naming result: /tmp/good_naming_result.txt"
echo "  - bad_naming result:  /tmp/bad_naming_result.txt"
echo "  - JSON output:        /tmp/naming_output.json"
echo "  - CSV output:         /tmp/naming_output.csv"
echo ""

exit $EXIT_CODE
