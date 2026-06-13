// 11 ValidationError, NetworkError, aur AuthError class banao
// Teeno Error se extend hon. Alag name aur extra property: field, statusCode, userId.
// Phir handle(err) function banao jo instanceof se sahi type detect kare.

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthError extends Error {
  constructor(message, userId) {
    super(message);
    this.name = 'AuthError';
    this.userId = userId;
  }
}

function handle(err) {
  if (err instanceof ValidationError) {
    console.log(`[Validation Failed] Field: ${err.field} | Message: ${err.message}`);
  } 
  else if (err instanceof NetworkError) {
    console.log(`[Network Issues] Status: ${err.statusCode} | Message: ${err.message}`);
  } 
  else if (err instanceof AuthError) {
    console.log(`[Auth Alert] User ID: ${err.userId} | Message: ${err.message}`);
  } 
  else if (err instanceof Error) {
    console.log(`[Generic Error] Name: ${err.name} | Message: ${err.message}`);
  } 
  else {
    console.log(`[Unknown Error Type]:`, err);
  }
}


// 12 safeDiv(a, b) function banao
// b===0 par custom DivisionByZeroError throw karo.
// Proper try/catch — error message console mein print ho

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DivisionByZeroError';
  }
}

function safeDiv(a, b) {
  if (b === 0) {
    throw new DivisionByZeroError('Cannot divide a number by zero');
  }
  return a / b;
}

