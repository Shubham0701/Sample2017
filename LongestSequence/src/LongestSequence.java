import java.util.*;
public class LongestSequence {
	
	public static void main(String args[]){
			Scanner sc=new Scanner(System.in);
			int a[]={1,2,3,2,3,4,5,3,4,2,2,3,4,5,6,7,8,1,2,4,5,6,7,8,9};
			int max1=0,start1=0,end1=0,max2=0,start2=0,end2=0;
			for(int i=0;i<a.length-1;i++){
				if(a[i]<a[i+1]){
					max1++;
					
				}
				else{
					end1=i;
					start2=i+1;
					
					if(max1<max2){
						start1=start2;
					    
					}
					else{
						max2=max1;
						end2=end1;
					}
					
				}
				
				}
			
			for(int i=start2;i<end1;i++)
				System.out.print(a[i]);
			
			}
	
	
}
