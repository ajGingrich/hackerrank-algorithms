import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Trie {
    char c;
    Trie[] children;
    int size = 0;

    public Trie() {
        this.c = 0;
        this.children = new Trie[26]; //only lowercase english letters
    }

    public void add(String s) {
        size++;
        if (s.isEmpty()) {
            return;
        }
        int index = s.charAt(0) - 'a';

        if (this.children[index] == null) {
            this.children[index] = new Trie();
        }
        this.children[index].add(s.substring(1));
    }

    public void find(String p) {
        if (p.isEmpty()) {
            System.out.println(size);
            return;
        }
        int index = p.charAt(0) - 'a';

        if (this.children[index] == null) {
            System.out.println(0);
            return;
        }
        this.children[index].find(p.substring(1));
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Trie trie = new Trie();

        for(int a0 = 0; a0 < n; a0++){
            String op = in.next();
            String contact = in.next();

            if (op.equals("add")) {
                trie.add(contact);
            } else if (op.equals("find")) {
                trie.find(contact);
            }
        }
        in.close();
    }
}