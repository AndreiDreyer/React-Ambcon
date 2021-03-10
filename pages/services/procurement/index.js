import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';

import ServicesNav from '../../../components/ServicesNav'
import {useStyles} from '../../../styles/ServiceStyles'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'


export default function Services() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (
        <div className={classes.mainContainer}>
            <Navigation></Navigation>
            <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="../trucking-banner.jpg"
                        title="Contemplative Reptile"
                        />
                </Card>
            </div>
            <Slide direction="up" in={true}  unmountOnExit>
                <div className={classes.bodyBlock}>
                    <Typography className={classes.headers} gutterBottom variant="h3" component="h1">
                        Procurement
                    </Typography>
                    <div className={classes.body}>
                        <CardContent className={classes.content}>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        Before you procure directly take time to consider the following as it is guaranteed to save you money and frustration.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        We offer a procurement facility that can be tailor made to suite your requirement. There are a multitude of benefits that are highlighted below.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        While shopping over the internet is relatively simple one must guard against dealing with unscrupulous traders who insist on payment in advance but fail to deliver. We ensure the suppliers we deal with are credit worthy. Should you source through the internet we would be very happy to assess the supplier on your behalf.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        We can source on your behalf.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        Most suppliers insist on charging South African VAT even on export. By channelling your procurements through us we will claim your VAT back and refund you on receipt.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        Should you have several suppliers we can consolidate all cargo onto one invoice. The benefits are that there is only one export document charge and one clearing agent charge on import. In addition, you get the added benefit of the consolidated transport charges.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        We can book and arrange Bureau Veritas inspection on your behalf. Again, the benefit would be only one BV charge as opposed to a number should there be more than one supplier invoice requiring inspection.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        As we are SADC registered, we can assist with SADC certificates for those commodities that qualify which gives you the benefit of reduced duties.
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        Our Zimbabwe registered company can act as the importer where we can consolidate several commodities for various importers onto one invoice. The benefits would be to share BV, export and import documentation and transport. There are occasions where the commodity value is relatively low and absorbing all these charges individually renders the import unviable.
                        </Typography>
                        <Typography className={classes.textHeaders} gutterBottom variant="h5" component="h1">
                        Our procurement charges can and will vary from client to client. Some of the options are:
                        </Typography>
                        <List dense={dense} disablePadding={true}>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Retention of an agreed amount of VAT."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="A percentage procurement fee depending on the value of the goods and the extent
                                        of involvement."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="For regular procurements a monthly retainer."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="We have the capacity to dispatch at least 5 consolidations from Johannesburg on a weekly basis."
                                    />
                                    </ListItem>
                            </List>
                            <Typography className={classes.text} paragraph={true} component="h4">
                            We would be happy to discuss a procurement plan that suites you. Please do not hesitate to contact us on the below details.
                            </Typography>
                            <Typography className={classes.textHeaders} gutterBottom variant="h5" component="h1">
                            The following is a typical procedure when purchasing through us:
                            </Typography>
                            <Typography className={classes.textHeaders} gutterBottom variant="h6" component="h1">
                            Where client is sourcing their own goods-
                            </Typography>
                            <List dense={dense} disablePadding={true}>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Obtain quotes made out to Ambcon Logistics and forward them to us."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="All quotes will be consolidated onto one pro forma invoice made out to the
                                        individual or company and sent to you."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Payment made against this pro forma into our South African account. Do not pay
                                        the supplier direct or we will not be able to claim the VAT back for you.
                                        "
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="On receipt we will make payments to your supplier / suppliers."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="A commercial invoice will be generated and forwarded to the clearing agent of
                                        your choice for duty calculations etcetera and on confirmation the cargo will be
                                        loaded and dispatched."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="We will claim the SA VAT back on export, usually +- 60 days to be returned.
                                        "
                                    />
                                    </ListItem>
                            </List>
                            <Typography className={classes.textHeaders} gutterBottom variant="h6" component="h1">
                            Where client require Ambcon Logistics to source-
                            </Typography>
                            <List dense={dense} disablePadding={true}>
                            <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Mail us full details of commodities."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="We will source prices and forward to you. We will, where possible source those
                                        commodities that qualify for SADC certificates to assist on duty reduction."
                                    />
                                    </ListItem>
                                    <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="On acceptance the same procedure will be followed as with client sourcing their
                                        own goods."
                                    />
                                    </ListItem>
                                    </List>
                        </CardContent>
                        <div className={classes.listBox}>
                            <ServicesNav></ServicesNav>
                        </div>
                    </div>
                </div>    
            </Slide>
            <Footer></Footer>
        </div>
    );
}
