import readlineSync from 'readline-sync'

const gameHandler = (game) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    for(let i = 0; i < 3; i++){
        if(i === 0){
            switch(game.name){
                case 'brainEven': 
                    console.log('Answer "yes" if the number is even, otherwise answer "no".')
                    break
                case 'brainCalc':
                    console.log('What is the result of the expression?')
                    break
                default: break
            }
        }
        const { correct, expr } = game()
        console.log('Question: ' + expr)
        const answer = readlineSync.question('Your answer: ')
        if(correct != answer){
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}.`)
            console.log(`Let's try again, ${name}!`)
            break
        }else{
            console.log('Correct!')
            if(i === 2) console.log(`Congratulations, ${name}!`)
        }
    }
}


export { gameHandler }

