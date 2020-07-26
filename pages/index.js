import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PlacesIcon from '@material-ui/icons/LocationOn'
import { SocialIcon } from 'react-social-icons'
import Chip from '@material-ui/core/Chip'

const styles = (theme) => ({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(4, 0),
    color: theme.palette.gray[800],
  },
  subtitle: {
    color: theme.palette.gray[800],
  },
  section: {
    margin: theme.spacing(4, 0),
  },
  placesImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  placesIcon: {
    color: theme.palette.blue[600],
    fontSize: '2rem',
    verticalAlign: 'middle',
    marginLeft: theme.spacing(1),
  },
  aboutMeIcon: {
    color: theme.palette.green[600],
    fontSize: '2rem',
    verticalAlign: 'middle',
    marginLeft: theme.spacing(1),
  },
  link: {
    color: theme.palette.green[600],
  },
})

const LocationChip = withStyles((theme) => ({
  locationChip: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}))(({ name, classes }) => (
  <Chip
    label={name}
    color="primary"
    variant="outlined"
    icon={<PlacesIcon />}
    className={classes.locationChip}
  />
))

const SocialIconBlock = withStyles((theme) => ({
  socialIconContainer: {
    display: 'inline-block',
    margin: theme.spacing(1, 1, 0, 0),
  },
}))(({ url, classes }) => (
  <div className={classes.socialIconContainer}>
    <SocialIcon
      url={url}
      target="_blank"
      style={{ width: '30px', height: '30px' }}
    />
  </div>
))

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Nishant Singh
      </Typography>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          About me
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Founder at&nbsp;
          <a
            className={classes.link}
            href="https://ylurn.com"
            target="_blank"
            rel="noreferrer"
          >
            Ylurn.com
          </a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          Places
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          <LocationChip name="Kaimganj" />
          <LocationChip name="Hamirpur" />
          <LocationChip name="Kanpur" />
          <LocationChip name="Bangalore" />
          <LocationChip name="Chennai" />
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          Contact
        </Typography>
        <div>
          <SocialIconBlock url="https://twitter.com/iNishant" />
          <SocialIconBlock url="https://github.com/iNishant" />
          <SocialIconBlock url="mailto:nishant@ylurn.com" />
          <SocialIconBlock url="https://www.linkedin.com/in/inishant/" />
          <SocialIconBlock url="https://facebook.com/saysnishant" />
          <SocialIconBlock url="https://www.instagram.com/nish.i.am/" />
        </div>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          Blogs
        </Typography>
        <Typography>Coming soon...</Typography>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
