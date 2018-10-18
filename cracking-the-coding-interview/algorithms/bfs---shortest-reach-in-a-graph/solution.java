import java.io.*;
import java.util.*;

public class Solution {

    public static class Graph{
        List<List<Integer>> adjList;
        int size;
        private static int EDGE_DISTANCE = 6;

        public Graph(int size) {
            adjList = new ArrayList<>();
            this.size = size;
            for (int i=0; i < size; i++) {
                adjList.add(new ArrayList<Integer>()); //adjacency list init
            }
        }

        public void addEdge(int first, int second){
            adjList.get(first).add(second);

            // For undirected graph, must add edges from both sides.
            adjList.get(second).add(first);
        }

        public int[] shortestReach(int startId) {
            int[] distances = new int[size];
            Arrays.fill(distances, -1); //empty array with -1

            LinkedList<Integer> queue = new LinkedList<Integer>();
            queue.add(startId); // queue init

            distances[startId] = 0;

            while(!queue.isEmpty()) { // BFS loop.
                int node = queue.poll();

                for (int neighbor: adjList.get(node)) {
                    if (distances[neighbor] == -1) {
                        distances[neighbor] = distances[node] + EDGE_DISTANCE;
                        queue.add(neighbor);
                    }
                }
            }
            return distances;
        }
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int q = scan.nextInt();

        for(int i=0; i < q; i++){
            int nodes  = scan.nextInt();
            int edges = scan.nextInt();

            Graph G = new Graph(nodes);

            for(int k=0; k < edges; k++){
                int from = scan.nextInt();
                int to = scan.nextInt();
                G.addEdge(from - 1, to - 1);
            }

            int s = scan.nextInt();
            int[] res = G.shortestReach(s - 1);

            for (int j=0; j < res.length; j++) {
                if (j != s-1) { // don't print root node
                    System.out.print(res[j] + " ");
                }
            }
            System.out.println();
        }
    }
}