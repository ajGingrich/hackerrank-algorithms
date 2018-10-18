A prime is a natural number greater than  that has no positive divisors other than  and itself. Given  integers, determine the primality of each integer and print whether it is Prime or Not prime on a new line.

Note: If possible, try to come up with an O(sqrt(n))  primality algorithm, or see what sort of optimizations you can come up with for an O(*n*)  algorithm. Be sure to check out the Editorial after submitting your code!

#### Input Format

The first line contains an integer, , denoting the number of integers to check for primality. 
Each of the  subsequent lines contains an integer, , you must test for primality.

#### Constraints

* 1 ≤ *p* 1 ≤  30
* 1 ≤ *n* 1 ≤  2 x 10<sup>9</sup>

#### Output Format

For each integer, print whether  is Prime or Not prime on a new line.

#### Sample Input

    3
    12
    5
    7
#### Sample Output

    Not prime
    Prime
    Prime

#### Explanation

We check the following  integers for primality:

 1. `n=12` is divisible by numbers other than  and itself (i.e.: , , ), so we print Not prime on a new line.
 2. `n=5` is only divisible  and itself, so we print Prime on a new line.
 3. `n=3` is only divisible  and itself, so we print Prime on a new line.