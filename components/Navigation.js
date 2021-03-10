import React from "react";

import Link from "next/link";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import AppBar from "@material-ui/core/AppBar";
import Collapse from "@material-ui/core/Collapse";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  appBar: {
    backgroundColor: "white",
    display: "flex",
    overflowX: "auto",
  },
  menuButton: {
    color: "#007cc4",
    backgroundColor: "white",
    margin: theme.spacing(2),
    width: "100px",
  },
  navbarLogo: {
    width: "200px",
    marginTop: '-0.8%',
    marginBottom: '-0.4%',
  },
  navbarLinks: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '2rem',
  },
  submenuItem: {
    color: "#007cc4",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const navigationItems = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
    sublinks: [
      {
        text: "Our Team",
        url: "/about/our-team",
      },
      {
        text: "Overview",
        url: "/about/overview",
      },
      {
        text: "Us",
        url: "/about/us",
      },
    ],
  },
  {
    text: "Services",
    url: "/services",
    sublinks: [
      {
        text: "Consolidated Load",
        url: "/services/consolidated-load",
      },
      {
        text: "Full Load",
        url: "/services/full-load",
      },
      {
        text: "Clearing",
        url: "/services/clearing",
      },
    ],
  },
  {
    text: "Quote",
    url: "/quote",
  },
];

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownOpen, setDropDownOpen] = React.useState(false);

  const open = !!anchorEl;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownOpen = () => {
    setDropDownOpen(!dropdownOpen);
  };

  const container = typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      {!mdUp && (
        <Toolbar className={classes.toolbarStyle}>
          <img src="../../logo.png" className={classes.navbarLogo} />
          <IconButton aria-label="open-drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon className={classes.hamburgerIcon} />
          </IconButton>
        </Toolbar>
      )}
      <nav className={classes.drawer} aria-label="navigation menu">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <div className={classes.root}>
              <List component="nav" aria-aria-labelledby="nested-list-subheader" className={classes.root}>
                {navigationItems.map((navItem) => {
                  if (typeof navItem.sublinks !== "undefined") {
                    return (
                      <List key={navItem.text}>
                        <ListItem button key={navItem.text} onClick={handleDropdownOpen}>
                          <ListItemText primary={navItem.text} />
                          {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={dropdownOpen} timeout="auto" entered={classes.nested} unmountOnExit>
                          <List component="div" disablePadding>
                            {navItem.sublinks.map((subNavItem) => (
                              <Link href={subNavItem.url} key={subNavItem.text}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary={subNavItem.text} />
                                </ListItem>
                              </Link>
                            ))}
                          </List>
                        </Collapse>
                      </List>
                    );
                  } else {
                    return (
                      <ListItem button key={navItem.text}>
                        <Link href={navItem.url}>
                          <ListItemText primary={navItem.text}></ListItemText>
                        </Link>
                      </ListItem>
                    );
                  }
                })}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <AppBar className={classes.appBar} elevation={1}>
            <Toolbar>
              <img src="../../logo.png" className={classes.navbarLogo} />
              <div className={classes.navbarLinks}>
                {navigationItems.map((navItem) => {
                  if (typeof navItem.sublinks === "undefined") {
                    return (
                      <Link key={navItem.text} href={navItem.url}>
                        <Button className={classes.menuButton}>{navItem.text}</Button>
                      </Link>
                    );
                  } else {
                    return (
                      <div key={navItem.text}>
                        <Button className={classes.menuButton} onClick={handleClick}>
                          {navItem.text} {mobileOpen ? <ExpandLess /> : <ExpandMore />}
                        </Button>
                        <Menu
                          id={"yomama"}
                          key={navItem.text}
                          anchorEl={anchorEl}
                          anchorOrigin={{ vertical: "top", horizontal: "left" }}
                          transformOrigin={{ vertical: "top", horizontal: "left" }}
                          keepMounted
                          open={open}
                          onClose={handleDropdownClose}
                        >
                          {navItem.sublinks.map((sublink) => (
                            <Link key={sublink.text} href={sublink.url} className={classes.submenuItem}>
                              <MenuItem handleClose={handleDropdownClose} className={classes.submenuItem}>
                                {sublink.text}
                              </MenuItem>
                            </Link>
                          ))}
                        </Menu>
                      </div>
                    );
                  }
                })}
              </div>
            </Toolbar>
          </AppBar>
        </Hidden>
      </nav>
    </div>
  );
}
