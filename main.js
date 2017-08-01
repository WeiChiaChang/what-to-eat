/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const fs = require('fs')
let obj = JSON.parse(fs.readFileSync('./src/testLunch.json', 'utf8'))
// console.log(obj.lunch.length)
console.log("台南億載金城武，今天去吃" + obj.lunch[getRandomInt(0, obj.lunch.length - 1)] + "吧！")
