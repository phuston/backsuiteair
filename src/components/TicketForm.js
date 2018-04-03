import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const emailError = isFieldTouched('email') && getFieldError('email');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={nameError ? 'error' : ''}
          help={nameError || ''}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your full name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Full Name" />
          )}
        </FormItem>
        <FormItem>
          <div className="seating-option">Test</div>
        </FormItem>
        <FormItem
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email Address" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Confirm and Purchase
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

class TicketForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      seating: null
    }
  }
  
  render() {
    return (
      <div className="ticket-form">
        <h1>Flight Information</h1>
        
        <div className="flight-info">
          <div className="departure">
            <h3>Departing Flight</h3>
            <h1>Olin College (OLN)</h1>
            <h2>Boarding begins at 9:00pm. Doors close at 9:45pm</h2>
          </div>
          <div className="arrow">
            <Icon type="caret-right" style={{ fontSize: 50, color: '#08c' }} />
          </div>
          <div className="arrival">
            <h3>Arrival</h3>
            <h1>Shwastyville (SWV)</h1>
            <h2>You'll get there when you get there. 1:00am services end.</h2>
          </div>
        </div>
        <h1>Traveller Information</h1>
        <h4>Please enter your full name and email below for confirmation</h4>        
        <div className="traveller-info">
          <WrappedHorizontalLoginForm />
        </div>
        <h1>Seating Options & Upgrades</h1>
        <h4>Please select your preferred seating option:</h4>        
        <div className="seating-options">
          {/* <RadioGroup defaultValue="a" size="large">
            <RadioButton value="0">Economy Basic</RadioButton>
            <RadioButton value="1">Economy Plus</RadioButton>
            <RadioButton value="2">First class</RadioButton>
          </RadioGroup> */}
          <div className="seat-option">
            <h3>Economy Basic</h3>
            <p>Beer Only</p>
            <h2>$3</h2>
          </div>
          <div className="seat-option">
            <h3>Economy Plus</h3>
            <p>Beer & Mixed Drinks</p>
            <h2>$5</h2>
          </div>
          <div className="seat-option">
            <h3>First Class</h3>
            <p>Fancy Mixed Drinks + Additional Premium Services</p>
            <h2>$10</h2>
          </div>
        </div>
        <h1>Confirmation</h1>
        <div className="pricing">
          <h2>Please Venmo @Keenan-Zucker your price or pay cash at the door</h2>
          <Button type="primary">Purchase and Confirm</Button>
        </div>
      </div>
    );
  }
}

export default TicketForm;
