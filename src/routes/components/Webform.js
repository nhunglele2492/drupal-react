import React, { Component } from 'react'
import axios from 'axios';

import * as Utilities from '../api';
import Input from './Forms/Input'
import Select from './Forms/Select'
import Textarea from './Forms/Textarea'
import Button from './Forms/Button'

export default class Webform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form_elements: {},
      isFetching: true,
      data: {},
      submission: false,
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email')
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: { ...this.state.data, [name]: value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = this.state.data;
    data.webform_id = this.props.webform_id;

    this.getCsrfToken((csrfToken) => this.submissionForm(csrfToken, data));

    this.refs.form.reset();
    this.setState({ data: {} });
  }

  submissionForm(csrfToken, data) {
    const th = this;

    let postOptions = {
      method: 'POST',
      url: Utilities.HTTP_URL + '/webform_rest/submit',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-CSRF-Token': csrfToken
      },
      json: true
    };

    th.serverRequest = axios(postOptions)
                      .then(function(response){
                        if (response.status === 200) {
                          th.setState({ submission: true });
                        }
                      })
                      .catch((err) => console.log('err:', err))
  }

  getCsrfToken(callback) {
    const th = this;

    th.serverRequest = axios.get(Utilities.HTTP_URL + '/rest/session/token')
                        .then(function(results) {
                          let csrfToken = results;
                          callback(csrfToken);
                        })
  }

  componentDidMount() {
    const { webform_id } = this.props;
    const urlData = Utilities.getWebformRest(webform_id);
    const th = this;

    th.serverRequest = axios.get(urlData)
    .then(function(results) {
      th.setState({
        form_elements: results.data,
        isFetching: false
      });
    })
    .catch((err) => console.log('err:', err))
  }

  render() {
    const { form_elements } = this.state;

    let formElements = [];
    console.log(form_elements);

    Object.keys(form_elements).forEach((key) => {
      if (key.indexOf('#') === -1) {
        let input = form_elements[key];

        switch (input['#type']) {
          case 'textfield':
            formElements.push(
              <Input key={key} label={input['#title']} name={input['#name']}
                type="text" required={input['#required']}
                placeholder={input['#placeholder']}
                onChange={this.handleInputChange} />
            );
            break;

          case 'email':
            formElements.push(
              <Input key={key} label={input['#title']} name={input['#name']}
                type="email" required={input['#required']}
                placeholder={input['#placeholder']}
                onChange={this.handleInputChange} />
            );
            break;

          case 'tel':
            formElements.push(
              <Input key={key} label={input['#title']} name={input['#name']}
                type="tel" required={input['#required']}
                placeholder={input['#placeholder']}
                onChange={this.handleInputChange} />
            );
            break;

          case 'select':
            let options = [];
            Object.keys(input['#options']).forEach((key) => {
              options.push({
                value: key,
                text: input['#options'][key]
              });
            });

            formElements.push(
              <Select key={key} label={input['#title']} name={input['#name']}
                required={input['#required']}
                multiple={input['#multiple']}
                options={options}
                onChange={this.handleInputChange} />
            );
            break;

          case 'textarea':
            formElements.push(
              <Textarea key={key} label={input['#title']} name={input['#name']}
                required={input['#required']}
                placeholder={input['#placeholder']}
                onChange={this.handleInputChange} />
            );
            break;

          case 'webform_actions':
            formElements.push(
              <Button key={key} label={input['#submit__label']} type="submit" />
            );
            break;

          default:
            break;
        }
      }
    });

    return (
      <div>
        { this.state.submission ? <div className="messages__wrapper"><div role="contentinfo" aria-label="Status message" className="messages messages--status">Your message has been sent.</div></div> : null }

        <form onSubmit={this.handleSubmit} ref="form">
          {formElements}
        </form>
      </div>
    )
  }
}
