import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import PublicIcon from '@material-ui/icons/Public';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
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

function AboutFolderList() {
    const classes = useStyles();
    const router = useRouter();

    const about = router.pathname === '/about/us';
    const overview = router.pathname === '/about/overview';
    const team = router.pathname === '/about/our-team';

    return (
        <List className={classes.root}>
            {!about && (
                <Link href="/about/us" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: "#5eac3f"}}>
                                <InfoIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="About Us" />
                        </ListItem>
                </Link>
            )}

            {!overview && (
                <Link href="/about/overview" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#5eac3f"}}>
                            <PublicIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Overview" />
                    </ListItem>
                </Link>
            )}

            {!team && (
                <Link href="/about/our-team" className={classes.link}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar style={{ backgroundColor: "#5eac3f"}}>
                            <PeopleOutlineIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Our Team" />
                    </ListItem>
                    </Link>
            )}

        </List>
    );
}

export default (AboutFolderList);