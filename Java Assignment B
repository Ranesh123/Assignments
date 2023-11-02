public class RomanToInteger {
    public static int romanToInteger(String roman) {
        int result = 0;
        int prevValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char currentChar = roman.charAt(i);
            int currentValue = romanValue(currentChar);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static int romanValue(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                throw new IllegalArgumentException("Invalid Roman numeral character: " + romanChar);
        }
    }

    public static void main(String[] args) {
        String romanNumeral = "X";
        int integerResult = romanToInteger(romanNumeral);
        System.out.println("The integer value of " + romanNumeral + " is " + integerResult);
    }
}
