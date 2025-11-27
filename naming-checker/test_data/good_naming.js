// ============================================
// 命名規則テストデータ - 正しい命名例
// ============================================

// ✓ 正しいキャメルケース変数
let userName = "John Doe";
let userAge = 25;
let isActive = true;
let totalCount = 100;
let maxRetryAttempts = 3;

// ✓ 正しいパスカルケースクラス
class UserModel {
    constructor(name) {
        this.name = name;
    }
}

class DatabaseConnection {
    connect() {
        console.log("Connected");
    }
}

class ApiService {
    fetchData() {
        return {};
    }
}

// ✓ 正しい定数命名（大文字スネークケース）
const MAX_USERS = 1000;
const API_ENDPOINT = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const ERROR_MESSAGE = "An error occurred";
const DATABASE_URL = "postgresql://localhost/mydb";

// ✓ 正しいキャメルケース関数
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// ✓ 正しいアロー関数
const getUserById = (id) => {
    return users.find(u => u.id === id);
};

const filterActiveUsers = (users) => {
    return users.filter(u => u.active);
};

const mapUserNames = (users) => {
    return users.map(u => u.name);
};

// ✓ 適切な変数名長
const id = 1;
const ok = true;
const reasonablyLongButNotTooLongVariableName = "test";

// ✓ Reactコンポーネント（パスカルケース）
class UserProfile extends React.Component {
    render() {
        return <div>Profile</div>;
    }
}

class NavigationBar extends React.Component {
    render() {
        return <nav>Navigation</nav>;
    }
}

// ✓ TypeScript型定義（パスカルケース）
interface UserData {
    id: number;
    name: string;
}

type ResponseType = {
    success: boolean;
    data: any;
};
