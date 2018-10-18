The member states of the UN are planning to send **2** people to the Moon. But there is a problem. In line with their principles of global unity, they want to pair astronauts of **2** different countries.

There are *N* trained astronauts numbered from *0* to *N* - 1. But those in charge of the mission did not receive information about the citizenship of each astronaut. The only information they have is that some particular pairs of astronauts belong to the same country.

Your task is to compute in how many ways they can pick a pair of astronauts belonging to different countries. Assume that you are provided enough pairs to let you identify the groups of astronauts even though you might not know their country directly. For instance, if *1*, *2*, and *3* are astronauts from the same country; it is sufficient to mention that (*1*, *2*) and (*2*, *3*) are pairs of astronauts from the same country without providing information about a third pair (*1*, *3*). 

#### Input Format

The first line contains two integers, *N* and *P*, separated by a single space. *P* lines follow. Each line contains integers separated by a single space *A* and *B* such that

* 0 ≤ *A*, *B* ≤ *N* - 1

and *A* and *B* are astronauts from the same country.

#### Constraints

* 1 ≤ *N* ≤ 10<sup>5</sup>
* 1 ≤ *P* ≤ 10<sup>4</sup>

#### Output Format

An integer that denotes the number of permissible ways to choose a pair of astronauts.

#### Sample Input 0

    5 3
    0 1
    2 3
    0 4

#### Sample Output 0

    6

#### Explanation 0

Persons numbered *0*, *1* and *4* belong to the same country, and those numbered *2* and *3* belong to the same country, but different from the previous one. All in all, the UN has **6** ways of choosing a pair:

1. persons **0** and **2**
2. persons **0** and **3**
3. persons **1** and **2**
4. persons **1** and **3**
5. persons **2** and **4**
6. persons **3** and **4**

##### Sample Input 1

    4 1
    0 2

#### Sample Output 1

    5

#### Explanation 1

Persons numbered *0* and *2* belong to the same country, and persons *1* and *3* don't share countries with anyone else, so they belong to unique countries on their own. All in all, the UN has **5** ways of choosing a pair:

1. persons **0** and **1**
2. persons **0** and **3**
3. persons **1** and **2**
4. persons **1** and **3**
5. persons **2** and **3**