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

interface OnOffSwitchProps {
  value: boolean;
  onToggle: (newValue: boolean) => void;
}

const OnOffSwitch: React.FC<OnOffSwitchProps> = ({ value, onToggle }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
      <FormControlLabel sx={{ margin: "0px", '& .MuiFormControlLabel-label': {
        fontSize: '13px'
      } }}
          control=
            {
              <PinkSwitch 
                className="switch" 
                icon={<DoNotDisturbOnIcon className="switch-icon"></DoNotDisturbOnIcon>} 
                checkedIcon={<PlayCircleIcon className="switch-icon"></PlayCircleIcon>} 
                sx={{ m: 0 }}
                checked={value}
                onChange={handleChange}
              />
            }
          label="Power"
          labelPlacement="top"
      />
  );
}

export default OnOffSwitch;