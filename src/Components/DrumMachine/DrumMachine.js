import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Loading from '../Loading/Loading';
import Display from '../Display/Display';

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

  const [keyPressValue, setKeyPressValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [soundMain, setSoundMain] = useState({
    soundsLoaded: false,
    soundBank: [],
  });

  useEffect(() => {
    document.addEventListener('keypress', event => setKeyPressValue(event));
  }, []);

  useEffect(() => {
    if (keyPressValue) {
      handleKeyDown(keyPressValue);
    }
  }, [keyPressValue]);

  // Preplanning for dynamic generation of controls. These letters will be used
  //    for the letters that appear on the controls.
  // The controls will be made using .map
  const controlKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const setDisplay = control => {
    setDisplayText(control);
  };

  function playSound(soundIndex) {
    // soundMain.soundBank[soundIndex].play();
    soundMain.soundBank[soundIndex].sound.play();
    setDisplay(soundMain.soundBank[soundIndex].name);
  }

  const handleClick = e => {
    const soundIndex = parseInt(e.currentTarget.dataset.drumIndex, 10);
    playSound(soundIndex);
  };

  function handleKeyDown(e) {
    if (soundMain.soundsLoaded) {
      const key = e.key.toUpperCase();
      if (key === 'Q') {
        playSound(0);
      } else if (key === 'W') {
        playSound(1);
      } else if (key === 'E') {
        playSound(2);
      } else if (key === 'A') {
        playSound(3);
      } else if (key === 'S') {
        playSound(4);
      } else if (key === 'D') {
        playSound(5);
      } else if (key === 'Z') {
        playSound(6);
      } else if (key === 'X') {
        playSound(7);
      } else if (key === 'C') {
        playSound(8);
      }
    }
  }

  async function importSounds() {
    if (soundMain.soundsLoaded === false) {
      try {
        const sb = await import('../../Static/soundbank1');
        setSoundMain(prevState => {
          return {
            ...prevState,
            soundBank: sb.default,
            soundsLoaded: true,
          };
        });
        // return sb;
      } catch (error) {
        console.log(error);
        console.log('import failed');
      }
    }
  }

  async function loadSounds(index) {
    console.log('loading sounds');
    importSounds();
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
              {controlKeys.map((key, index) => (
                <DrumButton
                  data-drum-index={index}
                  id={`drumpad${index}`}
                  onClick={handleClick}
                >
                  {key}
                </DrumButton>
              ))}
            </div>
          )}
        </Paper>
        <Button onClick={() => loadSounds(0)}>Load Sounds 0</Button>
      </Box>
    </Container>
  );
}

export default DrumMachine;
