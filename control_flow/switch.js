// switch case  = > to reduce multiple if - else condition statements

// syntax : 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 1       
switch (month) {
    case 1:
        console.log("January")
        break;          // Without break it can execute all stat. until a break hits or end of block 
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    
    default:
        console.log("Invalid month number")
        break;
}