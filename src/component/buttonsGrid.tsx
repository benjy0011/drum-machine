import { Button, Grid2 } from "@mui/material";
import React from "react";

interface Button {
    name: string;
    triggerByKey: boolean;
    onPressed: () => void;
}

interface ButtonGridProps {
    gridSize: number;
    w?: string;
    h?: string;
    gap?: number;
    buttons: Button[]; 
    colorTheme?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "inherit";
}

const btnVariant = "contained";

const ButtonGrid: React.FC<ButtonGridProps> = ({ gridSize, buttons, gap = 2, w = "100%" , h = "100%", colorTheme = "primary", }) => {

    const size = gridSize * gridSize;
    
    return (
        <Grid2
            container
            spacing={gap}
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 30px"
            }}
        >   
            {Array.from({ length: size }).map((_, index) => (
                <Grid2
                    key={`${index}`}
                    size={{ xs: 12/gridSize}}
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {buttons[index] 
                        ? <Button variant={btnVariant} color={colorTheme} disabled={buttons[index].triggerByKey || false} onClick={buttons[index].onPressed} sx={{ fontSize: "20px", height: h, padding: `auto ${w}` }}>{buttons[index].name}</Button> 
                        : <Button variant={btnVariant} color={colorTheme} disabled={true} sx={{ fontSize: "20px", height: h, padding: `auto ${w}` }}>n/a</Button>}
                </Grid2>
            ))}
        </Grid2>
    )
}

export default ButtonGrid;