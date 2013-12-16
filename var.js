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

var map = [
	['x', 'x', 'x', 'x', 'x', 'x']
	['x', 'x', 'x', 'x', 'x', 'x']
	['x', 'x', 'x', 'x', 'x', 'x']
	['x', 'x', 'x', 'x', 'x', 'x']
	['x', 'x', 'x', 'x', 'x', 'x']
	['x', 'x', 'x', 'x', 'x', 'x']
];

var pos = { x:2, y:2};

vra dirs = [
	{x: 0,y: 1 }, //N
	{x: 1,y: 0 }, //E
	{x: 0,y: -1 }, //S
	{x: -1,y: 0 }, //W
];

var dirIndex = 0;

var step = function() {
	var dir = dirs{dirIndex}

simply.on('singleClick' , function(e) {
	switch (e.button) {
	case 'select':
		break'up':
		console/log('2);


simply.begin();
