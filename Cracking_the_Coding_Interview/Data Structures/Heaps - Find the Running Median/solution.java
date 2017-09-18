import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        //left Heap
        PriorityQueue<Integer> max = new PriorityQueue<Integer>(Collections.reverseOrder());
        //right Heap
        PriorityQueue<Integer> min = new PriorityQueue<Integer>();

        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] a = new int[n];
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
            addNumber(a[a_i], max, min);
            balance(max, min);
            System.out.println(getMedian(max, min));
        }
    }

    public static void addNumber(int number, PriorityQueue<Integer> max, PriorityQueue<Integer> min) {
        if (max.size() == 0 || number < max.peek()) {
            max.add(number);
        } else {
            min.add(number);
        }
    }

    public static void balance(PriorityQueue<Integer> max, PriorityQueue<Integer> min) {
        if (max.size() - min.size() >= 2) {
            min.add(max.poll());
        } else if (min.size() - max.size() >= 2) {
            max.add(min.poll());
        }
    }

    public static double getMedian(PriorityQueue<Integer> max, PriorityQueue<Integer> min) {
        if (max.size() == min.size()) {
            return ((double) max.peek() + min.peek())/2;
        }
        if (max.size() > min.size()) {
            return max.peek();
        } else {
            return min.peek();
        }
    }

}
