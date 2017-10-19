import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String binary = Integer.toBinaryString(n);
        System.out.println(consecutiveCharacter(binary));
    }

    public static int consecutiveCharacter(String string) {
        int res = 1;
        int max = 1;

        for (int i=1; i<string.length(); i++) {
            if (string.charAt(i) == string.charAt(i-1)) {
                res++;
                if (res > max) max = res;
            } else {
                res = 1;
            }
        }
        return max;
    }
}