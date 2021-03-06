import { Howl } from 'howler';

import Sound0 from '../Assets/Sounds/set1/kick.wav';
import Sound1 from '../Assets/Sounds/set1/snare.wav';
import Sound2 from '../Assets/Sounds/set1/hh.wav';
import Sound3 from '../Assets/Sounds/set1/fx.wav';
import Sound4 from '../Assets/Sounds/set1/brass1.wav';
import Sound5 from '../Assets/Sounds/set1/brass2.wav';
import Sound6 from '../Assets/Sounds/set1/melody1.wav';
import Sound7 from '../Assets/Sounds/set1/melody2.wav';
import Sound8 from '../Assets/Sounds/set1/glock.wav';

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
    name: 'FX',
    choke: -1,
  },
  {
    sound: new Howl({
      src: [Sound4],
    }),
    name: 'Brass 1',
    choke: 1,
  },
  {
    sound: new Howl({
      src: [Sound5],
    }),
    name: 'Brass 2',
    choke: 1,
  },
  {
    sound: new Howl({
      src: [Sound6],
    }),
    name: 'Melody 1',
    choke: 2,
  },
  {
    sound: new Howl({
      src: [Sound7],
    }),
    name: 'Melody 2',
    choke: 2,
  },
  {
    sound: new Howl({
      src: [Sound8],
    }),
    name: 'Glockenspiel',
    choke: -1,
  },
];

export default soundBank;
