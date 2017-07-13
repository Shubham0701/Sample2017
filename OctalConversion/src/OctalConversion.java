import java.util.Scanner;
public class OctalConversion {
	
	public static void main(String args[])
    {
        int binNum=0,octalNum;
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter Binary Number : ");
        binNum = scan.nextInt();
        OctalConversion oc=new OctalConversion();
		octalNum=oc.convertBinaryToOctal(binNum);
        System.out.println(octalNum);
    }
	
	public int convertBinaryToOctal(int n){
		int decNum=0;
		int j=1;
		int octalNum[] = new int[100];
	       while(n != 0){
	           int a = n % 10;
	           decNum += a*j;
	           j=j*2;
	           n=n/10;   
	       }
	       
			int i=0;
			while(decNum != 0)
			 {
			 octalNum[i++] = decNum%8;
			 decNum = decNum/8;
			 }
			int res=0;
			System.out.print("Equivalent Octal Value is :\n");
			 for( ; i>=0; i--)
			 {
				 res = res*10 + octalNum[i];
			 }
			 return res;
	}
}
