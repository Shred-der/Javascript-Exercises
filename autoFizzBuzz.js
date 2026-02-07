var output = [];
var count = 1;

function autoFizzBuzz(){
    while (count <= 100){
        if (count % 3 === 0) {
            if (count % 5 === 0) {
                output.push("fizzbuzz")
            } else {
                output.push("fizz");
            }
        } else {
            if (count % 5 === 0) {
                output.push("buzz");
            } else {
                output.push(count);
            }
        }
        count++
    }
        console.log(output);
    
}