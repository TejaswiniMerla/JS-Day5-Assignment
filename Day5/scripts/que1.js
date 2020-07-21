//Question 1.

//1.

var num = prompt("Take  positive number from the user.")
function myFunction() {
    console.log(Math.abs(num));
}
myFunction();


//2.

function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));


//3.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = nums.filter(num => num % 2 !== 0 );
console.log(oddNumbers);

//4.

let oddCubes = nums.filter(num => num % 2 !== 0).map(num => num **3);
console.log(oddCubes);