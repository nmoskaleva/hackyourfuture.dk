import React from 'react'
import countdown from './countdown'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem',
    margin: '0 auto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '45%'
  },
  listItem: {
    padding: '0 1rem 0 1rem ',
    marginBottom: 0,
    '@media (max-width:320px)': {
      width: '170%'
    },
    '@media (max-width:375px)': {
      width: '130%'
    }
  },
  primaryText: {
    color: '#293a7d',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'left',
    '@media (max-width:325px)': {
      fontSize: '1.7rem'
    }
  },
  secondaryText: {
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '1rem',
    textAlign: 'right',
    '@media (max-width:325px)': {
      fontSize: '0.8rem'
    }
  }
}))

export default function timer(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {countdown(props.date).map(item => (
          <ListItem className={classes.listItem} key={item}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText
              }}
              primary={item[0].split(' ', 1)}
              secondary={item[0].split(' ', 2)[1]}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
