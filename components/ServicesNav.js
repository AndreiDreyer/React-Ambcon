import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Link } from '@material-ui/core';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'black',
  },
}));

function FolderList() {
    const classes = useStyles();
    const router = useRouter();

    const consolidated = router.pathname === '/services-consolidated-load';
    const clearing = router.pathname === '/services-clearing';
    const procurement = router.pathname === '/services-procurement';
    const fullLoad = router.pathname === '/services-full-load';

    console.log(router.pathname)
    

    return (
        <List className={classes.root}>
            {!consolidated && (
                <Link href="/services-consolidated-load" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Consolidation Loads" />
                        </ListItem>
                </Link>
            )}

            {!clearing && (
                <Link href="/services-clearing" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Clearing" />
                    </ListItem>
                </Link>
            )}

            {!procurement && (
                <Link href="/services-procurement" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Procurement / Facilitation Service" />
                    </ListItem>
                    </Link>
            )}

            {!fullLoad && (
                <Link href="/services-full-load" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Full Load" />
                    </ListItem>
                </Link>
            )}
        </List>
    );
}

export default (FolderList);