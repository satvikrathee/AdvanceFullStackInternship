// 1 Yeh code kya print karega?
// try { throw new Error('oops') } catch(e) {
// console.log(e.message, e instanceof Error)
// } finally { console.log('done') }

// Answer= oops true
         // done


// 2 Kya print hoga?
// try { null.x } catch(e) { console.log(e.constructor.name)          
// Answer == TypeError

// 3 Kya print hoga aur kyun?
// try {
// try { throw 42 }
// finally { console.log('inner') }
// } catch(e) { console.log('caught', e) }
// finally { console.log('outer') }

// Answer = inner
//         caught 42
//         outer


// 4 Kya print hoga?
// function f() { try { return 1 } finally { return 2 } }
// console.log(f())

// Answer ==2 

// 5 Kya print hoga?
// async function go() {
// try { await Promise.reject('bad') }
// catch(e) { console.log(e) }
// finally { console.log('fin') }
// }
// go()

// Answer== bad
//        fin


// 6 Kya error type aayega?
// try { undeclaredVar } catch(e) { console.log(e.constructor.name) }

// Answer== ReferenceError

// 7 Kya print hoga?
// class AppError extends Error {
// constructor(msg, code) { super(msg); this.code = code }
// }
// try { throw new AppError('fail', 404) }
// catch(e) { console.log(e.message, e.code, e instanceof Error) }

// Answer== fail 404 true

// 8 Kya print hoga?
// try { JSON.parse('{bad}') } catch(e) { console.log(e instanceof SyntaxError) }

// Answer== true

// 9 Kya print hoga — output order bhi batao:
// Promise.resolve()
// .then(() => { throw new Error('p') })
// .catch(e => console.log('c', e.message));
// try { throw new Error('s') } catch(e) { console.log('s', e.message) }

// Answer == s s
 //          c p

//  10 Yeh code mentally run karo — error ka exact name batao:
// const obj = {};
// obj.foo.bar;

//Answer == TypeError

// 23 Kya print hoga?
// const obj = { get val() { throw new Error('no') } };
// try { const { val } = obj }
// catch(e) { console.log(e.message) }

// Answer == no


// 24 Kya print hoga?
// function* gen() {
// try { yield 1; yield 2 }
// finally { yield 3 }
// }
// const g = gen();
// console.log(g.next(), g.return('done'), g.next())

// Answer == { value: 1, done: false } { value: 3, done: false } { value: 'done', done: true }


// 25 Kya print hoga?
// class E extends Error {}
// const e = new E('test');
// console.log(e instanceof E, e instanceof Error, e.name)

// Answer == true true Error


// 51 Top-level await — kab valid, kab error?
// // file: main.js
// const m = await import('./mod.js');
// console.log(m.default, m.named);
// // Kab chalega? Kab SyntaxError?

// Answer == Kab valid hoga (Yeh chalega)
// Kab SyntaxError aayega (Yeh crash hoga)

// 52 Kya print hoga?
// try { eval('{{bad syntax{{') }
// catch(e) { console.log(e.name) }

// Answer == SyntaxError

// 53 Kya print hoga?
// class HttpError extends Error {
// constructor(code) {
// super('HTTP ' + code);
// this.code = code;
// this.name = 'HttpError';
// }
// }
// const e = new HttpError(500);
// console.log(e.message, e.stack?.split('\n')[0])

// Answer == HTTP 500 HttpError: HTTP 500


// 55 Kya print hoga?
// const err = new TypeError('bad type');
// console.log(
// err instanceof TypeError,
// err instanceof Error,
// err instanceof RangeError
// )

// Answer == true true false


// 73 Kya print hoga — order bhi batao:
// const p = new Promise((res, rej) => {
// try { throw new Error('sync') }
// catch(e) { rej(e) }
// });
// p.catch(e => console.log('caught:', e.message));

// Answer == caught: sync

// 85 Kya print hoga?
// function throws() { throw new RangeError('out') }
// try { throws() }
// catch(e) {
// if (e instanceof TypeError) throw e;
// console.log('range caught');
// }

// Answer == range caught

// 89 toString() ka exact output kya hoga?
// const e = new Error();
// e.name = 'Custom';
// e.message = 'msg';
// console.log(`${e}`); // Template literal — kya hoga


// Answer == "Custom: msg"