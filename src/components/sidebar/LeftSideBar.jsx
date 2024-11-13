import React from 'react';
import './Sidebar.css';
import { Avatar, Button, Typography } from '@mui/material';

import TitleComp from '../../UI/TitleComp';
import CardComp from '../../UI/CardComp';
import IconButtonComp from '../../UI/IconButtonComp';

import { Home, Settings } from '@mui/icons-material';
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import PortraitTwoToneIcon from '@mui/icons-material/PortraitTwoTone';
import ContactEmergencyTwoToneIcon from '@mui/icons-material/ContactEmergencyTwoTone';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';

function LeftSidebar({ isDarkMode, setMenuName }) {
    const personImage = 'https://images.pexels.com/photos/1267690/pexels-photo-1267690.jpeg';
    const buttonStyle = { textTransform: 'none', color: 'lightgray', fontWeight: 400, padding: 0, fontSize: 14 }
    const iconStyle = { padding: 0, margin: 0, color: '#929395', marginTop: 2 }

    const handleOnSideMenuClick = (breadcrumbs) => {
        setMenuName(breadcrumbs)
    }

    const sideBarObj = [
        {
            icon: <PieChartIcon style={iconStyle} />,
            title: "Default",
            handler: handleOnSideMenuClick,
            subObject: null,
        },
        {
            icon: <LocalMallOutlinedIcon style={iconStyle} />,
            title: "eCommerce",
            handler: handleOnSideMenuClick,
            subObject: [
                {
                    icon: <Settings style={iconStyle} />,
                    title: "Sub-item",
                    handler: handleOnSideMenuClick,
                }
            ]
        },
        {
            icon: <FolderOpenOutlinedIcon style={iconStyle} />,
            title: "Projects",
            handler: handleOnSideMenuClick,
            subObject: [
                {
                    icon: <Settings style={iconStyle} />,
                    handler: handleOnSideMenuClick,
                    title: "Sub-item"
                }
            ]
        },
        {
            icon: <ImportContactsTwoToneIcon style={iconStyle} />,
            title: "Online Courses",
            handler: handleOnSideMenuClick,
            subObject: [
                {
                    icon: <Settings style={iconStyle} />,
                    handler: handleOnSideMenuClick,
                    title: "Sub-item"
                }
            ]
        },
    ];

    const sideBarObjPages = [
        {
            icon: <PortraitTwoToneIcon style={iconStyle} />,
            title: "User Profile",
            handler: handleOnSideMenuClick,
            subObject: [
                {
                    title: "Overview",
                    handler: handleOnSideMenuClick,
                },
                {
                    title: "Projects",
                    handler: handleOnSideMenuClick,
                },
                {
                    title: "Compaigns",
                    handler: handleOnSideMenuClick,
                },
                {
                    title: "Documents",
                    handler: handleOnSideMenuClick,
                },
                {
                    title: "Followers",
                    handler: handleOnSideMenuClick,
                },
            ]
        },
        {
            icon: <ContactEmergencyTwoToneIcon style={iconStyle} />,
            title: "Account",
            handler: handleOnSideMenuClick,
            subObject: [
                {
                    icon: <Settings style={iconStyle} />,
                    title: "Sub-item",
                    handler: handleOnSideMenuClick,
                }
            ]
        },
        {
            icon: <GroupAddTwoToneIcon style={iconStyle} />,
            title: "Corporate",
            handler: handleOnSideMenuClick,
            subObject: {
                icon: <Settings style={iconStyle} />,
                title: "Sub-item",
                handler: handleOnSideMenuClick,
            }
        },
        {
            icon: <BookTwoToneIcon style={iconStyle} />,
            title: "Blog",
            handler: handleOnSideMenuClick,
            subObject: {
                icon: <Settings style={iconStyle} />,
                title: "Sub-item",
                handler: handleOnSideMenuClick,
            }
        },
        {
            icon: <QuestionAnswerTwoToneIcon style={iconStyle} />,
            title: "Social",
            handler: handleOnSideMenuClick,
            subObject: {
                icon: <Settings style={iconStyle} />,
                title: "Sub-item",
                handler: handleOnSideMenuClick,
            }
        },
    ];

    return <div className="left-sidebar">
        <TitleComp
            icon={<Avatar
                src={personImage}
                alt="Back of Head"
                sx={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#f0f0f0',
                    marginBottom: 2,
                    marginTop: 2
                }}
            />}
            title="ByeWind" style={{ marginRight: 1 }}
        />
        <CardComp isDarkMode={isDarkMode} style={{ marginBottom: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 16, paddingTop: 4 }}>
                <Button style={{ ...buttonStyle, fontSize: 14, color: "#868686" }}>Favorites</Button>
                <Button style={{ ...buttonStyle, fontSize: 14, marginRight: 40 }}>Recently</Button>
            </div>
            <ul style={{ paddingLeft: 20 }} className="gray-bullets">
                <li style={{ fontSize: 14 }}>Overview</li>
                <li style={{ fontSize: 14 }}>Project</li>
            </ul>
        </CardComp>
        <CardComp isDarkMode={isDarkMode} style={{ marginBottom: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 16, paddingTop: 4 }}>
                <Button style={{ ...buttonStyle, color: "#868686" }}>DashBoards</Button>
            </div>
            <IconButtonComp style={{ marginLeft: 10 }} sideBarObj={sideBarObj} />
        </CardComp>
        <CardComp isDarkMode={isDarkMode}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 6, paddingTop: 4 }}>
                <Button style={{ ...buttonStyle, color: "#868686" }}>Pages</Button>
            </div>
            <IconButtonComp style={{ marginLeft: 10 }} sideBarObj={sideBarObjPages} />
        </CardComp>
    </div>;
}

export default LeftSidebar;
