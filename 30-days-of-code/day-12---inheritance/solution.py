class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber
    def printPerson(self):
        print("Name:", self.lastName + ",", self.firstName)
        print("ID:", self.idNumber)

class Student(Person):

    def __init__(self, firstName, lastName, idNumber, scores):
        Person.__init__(self, firstName, lastName, idNumber)
        self.testScores = scores

    def calculate(self):
        a = self.average(self.testScores)
        if a >= 90:
            return 'O'
        if a >= 80:
            return 'E'
        if a >= 70:
            return 'A'
        if a >= 55:
            return 'P'
        if a >= 40:
            return 'D'
        return 'T'

    def average(self, arr):
        sum = 0
        for i in arr:
            sum += i
        return sum/len(arr)

line = input().split()
firstName = line[0]
lastName = line[1]
idNum = line[2]
numScores = int(input()) # not needed for Python
scores = list( map(int, input().split()) )
s = Student(firstName, lastName, idNum, scores)
s.printPerson()
print("Grade:", s.calculate())