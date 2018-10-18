import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();

        System.out.println(isWeird(n));
    }

    public static String isWeird(int num) {
        if (num % 2 != 0) return "Weird";
        if (num >= 2 && num <= 5) return "Not Weird";
        if (num >= 6 && num <= 20) return "Weird";
        return "Not Weird";
    }
}
