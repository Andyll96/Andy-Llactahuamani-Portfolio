"use strict";

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  



let id = Symbol("id");
user[id] = "Their id value";

  for(let key in user) {
    // keys
    alert( key + ': ' + user[key]);  // name, age, isAdmin
  }
alert(id + ": " +user[id]);

// for (const key in user) {
//     if (key in user) {
//         const element = user[key];
//         alert(key + ': ' + user[key]);
//     }
// }
