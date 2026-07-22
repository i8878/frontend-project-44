#!/usr/bin/env node
import { gameHandler } from '../src/index.js'

const brainCalc = ()=>{
    const guessNum1 = Math.floor(Math.random() *100)
    const guessNum2 = Math.floor(Math.random() *100)
    const operator = getRandomOperator()
    let correct = null
    switch(operator){
        case '+':
            correct = guessNum1 + guessNum2
            break
        case '-':
            correct = guessNum1 - guessNum2
            break
        case '*':
            correct = guessNum1 * guessNum2
            break
        default: break
    }
    const expr = `${guessNum1} ${operator} ${guessNum2}`
    
    return { correct , expr } 
}

const getRandomOperator = () => {
    const operators = [ '+', '-', '*']
    const rndIndex = Math.floor(Math.random() * operators.length)
    return operators[rndIndex]
}

gameHandler(brainCalc)

