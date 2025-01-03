import React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
    '& .MuiSwitch-track': {
        backgroundColor: '#ffffff',
    },
  }));

export default function CustomizedSwitches() {
    return (
        <FormControlLabel sx={{ margin: "0px" }}
            control={<PinkSwitch className="switch" icon={<DoNotDisturbOnIcon className="switch-icon"></DoNotDisturbOnIcon>} checkedIcon={<PlayCircleIcon className="switch-icon"></PlayCircleIcon>} sx={{ m: 0 }}/>}
            label="switch"
            labelPlacement="top"
        />
    );
}

// add in onChange and label props