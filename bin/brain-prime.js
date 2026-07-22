#!/usr/bin/env node

import { gameHandler } from '../src/index.js'


const brainPrime = () => {
    const expr = Math.floor(Math.random() * 100)
    const correct = isPrime(expr) ? 'yes' : 'no'
    return { correct, expr }
}


const isPrime = (num) => {
    let result = true
    if(num === 1) return result
    for(let i = 2; i < num / 2; i++){
        if(num % i === 0){
            result = false
            break
        } 
    }

    return result
}

gameHandler(brainPrime)