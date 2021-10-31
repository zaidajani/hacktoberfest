
#include<stdio.h>
int findmaxdifference(int a,int b);
int findmaxdifference(int a,int b){
    if (a>b)
    {
        return a-b;
    }
    else
    {
        return b-a;
    }
    
}
int main(void)
{
int a=5,diff=0,temp=0,c,d;
int arr[]={10,11,7,12,14};
for(int i=0;i<4;i++)
{
c=arr[i];
d=arr[i+1];
diff=findmaxdifference(c,d);
if(diff>temp)
{
    temp=diff;
}
}
printf("the largest difference is %d /n",temp);
return 0;
}
