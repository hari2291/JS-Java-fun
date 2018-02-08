/*
### [Challenge Name: Flatland Space Stations](/challenges/flatland-space-stations)


Flatland is a country with $n$ cities, $m$ of which have space stations. Each city, $c_i$, is numbered with a distinct index from $0$ to $n-1$, and each city $c_i$ is connected to city $c_{i + 1}$ by a bidirectional road that is $1 \ km$ in length.

For example, if $n=5$ and cities $c_0$ and $c_4$ have space stations, then Flatland looks like this:

![hreasy(5).png](https://s3.amazonaws.com/hr-challenge-images/15233/1449763282-eddfbea90c-hreasy5.png)

For each city, determine its distance to the *nearest* space station and *print the maximum* of these distances. 

*/

function flatlandSpaceStations(n, c) {
    var min_distance_array = [];
    for(var i = 0;i<n;i++){
        if(c.indexOf(i)!= -1){
            min_distance_array[i] = 0;
        }
        else{
            var dist_array_for_city = [];
            for(var j=0;j<c.length;j++){
                dist_array_for_city[j] = Math.abs(c[j]-i);
            }
            min_distance_array[i] = Math.min.apply(Math,dist_array_for_city);
        }
    }
    return Math.max.apply(Math,min_distance_array);
}
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var result = flatlandSpaceStations(n, c);
    process.stdout.write("" + result + "\n");

}
