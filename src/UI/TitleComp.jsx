import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function TitleComp({ icon, title, style, spacing = 1, time, titleStyle }) {
    const formatTime = (time) => {
        const now = new Date();
        const givenTime = new Date(time);
        const diffInSeconds = Math.floor((now - givenTime) / 1000);

        if (diffInSeconds < 60) {
            return 'Just now';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < 12 * 3600) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (now.toDateString() === givenTime.toDateString()) {
            return `Today ${givenTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        } else {
            return givenTime.toLocaleString([], { hour: '2-digit', minute: '2-digit', hour12: true, weekday: 'short', month: 'short', day: 'numeric' });
        }
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={spacing}
            sx={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 2,
                paddingTop: 0.6,
                ...style,
            }}
        >
            {icon && <span>{icon}</span>}
            <div>
                <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 500, ...titleStyle }}>
                    {title}
                </Typography>
                {time && (
                    <Typography variant="body2" sx={{ marginLeft: 'auto', fontSize: 12, color: 'gray' }}>
                        {formatTime(time)}
                    </Typography>
                )}
            </div>
        </Stack>
    );
}
