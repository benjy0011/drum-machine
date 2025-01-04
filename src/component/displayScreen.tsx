import React, { useState } from 'react';
import Box from '@mui/material/Box';

interface DisplayScreenProps {
    value: string;
}

const DisplayScreen: React.FC<DisplayScreenProps> = ({ value }) => {
    return (
        <Box id="display" component="div" sx={{ p: 2, border: '1px dashed grey', width:"250px", padding:"1px", height: "40px", fontSize: "20px" }}>
            {value}
        </Box>
    );
}

export default DisplayScreen;