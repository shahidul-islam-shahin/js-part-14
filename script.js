let day;


switch(new Date().getDay()){

    case 0:
        day= "Its Weekend day";
    break    
    case 1:
        day= "This is Monday"
    break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        day= "Its office day";
    break;
    default:
        day = "Not Found";    

}

console.log(day)