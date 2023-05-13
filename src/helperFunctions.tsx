export const generateRandomNumber = (range?:number) => {
    if (!range) range = 10;
    return Math.floor(Math.random() * range)
}


export const calcAnswer = (num1:number, num2:number, operator:string) => {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 0;
    }
}

export const generateOperator = () => {
    const operators = ['+', '-', '*', '/'];
    return operators[generateRandomNumber(operators.length)];
}

export const generateQuestion:any = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateOperator();
    const answer = calcAnswer(num1, num2, operator);

    if (answer < 0 || answer % 1 !== 0 || answer === Infinity) return generateQuestion();

    return {
        question: `${num1} ${operator} ${num2} = ?`,
        answer: answer
    }
}