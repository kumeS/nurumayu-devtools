// ========================================
// TEXT DUPLICATES TEST DATA (10 patterns)
// ========================================

// DUPLICATE_GROUP: text_001
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Multi-line text duplication
const config1 = {
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
  },
  features: {
    authentication: true,
    logging: true
  }
};

// DUPLICATE_GROUP: text_001
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
const settings = {
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
  },
  features: {
    authentication: true,
    logging: true
  }
};

// DUPLICATE_GROUP: text_002
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// String literal duplication
const ERROR_MESSAGES = {
  INVALID_EMAIL: "Please enter a valid email address",
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters",
  REQUIRED_FIELD: "This field is required"
};

const VALIDATION_MESSAGES = {
  INVALID_EMAIL: "Please enter a valid email address",
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters",
  REQUIRED_FIELD: "This field is required"
};

// DUPLICATE_GROUP: text_003
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Comment duplication
/**
 * Calculates the total price including tax
 * @param {number} basePrice - The base price before tax
 * @param {number} taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @return {number} The total price including tax
 */
function calculateTotalWithTax1(basePrice, taxRate) {
  return basePrice * (1 + taxRate);
}

/**
 * Calculates the total price including tax
 * @param {number} basePrice - The base price before tax
 * @param {number} taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @return {number} The total price including tax
 */
function calculatePriceWithTax(basePrice, taxRate) {
  return basePrice * (1 + taxRate);
}

// DUPLICATE_GROUP: text_004
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Variable declaration patterns
let userName = '';
let userEmail = '';
let userPhone = '';
let userAddress = '';

let customerName = '';
let customerEmail = '';
let customerPhone = '';
let customerAddress = '';

// DUPLICATE_GROUP: text_005
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Import statements
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

// DUPLICATE_GROUP: text_006
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: medium
// Multi-line identical blocks with slight variation in context
function validateUserInput1(input) {
  if (!input) {
    console.log('Input is required');
    return false;
  }
  if (input.length < 3) {
    console.log('Input too short');
    return false;
  }
  if (input.length > 50) {
    console.log('Input too long');
    return false;
  }
  return true;
}

function validateFormData(data) {
  if (!data) {
    console.log('Input is required');
    return false;
  }
  if (data.length < 3) {
    console.log('Input too short');
    return false;
  }
  if (data.length > 50) {
    console.log('Input too long');
    return false;
  }
  return true;
}

// DUPLICATE_GROUP: text_007
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// CSS-in-JS style objects
const buttonStyles1 = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
};

const primaryButtonStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
};

// DUPLICATE_GROUP: text_008
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Regular expression patterns
const emailRegex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex1 = /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
const urlRegex1 = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneValidation = /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
const urlValidation = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// DUPLICATE_GROUP: text_009
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: medium
// Template literal patterns
function generateWelcomeEmail1(userName, companyName) {
  return `
    <html>
      <body>
        <h1>Welcome to ${companyName}!</h1>
        <p>Hello ${userName},</p>
        <p>Thank you for joining our platform.</p>
        <p>Best regards,<br>The ${companyName} Team</p>
      </body>
    </html>
  `;
}

function createUserWelcomeMessage(userName, companyName) {
  return `
    <html>
      <body>
        <h1>Welcome to ${companyName}!</h1>
        <p>Hello ${userName},</p>
        <p>Thank you for joining our platform.</p>
        <p>Best regards,<br>The ${companyName} Team</p>
      </body>
    </html>
  `;
}

// DUPLICATE_GROUP: text_010
// EXPECTED_DETECTION: true
// CATEGORY: TEXT
// DIFFICULTY: easy
// Array/Object initialization patterns
const defaultPermissions1 = [
  'read:profile',
  'write:profile', 
  'read:posts',
  'write:posts',
  'delete:own_posts'
];

const userPermissions = [
  'read:profile',
  'write:profile', 
  'read:posts',
  'write:posts',
  'delete:own_posts'
];

const statusCodes = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
};

const httpCodes = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
}; 