let value = true;

function evaluator(){
    if(!value){
        console.log(value,"display true");
    }
    else{
        console.log(value,"display false");
    }
    value = !value;
    return value
}

let result = evaluator();
console.log(result);