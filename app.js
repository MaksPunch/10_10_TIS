const http = require('http')
const greeting = require('./greetings')
const os = require('os')
const User = require('./user')
const welcome = require('./welcome') 

let nodePath = process.argv[0]
let appPath = process.argv[1]
let name = process.argv[2]
let age = process.argv[3]

console.log('nodePath: ' + nodePath)
console.log('appPath: ' + appPath)
console.log()
console.log('name: ' + name)
console.log('age: ' + age)

global.name = 'max';

global.console.log(date)
console.log(greeting.getMessage())

let userName = os.userInfo().username
let alex = new User('Alex', 18)
alex.sayHi()

welcome.getMorningMessage()
welcome.getEveningMessage()

/*const express = require('express')
const app = express()
app.get('/', function (request, response) {
  response.end('Hello from Express!')
})
app.listen(3000) */


let message = 'Hello World!'

http
  .createServer(function (request, response) {
    console.log(message)
    console.log(alex.sayHi())
    response.end(message)
  })
  .listen(8080, '127.0.0.1', function () {
    console.log(
      'Сервер начал прослушивание запросов на порту 8080'
    )
  })



function display(data, callback) {
  var randInt = Math.random() * (10 - 1) + 1
  var err =
    randInt > 5
      ? new Error('Ошибка выполнения. randInt больше 5')
      : null

  setTimeout(function () {
    callback(err, data)
  }, 0)
}

console.log('Начало работы программы')

display('Обработка данных...', function (err, data) {
  if (err) throw err
  console.log(data)
})

console.log('Завершение работы программы')