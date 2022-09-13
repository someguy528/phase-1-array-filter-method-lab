// Code your solution here
function findMatching(driverNames, unique){
    return driverNames.filter(name => name.toUpperCase() === unique.toUpperCase())
};
function fuzzyMatch(driverNames, unique){
    return driverNames.filter(name => name[0].toUpperCase() === unique[0].toUpperCase())
};
function matchName(driverNames, unique){
    return driverNames.filter(driver => driver.name === unique)
};