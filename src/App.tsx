import { useEffect, useRef, useState } from 'react';
import './App.scss';
import DrumBackground from './component/drumBg.tsx';
import { Grid2, Link, Typography } from '@mui/material';
import ButtonGrid from './component/buttonsGrid.tsx';
import SoundController from './component/soundController.tsx';
import TYPE_OF_BUTTONS_1 from './component/TYPE_OF_BUTTONS_1.ts';
import TYPE_OF_BUTTONS_2 from './component/TYPE_OF_BUTTONS_2.ts';

function App() {
  const [powerOn, setPowerOn] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");
  const [volume, setVolume] = useState<number>(50);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [buttons, setButtons] = useState(() => 
    TYPE_OF_BUTTONS_1.map(button => ({
      name: button.name,
      trigger: button.trigger,
      audioURL: button.audioURL,
      display: button.display,
      triggerByKey: false,
      onPressed: () => {},
    }))
  );

  const handlePowerChange = (newValue: boolean) => {
    setPowerOn(newValue);
  };

  const handleDisplayChange = (newValue: string) => {
    setDisplayText(newValue);
  };

  const handleVolumeChange = (newValue: number) => {
    setVolume(newValue);
  };

  const handleThemeChange = (newValue: boolean) => {
    setChangeTheme(newValue);
  };

  const powerOnRef = useRef(powerOn);
  useEffect(() => {
    handleDisplayChange(`Power: ${powerOn ? "ON" : "OFF"}`);
    powerOnRef.current = powerOn;
  }, [powerOn]);

  const volumeRef = useRef(volume);
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    setButtons(prevButtons => 
      prevButtons.map(button => ({
        ...button,
        onPressed: () => {
          if (powerOn) {
            playAudio(button.audioURL, volume);
            handleDisplayChange(button.display);
          }
        },
      }))
    )
  }, [powerOn, volume]);

  useEffect(() => {
    const BUTTONS = changeTheme ? TYPE_OF_BUTTONS_2 : TYPE_OF_BUTTONS_1;

    setButtons(
      BUTTONS.map(button => ({
        name: button.name,
        trigger: button.trigger,
        audioURL: button.audioURL,
        display: button.display,
        triggerByKey: false,
        onPressed: () => {
          if (powerOn) {
            playAudio(button.audioURL, volume);
            handleDisplayChange(button.display);
          }
        },
      }))
    );
  }, [changeTheme, powerOn, volume]);

  const playAudio = (audioURL: string, volume: number = 0.5): void => {
    const aud = new Audio(audioURL);
    aud.volume = volume / 100;
    aud.play();
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    const buttonPressed = buttons.find((button) => button.trigger.toLowerCase() === event.key.toLowerCase());

    if (buttonPressed && powerOnRef.current) {
        playAudio(buttonPressed.audioURL, volumeRef.current);
        handleDisplayChange(buttonPressed.display);
        setButtons(prevButtons => 
          prevButtons.map(button => 
            button.trigger === buttonPressed.trigger
              ? { ...button, triggerByKey: true }
              : button
          )
        );

        // Use disable to mimic key press animation
        setTimeout(() => {
          setButtons(prevButtons =>
            prevButtons.map(button =>
              button.trigger === buttonPressed.trigger
                ? { ...button, triggerByKey: false}
                : button
            )
          )
        }, 100);
      }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }; // eslint-disable-next-line
  }, [buttons]);

  return (
    <div className="App">
        <Grid2 
          size={{xs: 12}}
            sx={{
              margin: "20px",
              display: "flex",
            }}
        >
          <DrumBackground
            borderRadius="5px"
            colorTheme="#444444"
          >
            <Grid2 id="drum-machine" container spacing={0}>
              <Grid2 className="header" size={12} textAlign={"right"}>
                <Typography variant="body2" color="white" >
                  By: <Link href="https://github.com/benjy0011" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ ":hover": {
                    color: "blueviolet"
                  } }}>{'Benjy'}</Link>
                </Typography>
              </Grid2>

              <Grid2 size={{ md: 7, sm: 7, xs: 12 }}>
                <ButtonGrid gridSize={3} buttons={buttons} h={"90px"} gap={1} colorTheme={changeTheme ? "secondary" : "info" } ></ButtonGrid>
              </Grid2>

              <Grid2 className="sound-controller" size={{ md: 5, sm: 5, xs: 12 }}>
                  <SoundController
                      powerOn={powerOn}
                      onPowerToggle={handlePowerChange}
                      displayText={displayText}
                      volume={volume}
                      onVolumeChange={handleVolumeChange}
                      changeTheme={changeTheme}
                      onThemeToggle={handleThemeChange}
                  />
              </Grid2>
            </Grid2>

          </DrumBackground>
        </Grid2>
    </div>
  );
}

export default App;
