Given a number of dollars, *n*, and a list of dollar values for *m* distinct coins, **C** = {*c*<sub>0</sub>, *c*<sub>1</sub>, *c*<sub>2</sub>, ... ,*c*<sub>*m* - 1</sub>}, find and print the number of different ways you can make change for *n* dollars if each coin is available in an infinite quantity.

**Hints:**

* You can solve this problem recursively, but you must optimize your solution to eliminate [overlapping subproblems](https://en.wikipedia.org/wiki/Overlapping_subproblems) using [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) if you wish to pass all test cases. More specifically, think of ways to store the checked solutions and use the stored values to avoid repeatedly calculating the same values.

* Think about the degenerate cases: 
 * How many ways can you make change for *0* dollars? 
 * How many ways can you make change for less than *0* dollars if you have no coins?

* If you are having trouble defining the storage for your precomputed values, then think about it in terms of the base case (*n* = 0).

#### Input Format

* The first line contain two space-separated integers describing the respective values of *n* and *m*. 
* The second line contains *m* space-separated integers describing the respective values of *c*<sub>0</sub>, *c*<sub>1</sub>, ..., *c*<sub>*m* - 1</sub> where each integer denotes the dollar value of a distinct coin available in an infinite quantity.

#### Constraints

* 1 ≤ *c*<sub>*i*</sub> ≤ 50
* 1 ≤ *n* ≤ 250
* 1 ≤ *n* ≤ 50
* The list of coins contains *m* distinct integers where each integer denotes the dollar value of a coin available in an infinite quantity.

#### Output Format

Print a single integer denoting the number of ways we can make change for *n* dollars using an infinite supply of our *m* types of coins.

#### Sample Input 0

    4 3
    1 2 3
 
#### Sample Output 0

    4

#### Explanation 0
 
For *n* = 4 and *C* = {1, 2, 3} there are four solutions:

1. {1, 1, 1, 1}
2. {1, 1, 2}
3. {2, 2}
4. {1, 3}

Thus, we print **4** on a new line.

#### Sample Input 1

    10 4
    2 5 3 6

#### Sample Output 1

    5

#### Explanation 1 

For *n* = 10 and *C* = {2, 3, 5, 6} there are five solutions:

1. {2, 2, 2, 2, 2}
2. {2, 2, 3, 3}
3. {2, 2, 6}
4. {2, 3, 5}
5. {5, 5}

Thus, we print **5** on a new line.