#!/usr/bin/env node
import readlineSync from 'readline-sync'

    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    let rightAnswerCount = 0
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for(let i = 0; i < 3; i++){
        const n = Math.floor(Math.random() * 10) 
        const rightAnswer = n % 2 === 0 ? 'yes' : 'no'
        
        console.log('Question: ' + n)

        const answer = readlineSync.question('Your answer: ')
        if(answer !== rightAnswer){
            console.log(`${answer} is wrong answer ;(. Correct answer was '${rightAnswer}')`)
            console.log(`Let's try again, ${name}`)
            break
        }else{
            console.log('Correct!')
            rightAnswerCount += 1
        }

        if(rightAnswerCount === 3) console.log(`Congratulations, ${name}!`)
    }

