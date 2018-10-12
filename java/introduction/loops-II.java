import java.util.*;
import java.io.*;

class Solution{

    public static void buildSeries(int a, int b, int n) {
        for(int i=0; i<n; i++) {
            int res = a + (int)Math.pow(2, 0) * b;
            for(int j=0; j<i; j++) {
                res += (int)Math.pow(2, j+1) * b;
            }

            System.out.printf("%d ", res);
        }
        System.out.printf("%n");
    }

    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();

            buildSeries(a, b, n);
        }
        in.close();
    }
}
