/*
### [Challenge Name: Kangaroo](/challenges/kangaroo)


You are choreograhing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity). 

- The first kangaroo starts at location $x_1$ and moves at a rate of $v_1$ meters per jump. 
- The second kangaroo starts at location $x_2$ and moves at a rate of $v_2$ meters per jump.

You have to figure out a way to get both kangaroos at the same location as part of the show. 

Complete the function `kangaroo` which takes starting location and speed of both kangaroos as input, and return $Yes$ or $No$ appropriately. Can you determine if the kangaroos will ever land *at the same location at the same time*? The two kangaroos must land at the same location after making the same number of jumps.
*/

function kangaroo(x1, v1, x2, v2) {
    var steps_kangaroo1 = [];
    var steps_kangaroo2 = [];
    if(v2>v1){
        return "NO";
    }
    else{
       var kangaroo_1_current_step = x1;
       var kangaroo_2_current_step = x2;
       var i = x1;
       while(i>=0){
          kangaroo_1_current_step = kangaroo_1_current_step + v1;
           kangaroo_2_current_step = kangaroo_2_current_step + v2;
          if (kangaroo_1_current_step == kangaroo_2_current_step){
              return "YES";
          }
          i++;
       }
       return "NO";
    }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}


