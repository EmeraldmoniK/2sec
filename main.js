function rand(min,max){
    return Math.ceil(Math.random() * (max-min)+min)
}

let col = +prompt('how many exapmles do you want?');
let minNum = +prompt('Enter the min amount of number');
let maxNum = +prompt('Enter the max amount of number');

for(i = 0; i < col; i++){
    let one = rand(minNum,maxNum)
    let two = rand(minNum,maxNum)
    let operator = rand(1,8)
    
    if(operator == 1 || operator == 2){
        let ex = +prompt(one + ' + ' + two + ' = ')
        let count = ex == (one + two)? ' Good ' : ' Bad '
        alert(one + ' + ' + two + ' = ' + (one + two) + ' , ' + ' Your answer ' + ex + count)
    }else if(operator == 3 || operator == 4){
        let ex = +prompt(one + ' - ' + two + ' = ')
        let count = ex == (one - two)? ' Good ' : ' Bad '
        alert(one + ' - ' + two + ' = ' + (one - two) + ' , ' + ' Your answser ' + ex + count)
    }else if(operator == 5 || operator == 6){
        let ex = +prompt(one + ' * ' + two + ' = ')
        let count = ex == (one * two)? ' Good ' : ' Bad '
        alert(one + ' * ' + two + ' = ' + (one * two) + ' , ' + ' Your answer ' + ex + count)
    }else{
        let ex = +prompt(one + ' / ' + two + ' = ')
        let count = ex == (one / two)? ' Good ' : ' Bad '
        alert(one + ' / ' + two + ' = ' + (one / two) + ' , ' + ' Your answer ' + ex + count)
    }
}