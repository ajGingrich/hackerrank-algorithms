class Add {
    void add(int ... args) {
        int sum = 0;
        String res = "";

        for (int i=0; i<args.length; i++) {
            if(i == args.length - 1) {
                res += args[i] + "=";
            } else {
                res += args[i] + "+";
            }

            sum += args[i];
        }

        System.out.println(res + sum);
    }
}
