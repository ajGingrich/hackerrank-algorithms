import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String actual = in.nextLine();
        String expected = in.nextLine();
        String[] a = actual.split("\\s");
        String[] e = expected.split("\\s");

        System.out.println(libraryFine(makeIntArray(a), makeIntArray(e)));
    }

    public static int libraryFine(int[] actual, int[] expected) {

        // year
        if (actual[2] < expected[2]) return 0;
        if (actual[2] > expected[2]) return 10000;

        // month
        if (actual[1] < expected[1]) return 0;
        if (actual[1] > expected[1]) return 500 * (actual[1] - expected[1]);

        // day
        if (actual[0] > expected[0]) return 15 * (actual[0] - expected[0]);

        return 0;
    }

    public static int[] makeIntArray(String[] arr) {
        int[] res = new int[arr.length];
        for (int i=0; i<arr.length; i++) {
            res[i] = Integer.parseInt(arr[i]);
        }
        return res;
    }
}