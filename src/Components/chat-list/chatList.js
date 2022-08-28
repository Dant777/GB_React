import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';

export function ChatList({chatData}) {
    return (
        <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "#17212b" }}>
            {chatData.map((chat, index) => {
                const labelId = `checkbox-list-secondary-label-${index + 1}`;
                return (
                    <ListItem key={index + 1} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt={`Avatar n°${chat.name + 1}`} src={`#`} />
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={chat.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="#728394">
                                         {chat.messages}
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
