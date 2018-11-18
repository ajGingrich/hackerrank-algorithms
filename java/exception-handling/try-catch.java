import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        try {
            int x = s.nextInt();
            int y = s.nextInt();

            try {
                System.out.println(x / y);
            } catch (ArithmeticException e) {
                System.out.println(e);
            }

        } catch (InputMismatchException e) {
            System.out.println("java.util.InputMismatchException");
        }
    }
}

// better from discussion
// try (Scanner scanner = new Scanner(System.in)) {
// 	System.out.println(scanner.nextInt()/scanner.nextInt());
// } catch (ArithmeticException | InputMismatchException ex) {
// 	System.out.println(ex);
// }
