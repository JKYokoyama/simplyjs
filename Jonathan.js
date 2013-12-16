console.log('Simply.js demo!');

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

simply.setText({
  title: 'Simply Demo!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);

simply.begin();


var change_text='punch';

var fightList=[
  { title: 'Q( o _o)p q(o.o )'} ,
  { title: 'Q( >_*)-O)`,o)'} ,
  { title: 'k.o.'} ,
  { title: 'Loser'} ,
  ];
  
//Math.random() -> 0.5
//Math.random() * fightList.length -> 2
//Math.floor(2.232) = 2

var fightIndex = 0;

var getRandomIndex = function() {

var fightIndex = Math.floor(Math.random() * fightlist.length;
};

var updateFight = funtion() {
  simply.setText({body: fightList[fightIndex]});
}

simply.on('singleClick', function(e) {
  if(e.button === 'select') {\
  //Do nothing
  }else if (e.button === 'up') {
    fightIndex--;
    if (--fightIndex < 0) {fightIndex = fightlist.length - 1;}
  }else if (e.button === 'down') {
    fightIndex--;
    if (--fightIndex < 0) {fightIndex = fightlist.length + 1;}
    
  }
});

simply.begin();
