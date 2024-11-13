import React from 'react';
import { Box } from '@mui/material';

export default function CardComp({ children, style, isDarkMode, className }) {
    return (
        <Box
            className={className}
            sx={{
                ...style,
                backgroundColor: isDarkMode ? '#121212' : '#fff',
                color: isDarkMode ? 'white' : 'black',
            }}
        >
            {children}
        </Box>
    );
};
