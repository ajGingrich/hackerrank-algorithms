public class Solution {

        public static void main(String[] args){
            Class student = Student.class; // https://docs.oracle.com/javase/7/docs/api/java/lang/Class.html
            Method[] methods = student.getDeclaredMethods();

            ArrayList<String> methodList = new ArrayList<>();
            for(Method m: methods){
                methodList.add(m.getName());
            }
            Collections.sort(methodList);
            for(String name: methodList){
                System.out.println(name);
            }
        }

    }
