var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"Bo",
"Bot ",
"Bot k",
"Bot by ky",
"Bot by kyu",
"Bot by kyuu",
"Bot by kyu",
"Bot by ky",
"Bot k",
"Bot",
"Bo",
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}