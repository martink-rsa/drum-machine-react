import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Howl } from 'howler';
import Loading from '../Loading/Loading';
import Display from '../Display/Display';
import Kick from '../../Assets/Sounds/kick.wav';
import Snare from '../../Assets/Sounds/snare.wav';
import HHClosed from '../../Assets/Sounds/hh.wav';
import FX from '../../Assets/Sounds/fx.wav';
import Brass1 from '../../Assets/Sounds/brass1.wav';
import Brass2 from '../../Assets/Sounds/brass2.wav';
import Melody1 from '../../Assets/Sounds/melody1.wav';
import Melody2 from '../../Assets/Sounds/melody2.wav';
import Glock from '../../Assets/Sounds/glock.wav';
// import HHOpen from '../../Assets/Sounds/hh-open.wav';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  drumMachineContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#202020',
    width: '400px', // Adjust main container size here
    height: 'auto',
    padding: '20px',
  },
  displayContainer: {
    background: 'gray',
    height: '50px',
    width: '350px',
    marginBottom: '20px',
  },
  drumPadsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    background: '#2f2f2f',
    width: '350px',
    height: '350px',
    padding: '10px',
    // width: '400px',
  },
  'drum-pad': {
    backgroundColor: 'gray',
    height: '100px',
    width: '100%',
  },
  actionsContainer: {
    height: '100px',
    width: '350px',
    background: 'gray',
    marginTop: '20px',
  },
}));

const DrumButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    // padding: '6px 12px',
    // border: '1px solid',
    // lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

function DrumMachine() {
  const classes = useStyles();
  const [displayText, setDisplayText] = useState('');
  const [eventLoaded, setEventLoaded] = useState(false);
  const [soundMain, setSoundMain] = useState({
    soundsLoaded: false,
    soundBank: [],
  });

  const [SBTest, setSBTest] = useState([]);
  // Preplanning for dynamic generation of controls. These letters will be used
  //    for the letters that appear on the controls.
  // The controls will be made using .map
  const controlKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const drumSounds = [
    {
      name: 'drumpad0',
      soundName: 'kick',
      sound: new Howl({
        src: [Kick],
      }),
      display: 'Kick',
    },
    {
      name: 'drumpad1',
      soundName: 'snare',
      sound: new Howl({
        src: [Snare],
      }),
      display: 'Snare',
    },
    {
      name: 'drumpad2',
      soundName: 'hhClosed',
      sound: new Howl({
        src: [HHClosed],
      }),
      display: 'Hi-Hat Closed',
    },
    {
      name: 'drumpad3',
      soundName: 'brass1',
      sound: new Howl({
        src: [Brass1],
      }),
      display: 'Brass 1',
    },
    {
      name: 'drumpad4',
      soundName: 'brass2',
      sound: new Howl({
        src: [Brass2],
      }),
      display: 'Brass 2',
    },
    {
      name: 'drumpad5',
      soundName: 'melody1',
      sound: new Howl({
        src: [Melody1],
      }),
      display: 'Melody 1',
    },
    {
      name: 'drumpad6',
      soundName: 'melody2',
      sound: new Howl({
        src: [Melody2],
      }),
      display: 'Melody 2',
    },
    {
      name: 'drumpad7',
      soundName: 'glock',
      sound: new Howl({
        src: [Glock],
      }),
      display: 'Glock',
    },
    {
      name: 'drumpad8',
      soundName: 'fx',
      sound: new Howl({
        src: [FX],
      }),
      display: 'FX',
    },
  ];

  const setDisplay = control => {
    setDisplayText(control);
  };

  async function playSound(soundIndex) {
    let text = '';
    console.log('PLAY SOUND:');
    console.log(soundMain);
    console.log(SBTest);
  }

  const handleClick = e => {
    const control = e.currentTarget.id;
    playSound(control);
  };

  function handleKeyDown(e) {
    console.log('key down');
    const key = e.key.toUpperCase();
    if (key === 'Q') {
      playSound(0);
    } else if (key === 'W') {
      playSound(drumSounds[1]);
    } else if (key === 'E') {
      playSound(drumSounds[2]);
    } else if (key === 'A') {
      playSound(drumSounds[3]);
    } else if (key === 'S') {
      playSound(drumSounds[4]);
    } else if (key === 'D') {
      playSound(drumSounds[5]);
    } else if (key === 'Z') {
      playSound(drumSounds[6]);
    } else if (key === 'X') {
      playSound(drumSounds[7]);
    } else if (key === 'C') {
      playSound(drumSounds[8]);
    }
  }

  useEffect(() => {
    if (eventLoaded === false) {
      document.addEventListener('keypress', handleKeyDown);
      setEventLoaded(true);
    }
    return () => {
      window.removeEventListener('keypress', handleKeyDown);
    };
  }, [handleKeyDown, eventLoaded]);

  async function importSounds() {
    if (soundMain.soundsLoaded === false) {
      try {
        const sb = await import('../../Static/soundbank1');
        // console.log(sb.default);
        /* setSoundMain(prevState => {
          return {
            soundBank: sb.default,
            soundsLoaded: true,
          };
        }); */
        return sb;
      } catch (error) {
        console.log(error);
        console.log('import failed');
      }
    }
  }

  async function getSounds() {
    const sounds = await import('../../Static/soundbank1');
    console.log(sounds);
    return sounds;
  }

  async function loadSounds(index) {
    console.log('loading sounds');
    // importSounds();

    setSBTest(await getSounds());
    // setSBTest(gs);
    // console.log(gs);
  }

  return (
    <Container maxWidth="sm">
      <Box my={4} className={classes.mainContainer}>
        <Paper id="drum-machine" className={classes.drumMachineContainer}>
          <Display text={displayText} />
          {soundMain.soundsLoaded === false ? (
            <Loading />
          ) : (
            <div className={classes.drumPadsContainer}>
              <DrumButton id="drumpad0" onClick={handleClick}>
                Q
              </DrumButton>
              <DrumButton id="drumpad1" onClick={handleClick}>
                W
              </DrumButton>
              <DrumButton id="drumpad2" onClick={handleClick}>
                E
              </DrumButton>
              <DrumButton id="drumpad3" onClick={handleClick}>
                A
              </DrumButton>
              <DrumButton id="drumpad4" onClick={handleClick}>
                S
              </DrumButton>
              <DrumButton id="drumpad5" onClick={handleClick}>
                D
              </DrumButton>
              <DrumButton id="drumpad6" onClick={handleClick}>
                Z
              </DrumButton>
              <DrumButton id="drumpad7" onClick={handleClick}>
                X
              </DrumButton>
              <DrumButton id="drumpad8" onClick={handleClick}>
                C
              </DrumButton>
            </div>
          )}
        </Paper>
        <Button onClick={() => loadSounds(0)}>Load Sounds 0</Button>
      </Box>
    </Container>
  );
}

export default DrumMachine;
