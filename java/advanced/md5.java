import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.security.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String input = s.nextLine();

        try {
            byte[] bytesOfMessage = input.getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] thedigest = md.digest(bytesOfMessage);

            for (byte b: thedigest) System.out.printf("%02x", b);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
