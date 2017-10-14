import java.io.*;
import java.util.*;

public class Solution {

    public static void insertionSortPart2(int[] ar)
    {
        int i = 1;
        while (i < ar.length) {
            int x = ar[i];
            int j = i-1;
            while (j >= 0  && ar[j] > x) {
                ar[j+1] = ar[j];
                j--;
            }
            ar[j+1] = x;
            printArray(ar);
            i++;
        }
    }



    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int s = in.nextInt();
        int[] ar = new int[s];
        for(int i=0;i<s;i++){
            ar[i]=in.nextInt();
        }
        insertionSortPart2(ar);

    }
    private static void printArray(int[] ar) {
        for(int n: ar){
            System.out.print(n+" ");
        }
        System.out.println("");
    }
}
