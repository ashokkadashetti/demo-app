import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import AllInclusiveTwoToneIcon from '@mui/icons-material/AllInclusiveTwoTone';

export default function SearchTextField({ className, style, endIcon, stylesObj }) {
    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
    };

    return (
        <TextField
            size="small"
            className={className}
            fullWidth
            placeholder="Search"
            value={searchValue}
            style={{ width: 160, ...style }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
                endAdornment: (
                    !endIcon && <InputAdornment position="end" style={{ color: '#999d9d' }}>
                        <Box display="flex" flexDirection="column" alignItems="center" width={10}>
                            <AllInclusiveTwoToneIcon onClick={handleClear} style={{ width: 15, cursor: 'pointer', marginBottom: -2 }} />
                            <AllInclusiveTwoToneIcon style={{ width: 15, cursor: 'pointer', marginTop: -15 }} />
                        </Box> &nbsp; /
                    </InputAdornment>
                ),
                style: { backgroundColor: "#1C1C1C0D", ...stylesObj },
            }}
        />
    );
}
