const scribble = require('scribbletune');

// Create a clip that contains a musical idea
let clip = scribble.clip({
	notes: 'e3 d2 c1 d2 e3 e3 e3 d2 d2 d2 e3 g5 g5',
	pattern: 'x'.repeat(16)
});

scribble.midi(clip, 'chords.mid');

