import React from 'react';
import './App.scss';
import DrumBackground from './component/drumBg.tsx';
import { Button, Grid2, Link, Typography, Switch } from '@mui/material';
import ButtonGrid from './component/buttonsGrid.tsx';
import SoundController from './component/soundController.tsx';


const dummy = (): void => {
  console.log("one");
}

const dummy2 = (): void => {
  console.log("two");
}

const buttons = [
  {name: "one", onPressed: dummy},
  {name: "two", onPressed: dummy2},
];

function App() {
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
            <Grid2 container spacing={2}>
              <Grid2 size={12} textAlign={"right"} sx={{ margin: "10px" }}>
                <Typography variant="body1" color="white" >
                  By: <Link href="https://github.com/benjy0011" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ ":hover": {
                    color: "blueviolet"
                  } }}>{'Benjy'}</Link>
                </Typography>
              </Grid2>

              <Grid2 size={{ md: 7, sm: 9, xs: 12 }}>
                <ButtonGrid gridSize={3} buttons={buttons} h={"90px"} gap={3} ></ButtonGrid>
              </Grid2>

              <Grid2 className="sound-controller" size={{ md: 5, sm: 3, xs: 12 }}>
                  <SoundController></SoundController>
              </Grid2>
            </Grid2>

          </DrumBackground>
        </Grid2>
    </div>
  );
}

export default App;
