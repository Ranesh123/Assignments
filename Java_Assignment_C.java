public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
    
    public static boolean isPangram(String input) {
        // Create a boolean array to mark the presence of each letter in the alphabet
        boolean[] alphabet = new boolean[26];
        
        // Convert the input string to lowercase for case insensitivity
        input = input.toLowerCase();
        
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            
            // Check if the character is a lowercase letter
            if ('a' <= c && c <= 'z') {
                int index = c - 'a';
                alphabet[index] = true;
            }
        }
        
        // Check if all letters from 'a' to 'z' are present in the array
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }
        
        return true;
    }
}
