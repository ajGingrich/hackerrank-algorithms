import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = in.nextInt();
            }
        }
        System.out.println(hourGlass(arr));
    }

    public static int hourGlass(int[][] arr) {
        int max = -9*6;
        int sum = 0;

        for (int i=1; i<5; i++) {
            for (int j=1; j<5; j++) {
                //same square
                sum += arr[i][j];

                //top level
                sum += arr[i-1][j-1];
                sum += arr[i-1][j];
                sum += arr[i-1][j+1];

                //bottom level
                sum += arr[i+1][j-1];
                sum += arr[i+1][j];
                sum += arr[i+1][j+1];

                if (sum > max) max = sum;
                sum = 0;
            }
        }
        return max;
    }
}
