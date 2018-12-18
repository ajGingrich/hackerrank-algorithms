import static java.lang.System.in;

class Prime {
    public void checkPrime(int... args) {
        for(int n: args) {
            if(BigInteger.valueOf(n).isProbablePrime(1)) {
                System.out.print(n + " ");
            }
        }
        System.out.println();
    }
}
