import React from 'react';
import './Header.css';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DvrTwoToneIcon from '@mui/icons-material/DvrTwoTone';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import RestoreTwoToneIcon from '@mui/icons-material/RestoreTwoTone';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import SearchTextField from '../../UI/SearchTextField';

export default function Header({ menuName, isDarkMode, setIsDarkMode }) {
    const iconStyle = {
        color: isDarkMode ? 'lightgray' : 'gray',
        width: 20,
        height: 20,
        marginRight: 20
    };

    const handleOnIconClick = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`header ${isDarkMode ? 'dark-header' : 'light-header'}`}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', marginLeft: 30 }}>
                    <DvrTwoToneIcon style={iconStyle} />
                    <StarOutlineTwoToneIcon style={iconStyle} />
                </div>
                <Breadcrumbs style={{ color: 'gray' }} aria-label="breadcrumb">
                    <Link style={{ fontSize: 14 }} underline="hover" color={isDarkMode ? 'gray' : 'gray'} href="/">
                        Dashboards
                    </Link>
                    <Typography sx={{ fontSize: 14, color: isDarkMode ? 'white' : 'text.primary' }}>
                        {menuName}
                    </Typography>
                </Breadcrumbs>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SearchTextField className={isDarkMode ? "input-field-darkmode" : "input-field"} />
                <div style={{ display: 'flex', marginLeft: 30 }}>
                    <WbSunnyTwoToneIcon
                        onClick={handleOnIconClick}
                        style={iconStyle}
                    />
                    <RestoreTwoToneIcon style={iconStyle} />
                    <NotificationsTwoToneIcon style={iconStyle} />
                    <DvrTwoToneIcon style={iconStyle} />
                </div>
            </div>
        </div>
    );
}

