import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Howl } from 'howler';
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

/*
  REWRITE AND REFACTORING INFO:
  The code needs a significant rewrite and refactor. It was originally built to match
    the user stories of the freeCodeCamp project however this has led to
    code that is not efficient and very redundant.

  There should only be one source for each sound, such as an object, that contains
  the sound as well as information regarding the sound. This information is hat
  will be used to render in the sound trigger display.

  The main point of this is that a sound can easily be loaded into a drum pad
  and no other changes need to be made, such as a hard coded display for that
  sound.

  Care must be taken not to include everything in the button of a sound as the
  keypress trigger event would not have access to this information.

  Instead, attempt to have both the keypress and button trigger a single source
  for a sound.

  FURTHER INFO:

  1. Generate and display the buttons using .map.


*/
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
  // Preplanning for dynamic generation of controls. These letters will be used
  //    for the letters that appear on the controls.
  // The controls will be made using .map
  const controlKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const kick = new Howl({
    src: [Kick],
  });
  const snare = new Howl({
    src: [Snare],
  });
  const hhClosed = new Howl({
    src: [HHClosed],
  });
  const brass1 = new Howl({
    src: [Brass1],
  });
  const brass2 = new Howl({
    src: [Brass2],
  });
  const melody1 = new Howl({
    src: [Melody1],
  });
  const melody2 = new Howl({
    src: [Melody2],
  });
  const glock = new Howl({
    src: [Glock],
  });
  const fx = new Howl({
    src: [FX],
  });

  const setDisplay = control => {
    setDisplayText(control);
  };

  const playSound = control => {
    let text = '';
    switch (control) {
      case 'drumpad0':
        melody1.stop();
        melody2.stop();
        melody1.play();
        text = 'Melody 1';
        break;
      case 'drumpad1':
        melody1.stop();
        melody2.stop();
        melody2.play();
        text = 'Melody 2';
        break;
      case 'drumpad2':
        snare.play();
        text = 'Snare';
        break;
      case 'drumpad3':
        brass1.stop();
        brass2.stop();
        brass1.play();
        text = 'Brass 1';
        break;
      case 'drumpad4':
        brass1.stop();
        brass2.stop();
        brass2.play();
        text = 'Brass 2';
        break;
      case 'drumpad5':
        hhClosed.play();
        text = 'HiHat Closed';
        break;
      case 'drumpad6':
        glock.stop();
        glock.play();
        text = 'Glockenspiel';
        break;
      case 'drumpad7':
        fx.stop();
        fx.play();
        text = 'FX';
        break;
      case 'drumpad8':
        kick.play();
        text = 'Kick';
        break;
      default:
    }
    setDisplay(text);
  };

  const handleClick = e => {
    const control = e.currentTarget.id;
    playSound(control);
  };

  const handleKeyDown = e => {
    const key = e.key.toUpperCase();
    if (key === 'Q') {
      playSound('drumpad0');
    } else if (key === 'W') {
      playSound('drumpad1');
    } else if (key === 'E') {
      playSound('drumpad2');
    } else if (key === 'A') {
      playSound('drumpad3');
    } else if (key === 'S') {
      playSound('drumpad4');
    } else if (key === 'D') {
      playSound('drumpad5');
    } else if (key === 'Z') {
      playSound('drumpad6');
    } else if (key === 'X') {
      playSound('drumpad7');
    } else if (key === 'C') {
      playSound('drumpad8');
    }
  };

  useEffect(() => {
    if (eventLoaded === false) {
      document.addEventListener('keypress', handleKeyDown);
      setEventLoaded(true);
    }
    return () => {
      window.removeEventListener('keypress', handleKeyDown);
    };
  }, [handleKeyDown, eventLoaded]);

  return (
    <Container maxWidth="sm">
      <Box my={4} className={classes.mainContainer}>
        <Paper id="drum-machine" className={classes.drumMachineContainer}>
          <Display text={displayText} />
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
          {/* <div className={classes.actionsContainer}>Kick Sample</div> */}
        </Paper>
      </Box>
    </Container>
  );
}

export default DrumMachine;
