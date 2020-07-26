import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PlacesIcon from '@material-ui/icons/LocationOn'
import LaunchIcon from '@material-ui/icons/Launch'
import { SocialIcon } from 'react-social-icons'
import dynamic from 'next/dynamic'
import Chip from '@material-ui/core/Chip'

const LoadFonts = dynamic(() => import('../components/LoadFonts'), {
  ssr: false,
})

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
    margin: theme.spacing(6, 0),
    '&:nth-last-child(1)': {
      marginBottom: theme.spacing(20),
    },
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
    color: theme.palette.indigo[700],
  },
  openSourceIcon: {
    verticalAlign: 'middle',
    marginLeft: theme.spacing(1),
    fontSize: '1.2rem',
    marginBottom: '2px',
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

const InterestPoint = withStyles((theme) => ({
  body: {
    color: theme.palette.green[700],
  },
}))(({ body, classes }) => (
  <Typography variant="h6" className={classes.body}>
    {body}
  </Typography>
))

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <LoadFonts />
      <Typography variant="h3" className={classes.title}>
        Nishant Singh
      </Typography>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          About
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
          Interests
        </Typography>
        <div>
          <InterestPoint body="Where is (e)ducation heading?" />
          <InterestPoint body="Web performance" />
          <InterestPoint body="Hip-hop" />
          <InterestPoint body="Powerlifting" />
        </div>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" className={classes.subtitle}>
          Blogs
        </Typography>
        <Typography>Coming soon...</Typography>
      </div>
      <div className={classes.section}>
        <Typography>
          <a
            className={classes.link}
            href="https://github.com/inishant/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            Source of this website
            <LaunchIcon className={classes.openSourceIcon} />
          </a>
        </Typography>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
