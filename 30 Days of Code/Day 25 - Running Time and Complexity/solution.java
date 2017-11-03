import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        for (int i=0; i<n; i++) {
            int num = in.nextInt();
            System.out.println(isPrime(num));
        }
    }

    public static String isPrime(int n) {
        if (n == 1) return "Not prime";
        if (n == 2) return "Prime";
        if (n % 2 == 0) return "Not prime";

        for (int i=3; i <= Math.sqrt(n); i+=2) {
            if (n % i == 0) return "Not prime";
        }

        return "Prime";
    }
}