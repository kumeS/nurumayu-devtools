// ==========================================
// PATTERN DUPLICATES TEST DATA (10 patterns)
// ==========================================

// DUPLICATE_GROUP: pattern_001
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// Array method chaining patterns
function processNumbers1(numbers) {
  return numbers
    .filter(n => n > 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
}

function calculatePositiveDoubled(values) {
  return values
    .filter(val => val > 0)
    .map(val => val * 2)
    .reduce((total, val) => total + val, 0);
}

// DUPLICATE_GROUP: pattern_002
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// Promise chaining patterns
function fetchAndProcessUser1(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => ({ ...user, processed: true }))
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
}

function getUserAndProcess(id) {
  return fetch(`/api/users/${id}`)
    .then(response => response.json())
    .then(userData => ({ ...userData, processed: true }))
    .catch(error => {
      console.error('Error:', error);
      return null;
    });
}

// DUPLICATE_GROUP: pattern_003
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: easy
// API call patterns
async function createUser1(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(userData)
  });
  return response.json();
}

async function addNewUser(userInfo) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(userInfo)
  });
  return response.json();
}

// DUPLICATE_GROUP: pattern_004
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: easy
// Regular expression usage patterns
function validateInputs1(data) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  const namePattern = /^[a-zA-Z\s]{2,50}$/;
  
  return {
    email: emailPattern.test(data.email),
    phone: phonePattern.test(data.phone),
    name: namePattern.test(data.name)
  };
}

function checkFormData(formData) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  const namePattern = /^[a-zA-Z\s]{2,50}$/;
  
  return {
    email: emailPattern.test(formData.email),
    phone: phonePattern.test(formData.phone),
    name: namePattern.test(formData.name)
  };
}

// DUPLICATE_GROUP: pattern_005
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// Event handling patterns
function setupEventListeners1(element) {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button clicked');
    handleClick(e.target);
  });
  
  element.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
  });
  
  element.addEventListener('mouseout', (e) => {
    e.target.classList.remove('hover');
  });
}

function initializeEvents(el) {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button clicked');
    handleClick(e.target);
  });
  
  el.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
  });
  
  el.addEventListener('mouseout', (e) => {
    e.target.classList.remove('hover');
  });
}

// DUPLICATE_GROUP: pattern_006
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// Object manipulation patterns
function transformData1(rawData) {
  return Object.keys(rawData)
    .filter(key => rawData[key] !== null)
    .reduce((acc, key) => {
      acc[key] = typeof rawData[key] === 'string' 
        ? rawData[key].trim().toLowerCase()
        : rawData[key];
      return acc;
    }, {});
}

function processRawData(data) {
  return Object.keys(data)
    .filter(key => data[key] !== null)
    .reduce((result, key) => {
      result[key] = typeof data[key] === 'string' 
        ? data[key].trim().toLowerCase()
        : data[key];
      return result;
    }, {});
}

// DUPLICATE_GROUP: pattern_007
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// Async/await error handling patterns
async function safeApiCall1(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API call failed:', error);
    return { success: false, error: error.message };
  }
}

async function makeSecureRequest(endpoint, config) {
  try {
    const response = await fetch(endpoint, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('API call failed:', error);
    return { success: false, error: error.message };
  }
}

// DUPLICATE_GROUP: pattern_008
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: easy
// DOM manipulation patterns
function createModal1(title, content) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function buildModalDialog(heading, body) {
  const dialog = document.createElement('div');
  dialog.className = 'modal';
  dialog.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${heading}</h2>
      <p>${body}</p>
    </div>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

// DUPLICATE_GROUP: pattern_009
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: medium
// State management patterns
function createStore1(initialState) {
  let state = initialState;
  const subscribers = [];
  
  return {
    getState: () => state,
    setState: (newState) => {
      state = { ...state, ...newState };
      subscribers.forEach(callback => callback(state));
    },
    subscribe: (callback) => {
      subscribers.push(callback);
      return () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
    }
  };
}

function buildStateManager(initial) {
  let currentState = initial;
  const listeners = [];
  
  return {
    getState: () => currentState,
    setState: (updates) => {
      currentState = { ...currentState, ...updates };
      listeners.forEach(fn => fn(currentState));
    },
    subscribe: (fn) => {
      listeners.push(fn);
      return () => {
        const idx = listeners.indexOf(fn);
        listeners.splice(idx, 1);
      };
    }
  };
}

// DUPLICATE_GROUP: pattern_010
// EXPECTED_DETECTION: true
// CATEGORY: PATTERNS
// DIFFICULTY: hard
// Complex data processing pipeline
function processDataPipeline1(rawData) {
  return rawData
    .filter(item => item.status === 'active')
    .map(item => ({
      ...item,
      normalizedName: item.name.trim().toLowerCase(),
      createdAt: new Date(item.created)
    }))
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 10)
    .reduce((groups, item) => {
      const category = item.category || 'uncategorized';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});
}

function buildProcessingChain(inputData) {
  return inputData
    .filter(record => record.status === 'active')
    .map(record => ({
      ...record,
      normalizedName: record.name.trim().toLowerCase(),
      createdAt: new Date(record.created)
    }))
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 10)
    .reduce((categories, record) => {
      const type = record.category || 'uncategorized';
      if (!categories[type]) {
        categories[type] = [];
      }
      categories[type].push(record);
      return categories;
    }, {});
} 