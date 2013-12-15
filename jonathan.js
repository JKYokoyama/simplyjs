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
  title: 'Let\'s have some fun!',
  body: 'Bear with me ʕ•ᴥ•ʔ'
}, true);

simply.on('singleClick', function(e) {
  if(true) {
        simply.setText({body: 'Totes McGotes'});
  }
});

var change_text='punch';

var fruitList=[
  'Q( o _o)p q(o.o )' ,
  'Q( >_*)-O)`,o)' ,
  'k.o.' ,
  'Loser' ,
  ];
  
  //math.floor(0.05 * 4) =

var fruitIndex = Math.random() * fruitlist.length;

simply.on('singleClick', function(e) {
  if(e.button === 'select') {
        simply.setText({body: ''});
        simply.on('singleClick', function(e) {
  }else if (e.button === 'up') {
        simply.setText({ subtitle:'..Q( >_*)-O)`,o)..'})
simply.begin();
