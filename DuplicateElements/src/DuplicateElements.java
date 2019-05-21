import java.util.*;
public class DuplicateElements {
		public static void main(String args[]){
			DuplicateElements de=new DuplicateElements();
			Scanner sc=new Scanner(System.in);
			int len=sc.nextInt();
			int input[]=new int[len];
			for(int i=0;i<len;i++){
				input[i]=sc.nextInt();
			}
			int output[]=de.removeDuplicate(input);
			for(int i=0;i<output.length;i++)
				if(output[i]!=0){
				System.out.print(output[i]+" ");
				}
		}
		
		public int[] removeDuplicate(int input[]){
			
			int max=input[0];
			
		    for(int i=1;i<input.length;i++){
				if(input[i]>max){
					max=input[i];
				}
			}
			
			int ans[]=new int[max+1];
			
			for(int i=0;i<input.length;i++){
				ans[input[i]]=1;
			}
		
			
			int out[]=new int[input.length];
			int k=0;
			for(int i=0;i<max+1;i++){
			if(ans[i]==1){
				out[k++]=i;
			}
			}
			return out;
			}
}
