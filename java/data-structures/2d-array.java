import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    public static void getMaxHourGlass(int[][] arr) {
        int sum = -9 *6;

        for (int i=1; i <=4; i++) {
            for(int y=1; y<=4; y++) {
                int topSum = arr[y-1][i-1] + arr[y-1][i] + arr[y-1][i+1];
                int middleSum = arr[y][i];
                int bottomSum = arr[y+1][i-1] + arr[y+1][i] + arr[y+1][i+1];
                int hourGlassSum = topSum + middleSum + bottomSum;

                if(hourGlassSum > sum) sum = hourGlassSum;
            }
        }

        System.out.println(sum);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                arr[i][j] = arrItem;
            }
        }

        getMaxHourGlass(arr);

        scanner.close();
    }
}
