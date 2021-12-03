//view
function doClick(){
    points += pointsPerClick;
    // smileyIndex = getNextSmileyIndex(smileyIndex);
    updateView();
}

function buyUpgrade(){
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    updateView();
}

function jukse(){
  if (points < 100) return;
  points -= 100;
  pointsPerClick *= 5;
  cheat++;
  updateView();
}

function minusPoints(){
  if(pointsPerClick < 0) return;
  points = 0;
  pointsPerClick = 1;
  cheat = 0;
  updateView();
}

function megaJuks(){
  points += 1000;

  updateView();
}