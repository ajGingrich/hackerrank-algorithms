import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int[] arr = new int[n];
        int count = 0;

        for (int i=0; i<arr.length; i++) {
            arr[i] = s.nextInt();
        }

        for (int i=0; i<=arr.length; i++) {
            for(int j=0; j<=arr.length; j++) {
                if(j > i) {
                  int sum = 0;
                  for (int x: Arrays.copyOfRange(arr, i, j)) sum += x;

                  if(sum < 0) count++;
                }
            }
        }
        System.out.println(count);
    }
}
