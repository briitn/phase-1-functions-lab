function distanceFromHqInBlocks(block){return (Math.abs(block-42))}
//console.log(distanceFromHqInBlocks(50))
function distanceFromHqInFeet(block){return (Math.abs(block-42)*264)}
console.log(distanceFromHqInFeet(50))
function distanceTravelledInFeet(block1,block2){return (Math.abs(block1-block2)*264)}

function calculatesFarePrice(start,destination){if (Math.abs(start-destination)*256<=400)return 0
else if (Math.abs(start-destination)*264>400 && Math.abs(start-destination)*256<2000) return (Math.abs(start-destination)*1.28)
else if (Math.abs(start-destination)*264>2000 &&Math.abs(start-destination)*256<2500)return 25
else if (Math.abs(start-destination)*264>2500)return 'cannot travel that far'}
//console.log(calculatesFarePrice(34,32))