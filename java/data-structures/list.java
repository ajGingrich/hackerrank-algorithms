import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        List<Integer> l = new ArrayList<>();

        for(int i=0; i<n; i++) {
            l.add(s.nextInt());
        }

        int q = s.nextInt();

        for(int i=0; i<q; i++) {
            String command = s.next();
            int x = s.nextInt();

            if(command.equals("Insert")) {
                int y = s.nextInt();

                l.add(x, y);
            } else {
                l.remove(x);
            }
        }

        for (int num: l) System.out.print(num + " ");
    }
}
