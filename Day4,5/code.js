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
