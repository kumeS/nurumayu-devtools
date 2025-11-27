// ============================================
// 本番環境で安全なコード（検出されないべき）
// ============================================

// 適切なロギングフレームワーク（文字列内なので検出されない）
import logger from './logger';

logger.info("Application started");
logger.error("An error occurred", error);

// console.errorは実際には検出されるが、本番環境でのエラーログとして
// 許容される場合がある（重要度WARNING）

// 正しいエラーハンドリング
try {
  performOperation();
} catch (error) {
  // これは検出される（WARNING）が、本番でも必要な場合がある
  console.error("Operation failed:", error);
}

// アナリティクス（検出されない）
const analytics = {
  track: (event) => {
    // Send to analytics service
  }
};

analytics.track("page_view");

// 通常のロジック
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 説明的なコメント
// このコードは本番環境で安全に動作します
// デバッグコードは含まれていません

export { calculateTotal };
