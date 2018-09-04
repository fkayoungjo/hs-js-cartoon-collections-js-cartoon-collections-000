function dwarfRollCall(dwarves) {
  var dwarf = []
  for (var i = 0; i < dwarves.length; i++) {
    dwarf.push( `${i + 1}. ${dwarves[i]} `)
  } return dwarf.join('')
}


function summonCaptainPlanet(planeteerCalls){
  var planeteerLoudCalls = []
  for (var i = 0; i <planeteerCalls.length; i++) {
    planeteerLoudCalls.push(planeteerCalls[i].toUpperCase() + "!")
  } return planeteerLoudCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
  if(words[i].length > 4) {
    return true;
  } else {
    return false
  }
}
}


function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i];
    }
  } return 'no cheese!';

}
