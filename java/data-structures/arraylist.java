import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        ArrayList<ArrayList<Integer>> arr = new ArrayList<ArrayList<Integer>>();

        for(int i=0; i<n; i++) {
            int d = s.nextInt();
            ArrayList<Integer> row = new ArrayList<>();

            for(int j=0; j<d; j++) {
                row.add(s.nextInt());
            }

            arr.add(row);
        }

        int q = s.nextInt();

        for(int i=0; i<q; i++) {
            int x = s.nextInt();
            int y = s.nextInt();

            try {
                System.out.println(arr.get(x - 1).get(y - 1));
            } catch(Exception e) {
                System.out.println("ERROR!");
            }
        }
    }
}
