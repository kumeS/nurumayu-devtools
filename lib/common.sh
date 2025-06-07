#!/bin/bash

# ======================================
# nurumayu-dev 共通ライブラリ
# ======================================

# 共通設定
set -euo pipefail

# カラー定義
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly PURPLE='\033[0;35m'
readonly CYAN='\033[0;36m'
readonly NC='\033[0m' # No Color

# ログレベル定義
readonly LOG_ERROR=1
readonly LOG_WARN=2
readonly LOG_INFO=3
readonly LOG_DEBUG=4

# デフォルトログレベル
LOG_LEVEL=${LOG_LEVEL:-$LOG_INFO}

# ログ出力関数
log_error() {
    if [ $LOG_LEVEL -ge $LOG_ERROR ]; then
        echo -e "${RED}[ERROR]${NC} $1" >&2
    fi
}

log_warn() {
    if [ $LOG_LEVEL -ge $LOG_WARN ]; then
        echo -e "${YELLOW}[WARN]${NC} $1" >&2
    fi
}

log_info() {
    if [ $LOG_LEVEL -ge $LOG_INFO ]; then
        echo -e "${BLUE}[INFO]${NC} $1"
    fi
}

log_debug() {
    if [ $LOG_LEVEL -ge $LOG_DEBUG ]; then
        echo -e "${CYAN}[DEBUG]${NC} $1"
    fi
}

# 成功メッセージ
log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# エラー終了
die() {
    log_error "$1"
    exit 1
}

# ファイル存在確認
check_file_exists() {
    local file="$1"
    if [ ! -f "$file" ]; then
        die "ファイルが見つかりません: $file"
    fi
}

# 実行権限確認・付与
ensure_executable() {
    local file="$1"
    check_file_exists "$file"
    
    if [ ! -x "$file" ]; then
        log_warn "実行権限がありません。権限を追加しています: $file"
        chmod +x "$file"
        log_success "実行権限を追加しました: $file"
    fi
}

# プロジェクトルート取得
get_project_root() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[1]}")" && pwd)"
    echo "$script_dir"
}

# 設定値取得
get_config() {
    local key="$1"
    local default="${2:-}"
    local value="${!key:-$default}"
    echo "$value"
}

# タイムスタンプ取得
get_timestamp() {
    date +"%Y-%m-%d %H:%M:%S"
}

# プログレスバー表示
show_progress() {
    local current=$1
    local total=$2
    local description="${3:-}"
    
    local percent=$((current * 100 / total))
    local completed=$((current * 50 / total))
    local remaining=$((50 - completed))
    
    printf "\r${BLUE}[${NC}"
    printf "%${completed}s" | tr ' ' '='
    printf "%${remaining}s" | tr ' ' '-'
    printf "${BLUE}]${NC} %3d%% %s" $percent "$description"
    
    if [ $current -eq $total ]; then
        echo ""
        log_success "完了: $description"
    fi
}

# JSON出力フォーマット
json_output() {
    local key="$1"
    local value="$2"
    echo "  \"$key\": \"$value\""
}

# CSV出力フォーマット
csv_output() {
    local IFS=','
    echo "$*"
}

# 一時ディレクトリ作成
create_temp_dir() {
    local prefix="${1:-nurumayu}"
    mktemp -d -t "${prefix}.XXXXXX"
}

# クリーンアップ関数
cleanup_temp() {
    local temp_dir="$1"
    if [ -d "$temp_dir" ]; then
        rm -rf "$temp_dir"
        log_debug "一時ディレクトリを削除しました: $temp_dir"
    fi
}

# 新機能テンプレート生成
generate_tool_template() {
    local tool_name="$1"
    local tool_dir="$2"
    
    mkdir -p "$tool_dir"
    
    cat > "$tool_dir/$tool_name" << EOF
#!/bin/bash

# ======================================
# $tool_name - nurumayu-dev tool
# ======================================

set -euo pipefail

# 共通ライブラリ読み込み
SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
source "\$SCRIPT_DIR/../lib/common.sh"

# ヘルプ表示
show_help() {
    echo "使用方法: $tool_name [options] [arguments]"
    echo ""
    echo "オプション:"
    echo "  -h, --help     このヘルプを表示"
    echo "  -v, --verbose  詳細出力"
    echo ""
}

# メイン処理
main() {
    local verbose=false
    
    while [[ \$# -gt 0 ]]; do
        case \$1 in
            -h|--help)
                show_help
                exit 0
                ;;
            -v|--verbose)
                LOG_LEVEL=\$LOG_DEBUG
                verbose=true
                shift
                ;;
            *)
                break
                ;;
        esac
    done
    
    log_info "$tool_name を実行中..."
    
    # TODO: ここに機能を実装
    log_warn "まだ実装されていません"
    
    log_success "$tool_name 完了"
}

main "\$@"
EOF
    
    chmod +x "$tool_dir/$tool_name"
    log_success "新しいツールテンプレートを作成しました: $tool_dir/$tool_name"
}

# バージョン比較
version_compare() {
    local version1="$1"
    local version2="$2"
    
    if [[ "$version1" == "$version2" ]]; then
        echo "0"
    elif [[ "$version1" < "$version2" ]]; then
        echo "-1"
    else
        echo "1"
    fi
}

# パッケージマネージャー検出
detect_package_manager() {
    if command -v npm >/dev/null 2>&1; then
        echo "npm"
    elif command -v yarn >/dev/null 2>&1; then
        echo "yarn"
    elif command -v pnpm >/dev/null 2>&1; then
        echo "pnpm"
    else
        echo "none"
    fi
}

# Git情報取得
get_git_info() {
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        local branch=$(git branch --show-current 2>/dev/null || echo "unknown")
        local commit=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
        echo "branch:$branch,commit:$commit"
    else
        echo "not-git-repo"
    fi
} 