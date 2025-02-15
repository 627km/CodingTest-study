import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String snum = sc.next();
        char[] arrnum = snum.toCharArray();

        int result = 0;
        for(int i = 0; i < n; i++) {
            result += Character.getNumericValue(arrnum[i]);
        }
        sc.close();
        System.out.println(result);
    }
}
