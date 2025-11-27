// ============================================
// 命名規則テストデータ - 違反例（50パターン）
// ============================================

// ========================================
// 1. キャメルケース違反（15パターン）
// ========================================

// ✗ スネークケース変数
let user_name = "John";
let user_age = 25;
let is_active = true;
let total_count = 100;
let max_retry_attempts = 3;

// ✗ パスカルケース変数（変数はキャメルケースであるべき）
let UserProfile = {};
let DatabaseConfig = {};
let ApiResponse = {};

// ✗ 全て小文字
let username = "john";
let useraddress = "Tokyo";

// ✗ 大文字始まり
let Username = "John";
let MaxCount = 100;

// ✗ 数字始まり（構文エラーだが検出テスト用）
// let 1stUser = "test";

// ✗ 特殊文字含む
// let user$name = "test";
// let user-name = "test";

// ========================================
// 2. パスカルケース違反（10パターン）
// ========================================

// ✗ クラス名がキャメルケース
class userModel {
    constructor() {}
}

class databaseConnection {
    connect() {}
}

class apiService {
    fetchData() {}
}

// ✗ クラス名がスネークケース
class user_profile {
    render() {}
}

class database_manager {
    query() {}
}

// ✗ クラス名が全て小文字
class user {
    save() {}
}

class product {
    delete() {}
}

// ✗ クラス名が全て大文字
class USER {
    update() {}
}

class ADMIN {
    permissions() {}
}

// ✗ クラス名にアンダースコア
class User_Manager {
    manage() {}
}

// ========================================
// 3. 定数命名違反（10パターン）
// ========================================

// ✗ 定数がキャメルケース
const maxUsers = 1000;
const apiEndpoint = "https://api.example.com";
const defaultTimeout = 5000;
const errorMessage = "Error";

// ✗ 定数がパスカルケース
const MaxRetries = 5;
const ApiKey = "abc123";
const DatabaseUrl = "postgresql://localhost";

// ✗ 定数が小文字スネークケース
const max_connections = 100;
const api_version = "v1";
const default_language = "en";

// ========================================
// 4. 関数名違反（8パターン）
// ========================================

// ✗ 関数名がスネークケース
function calculate_total(items) {
    return 0;
}

function validate_email(email) {
    return true;
}

function format_currency(amount) {
    return `$${amount}`;
}

// ✗ 関数名がパスカルケース
function CalculateDiscount(price) {
    return price * 0.9;
}

function ValidatePassword(pwd) {
    return pwd.length > 8;
}

// ✗ 関数名が全て小文字
function getuser() {
    return {};
}

function deleteitem() {}

// ✗ 関数名にアンダースコア混在
function get_User_ById(id) {
    return null;
}

// ========================================
// 5. 変数名長違反（7パターン）
// ========================================

// ✗ 短すぎる（1文字）
let x = 10;
let y = 20;
let z = 30;

// ✗ 長すぎる（50文字超過）
let thisIsAnExtremelyLongVariableNameThatExceedsTheMaximumAllowedLengthForVariableNames = "test";
let anotherVeryLongVariableNameThatShouldTriggerALengthViolationWarning = "data";

// ✗ 意味のない短縮
let usr = "user";
let btn = "button";

// ========================================
// 6. 予約語類似（補足パターン）
// ========================================

// ⚠ 予約語に近い命名（混乱を招く）
let Var = "variable";
let Class = {};
let Function = () => {};

// ========================================
// 追加の複雑なケース
// ========================================

// ✗ アロー関数でのスネークケース
const get_user_data = (id) => {
    return fetch(`/api/users/${id}`);
};

const delete_user_account = (userId) => {
    return apiCall('DELETE', `/users/${userId}`);
};

// ✗ React コンポーネントがキャメルケース
class userDashboard extends React.Component {
    render() {
        return <div>Dashboard</div>;
    }
}

class navigationMenu extends React.Component {
    render() {
        return <nav>Menu</nav>;
    }
}

// ✗ 混在したスタイル
let user_Name = "混在";
let User_name = "混在2";
let USER_name = "混在3";
