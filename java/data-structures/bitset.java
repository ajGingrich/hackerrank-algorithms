import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int m = s.nextInt();
        BitSet set1 = new BitSet(n);
        BitSet set2 = new BitSet(n);


        for (int i=0; i<m; i++) {
            String operation = s.next();
            int a = s.nextInt();
            int b = s.nextInt();

            switch (operation) {
                case "AND":
                    if(a == 1) {
                        set1.and(set2);
                    } else {
                        set2.and(set1);
                    }
                    break;
                case "OR":
                    if(a == 1) {
                        set1.or(set2);
                    } else {
                        set2.or(set1);
                    }
                    break;
                case "XOR":
                    if(a == 1) {
                        set1.xor(set2);
                    } else {
                        set2.xor(set1);
                    }
                    break;
                case "FLIP":
                    if(a == 1) {
                        set1.flip(b);
                    } else {
                        set2.flip(b);
                    }
                    break;
                case "SET":
                    if(a == 1) {
                        set1.set(b);
                    } else {
                        set2.set(b);
                    }
                    break;
                default:
                    break;

            }

            System.out.println(set1.cardinality() + " " + set2.cardinality());
        }
    }
}