try {
  const result = safeDiv(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

// 13 retry(fn, times) — async retry function banao
// fn ko times baar retry kare. Har attempt pe error log ho.
// Sab fail ho jaayein toh custom MaxRetriesError throw karo with attempt count

class MaxRetriesError extends Error {
  constructor(message, attempts) {
    super(message);
    this.name = 'MaxRetriesError';
    this.attempts = attempts;
  }
}

async function retry(fn, times) {
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attempt ${i} failed: ${error.message || error}`);
      if (i === times) {
        throw new MaxRetriesError(`Failed after ${times} retries`, times);
      }
    }
  }
}

// 14 ES Modules project banao
// mathUtils.js: add, sub, mul, div (named exports). div zero pe throw kare.
// main.js mein sab import karke test karo


// 15 CommonJS logger module banao
// logger.js mein log(level, msg) function. require se app.js mein import karo.
// module.exports ka sahi use explain karo — default vs named

// Logger.js in Day4,5/mathUtils.js

// app.js in Day4,5/main.js


// 16 Dynamic import() se plugin loader banao
// loadPlugin(name) function jo runtime par ./plugins/${name}.js load kare.
// Plugin exist nahi kare toh custom PluginNotFoundError with plugin name.

class PluginNotFoundError extends Error {
  constructor(message, pluginName) {
    super(message);
    this.name = 'PluginNotFoundError';
    this.pluginName = pluginName;
  }
}

async function loadPlugin(name) {
  try {
    const plugin = await import(`./plugins/${name}.js`);
    return plugin;
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND' || error.message.includes('Cannot find module')) {
      throw new PluginNotFoundError(`Plugin '${name}' could not be found`, name);
    }
    throw error;
  }
}

// 18 errorBoundary(fn) higher-order function banao
// fn throw kare fi { ok: false, error: e.message }
// fn succeed kare fi { ok: true, data: result }
// Sync aur async dono handle kare

function errorBoundary(fn) {
  return function (...args) {
    try {
      const result = fn(...args);

      if (result instanceof Promise) {
        return result
          .then((data) => ({ ok: true, data }))
          .catch((e) => ({ ok: false, error: e.message || String(e) }));
      }

      return { ok: true, data: result };
    } catch (e) {
      return { ok: false, error: e.message || String(e) };
    }
  };
}

// 20 fetchWithTimeout(url, ms) function banao
// ms milliseconds ke baad custom TimeoutError throw kare.
// Promise.race() use karo. Dono (fetch + timeout) ka proper cleanup karo.

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const { signal } = controller;

  let timeoutId;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      controller.abort();
      reject(new TimeoutError(`Request timed out after ${ms}ms`));
    }, ms);
  });

  const fetchPromise = fetch(url, { signal })
    .then((response) => {
      clearTimeout(timeoutId);
      return response;
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      throw error;
    });

  return Promise.race([fetchPromise, timeoutPromise]);
}

// 21 Custom EventEmitter class banao (Node wala nahi — apna)
// on(event, cb), off(event, cb), emit(event, ...args) implement karo.
// Listener throw kare toh baaki listeners rok mat do — sab run hone chahiye.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }

  off(event, cb) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(listener => listener !== cb);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    
    this.events[event].forEach(cb => {
      try {
        cb(...args);
      } catch (error) {
        console.error(`Error in listener for event "${event}":`, error);
      }
    });
  }
}


// 22 parseJSON(str) safe wrapper banao
// try/catch/finally use karo.
// Valid JSON fi parsed object. Invalid fi null + error log.

function parseJSON(str) {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON format:", error.message);
  } finally {
    return result;
  }
}

// 61 pipe(...fns) function banao
// Pehle function ka output doosra ka input.
// Koi bhi step throw kare fi PipelineError with step index.
// Async functions bhi support karo.

class PipelineError extends Error {
  constructor(message, stepIndex) {
    super(message);
    this.name = 'PipelineError';
    this.stepIndex = stepIndex;
  }
}

function pipe(...fns) {
  return async function (initialValue) {
    let currentResult = initialValue;
    
    for (let i = 0; i < fns.length; i++) {
      try {
        currentResult = await fns[i](currentResult);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        throw new PipelineError(`Pipeline failed at step ${i}: ${errorMsg}`, i);
      }
    }
    
    return currentResult;
  };
}


// 62 tryCatch(fn, fallback) utility banao
// fn throw kare fi fallback value return ho.
// Sync + async dono handle kare.
// fallback khud ek function bhi ho sake.

function tryCatch(fn, fallback) {
  return function (...args) {
    try {
      const result = fn(...args);

      if (result instanceof Promise) {
        return result.catch((error) => 
          typeof fallback === 'function' ? fallback(error) : fallback
        );
      }

      return result;
    } catch (error) {
      return typeof fallback === 'function' ? fallback(error) : fallback;
    }
  };
}

// 63 Singleton config module banao
// Config sirf ek baar initialize ho.
// Multiple imports mein exact same instance mile.
// Test karo: reference equality check 

// config.js
class Config {
  constructor() {
    this.env = 'production';
    this.port = 3000;
  }
}

const configInstance = new Config();
export default configInstance;


// main.js
import config1 from './config.js';
import config2 from './config.js';

console.log(config1 === config2);

config1.port = 8080;
console.log(config2.port);


// 65 SafeMap class banao
// get(key, defaultVal) — key missing fi default return, no error.
// getOrThrow(key) — key missing fi custom KeyNotFoundError.
// has(key), set(key, val), delete(key) bhi implement karo

class KeyNotFoundError extends Error {
  constructor(message, key) {
    super(message);
    this.name = 'KeyNotFoundError';
    this.key = key;
  }
}

class SafeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, val) {
    this.map.set(key, val);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.delete(key);
  }

  get(key, defaultVal) {
    if (!this.map.has(key)) {
      return defaultVal;
    }
    return this.map.get(key);
  }

  getOrThrow(key) {
    if (!this.map.has(key)) {
      throw new KeyNotFoundError(`Key "${key}" was not found in SafeMap`, key);
    }
    return this.map.get(key);
  }
}

// 83 withErrorLogging(fn) decorator banao
// Any function wrap kare.
// Error aane par log karo: { fnName, args, error, timestamp }.
// Original function ka return value preserve karo.

function withErrorLogging(fn) {
  return function (...args) {
    try {
      const result = fn(...args);

      if (result instanceof Promise) {
        return result.catch((error) => {
          console.error({
            fnName: fn.name || 'anonymous',
            args: args,
            error: error instanceof Error ? error.message : String(error),
            timestamp: new Date().toISOString()
          });
          throw error;
        });
      }

      return result;
    } catch (error) {
      console.error({
        fnName: fn.name || 'anonymous',
        args: args,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString()
      });
      throw error;
    }
  };
}


// 99 Chainable Validator banao
// Validator.string()
// .minLength(3)
// .maxLength(50)
// .matches(/^[a-z]+$/)
// .validate('hello')
// Har rule fail hone par ValidationError with rule name.

class ValidationError extends Error {
  constructor(message, rule) {
    super(message);
    this.name = 'ValidationError';
    this.rule = rule;
  }
}

class Validator {
  constructor() {
    this.rules = [];
  }

  static string() {
    const instance = new Validator();
    instance.rules.push({
      name: 'string',
      check: (val) => typeof val === 'string',
      msg: (val) => `Expected string, got ${typeof val}`
    });
    return instance;
  }

  minLength(length) {
    this.rules.push({
      name: 'minLength',
      check: (val) => typeof val === 'string' && val.length >= length,
      msg: (val) => `String length must be at least ${length}`
    });
    return this;
  }

  maxLength(length) {
    this.rules.push({
      name: 'maxLength',
      check: (val) => typeof val === 'string' && val.length <= length,
      msg: (val) => `String length must not exceed ${length}`
    });
    return this;
  }

  matches(regex) {
    this.rules.push({
      name: 'matches',
      check: (val) => typeof val === 'string' && regex.test(val),
      msg: (val) => `String does not match pattern ${regex}`
    });
    return this;
  }

  validate(value) {
    for (const rule of this.rules) {
      if (!rule.check(value)) {
        throw new ValidationError(rule.msg(value), rule.name);
      }
    }
    return true;
  }
}

// --- Testing the Validator ---
try {
  Validator.string()
    .minLength(3)
    .maxLength(50)
    .matches(/^[a-z]+$/)
    .validate('hello');
    
  console.log("Validation passed!");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Rule failed: ${error.rule} | Message: ${error.message}`);
  }
}

