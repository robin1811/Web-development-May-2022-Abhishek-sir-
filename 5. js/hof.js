let arr = [2,5,7,12];

// ques 1 calculate the area of square where side is arr

function area(arr){
    for (let i = 0; i < arr.length; i++) {
        let area = arr[i] * arr[i];
        console.log(area);
        
    }
}

area();
// ques2 calculate the perimter of square
function perimter(){
    for (let i = 0; i < arr.length; i++) {
        let perimeter = arr[i] * 4;
        console.log(perimeter);
        
    }
}
// ques3 calculate the diagonal of square

// for (let i = 0; i < arr.length; i++) {
//     let diagonal = 0;
//     Math.pow(diagonal,2) = Math.pow(area,2) * 2;
    
// }