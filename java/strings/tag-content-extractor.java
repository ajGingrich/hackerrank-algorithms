import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/* Solution assumes we can't have the symbol "<" as text between tags */
public class Solution{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int testCases = Integer.parseInt(scan.nextLine());

        while (testCases-- > 0) {
            String line = scan.nextLine();

            boolean matchFound = false;
            Pattern r = Pattern.compile("<(.+)>([^<]+)</\\1>");
            Matcher m = r.matcher(line);

            while (m.find()) {
                System.out.println(m.group(2));
                matchFound = true;
            }
            if ( ! matchFound) {
                System.out.println("None");
            }
        }
    }
}

// from discussion


// my WIP, regex for html again. not interested.

// import java.io.*;
// import java.util.*;
// import java.text.*;
// import java.math.*;
// import java.util.regex.*;
//
// public class Solution{
// 	public static void main(String[] args){
//
// 		Scanner in = new Scanner(System.in);
// 		int testCases = Integer.parseInt(in.nextLine());
// 		while(testCases>0){
// 			String line = in.nextLine();
//             String regex = "(?<=<([A-Za-z0-9\\s]+)>)[a-zA-Z\\s]+(?=<\\1.*>)";
//             String pattern = Pattern.compile(regex, PATTERN.CASE_INSENSITIVE);
//
//             boolean matchFound = false;
//             Matcher m = pattern.matcher(line);
//
//             while (m.find()) {
//                 System.out.println(m.group(2));
//                 matchFound = true;
//             }
//             if ( ! matchFound) {
//                 System.out.println("None");
//             }
//
// 			testCases--;
// 		}
// 	}
// }
