// from discussion
static boolean isAnagram(String a, String b) {
    if (a.length() != b.length()) return false; // initial check, needs same length for both strings

    a = a.toLowerCase();
    b = b.toLowerCase();

    int [] temp = new int [Character.MAX_VALUE]; // serves a map

    int summ = 0;

    for (int i = 0; i < a.length(); i++){
        summ += ++temp [a.charAt(i)] <= 0 ? -1 : 1; // increase with a
        summ += --temp [b.charAt(i)] >= 0 ? -1 : 1; // decrese for b
    }

    return summ == 0; // if its an anagram, each sum should have been canceled out equally
}

// simpler version based on char # in ascII
static boolean isAnagram(String a, String b) {
    if (a.length() != b.length()) return false;

    a = a.toLowerCase();
    b = b.toLowerCase();

    int sum = 0;

    for(int i=0; i<a.length(); i++) {
        sum += a.charAt(i) - b.charAt(i);
    }

    return sum == 0;
}

// I was going to use HashMap (but not allowed in challenge???)
// Map<Char,Integer> hm = new HashMap<Char,Integer>();
