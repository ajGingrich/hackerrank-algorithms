import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    public static void weird(int N) {
        if(N % 2 != 0 || N <= 20 && N >= 6) {
          System.out.println("Weird");
        } else {
          System.out.println("Not Weird");
        }
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        weird(N);

        scanner.close();
    }
}
