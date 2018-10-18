import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());

        for (int i=1; i<=n; i++) {
            String str = in.nextLine();
            char[] arr = str.toCharArray();
            char[] even = makeArray("even", arr);
            char[] odd = makeArray("odd", arr);
            System.out.println(new String(even) + " " + new String(odd));
        }

    }

    public static char[] makeArray(String index, char[] arr) {
        int length = 0;

        if (arr.length %2 != 0 && index.equals("even")) {
            length = arr.length/2 + 1;
        } else {
            length = arr.length/2;
        }
        char[] res = new char[length];

        if (index.equals("even")) {
            for (int i=0; i<arr.length; i += 2) {
                int p = i/2;
                res[p] = arr[i];
            }
        } else if (index.equals("odd")) {
            for (int i=1; i<arr.length; i += 2) {
                int p = i/2;
                res[p] = arr[i];
            }
        }

        return res;
    }
}