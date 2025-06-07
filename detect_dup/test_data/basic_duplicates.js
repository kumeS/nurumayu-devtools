// ========================================
// BASIC DUPLICATES TEST DATA (5 patterns)
// ========================================

// DUPLICATE_GROUP: basic_001
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
function calculateSum1(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// DUPLICATE_GROUP: basic_001
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
function calculateSum2(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// DUPLICATE_GROUP: basic_002
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
const userValidation1 = {
  validateEmail: function(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
  validatePhone: function(phone) {
    return phone.length >= 10;
  }
};

// DUPLICATE_GROUP: basic_002
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
const userValidation2 = {
  validateEmail: function(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
  validatePhone: function(phone) {
    return phone.length >= 10;
  }
};

// DUPLICATE_GROUP: basic_003
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
class Logger1 {
  constructor(name) {
    this.name = name;
    this.logs = [];
  }
  
  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${this.name}: ${message}`);
  }
  
  getLogs() {
    return this.logs;
  }
}

// DUPLICATE_GROUP: basic_003
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
class Logger2 {
  constructor(name) {
    this.name = name;
    this.logs = [];
  }
  
  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${this.name}: ${message}`);
  }
  
  getLogs() {
    return this.logs;
  }
}

// DUPLICATE_GROUP: basic_004
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
if (user.isActive && user.hasPermission) {
  console.log('User has access');
  updateLastLogin(user.id);
  redirectToHomepage();
} else {
  console.log('Access denied');
  showErrorMessage();
}

// 同じファイル内での重複
// DUPLICATE_GROUP: basic_004
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
if (admin.isActive && admin.hasPermission) {
  console.log('User has access');
  updateLastLogin(admin.id);
  redirectToHomepage();
} else {
  console.log('Access denied');
  showErrorMessage();
}

// DUPLICATE_GROUP: basic_005
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
function processOrder(order) {
  // Validate order
  if (!order || !order.items || order.items.length === 0) {
    throw new Error('Invalid order');
  }
  
  // Calculate total
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }
  
  // Apply discount
  if (order.discountCode) {
    total *= 0.9;
  }
  
  return total;
}

// DUPLICATE_GROUP: basic_005
// EXPECTED_DETECTION: true
// CATEGORY: BASIC
// DIFFICULTY: easy
function processShoppingCart(cart) {
  // Validate order
  if (!cart || !cart.items || cart.items.length === 0) {
    throw new Error('Invalid order');
  }
  
  // Calculate total
  let total = 0;
  for (const item of cart.items) {
    total += item.price * item.quantity;
  }
  
  // Apply discount
  if (cart.discountCode) {
    total *= 0.9;
  }
  
  return total;
} 