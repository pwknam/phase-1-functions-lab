function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation > 42) {
        return pickUpLocation - 42;
    }
    else {
        return 42 - pickUpLocation;
    }
}

function distanceFromHqInFeet(pickUpLocation){
    const numberOfBlocks = distanceFromHqInBlocks(pickUpLocation);
    return numberOfBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    // if (destination > start) {
    //     const rideDistance = (destination - start) * 264 
    //     if (rideDistance < 400){
    //         return 0
    //     }
    //     else if (rideDistance > 400 && rideDistance < 2000) {
    //         return (rideDistance - 400) * (0.02)
    //     }
    //     else if (rideDistance > 2000 && rideDistance < 2500) {
    //         return 25
    //     }
    //     else if (rideDistance > 2500){
    //         return `cannot travel that far`
    //     }
    // }
    // else {
    //     const rideDistance = (start - destination) * 264
    //     if (rideDistance < 400){
    //         return 0
    //     }
    //     else if (rideDistance > 400 && rideDistance < 2000){
    //         return(rideDistance - 400) * (0.02)
    //     }
    //     else if (rideDistance > 2000 && rideDistance < 2500) { 
    //         return 25
    //     }
    //     else if (rideDistance > 2500){
    //         return `cannot travel that far`
    //     }
    // }
    let distance; 
    
    if (destination > start){
        distance = (destination - start)* 264
    }
    else {
        distance = (start - destination) * 264
    }

    if (distance < 400){
            return 0
            }
    else if (distance > 400 && distance < 2000) {
            return (distance - 400) * (0.02)
            }
    else if (distance > 2000 && distance < 2500) {
            return 25
            }
    else if (distance > 2500){
         return `cannot travel that far`
            }

}