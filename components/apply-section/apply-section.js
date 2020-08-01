import React from 'react'
import '../content/_apply'
import {
  sectionTitle,
  contentOne,
  contentTwo,
  requirements
} from '../content/_apply'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// styling
const useStyles = makeStyles({
  stylePadding: {
    padding: '0px'
  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green'
  },
  title: {
    color: '#293a7d',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  listText: {
    fontFamily: "'Work Sans', 'sans-serif'",
    fontSize: '1rem'
  },
  contentOne: {
    fontFamily: "'Work Sans', 'sans-serif'",
    marginBottom: '20px'
  },
  contentTwo: {
    fontFamily: "'Work Sans', 'sans-serif'"
  }
})

export default function applySection({ contentOne, contentTwo, requirements }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      {/* <h1>{sectionTitle}</h1> */}
      <Typography className={classes.contentOne}>        {documentToReactComponents(contentOne)}
      </Typography>
      <Grid
        container
        className={classes.stylePadding}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item md={7}>
          <Container className={classes.stylePadding}>
            <Typography className={classes.contentTwo}>{contentTwo}</Typography>
            <List className={classes.listText}>
              {requirements.map(requirement => {
                return (
                  <ListItem key={requirement.fields.id} className={classes.stylePadding}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>&#10004;</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.listText}
                      disableTypography={true}
                    >
                      {requirement.fields.requirement}
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </Container>
        </Grid>
        <Grid item md={5}>
          <img src='/static/apply/apply-section-photo.jpg' />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
