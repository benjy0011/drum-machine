import { Grid2 } from "@mui/material";
import React from "react";
import OnOffSwitch from "./onOffSwitch.tsx";
import ChangeThemeSwitch from "./changeThemeSwitch.tsx";
import VolumeControlSlider from "./volumeSlider.tsx";
import DisplayScreen from "./displayScreen.tsx";

interface SoundControlProps {
    powerOn: boolean;
    onPowerToggle: (newValue: boolean) => void;

    displayText: string;

    volume: number;
    onVolumeChange: (newValue: number) => void;

    changeTheme: boolean;
    onThemeToggle: (newValue: boolean) => void;
}

const SoundController: React.FC<SoundControlProps> = ({ powerOn, onPowerToggle, displayText, volume, onVolumeChange, changeTheme, onThemeToggle }) => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{ md: 12, sm: 12, xs: 3 }}>
                <OnOffSwitch value={powerOn} onToggle={onPowerToggle} />
            </Grid2>

            <Grid2 container spacing={2} size={{ md: 12, sm: 12, xs: 6 }} className="screen-and-volume">
                <Grid2 size={12}>
                    <DisplayScreen value={displayText} />
                </Grid2>

                <Grid2 className="volume-slider" size={12}>
                    <VolumeControlSlider value={volume} onValueChange={onVolumeChange} />
                </Grid2>
            </Grid2>
            
            <Grid2 size={{ md: 12, sm: 12, xs: 3 }}>
                <ChangeThemeSwitch value={changeTheme} onToggle={onThemeToggle} />
            </Grid2>
        </Grid2>
    )
}

export default SoundController;