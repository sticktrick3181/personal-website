import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  container: {
    padding: theme.spacing(2, 4),
  },
  title: {},
  subtitle: {},
})

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h2">Nishant Singh</Typography>
      <Typography variant="h4" className={classes.subtitle}>
        About
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        Places
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        Interests
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        Music
      </Typography>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
