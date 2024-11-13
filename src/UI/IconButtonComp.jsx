import React, { useState } from 'react';
import { ListItem, Button, Stack, Collapse } from '@mui/material';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

export default function IconButtonComp({ sideBarObj, style }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const iconStyle = { color: 'lightgray', width: 20, height: 20, marginRight: 4, marginTop: 2.5 };

    return (
        <div style={style}>
            {sideBarObj.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem
                        disableGutters
                        style={{
                            color: activeItem === item.title ? 'black' : 'inherit',
                            backgroundColor: activeItem === item.title ? '#f5f5f5' : 'transparent',
                            borderRadius: '4px',
                            marginBottom: '4px',
                        }}
                    >
                        {item.subObject && (
                            openIndex === index ? (
                                <ExpandMore style={iconStyle} />
                            ) : (
                                <ChevronRight style={iconStyle} />
                            )
                        )}
                        {!item.subObject && (
                            openIndex === index ? (
                                <ExpandMore style={{ ...iconStyle, visibility: 'hidden' }} />
                            ) : (
                                <ChevronRight style={{ ...iconStyle, visibility: 'hidden' }} />
                            )
                        )}
                        <Button
                            startIcon={item.icon}
                            onClick={() => {
                                handleToggle(index);
                                setActiveItem(item.title);
                                item?.handler(item.title);
                            }}
                            sx={{
                                all: 'unset',
                                display: 'flex',
                                alignItems: 'center',
                                textTransform: 'none',
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <Stack style={{ fontSize: 14 }} direction="row" alignItems="center">
                                {item.title}
                            </Stack>
                        </Button>
                    </ListItem>

                    {item.subObject && openIndex === index && (
                        <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                            <div>
                                {item.subObject.map((subItem, subIndex) => (
                                    <ListItem
                                        key={subIndex}
                                        disableGutters
                                        style={{
                                            color: activeItem === subItem.title ? 'black' : 'inherit',
                                            paddingLeft: '35px',
                                            backgroundColor: activeItem === subItem.title ? '#f5f5f5' : 'transparent',
                                            borderRadius: '4px',
                                        }}
                                    >
                                        <Button
                                            startIcon={subItem.icon}
                                            onClick={() => {
                                                setActiveItem(subItem.title);
                                                subItem?.handler(subItem.title);
                                            }}
                                            sx={{
                                                all: 'unset',
                                                display: 'flex',
                                                alignItems: 'center',
                                                textTransform: 'none',
                                                margin: 0,
                                                padding: 0,
                                            }}
                                        >
                                            <Stack style={{ fontSize: 14 }} direction="row" alignItems="center">
                                                {subItem.title}
                                            </Stack>
                                        </Button>
                                    </ListItem>
                                ))}
                            </div>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

