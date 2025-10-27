function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/' || op === '%') return 2;
    if (op === '^') return 3;
    return 0;
}

function isOperator(c) {
    return ['+', '-', '*', '/', '%', '^'].includes(c);
}

function infixToPostfix(expression) {
    let stack = [];
    let result = '';

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        if (/[a-zA-Z0-9]/.test(ch)) {
            result += ch;
        }
        else if (ch === '(') {
            stack.push(ch);
        }
        else if (ch === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();
        }

        else if (isOperator(ch)) {
            while (
                stack.length &&
                precedence(stack[stack.length - 1]) >= precedence(ch)
            ) {
                result += stack.pop();
            }
            stack.push(ch);
        }
    }


    while (stack.length) {
        result += stack.pop();
    }

    return result;
}


let infixExpr = "A+B*(C^D-E)";
console.log("Infix Expression: " + infixExpr);
console.log("Postfix Expression: " + infixToPostfix(infixExpr));
