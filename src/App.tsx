import React, { useEffect, useState } from 'react';
import './App.scss';
import DrumBackground from './component/drumBg.tsx';
import { Grid2, Link, Typography } from '@mui/material';
import ButtonGrid from './component/buttonsGrid.tsx';
import SoundController from './component/soundController.tsx';
import TYPE_OF_BUTTONS from './component/TYPE_OF_BUTTONS.ts';

function App() {
  const [powerOn, setPowerOn] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");
  const [volume, setVolume] = useState<number>(50);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);

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

  useEffect(() => {
    handleDisplayChange(`Power: ${powerOn ? "ON" : "OFF"}`);
  }, [powerOn])

  // test components
  const playAudio = (audioURL: string, volume: number = 0.5): void => {
    let aud = new Audio(audioURL);
    aud.volume = volume / 100;
    aud.play();
  }
  
  const buttons: { name: string; onPressed: () => void }[] = [];
  TYPE_OF_BUTTONS.forEach(button => {
    buttons.push({
        name: button.name,
        onPressed: () => {
          if (powerOn) {
            playAudio(button.audioURL, volume);
            handleDisplayChange(button.display);
          }
        },
    });
  });

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
