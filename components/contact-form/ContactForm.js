import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import classNames from 'classnames'

const styles = theme => ({
  flex: {
    display: 'flex',
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
    marginRight: '1rem'
  }
})

class ContactForm extends Component {
  render() {
    const { classes, email} = this.props;
    return (
      <form
        method='POST'
        action={`https://formspree.io/${email}`}
        className={classes.form}
        noValidate
        autoComplete='off'
      >
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

        <div className={classes.flex}>
          {/*Your name*/}
          <TextField
            className={classNames(classes.textField,classes.name)}
            label='Your name'
            type='text'
            name='name'
            margin='normal'
          />

          {/*Your email*/}
          <TextField
            className={classes.textField}
            type='email'
            label='Your email'
            name='email'
            margin='normal'
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
        >
          Send <SendIcon className={classes.send} />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(ContactForm)
