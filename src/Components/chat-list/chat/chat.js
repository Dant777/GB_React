import { memo } from "react";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const Chat = memo(({ chat, selected, deleteConversationByName }) => {
    return (
        <ListItem key={chat.name} disablePadding>
            <ListItemButton selected={selected}>
                <button onClick={() => deleteConversationByName(chat.name)}>x</button>
                <ListItemAvatar>
                    <Avatar alt={`Avatar n°${chat.name + 1}`} src={`#`} />
                </ListItemAvatar>
                <ListItemText
                    primary={chat.name}
                    secondary={
                        <React.Fragment>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="#728394">
                                {chat.messages ?? "message"}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
});
