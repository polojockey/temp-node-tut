const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error)
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error)
        }
        const second = result



        writeFile('./content/result-async.txt', `the result is ${first} ${second}`, (error, result) => {

            if (error) {
                console.log(error)
            }
            console.log('stop this task')
        })
    })

})
console.log('start next task')