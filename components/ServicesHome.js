import Link from "next/link";

import ServiceItem from "../components/ServiceItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  serviceItem: {
    flex: "50%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    [theme.breakpoints.down(768)]: {
      flex: "100%",
    },
    [theme.breakpoints.up(1680)]: {
      flex: "25%",
    },
  },
}));

const services = [
  {
    serviceName: "Consolidated Load",
    imgUrl: "Badges/consolidated-load.png",
    serviceUrl: "/services/consolidated-load",
    shortDesc:
      "Dovetail provides business analysis services on any new project that is embarked on. Qualified business analysts spend time on site to understand the current processes and future process expectations with the implementation of a new system.",
  },
  {
    serviceName: "Full Load",
    imgUrl: "Badges/full-load.png",
    serviceUrl: "/services/full-load",
    shortDesc:
      "Dovetail provides business analysis services on any new project that is embarked on. Qualified business analysts spend time on site to understand the current processes and future process expectations with the implementation of a new system.",
  },
  {
    serviceName: "Clearing",
    imgUrl: "Badges/clearing.png",
    serviceUrl: "/services/clearing",
    shortDesc:
      "Our clients are currently able to make use of Clearing Agents of their choice. We do not insist on our clients making use of any specific clearing houses we do strongly encourage them to make use of reputable operators ",
  },
  {
    serviceName: "Procurement",
    imgUrl: "Badges/procurement.png",
    serviceUrl: "/services/procurement",
    shortDesc:
      "Dovetail provides business analysis services on any new project that is embarked on. Qualified business analysts spend time on site to understand the current processes and future process expectations with the implementation of a new system.",
  },
];

export default function ServicesHome(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {services.map((service) => (
        <Link href={service.serviceUrl} key={service.serviceName}>
          <div className={classes.serviceItem}>
            <ServiceItem serviceName={service.serviceName} serviceImage={service.imgUrl} shortDesc={service.shortDesc} />
          </div>
        </Link>
      ))}
    </div>
  );
}