// 36 Event delegation implement karo
// ul pe sirf ek listener. Kisi bhi li click par text log ho.
// Dynamically add hone wale li bhi handle hon — no rebinding.

const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  
  if (li && ul.contains(li)) {
    console.log(li.textContent);
  }
});


// 37 DOM manipulation — vanilla JS only
// querySelector se paragraph ka text change karo.
// Background color bhi change karo. Zero jQuery/libraries

const p = document.querySelector('p');

p.textContent = 'Updated text content!';
p.style.backgroundColor = 'lightblue';

// 38 virtualDOM(config) function banao
// Input: { tag: 'div', props: { id: 'x', class: 'box' },
// children: [{ tag: 'span', text: 'hi' }] }
// Output: Real DOM node — recursively build karo.

function virtualDOM(config) {
  if (typeof config === 'string') {
    return document.createTextNode(config);
  }

  const el = document.createElement(config.tag);

  if (config.props) {
    for (const [key, value] of Object.entries(config.props)) {
      if (key === 'class') {
        el.className = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  if (config.text !== undefined) {
    el.textContent = config.text;
  }

  if (config.children) {
    config.children.forEach(child => {
      el.appendChild(virtualDOM(child));
    });
  }

  return el;
}

// 39 Form validation karo — vanilla JS
// Submit default rokko. Name + email validate karo JS mein.
// Error messages DOM mein proper jagah dikhao.

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  if (isValid) {
    console.log('Form submitted successfully:', {
      name: nameInput.value,
      email: emailInput.value,
    });
  }
});


// 41 localStorage wrapper class banao
// get(key), set(key, val), remove(key), clear() — sab JSON serialize kare.
// Bonus: set(key, val, ttlSeconds) — expiry support bhi do.

class StorageWrapper {
  set(key, val, ttlSeconds = null) {
    const item = {
      value: val,
      expiry: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key) {
    const data = localStorage.getItem(key);
    if (!data) return null;

    try {
      const item = JSON.parse(data);
      
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      
      return item.value;
    } catch (e) {
      return data;
    }
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

// 46 DOM traversal utility banao
// getSiblings(el) — saare siblings
// getAncestors(el) — parent chain
// getAllDescendants(el) — sab children recursively

function getSiblings(el) {
  if (!el || !el.parentNode) return [];
  return Array.from(el.parentNode.children).filter(child => child !== el);
}

function getAncestors(el) {
  const ancestors = [];
  let current = el ? el.parentElement : null;
  
  while (current) {
    ancestors.push(current);
    current = current.parentElement;
  }
  
  return ancestors;
}

function getAllDescendants(el) {
  const descendants = [];
  if (!el) return descendants;

  function traverse(node) {
    Array.from(node.children).forEach(child => {
      descendants.push(child);
      traverse(child);
    });
  }

  traverse(el);
  return descendants;
}

// 50 Dynamic table banao programmatically
// createElement + appendChild se — no innerHTML.
// Data: array of { name, age, city }.
// Header row bhi dynamically banao.

function createDynamicTable(data) {
  if (!data || data.length === 0) return document.createElement('table');

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  const headings = Object.keys(data[0]);

  headings.forEach(heading => {
    const th = document.createElement('th');
    th.textContent = heading.charAt(0).toUpperCase() + heading.slice(1);
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement('tr');
    
    headings.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key];
      row.appendChild(td);
    });
    
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}


const sampleData = [
  { name: 'Amit', age: 28, city: 'Delhi' },
  { name: 'Priya', age: 24, city: 'Mumbai' },
  { name: 'Rahul', age: 31, city: 'Bangalore' }
];

const generatedTable = createDynamicTable(sampleData);
document.body.appendChild(generatedTable);


