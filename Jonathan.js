console.log('Simply.js demo!');

/*
simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.setText({
    subtitle: 'Pressed ' + e.button + '!',
  });
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.setText({
    subtitle: 'Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!',
  });
});

simply.begin();
*/

simply.setText({
  title: 'Fight!',
}, true);

var fightList=[
  { title: 'Q( o_o)p q(o.o )'} ,
  { title: 'Q( >_*)-O)`,<)'} ,
  { title: 'k.o.'} ,
  { title: 'Loser'} ,
  ];
  
//Math.random() -> 0.5
//Math.random() * fightList.length -> 2
//Math.floor(2.232) = 2

var fightIndex = 0;

var getRandomIndex = function() {
  var fightIndex = Math.floor(Math.random() * fightList.length);
  return fightIndex;
};

var updateFight = function() {
  simply.setText(fightList[fightIndex]);
};

simply.on('singleClick', function(e) {
  if(e.button === 'select') {
  //Do nothing
  }else if (e.button === 'up') {
    if (--fightIndex < 0) { fightIndex = fightList.length - 1; }
    updateFight();
  }else if (e.button === 'down') {
    if (++fightIndex >= fightList.length) { fightIndex = 0; }
    updateFight();
  }
});

simply.begin();

