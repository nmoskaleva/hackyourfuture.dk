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
    '@media (max-width:375px)': {
      width: '140%'
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
      fontSize: '0.7rem'
    }
  }
}))

export default function Timer(props) {
  const classes = useStyles()
  const dateToCountDownFrom = props.date
  const countDownComponents = countdown(dateToCountDownFrom)
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {countDownComponents.map(timeUnit => (
          <ListItem className={classes.listItem} key={timeUnit}>
            <ListItemText
              classes={{
                // primary and secondary are names of classes in material-ui that allow to override the style of the component
                primary: classes.primaryText, //count of time unit
                secondary: classes.secondaryText // time unit name: days, hours, min, sec
              }}
              primary={timeUnit[0]}
              secondary={timeUnit[1]}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
