//controller
function updateView(){
  var smiley = getSmiley(smileyIndex);
  document.getElementById('emoji').innerHTML = `
  <div id="image" onclick="doClick()">${smiley}</div>
  <div id="pointsInfo">${points}</div>
  <button onclick="buyUpgrade()"> Kjøp Oppdatering (10 poeng)</button>
  <button onclick="jukse()"> Om du vil jukse :P (100 poeng)</button>
  <p> Hvor mange ganger jukset: ${cheat}</p>
  <button onclick="minusPoints()"> Restart? </button>
  <button onclick="megaJuks()"> MegaJuks! </button>
  `;
}

function getSmiley(smileyIndex) {
    if (smileyIndex == 0) return '🐵';
    if (smileyIndex == 1) return '🙈';
    if (smileyIndex == 2) return '🙉';
    if (smileyIndex == 3) return '🙊';
    if (smileyIndex == 4) return '🐒';
    return '';
  } 
  function getNextSmileyIndex(smileyIndex) {
    const maxSmileyIndex = 4;
    smileyIndex++;
    if (smileyIndex > maxSmileyIndex){
      smileyIndex = 0;
    }
    return smileyIndex;
  }