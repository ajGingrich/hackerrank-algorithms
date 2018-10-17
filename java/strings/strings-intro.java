import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();

        System.out.println(A.length() + B.length());

        if(A.compareTo(B) > 0) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        String aUpper = A.substring(0,1).toUpperCase() + A.substring(1);
        String bUpper = B.substring(0,1).toUpperCase() + B.substring(1);

        System.out.println(aUpper + " " + bUpper);
    }
}
