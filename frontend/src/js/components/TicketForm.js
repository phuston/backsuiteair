import React, { Component } from 'react';
import { Form, Icon, Input, Button, Radio } from 'antd';
import MaterialIcon from 'material-icons-react';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      seating: null
    }
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('http://backsuiteair.ml/ticket', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name: values.name,
            EmailAddress: values.email,
            TicketClass: values.seating
          })
        })
        window.location = "https://media2.giphy.com/media/12Up26fqbaU45W/giphy.gif"
      }
    });
  }

  onChange = (e) => {
    this.setState({
      seating: e.target.value
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    let price;
    console.log(this.state);

    if (this.state.seating) {
      switch(this.state.seating) {
        case '0':
          price="$3"
          break;
        case '1':
          price="$5"
          break;
        case '2':
          price="$10"
          break;
        default: 
          break;
      }
    }

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const emailError = isFieldTouched('email') && getFieldError('email');

    return (
      <div className="ticket-form">
      <h1>Flight Information</h1>
      <div className="flight-info">
        <div className="departure">
          <h3>Departing Flight</h3>
          <h1><MaterialIcon className="mat-icon" icon="flight_takeoff" size={50}/><strong>Olin College (OLN)</strong></h1>
          <h2>Boarding begins sharply at 9:00pm in 1NE. Doors close at 9:45pm.</h2>
        </div>
        <div className="arrow">
          <Icon type="caret-right" style={{ fontSize: 50, color: '#08c' }} />
        </div>
        <div className="arrival">
          <h3>Arrival</h3>
          <h1><MaterialIcon className="mat-icon" icon="flight_land" size={50}/><strong>Shwastyville (SWV)</strong></h1>
          <h2>You'll get there when you get there. 1:00am services end.</h2>
        </div>
      </div>
      <h1>Seating Options & Upgrades</h1>
        <div className="seating-options">
          <div className="seat-option-0">
            <div className="option-header">
              <h3><strong>Economy Basic</strong></h3>
              <div className="mat-icon">
                <MaterialIcon icon="event_seat" size={30}/>
              </div>
            </div>
            <p>Beer Only</p>
            <h2>$3</h2>
          </div>
          <div className="seat-option-1">
            <div className="option-header">
              <h3><strong>Economy Plus</strong></h3>
              <div className="mat-icon">
                <MaterialIcon icon="airline_seat_legroom_extra" size={30}/>
              </div>
            </div>
            <p>Beer & Mixed Drinks</p>
            <h2>$5</h2>
          </div>
          <div className="seat-option-2">
            <div className="option-header">
              <h3><strong>First Class</strong></h3>
              <div className="mat-icon">
                <MaterialIcon icon="filter_vintage" size={30}/>
              </div>
            </div>
            <p>Fancy Mixed Drinks + Additional Premium Services</p>
            <h2>$10</h2>
          </div>
        </div>
      <h1>Traveller Information</h1>
      <h4>Please enter your full name, email, and seat choice below for confirmation</h4>        
      <div className="traveller-info">
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

          <FormItem validateStatus={nameError ? 'error' : ''} help={nameError || ''} >
          {getFieldDecorator('seating', {
              rules: [{ required: true, message: 'Please select a seating option' }],
            })(
              <RadioGroup defaultValue="1" onChange={this.onChange}>
                <RadioButton value="0">Economy Basic</RadioButton>
                <RadioButton value="1">Economy Plus</RadioButton>
                <RadioButton value="2">First Class</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem>
          <h1>Confirmation</h1>
          <div className="pricing">
            {/* TODO --> WHO IS BUYING AND NEEDS TO BE REPAID? */}
            <h2>Please <strong>Venmo @BrettAtkinson <span className="price">{price}</span> </strong>now OR pay cash at the door. Payment will be required to validate tickets. Your tickets will be emailed to you. </h2>
          </div>
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
      </div>
    </div>
    );
  }
}

const TicketForm = Form.create()(Ticket);
export default TicketForm;