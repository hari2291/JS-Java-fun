
/*
### [Challenge Name: 2D Array - DS](/challenges/2d-array)


**Context**		
Given a $6 \times 6$ *2D Array*, $A$: 

	1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0

We define an hourglass in $A$ to be a subset of values with indices falling in this pattern in $A$'s graphical representation:

    a b c
      d
    e f g

There are $16$ hourglasses in $A$, and an *hourglass sum* is the sum of an hourglass' values. 

**Task**	
Calculate the hourglass sum for every hourglass in $A$, then print the *maximum* hourglass sum.

**Note:** If you have already solved the Java domain's *Java 2D Array* challenge, you may wish to skip this challenge./*

*/

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    console.log(getMaxSum(arr));
}

function getMaxSum(arr){
    var x = 0;
    var y = 1;
    var i = 0;
    var sum = [];
    while((x<=arr.length-3) && (y<=arr.length -2)){
        sum[i] = parseInt(arr[x][y-1]) + parseInt(arr[x][y]) + parseInt(arr[x][y+1]) + parseInt(arr[x+1][y]) + parseInt(arr[x+2][y-1]) + parseInt(arr[x+2][y]) + parseInt(arr[x+2][y+1]);
        if(y==arr.length - 2){
            x++;
            y = 1;
        }
        else{
           y++; 
        }
        i++;
    }
    
    return Math.max.apply(Math,sum);
}
