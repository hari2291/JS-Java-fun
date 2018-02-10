/*
### [Challenge Name: Mini-Max Sum](/challenges/mini-max-sum)


Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static void miniMaxSum(int[] arr) {
        long sum = 0;
        long[] sums = new long[arr.length];
        for(int i=0;i<arr.length;i++){
            sum = sum + arr[i];
        }
        for(int i=0;i<arr.length;i++){
            sums[i] = sum - arr[i];
        }
        Arrays.sort(sums);
        System.out.println(sums[0]+" "+sums[sums.length -1]);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] arr = new int[5];
        for(int arr_i = 0; arr_i < 5; arr_i++){
            arr[arr_i] = in.nextInt();
        }
        miniMaxSum(arr);
        in.close();
    }
}
