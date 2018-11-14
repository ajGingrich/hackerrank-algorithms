import java.util.*;
class Solution{

    public static void main(String []argh)
    {
        Scanner sc = new Scanner(System.in);
        Map dict = new HashMap<String, String>();
        dict.put("{", "}");
        dict.put("[", "]");
        dict.put("(", ")");

        while (sc.hasNext()) {
            String input=sc.next();
            ArrayList<String> stack = new ArrayList<String>();

            for (int i=0; i<input.length(); i++) {
                String bracket = Character.toString(input.charAt(i));

                if(dict.containsKey(bracket)) {
                    stack.add(0, bracket);
                } else if(stack.isEmpty()) {
                    stack.add(0, bracket);
                } else if(dict.containsKey(stack.get(0)) && dict.get(stack.get(0).toString()).equals(bracket)) {
                    stack.remove(0);
                }
            }

            System.out.println(stack.isEmpty() ? "true" : "false");
        }
    }
}
