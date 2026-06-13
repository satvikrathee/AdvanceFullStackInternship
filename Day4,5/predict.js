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

// 26 Bubbling order mein output kya hoga?
// // <div id='parent'><span id='child'>click</span></div>
// // Dono pe click listener (bubbling)
// // Span click karne par?

// Answer == child
  //         parent


//   27 Kya aayega?
// const el = document.createElement('div');
// el.textContent = '<b>bold</b>';
// console.log(el.innerHTML)

// Answer == &lt;b&gt;bold&lt;/b&gt;

// 29 Kya return karega aur kyun?
// localStorage.setItem('x', { a: 1 });
// console.log(localStorage.getItem('x'));

//Answer== "[object Object]"

// 30 Kya print hoga?
// const ul = document.createElement('ul');
// ul.innerHTML = '<li>A</li><li>B</li>';
// const items = ul.querySelectorAll('li');
// items.forEach(i => i.remove());
// console.log(ul.children.length)

// Answer == 0 

// 32 Kya print hoga?
// const p = document.createElement('p');
// document.body.appendChild(p);
// p.addEventListener('click', () => console.log('fired'));
// p.dispatchEvent(new Event('click'));
// p.remove();
// p.dispatchEvent(new Event('click'));

// Answer == (fired aur fired) 

//34 e.target vs e.currentTarget — fark kya hai?
// Parent pe listener, child pe click hua
// e.target = ?
// e.currentTarget = ?
// Concrete example ke saath explain karo.'

// Answer == e.target aur e.currentTarget ke beech ka sabse bada farq yeh hai ki ek batata hai click kahan shuru hua aur doosra batata hai listener kahan laga hai.

// 35 Kya data milega — dono cases mein?
// sessionStorage.setItem('key', 'val');
// // 1) Same tab, page reload karo
// // 2) Naya tab kholo
// // Dono mein milega ya nahi?

// Answer == 
// 1) Same tab, page reload karoMilega ('val').
// 2) Naya tab kholoNahi milega (null).

// 56 Kya print hoga?
// const div = document.createElement('div');
// div.innerHTML = 'hi <scr' + 'i

// Answer == hi <script>console.log("executed");</script>


// 57 Capturing vs Bubbling — exact order kya hoga?
// el.addEventListener('click', fn1, true) // capturing
// el.addEventListener('click', fn2, false) // bubbling
// // Nested elements: parent fi child click par sequence

// Answer == 
// 1. Parent Capturing (fn1 of Parent)
// 2. Child Target/Capturing (fn1 of Child)
// 3. Child Target/Bubbling (fn2 of Child)
// 4. Parent Bubbling (fn2 of Bottom Parent)


// 58 cloneNode behavior batao:
// node.cloneNode(true) // deep clone
// node.cloneNode(false) // shallow clone
// // Event listeners clone honge kya?

// Answer == Nahi, event listeners clone nahi honge—chahe aap deep clone karein ya shallow clone

//59 DocumentFragment kyun use karte hain?
// Option A: 100 baar seedha appendChild()
// Option B: Fragment mein add karke ek baar append
// Reflow/repaint mein kya farq padta hai?

// Answer == Option B (Fragment mein add karke ek baar append) sabse behtareen aur efficient tareeqa hai.

// 74 Kya hoga?
// const a = document.createElement('a');
// a.href = 'javascript:void(0)';
// a.click();
// console.log('after click')

// Answer== after click

// 84 Kya print hoga?
// const div = document.createElement('div');
// div.addEventListener('click', () => console.log(1));
// const clone = div.cloneNode(true);
// document.body.append(clone);
// clone.click()

// Answer== Output will   be blank 

// 98 Kya print hoga aur kyun?
// document.body.innerHTML = '';
// document.body.innerHTML = '<div id=x></div>';
// const el = document.getElementById('x');
// document.body.innerHTML = '<div id=x></div>';
// el.textContent = 'hi';
// console.log(document.getElementById('x').textContent)

// Answer == "" , it will print empty string on console