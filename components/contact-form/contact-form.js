import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import classNames from 'classnames'

const styles = theme => ({
  flex: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  textField: {
    flex: 1
  },
  submitForm: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    send: {
      marginLeft: '1rem'
    }
  },
  form: {
    background: '#fff',
    padding: '1rem',
    boxShadow: `1px 1px 5px rgba(0,0,0,0.1)`
  },

  name:{
    width:'50%',
    paddingRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  email: {
    width:'50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  }
})

class ContactForm extends Component {
  render() {
    const { classes, email } = this.props
    return (
      <form
        method='POST'
        action={`https://formspree.io/${email}`}
        className={classes.form}
        noValidate
        autoComplete='off'
      >
        <div className={classes.flex}>
          {/*Your name*/}
          <TextField
            className={classNames(classes.textField, classes.name)}
            label='Your name'
            type='text'
            name='name'
            margin='normal'
          />

          {/*Your email*/}
          <TextField
            className={classNames(classes.textField,classes.name)}
            type='email'
            label='Your email'
            name='email'
            margin='normal'
          />

          {/*Message*/}
          <TextField
            label='Message'
            multiline
            rows='2'
            rowsMax='6'
            name='message'
            margin='normal'
            fullWidth
          />
        </div>
        <br />

        {/*submit form*/}
        <Button
          type='submit'
          variant='contained'
          size='large'
          color='primary'
          className={classes.submitForm}
          aria-label="Contact us"
        >
          Send <SendIcon className={classes.send} />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(ContactForm)
