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

// styling
const useStyles = makeStyles({
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green'
  },
  title: {
    color: '#293a7d',
    fontFamily: 'Space Mono, monospace',
    fontSize: '2rem'
  }
})

export default function applySection() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography className={classes.title}>{sectionTitle}</Typography>
      <Typography>{contentOne}</Typography>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item md={6}>
          <Typography>{contentTwo}</Typography>
          <List>
            {requirements.map(requirement => {
              return (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>&#10004;</Avatar>
                  </ListItemAvatar>
                  <ListItemText>{requirement}</ListItemText>
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item md={6}>
          <img src='/static/apply/apply-section-photo.jpg' />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
