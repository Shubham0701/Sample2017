import java.util.*;
public class SortCheck {
			public static void main(String args[]){
				int a[]={1,2,3,4,5,6};
				
				int flag=0;
				
				for(int i=0;i<a.length-1;i++){
					if(a[i]<=a[i+1]){
						flag=1;					}
					else
						break;
				}
				for(int i=0;i<a.length-1;i++){
					if(a[i]>=a[i+1]){
						flag=2;
					}
					else
						break;
				}
				if(flag == 0)
					System.out.println("Not Sorted");
				else if(flag==1)
				System.out.println("Ascending");
				else if(flag==2)
				System.out.println("Descending");
			}
}
