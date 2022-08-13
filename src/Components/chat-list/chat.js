import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';

export function ChatList() {
    return (
        <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "#17212b" }}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt={`Avatar n°${value + 1}`} src={`#`} />
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={`Chat ${value + 1}`}
                                secondary={
                                    <React.Fragment>
                                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="#728394">
                                        Last message {value+1}
                                        </Typography>

                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
            <Divider variant="inset" component="li" />
        </List>
    );
}
