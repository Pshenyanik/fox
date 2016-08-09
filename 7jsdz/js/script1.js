var arr=[];
var minusArr=[];
var plusArr=[];
 for ( i=0; i<30 ; i++)
     {	 
	 arr[i] = Math.floor(Math.random() * (20 + 20 + 1)) - 20;

	  
     }




 for ( i=0, a=0, b=0; i<arr.length ; i++)
     {	
	if ( arr[i]>0 ) { 
			plusArr[a]=arr[i];
			a++; 
		  }
		else if ( arr[i]<=0 ) { 
			minusArr[b]=arr[i];
			b++; 
		  }
     }
     
     
     
     console.log(arr);
     console.log(plusArr);
     console.log(minusArr);