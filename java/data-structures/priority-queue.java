import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Student {
  int id;
  String name;
  double cgpa;

  public Student(int id, String name, double cgpa) {
    this.id = id;
    this.name = name;
    this.cgpa = cgpa;
  }

  int getID() {
    return this.id;
  }

  String getName() {
    return this.name;
  }

  double getCGPA() {
    return this.cgpa;
  }
}

class Priorities {
  List<Student> getStudents(List<String> events) {
    // work on this part
    return new List<Student>();
  }
}

public class Solution {
    private final static Scanner scan = new Scanner(System.in);
    private final static Priorities priorities = new Priorities();

    public static void main(String[] args) {
        int totalEvents = Integer.parseInt(scan.nextLine());
        List<String> events = new ArrayList<>();

        while (totalEvents-- != 0) {
            String event = scan.nextLine();
            events.add(event);
        }

        List<Student> students = priorities.getStudents(events);

        if (students.isEmpty()) {
            System.out.println("EMPTY");
        } else {
            for (Student st: students) {
                System.out.println(st.getName());
            }
        }
    }
}
