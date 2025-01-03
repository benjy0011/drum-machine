import { Button, Grid2 } from "@mui/material";
import React from "react";

interface Button {
    name: string;
    onPressed: () => void;
}

interface ButtonGridProps {
    gridSize: number;
    w?: string;
    h?: string;
    gap?: number;
    buttons: Button[]; 
}

const btnVariant = "contained";

const ButtonGrid: React.FC<ButtonGridProps> = ({ gridSize, buttons, gap = 2, w = "100%" , h = "100%" }) => {
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
                padding: "20px"
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
                        ? <Button variant={btnVariant} onClick={buttons[index].onPressed} sx={{ height: h, padding: `auto ${w}` }}>{buttons[index].name}</Button> 
                        : <Button variant={btnVariant} disabled={true} sx={{ height: h, padding: `auto ${w}` }}>n/a</Button>}
                </Grid2>
            ))}
        </Grid2>
    )
}

export default ButtonGrid;