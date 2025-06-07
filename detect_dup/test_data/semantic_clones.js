// =============================================
// SEMANTIC CLONES TEST DATA (5 patterns - Detection Difficult)
// =============================================

// DUPLICATE_GROUP: semantic_001
// EXPECTED_DETECTION: false
// CATEGORY: SEMANTIC
// DIFFICULTY: hard
// Same functionality, different implementations - conditional logic
function validateAge1(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function validateAge2(age) {
  return age >= 18 ? true : false;
}

function validateAge3(age) {
  return age >= 18;
}

function validateAge4(age) {
  return !(age < 18);
}

// DUPLICATE_GROUP: semantic_002
// EXPECTED_DETECTION: false
// CATEGORY: SEMANTIC
// DIFFICULTY: hard
// Same functionality - different array processing approaches
function getActiveUsers1(users) {
  const result = [];
  users.forEach(user => {
    if (user.active) {
      result.push(user);
    }
  });
  return result;
}

function getActiveUsers2(users) {
  return users.filter(user => user.active);
}

function getActiveUsers3(users) {
  const activeUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      activeUsers.push(users[i]);
    }
  }
  return activeUsers;
}

function getActiveUsers4(users) {
  return users.reduce((acc, user) => {
    if (user.active) {
      acc.push(user);
    }
    return acc;
  }, []);
}

// DUPLICATE_GROUP: semantic_003  
// EXPECTED_DETECTION: false
// CATEGORY: SEMANTIC
// DIFFICULTY: hard
// Same calculation logic with different variable names
function calculateTotalPrice(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function calculateOrderAmount(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.cost * product.count;
  }
  return sum;
}

function computeCartValue(goods) {
  let amount = 0;
  for (const good of goods) {
    amount += good.unitPrice * good.qty;
  }
  return amount;
}

// DUPLICATE_GROUP: semantic_004
// EXPECTED_DETECTION: false
// CATEGORY: SEMANTIC
// DIFFICULTY: hard
// Same async pattern with different syntax
function fetchUserData1(id) {
  return fetch(`/api/users/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error(error);
      return null;
    });
}

async function fetchUserData2(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function fetchUserData3(id) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open('GET', `/api/users/${id}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Failed to fetch'));
      }
    };
    xhr.onerror = () => reject(new Error('Network error'));
    xhr.send();
  });
}

// DUPLICATE_GROUP: semantic_005
// EXPECTED_DETECTION: false  
// CATEGORY: SEMANTIC
// DIFFICULTY: hard
// Same object construction patterns
function createUser1(name, email, age) {
  return {
    name: name,
    email: email,
    age: age,
    createdAt: new Date().toISOString()
  };
}

function createUser2(name, email, age) {
  const user = {};
  user.name = name;
  user.email = email;
  user.age = age;
  user.createdAt = new Date().toISOString();
  return user;
}

function createUser3(name, email, age) {
  const user = Object.assign({}, {
    name,
    email,
    age,
    createdAt: new Date().toISOString()
  });
  return user;
}

function createUser4(name, email, age) {
  return Object.freeze({
    name,
    email,
    age,
    createdAt: new Date().toISOString()
  });
} 