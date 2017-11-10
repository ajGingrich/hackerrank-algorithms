import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();

        for (int i=0; i<t; i++) {
            int n = in.nextInt();
            int k = in.nextInt();
            System.out.println(compareBits(n, k));
        }
    }
    
    public static int compareBits(int n, int k) {
        if ((k-1 | k) <= n) return k-1;
        return k-2;
    }
}
