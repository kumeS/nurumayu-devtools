// ==========================================
// STRUCTURAL DUPLICATES TEST DATA (10 patterns)
// ==========================================

// DUPLICATE_GROUP: struct_001
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: easy
// if-else structure duplication
function processPayment1(amount, method) {
  if (method === 'credit') {
    console.log('Processing credit payment');
    return amount * 1.03; // 3% fee
  } else if (method === 'debit') {
    console.log('Processing debit payment');
    return amount * 1.01; // 1% fee
  } else {
    console.log('Invalid payment method');
    return null;
  }
}

function handleTransaction(sum, type) {
  if (type === 'credit') {
    console.log('Processing credit payment');
    return sum * 1.03; // 3% fee
  } else if (type === 'debit') {
    console.log('Processing debit payment');
    return sum * 1.01; // 1% fee
  } else {
    console.log('Invalid payment method');
    return null;
  }
}

// DUPLICATE_GROUP: struct_002
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: easy
// for loop structure duplication
function sumArray1(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      total += numbers[i];
    }
  }
  return total;
}

function calculatePositiveSum(values) {
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      result += values[i];
    }
  }
  return result;
}

// DUPLICATE_GROUP: struct_003
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// try-catch structure duplication
async function fetchUserData1(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

async function getUserInfo(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

// DUPLICATE_GROUP: struct_004
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// switch statement structure
function handleUserAction1(action, data) {
  switch (action) {
    case 'CREATE':
      console.log('Creating user');
      return createUser(data);
    case 'UPDATE':
      console.log('Updating user');
      return updateUser(data);
    case 'DELETE':
      console.log('Deleting user');
      return deleteUser(data);
    default:
      console.log('Unknown action');
      return null;
  }
}

function processUserRequest(operation, payload) {
  switch (operation) {
    case 'CREATE':
      console.log('Creating user');
      return createUser(payload);
    case 'UPDATE':
      console.log('Updating user');
      return updateUser(payload);
    case 'DELETE':
      console.log('Deleting user');
      return deleteUser(payload);
    default:
      console.log('Unknown action');
      return null;
  }
}

// DUPLICATE_GROUP: struct_005
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// nested if structure
function validateUser1(user) {
  if (user) {
    if (user.email) {
      if (user.email.includes('@')) {
        if (user.password) {
          if (user.password.length >= 8) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function checkUserValid(userObj) {
  if (userObj) {
    if (userObj.email) {
      if (userObj.email.includes('@')) {
        if (userObj.password) {
          if (userObj.password.length >= 8) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// DUPLICATE_GROUP: struct_006
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: easy
// while loop structure
function findElement1(array, target) {
  let index = 0;
  while (index < array.length) {
    if (array[index] === target) {
      return index;
    }
    index++;
  }
  return -1;
}

function searchInArray(list, value) {
  let position = 0;
  while (position < list.length) {
    if (list[position] === value) {
      return position;
    }
    position++;
  }
  return -1;
}

// DUPLICATE_GROUP: struct_007
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// for...of loop with conditions
function processItems1(items) {
  const results = [];
  for (const item of items) {
    if (item.status === 'active') {
      if (item.type === 'premium') {
        results.push({
          id: item.id,
          processed: true,
          priority: 'high'
        });
      }
    }
  }
  return results;
}

function handleActiveItems(collection) {
  const output = [];
  for (const element of collection) {
    if (element.status === 'active') {
      if (element.type === 'premium') {
        output.push({
          id: element.id,
          processed: true,
          priority: 'high'
        });
      }
    }
  }
  return output;
}

// DUPLICATE_GROUP: struct_008
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// complex conditional structure
function calculateDiscount1(user, order) {
  if (user.membership === 'premium') {
    if (order.total > 100) {
      return order.total * 0.2;
    } else if (order.total > 50) {
      return order.total * 0.1;
    }
  } else if (user.membership === 'standard') {
    if (order.total > 200) {
      return order.total * 0.1;
    }
  }
  return 0;
}

function getOrderDiscount(customer, purchase) {
  if (customer.membership === 'premium') {
    if (purchase.total > 100) {
      return purchase.total * 0.2;
    } else if (purchase.total > 50) {
      return purchase.total * 0.1;
    }
  } else if (customer.membership === 'standard') {
    if (purchase.total > 200) {
      return purchase.total * 0.1;
    }
  }
  return 0;
}

// DUPLICATE_GROUP: struct_009
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: medium
// try-catch-finally structure
function saveToDatabase1(data) {
  let connection = null;
  try {
    connection = openConnection();
    const result = connection.save(data);
    console.log('Data saved successfully');
    return result;
  } catch (error) {
    console.error('Failed to save data:', error);
    throw error;
  } finally {
    if (connection) {
      connection.close();
    }
  }
}

function persistData(information) {
  let dbConnection = null;
  try {
    dbConnection = openConnection();
    const outcome = dbConnection.save(information);
    console.log('Data saved successfully');
    return outcome;
  } catch (error) {
    console.error('Failed to save data:', error);
    throw error;
  } finally {
    if (dbConnection) {
      dbConnection.close();
    }
  }
}

// DUPLICATE_GROUP: struct_010
// EXPECTED_DETECTION: true
// CATEGORY: STRUCTURAL
// DIFFICULTY: hard
// complex nested structure with multiple control flows
function processUserOrders1(user) {
  if (user && user.orders) {
    for (let i = 0; i < user.orders.length; i++) {
      const order = user.orders[i];
      try {
        if (order.status === 'pending') {
          for (const item of order.items) {
            if (item.inStock) {
              item.reserved = true;
              console.log(`Reserved item: ${item.name}`);
            } else {
              console.log(`Item out of stock: ${item.name}`);
            }
          }
          order.status = 'processing';
        }
      } catch (error) {
        console.error(`Error processing order ${order.id}:`, error);
        order.status = 'error';
      }
    }
  }
}

function handleCustomerOrders(customer) {
  if (customer && customer.orders) {
    for (let i = 0; i < customer.orders.length; i++) {
      const purchase = customer.orders[i];
      try {
        if (purchase.status === 'pending') {
          for (const product of purchase.items) {
            if (product.inStock) {
              product.reserved = true;
              console.log(`Reserved item: ${product.name}`);
            } else {
              console.log(`Item out of stock: ${product.name}`);
            }
          }
          purchase.status = 'processing';
        }
      } catch (error) {
        console.error(`Error processing order ${purchase.id}:`, error);
        purchase.status = 'error';
      }
    }
  }
} 