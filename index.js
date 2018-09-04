function dwarfRollCall(dwarves) {
  var dwarf = []
  for (var i = 0; i < dwarves.length; i++) {
    dwarf.push(`${i + 1}. ${dwarves[i]}`)
  } return dwarf.join('')
}


function summonCaptainPlanet(planeteerCalls){
  var planeteerLoudCalls = []
  for (var i = 0; i <planeteerCalls.length; i++) {
    planeteerLoudCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  } return planeteerLoudCalls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
