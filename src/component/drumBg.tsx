import React from 'react';
import { Box } from "@mui/material";

function DrumBackground( props: {   
    header?: string, 
    colorTheme?: string,
    height?: string,
    width?: string,
    borderRadius?: string, 
    children?: React.ReactNode,
}) {
    const color = props.colorTheme || "#1976d2";
    return (
        <Box
            sx={{
                width: props.width || "100%",
                height: props.height || "100%",
                borderRadius: props.borderRadius,
                backgroundColor: color,
                ":hover": {
                    backgroundColor: color,
                },
                cursor: "default",                
            }}
        >
            {props.children}
        </Box>
    )
}

export default DrumBackground;