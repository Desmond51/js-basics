
 
function checkSpeed(speed){
    let speedLimit = 70;
   let pointPerKm= 5;

    if(speed <=speedLimit){
        return 'OK'
    }
    else{
        const points = Math.floor((speed-speedLimit)/pointPerKm);
        if(points >= 12){
            return 'License Suspended'
        }else{
            return `points: ${points}`
        }
    }

}

checkSpeed(65)