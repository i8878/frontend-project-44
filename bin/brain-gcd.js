#!/usr/bin/env node
import { gameHandler } from '../src/index.js'


const brainGcd = () => {
    const n1 = Math.floor(Math.random() * 100)
    const n2 = Math.floor(Math.random() * 100)
    const expr = `${n1} ${n2}`
    const correct = gcd(n1, n2)

    return { correct, expr }
    
}



const gcd = (num1, num2) => {
    if(num2 === 0) return num1
    const n = num1
    num1 = num2

    return gcd(num1, n % num2)
}


gameHandler(brainGcd)