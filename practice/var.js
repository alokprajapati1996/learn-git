// //hoisting issues with var
// // 

// //2
// var a=10;
// var a=20;
// console.log(a);
// let c;
// let d=""
// console.log(d);
// console.log(d);

//  let string="alok kumar"// prajapati hi how are you name is monika"
// console.log(string.length);//length
// //console.log(string.charAt(2))//charAt()
// for(let x of string){
//    // console.log(x)
// }
// let text="";
// for(let x of string){
//      text=text+x
// }
// console.log(text);

// text=""
// for(let y in string){
//     text=text+y
// }
// console.log(text);
// text=""
// for(let y in string){
//     text=text+string[y]
// }
// console.log(text);
// text=""
// for(let y in string){
//     text=string.charAt(y)+text
// }
// console.log(text);

// const name="amit";
// console.log(name);

// let str="alok kumar prajapati";
// let arr=str.split()
// console.log(arr);

//  arr=str.split("")
// console.log(arr);
//  arr=str.split(" ")
// console.log(arr);

// let val=121,sum=0,rev;

// let temp=val;
//  while(val>0){
//      rev=val%10
//      sum=rev+sum*10;
//      val=Math.floor(val/10)
//  }
//  if(temp==sum){
//     console.log(`${temp} is polindrom`);
    
//  }else{
//     console.log(`${temp} is not polindrom`);
    
//  }


// let num=153,sum1=0;//1+27+125
// let temp1=num;
//  while(num>0){
//      rev=val%10
//      sum1=rev*rev*rev+sum1*10;
//      num=Math.floor(num/10)
//  }
//  console.log(sum1);
 
//  if(temp1==sum1){
//     console.log(`${temp1} is armstrong`);
    
//  }else{
//     console.log(`${temp1} is not armstrng`);
    
//  }

// console.log(sum);


// let i,j,len=5;
// let pattern="";
// for ( i = 1; i<=len; i++) {
//     for(j=1;j<=i;j++){
//       pattern=pattern+"* "  
//         }
//     console.log(pattern);
//     pattern=""
    
//     }

// let i,j,len=5;
// let pattern="";
// for ( i = len-1; i>=0; i--) {
//     for(j=1;j<=i;j++){
//       pattern=pattern+" "  
//         }
//         for(let k=1;k<=len-i;k++){
//             pattern=pattern+"*"
//         }
//     console.log(pattern);
//     pattern=""
    
//     }

// let i,j,len=5;
// let pattern="";
// for ( i = 1; i<=len; i++) {
//     for(j=1;j<=i;j++){
//       if(j==1|| j==i||i==len){
//           pattern=pattern+" *"
//       }else{
//         pattern=pattern+"  "
//       }  
//         }
        
//     console.log(pattern);
//     pattern=""
    
//     }

// let i,j,len=5;
// let pattern="";
// for ( i = 1; i<=len; i++) {

//     for(j=1;j<=len-i;j++){
      
//         pattern=pattern+" "
    

//       } 
//       for(let k=1;k<=((2*i)-1);k++){
//         pattern=pattern+"*"
//       }
//       console.log(pattern);
//       pattern=""
      
        // }
        
        // let i,j,len=5;
        // let pattern="";

        // for ( i = 1; i<=len; i++) {
        
        //     for(j=1;j<=i;j++){
        //       pattern=pattern+i
        //     } 
            
        //       console.log(pattern);
        //       pattern=""
        // }
    
        // 1
        // 22
        


        let i,j,len=5;
        let pattern=1;

        for ( i = 1; i<=len; i++) {
        
            for(j=1;j<=i;j++){
              pattern=pattern
            } 
            
              console.log(pattern);
              console.log(pattern);

        }
    