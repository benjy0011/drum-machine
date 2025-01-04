import React, { useEffect, useState } from 'react';
import './App.scss';
import DrumBackground from './component/drumBg.tsx';
import { Grid2, Link, Typography } from '@mui/material';
import ButtonGrid from './component/buttonsGrid.tsx';
import SoundController from './component/soundController.tsx';

function App() {
  const [powerOn, setPowerOn] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");
  const [volume, setVolume] = useState<number>(50);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);

  const handlePowerChange = (newValue: boolean) => {
    setPowerOn(newValue);
    console.log(`power: ${newValue ? "ON" : "OFF"}`)
  };

  const handleDisplayChange = (newValue: string) => {
    setDisplayText(newValue);
    console.log(`Display: ${newValue}`)
  };

  const handleVolumeChange = (newValue: number) => {
    setVolume(newValue);
    console.log(`volume: ${newValue}`)
  };

  const handleThemeChange = (newValue: boolean) => {
    setChangeTheme(newValue);
    console.log(`theme: ${newValue ? "Theme 2" : "Theme 1"}`)
  };

  useEffect(() => {
    handleDisplayChange(`Power: ${powerOn ? "ON" : "OFF"}`);
  }, [powerOn])

  useEffect(() => {
    handleDisplayChange(`Volume: ${volume}`);
  }, [volume])

  useEffect(() => {
    handleDisplayChange(`Theme: ${changeTheme ? "2" : "1"}`);
  }, [changeTheme])

  // test components
  const dummy = (): void => {
    handleDisplayChange("one");
  }
  
  const dummy2 = (): void => {
    handleDisplayChange("two");
  }
  
  const dummy3 = (): void => {
    handleDisplayChange("three");
  }
  
  const buttons = [
    {name: "one", onPressed: dummy},
    {name: "two", onPressed: dummy2},
    {name: "three", onPressed: dummy3},
  ];


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
              <Grid2 size={12} textAlign={"right"} sx={{ margin: "10px" }}>
                <Typography variant="body1" color="white" >
                  By: <Link href="https://github.com/benjy0011" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ ":hover": {
                    color: "blueviolet"
                  } }}>{'Benjy'}</Link>
                </Typography>
              </Grid2>

              <Grid2 size={{ md: 7, sm: 7, xs: 12 }}>
                <ButtonGrid gridSize={3} buttons={buttons} h={"90px"} gap={3} ></ButtonGrid>
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
