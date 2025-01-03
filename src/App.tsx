import React from 'react';
import './App.scss';
import DrumBackground from './component/drumBg.tsx';
import { Button, Grid2, Link, Typography } from '@mui/material';
import ButtonGrid from './component/buttonsGrid.tsx';

const buttons = [
  <Button key="1" 
    onClick={() => {console.log("Button 1")}}
  >
    1
  </Button>,
  <Button key="2" 
    onClick={() => {console.log("Button 2")}}
  >
    2
  </Button>,
];

function App() {
  return (
    <div className="App">
        <Grid2 
        size={{xs: 12}}
          sx={{
            width: {xs:"90vw", sm: "600px", md: "700px"},
            height: {xs:"100vw", sm: "350px", md: "400px"},
            display: "flex",
            flexDirection: "column",
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

              <Grid2 size={8}>
                <ButtonGrid gridSize={3} buttons={buttons} ></ButtonGrid>
              </Grid2>
            </Grid2>

          </DrumBackground>
        </Grid2>
    </div>
  );
}

export default App;
