import React, { useEffect, useState, useRef, createRef } from 'react';
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
    alignItems: 'center',
    flexDirection: 'column',
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
  const [keyPressKeys, setKeyPressKeys] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [soundMain, setSoundMain] = useState({
    soundsLoaded: false,
    soundBank: [],
  });
  const controlKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const btnRef0 = createRef();
  const btnRef1 = createRef();
  const btnRef2 = createRef();
  const btnRef3 = createRef();
  const btnRef4 = createRef();
  const btnRef5 = createRef();
  const btnRef6 = createRef();
  const btnRef7 = createRef();
  const btnRef8 = createRef();
  /*   const btnRef0 = useRef(null);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null); */
  const refBtnArray = [
    btnRef0,
    btnRef1,
    btnRef2,
    btnRef3,
    btnRef4,
    btnRef5,
    btnRef6,
    btnRef7,
    btnRef8,
  ];

  useEffect(() => {
    document.addEventListener('keypress', event =>
      setKeyPressValue(getIndexFromKey(event)),
    );
    document.addEventListener('keydown', event =>
      setKeyPressValue(getIndexFromKey(event)),
    );
    document.addEventListener('keyup', () => setKeyPressValue(''));
  }, []);

  useEffect(() => {
    if (keyPressValue !== '') {
      handleKeyDown(keyPressValue);
    }
  }, [keyPressValue]);

  // Updating the display
  const setDisplay = control => {
    setDisplayText(control);
  };

  function playSound(soundIndex) {
    // Play the sound
    soundMain.soundBank[soundIndex].sound.play();
    // Update the display
    setDisplay(soundMain.soundBank[soundIndex].name);
    // Trigger the button classes
    // refBtnArray[soundIndex].classList.add('btn-test');
    console.log(btnRef0);
  }

  // Button clicks
  const handleClick = e => {
    const soundIndex = parseInt(e.currentTarget.dataset.drumIndex, 10);
    playSound(soundIndex);
  };

  // Get index value from key

  function getIndexFromKey(e) {
    const key = e.key.toUpperCase();
    let index;
    if (key === 'Q') {
      index = 0;
    } else if (key === 'W') {
      index = 1;
    } else if (key === 'E') {
      index = 2;
    } else if (key === 'A') {
      index = 3;
    } else if (key === 'S') {
      index = 4;
    } else if (key === 'D') {
      index = 5;
    } else if (key === 'Z') {
      index = 6;
    } else if (key === 'X') {
      index = 7;
    } else if (key === 'C') {
      index = 8;
    }
    return index;
  }

  // Key presses
  function handleKeyDown(e) {
    if (soundMain.soundsLoaded === true) {
      /* const key = e.key.toUpperCase();
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
      } */
      console.log('KEY PRESS:');
      console.log(keyPressValue);
      playSound(keyPressValue);
    }
  }

  // Import sounds from .js file
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
    console.log('Loading sounds');
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
                  key={`dpad-${Math.random() * 9999}`}
                  data-drum-index={index}
                  id={`drumpad${index}`}
                  onClick={handleClick}
                  ref={refBtnArray[index]}
                  className={keyPressValue === index ? 'btn-test' : null}
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
