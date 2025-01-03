import { Button, Grid2 } from "@mui/material";
import React from "react";

interface ButtonGridProps {
    gridSize: number;
    buttons: React.ReactNode[]; 
}

function ButtonGrid({ gridSize, buttons }: ButtonGridProps) {
    const size = gridSize * gridSize;

    return (
        <Grid2
            container
            spacing={1}
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                    {buttons[index] ? buttons[index] : <Button variant="contained" disabled={true}>n/a</Button>}
                </Grid2>
            ))}

            {/* {buttons.map((label, index) => (
                <Grid2
                    key={`${label}-${index}`}
                    size={{ xs: 12/gridSize}}
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {buttons[index] ? buttons[index] : <Button disabled={true}>n/a</Button>}
                </Grid2>
            ))} */}
        </Grid2>
    )
}

export default ButtonGrid;