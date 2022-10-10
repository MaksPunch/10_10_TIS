const fs = require('fs')

fs.readFile('hello.txt', 'utf8', function (error, data) {
  console.log('Асинхронное чтение файла')
  if (error) throw error
  console.log(data)
})

console.log('Синхронное чтение файла')

fs.appendFileSync('hello.txt', 'Привет ми ми ми!')

fs.appendFile('hello.txt', 'Привет МИД!', function (error) {
  if (error) throw error

  console.log('Запись файла завершена. Содержимое файла:')
  let data = fs.readFileSync('hello.txt', 'utf8')
  console.log(data)
})

fs.unlink('hello.txt', (err) => {
  if (err) console.log(err)
  else console.log('hello.txt was deleted')
})
