//Complete this code or write your own from scratch
import java.util.*;
import java.io.*;

class Solution{
	public static void main(String []argh)
	{
		Scanner in = new Scanner(System.in);
		int n=in.nextInt();
		in.nextLine();
        Map<String, Integer> dict = new HashMap<>();
		for(int i=0;i<n;i++)
		{
			String name=in.nextLine();
			int phone=in.nextInt();
			in.nextLine();
            dict.put(name, phone);
		}
		while(in.hasNext())
		{
			String s=in.nextLine();
            System.out.println(dict.containsKey(s) ? s + "=" + dict.get(s) : "Not found");
		}
	}
}
