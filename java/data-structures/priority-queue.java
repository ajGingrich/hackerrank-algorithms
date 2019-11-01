import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.PriorityQueue;
import java.util.Comparator;

class Student implements Comparable<Student> {
    private int id;
    private String name;
    private double cgpa;

    Student(int id, String name, double cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public double getCGPA() {
        return this.cgpa;
    }

    @Override
    public int compareTo(Student s) {
        if(this.getCGPA() != s.getCGPA()) return this.getCGPA() - s.getCGPA() > 0 ? -1 : 1;

        if(this.getName() != s.getName()) return this.getName().compareTo(s.getName()) > 0 ? 1 : -1;

        return this.getId() - s.getId();
    }

}

class Priorities {
    public List<Student> getStudents(List<String> events) {
        PriorityQueue<Student> q = new PriorityQueue<Student>();
        List<Student> students = new ArrayList<Student>();

        for (int i=0; i<events.size(); i++) {
            String[] event = events.get(i).split(" ");
            String eventType = event[0];

            if (eventType.equals("ENTER")) {
                String name = event[1];
                double cgpa = Double.parseDouble(event[2]);
                int id = Integer.parseInt(event[3]);
                q.offer(new Student(id, name, cgpa));
            } else if (eventType.equals("SERVED")) {
                q.poll();
            }
        }

        while (!q.isEmpty()) {
            students.add(q.poll());
        }

        return students;
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
