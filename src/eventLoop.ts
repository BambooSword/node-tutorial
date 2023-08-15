import { time, timeEnd } from 'node:console'
import fs from 'node:fs'
import { URL } from 'node:url'
time('time')
time('file')
setTimeout(() => {
  console.log('set time out')
  timeEnd('time')
}, 2)
// console.log(new URL('.', import.meta.url))
fs.readFile(new URL('.', import.meta.url), () => {
  console.log('this is readFile 1')
  timeEnd('file')
})
Promise.resolve().then(_ => {
  console.log('promise')
})
process.nextTick(() => {
  console.log('nextTick')
})
setImmediate(() => console.log('run immediate'))
