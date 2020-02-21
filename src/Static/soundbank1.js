import { Howl } from 'howler';

import Sound0 from '../Assets/Sounds/kick.wav';
import Sound1 from '../Assets/Sounds/snare.wav';
import Sound2 from '../Assets/Sounds/hh.wav';
import Sound3 from '../Assets/Sounds/fx.wav';
import Sound4 from '../Assets/Sounds/brass1.wav';
import Sound5 from '../Assets/Sounds/brass2.wav';
import Sound6 from '../Assets/Sounds/melody1.wav';
import Sound7 from '../Assets/Sounds/melody2.wav';
import Sound8 from '../Assets/Sounds/glock.wav';

const soundBank = [
  {
    sound: new Howl({
      src: [Sound0],
    }),
    name: 'Kick',
  },
  { sound: Sound1, name: 'Snare' },
  { sound: Sound2, name: 'Hi-Hat Closed' },
  { sound: Sound3, name: 'FX' },
  { sound: Sound4, name: 'Brass 1' },
  { sound: Sound5, name: 'Brass 2' },
  { sound: Sound6, name: 'Melody 1' },
  { sound: Sound7, name: 'Melody 2' },
  { sound: Sound8, name: 'Glockenspiel' },
];

export default soundBank;
