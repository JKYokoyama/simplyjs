var change_text='punch';

var fightList=[
  { title: 'Q( o _o)p q(o.o )'} ,
  { title: 'Q( >_*)-O)`,o)'} ,
  { title: 'k.o.'} ,
  { title: 'Loser'} ,
  ];
  
//Math.random() -> 0.5
//Math.random() * fruitList.length -> 2
//Math.floor(2.232) = 2

var fruitIndex = 0;

var getRandomIndex = function() {

var fruitIndex = Math.floor(Math.random() * fruitlist.length;
};

var upateFruit = funtion() {
  simply.setText({body: fightList[fightIndex]});
}

simply.on('singleClick', function(e) {
  if(e.button === 'select') {\
  //Do nothing
  }else if (e.button === 'up') {
    fightIndex--;
    if (--fightIndex < 0) {fruitIndex = fightlist.length - 1;}
  }else if (e.button === 'down') {
    fruitIndex--;
    if (--fightIndex < 0) {fruitIndex = fightlist.length + 1;}
    
simply.setText({body: fruitlist[fruitIndex]});
        simply.on('singleClick', function(e) {
