import React from 'react';
import { Box } from "@mui/material";

interface DrumBackgroundProps {
    header?: string, 
    colorTheme?: string,
    height?: string,
    width?: string,
    borderRadius?: string, 
    children?: React.ReactNode,
}

const DrumBackground: React.FC<DrumBackgroundProps> = ({   
    colorTheme = "#1976d2",
    height = "100%",
    width = "100%",
    borderRadius = "0px", 
    children,
}) => {
    const color = colorTheme;
    return (
        <Box
            sx={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                backgroundColor: color,
                ":hover": {
                    backgroundColor: color,
                },
                cursor: "default",                
            }}
        >
            {children}
        </Box>
    )
}

export default DrumBackground;