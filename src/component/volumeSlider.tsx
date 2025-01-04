import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

interface VolumeControlSliderProps {
    value: number;
    onValueChange: (newValue: number) => void;
}

const VolumeControlSlider: React.FC<VolumeControlSliderProps> = ({ value, onValueChange }) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    onValueChange(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} valueLabelDisplay="auto" />
        <VolumeUp />
      </Stack>
    </Box>
  );
}

export default VolumeControlSlider;