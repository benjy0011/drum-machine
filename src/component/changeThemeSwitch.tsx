import React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';


const OrangeSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      color: orange[600],
      '&:hover': {
      backgroundColor: alpha(orange[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: orange[600],
      '&:hover': {
      backgroundColor: alpha(orange[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: orange[200],
    },
    '& .MuiSwitch-track': {
      backgroundColor: orange[200],
    },
  }));

interface ChangeThemeSwitchProps {
  value: boolean;
  onToggle: (newValue: boolean) => void;
}

const ChangeThemeSwitch: React.FC<ChangeThemeSwitchProps> = ({ value, onToggle }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onToggle(event.target.checked);
    };

    return (
        <FormControlLabel sx={{ margin: "0px", '& .MuiFormControlLabel-label': {
          fontSize: '13px'
        } }}
            control={
              <OrangeSwitch 
                className="switch" 
                icon={<OfflineBoltIcon className="switch-icon"></OfflineBoltIcon>} 
                checkedIcon={<AlbumRoundedIcon className="switch-icon"></AlbumRoundedIcon >} 
                sx={{ m: 0 }}
                value={value}
                onChange={handleChange}
              />
            }
            label="Theme"
            labelPlacement="top"
        />
    );
}

export default ChangeThemeSwitch;