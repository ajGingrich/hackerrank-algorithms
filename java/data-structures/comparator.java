import java.util.*;

// Write your Checker class here
class Checker implements Comparator<Player> {

    @Override
    public int compare(Player firstPlayer, Player secondPlayer) {
        int scoreDifference = secondPlayer.score - firstPlayer.score;

        if(scoreDifference != 0) return scoreDifference;

        return firstPlayer.name.compareTo(secondPlayer.name) > 0 ? 1 : -1;
    }
}

class Player{
    String name;
    int score;

    Player(String name, int score){
        this.name = name;
        this.score = score;
    }
}

class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        Player[] player = new Player[n];
        Checker checker = new Checker();

        for(int i = 0; i < n; i++){
            player[i] = new Player(scan.next(), scan.nextInt());
        }
        scan.close();

        Arrays.sort(player, checker);
        for(int i = 0; i < player.length; i++){
            System.out.printf("%s %s\n", player[i].name, player[i].score);
        }
    }
}
