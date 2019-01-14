import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

const styles = {
  flex: {
    display: 'flex'
  },
  textField: {
    flex: 1
  }
}

class Form extends Component {
  render() {
    const { classes } = this.props
    return (
      <form
        method='POST'
        action={`https://formspree.io/${this.props.email}`}
        style={{
          background: '#fff',
          padding: '1rem',
          boxShadow: `1px 1px 5px rgba(0,0,0,0.1)`
        }}
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
            className={classes.textField}
            label='Your name'
            type='text'
            name='name'
            margin='normal'
            style={{ marginRight: '1rem' }}
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
          className={classes.button}
        >
          Send &nbsp; <SendIcon />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(Form)
