#!/usr/bin/env node
import { gameHandler } from '../src/index.js'

const brainProgression = () => {
    const start = Math.floor(Math.random() * 35)
    const step = Math.floor(Math.random() * 10)
    const sequence = makeSequence(start, step, 10)
    const hideElementIndex = Math.floor(Math.random() * sequence.length)
    const correct = sequence[hideElementIndex]
    sequence[hideElementIndex] = '..'
    const expr = sequence.join(',')
    
    return { correct, expr }
}

const makeSequence = (start, step, len) => {
    const seq = [start]
    for(let i = 1; i < len; i++){
        seq[i] = seq[i-1] + step
    }
    return seq
}

gameHandler(brainProgression)
