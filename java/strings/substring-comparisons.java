public static String getSmallestAndLargest(String s, int k) {
    String smallest = "";
    String largest = "";

    for(int i=1; i<=s.length(); i++) {
        String sub = i - k >= 0 ? s.substring(i-k, i) : "not valid string";
        if(!sub.equals("not valid string")) {
           if(sub.compareTo(smallest) < 0 || smallest.equals("")) smallest = sub.substring(0);
           if(sub.compareTo(largest) > 0) largest = sub.substring(0);
        }
    }

    return smallest + "\n" + largest;
}
