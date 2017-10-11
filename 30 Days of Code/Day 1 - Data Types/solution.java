import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";

        Scanner scan = new Scanner(System.in);

        /* Declare second integer, double, and String variables. */
        int num; double dub; String str;

        /* Read and save an integer, double, and String to your variables.*/
        // Note: If you have trouble reading the entire String, please go back and review the Tutorial closely.
        num = Integer.parseInt(scan.next());
        dub = Double.parseDouble(scan.next());

        //get to next line
        String empty = scan.nextLine();
        str = scan.nextLine();

        /* Print the sum of both integer variables on a new line. */
        System.out.println(num + i);

        /* Print the sum of the double variables on a new line. */
        System.out.println(dub + d);

        /* Concatenate and print the String variables on a new line;
        	the 's' variable above should be printed first. */
        System.out.println(s + str);

        scan.close();
    }
}