import React from 'react';
import './ContactForm.scss'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className='contact-form'
        onSubmit={this.submitForm}
        action='https://formspree.io/xzbdyqyl'
        method='POST'>

        <label for='inquirer'>name: </label>
        <input name='inquirer' type='text' size='60' placeholder='Full Name' />

        <label for='_replyto'>email:<em>*</em> </label>
        <input name='_replyto' type='email' size='60' placeholder='user@email.com' required />
        
        <label for='subject' >subject: </label>
        <input name='subject' type='text' size='60' placeholder='Subject' />

        <label for='message'>message:<em>*</em> &nbsp; </label>
        <textarea name='message' type='text' rows='6' cols='45' size='60' required></textarea>

        <label></label>
        <div>
          {status === 'SUCCESS' ? <h3>Thanks!</h3> :<button type='submit' className='styledbutton'>submit</button>}
          {status === 'ERROR' && <p className='error'>Ooops! There was an error.</p>}
        </div>

      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;

    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset(form.method);
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}