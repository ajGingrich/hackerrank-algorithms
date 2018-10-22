import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    public static void getTokens(String s) {
        List<String> allMatches = new ArrayList<String>();
        Matcher m = Pattern.compile("[a-zA-Z]+").matcher(s);

        while (m.find()) {
            allMatches.add(m.group());
        }

        System.out.println(allMatches.size());

        for(int i=0; i<allMatches.size(); i++) {
            System.out.println(allMatches.get(i));
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        getTokens(s);
        scan.close();
    }
}
