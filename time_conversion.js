/*
### [Challenge Name: Time Conversion](/challenges/time-conversion)


Given a time in [$12$-hour AM/PM format](https://en.wikipedia.org/wiki/12-hour_clock), convert it to military ($24$-hour) time.
    
**Note:** Midnight is $\text{12:00:00AM}$ on a $12$-hour clock, and $\text{00:00:00}$ on a $24$-hour clock. Noon is $\text{12:00:00PM}$ on a $12$-hour clock, and $\text{12:00:00}$ on a $24$-hour clock.  

*/

function timeConversion(s) {
    var amOrPm = s.charAt(s.length - 2);
    var parts = s.split(":");
    var initPart = "";
    if (amOrPm == 'P'){
        if(parts[0] == "12"){
            initPart = "12";
        }
        else{
            initPart = parseInt(parts[0])+12;
        }
    }
    else if (amOrPm == "A"){
        if(parts[0] == "12"){
            initPart = "00";
        }
        else{
            initPart = parts[0];
        }
    }
    return initPart + ":" +parts[1]+":"+parts[2].charAt(0)+parts[2].charAt(1);
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
