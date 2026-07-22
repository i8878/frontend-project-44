#!/usr/bin/env node
//import readlineSync from 'readline-sync'
import { gameHandler } from '../src/index.js'
const brainEven = () => {
    const expr = Math.floor(Math.random() * 10) 
    const correct = expr % 2 === 0 ? 'yes' : 'no'
       
    return { correct, expr }

}

gameHandler(brainEven)

