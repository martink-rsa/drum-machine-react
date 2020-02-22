import { Howl } from 'howler';

import Sound0 from '../Assets/Sounds/set0/kick.wav';
import Sound1 from '../Assets/Sounds/set0/snare.wav';
import Sound2 from '../Assets/Sounds/set0/hh.wav';
import Sound3 from '../Assets/Sounds/set0/crash.mp3';
import Sound4 from '../Assets/Sounds/set0/bass1.mp3';
import Sound5 from '../Assets/Sounds/set0/chord1.mp3';
import Sound6 from '../Assets/Sounds/set0/fx2.mp3';
import Sound7 from '../Assets/Sounds/set0/fx3.mp3';
import Sound8 from '../Assets/Sounds/set0/fx.mp3';

const soundBank = [
  {
    sound: new Howl({
      src: [Sound0],
    }),
    name: 'Kick',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound1],
    }),
    name: 'Snare',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound2],
    }),
    name: 'Hi-Hat Closed',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound3],
    }),
    name: 'Crash',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound4],
    }),
    name: 'Bass',
    choke: 1,
  },
  {
    sound: new Howl({
      src: [Sound5],
    }),
    name: 'Chords',
    choke: 2,
  },
  {
    sound: new Howl({
      src: [Sound6],
    }),
    name: 'FX1',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound7],
    }),
    name: 'FX2',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound8],
    }),
    name: 'FX3',
    choke: -1,
  },
];

export default soundBank;
