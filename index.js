// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return streetNumber > 42 ? streetNumber - 42 : 42 - streetNumber;
}

function distanceFromHqInFeet(streetNumber) {
    const totalStreets = distanceFromHqInBlocks(streetNumber);
    return totalStreets * 264;

}

function distanceTravelledInFeet(start, destination) {
    const totalStreets = Math.abs(start - destination);
    return totalStreets * 264;
}

function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination);

    if(totalFeet > 2500) {
        return 'cannot travel that far';

    } else if(totalFeet > 2000) {
        return 25;

    } else if(totalFeet > 400){
        return (totalFeet - 400) * .02;

    } else {
        return 0;
    }
}