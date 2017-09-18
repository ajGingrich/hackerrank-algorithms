*The Fibonacci Sequence* 

The Fibonacci sequence begins with *fibonacci*(0) = 0 and *fibonacci*(1) = 1 as its respective first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Here is the basic information you need to calculate *fibonacci*(n) :

* *fibonacci*(0) = 0
* *fibonacci*(1) = 1
* *fibonacci*(*n*) = *fibonacci*(*n - 1*) + *fibonacci*(*n - 2*)

#### Task 
Given *n*, complete the *fibonacci* function so it returns *fibonacci*(n) .

#### Input Format

Locked stub code in the editor reads a single integer *n* denoting the value of  and passes it to the *fibonacci* function.

#### Constraints

* 1 ≤ *n* ≤ 30

#### Output Format

Locked stub code in the editor prints the value of *fibonacci*(*n*) returned by the *fibonacci* function.

#### Sample Input

    3 
 
#### Sample Output

    2

#### Explanation

Consider the Fibonacci sequence:

1. *fibonacci*(0) = 0
2. *fibonacci*(1) = 1
3. *fibonacci*(2) = (0 +1) = 1
4. *fibonacci*(3) = (1 +1) = 2
5. *fibonacci*(4) = (1 + 2) = 3
6. *fibonacci*(5) = (2 + 3) = 5
7. *fibonacci*(6) = (3 + 5) = 8
... 

We want to know the value of 6. *fibonacci*(3). If we look at the sequence above, *fibonacci*(3) evaluates to *2*. Thus, we print *2* as our answer.