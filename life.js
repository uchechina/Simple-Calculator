let firstNumber = parseInt(prompt("Hello this is a simple JS calculator 🧮. \nIt performs arithmetic operations on two integers, \nPlease input the first number"))
let secondNumber = parseInt(prompt("Input the second number"))
let operation = prompt("Select an operation from below\n+, -, *, /.")
let result

if (operation == "+"){
    result = firstNumber + secondNumber
    alert(`The result of ${firstNumber} by ${secondNumber} is ${result}`)
}

else if (operation == "-"){
    result = firstNumber - secondNumber
    alert(`The difference between ${firstNumber} and ${secondNumber} is ${result}`)
}

else if (operation == "/"){
    result = firstNumber / secondNumber
    alert(`The division of ${firstNumber} by ${secondNumber} is ${result}`)
}

else if (operation == "*"){
    result = firstNumber * secondNumber
    alert(`The product of ${firstNumber} and ${secondNumber} is ${result}`)
}

else{
    alert(`Invalid operation! Please try again and choose a correct operation between; \n +, -, /, *`)
}