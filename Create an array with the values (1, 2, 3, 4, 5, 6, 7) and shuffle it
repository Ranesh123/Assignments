import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        
        shuffleArray(originalArray);

        // Print the shuffled array
        for (int num : originalArray) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        Random rand = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);

            // Swap array[i] and array[index]
            int temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
}

