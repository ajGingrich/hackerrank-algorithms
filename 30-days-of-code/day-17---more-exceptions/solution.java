import java.util.*;
import java.io.*;

class Calculator {

    public static int power(int n, int p) throws ArithmeticException {
        if (n < 0 || p < 0) {
            throw new ArithmeticException("n and p should be non-negative");
        } else {
            return (int)Math.pow((double)n, (double)p);
        }
    }
}

class Solution{

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        while (t-- > 0) {

            int n = in.nextInt();
            int p = in.nextInt();
            Calculator myCalculator = new Calculator();
            try {
                int ans = myCalculator.power(n, p);
                System.out.println(ans);
            }
            catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        in.close();
    }
}