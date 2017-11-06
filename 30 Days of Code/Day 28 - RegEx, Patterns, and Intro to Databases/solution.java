import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());
        ArrayList<String> res = new ArrayList<>();


        for (int i=0; i<n; i++) {
            String[] details = in.nextLine().split("\\s");
            if (isMatch(details[1])) {
                res.add(details[0]);
            }
        }

        Collections.sort(res);
        print(res);
    }

    public static boolean isMatch(String email) {
        Pattern p = Pattern.compile(".*@gmail.com$");
        Matcher m = p.matcher(email);

        if (m.find()) return true;

        return false;
    }

    public static void print(ArrayList<String> arr) {
        for (String s: arr) {
            System.out.println(s);
        }
    }
}
