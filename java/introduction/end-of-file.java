import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int count = 1;

        while(s.hasNext()) {
            System.out.printf("%d %s%n", count, s.nextLine());
            count++;
        }
    }
}
