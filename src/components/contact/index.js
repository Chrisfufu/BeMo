
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import AppFooter from '../footer'
import { Link, Redirect } from "react-router-dom";
import connect from 'redux-connect-decorator'
import { Form, Icon, Input, Button,Select, Checkbox } from 'antd';
import { snedQuestion } from '../../actions/userActions'
import AppLayout from '../../layout';
import Background from "./cda-interview-guide.jpg"
import { Typography } from 'antd';
const { Title } = Typography;
const iconImgUrl = process.env.PUBLIC_URL + '/contact-us.png'
var sectionStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  minHeight: '100%' ,
  backgroundImage: `url(${Background})`
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const { Option } = Select;

// connecting to store, send question to backend.
@connect((store) => {
  return {
    sent: store.user.sent,
  };
})
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    console.log(this.formRef);
  }

  // this is the form submit button.
  // send values to action.
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(snedQuestion(values))
      }
    });
  };

  // reset button. reset the form
  onReset = () => {
    this.props.form.resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <AppLayout style={{overflow: "auto"}} className="layout">
          <img
            style={{
              maxHeight:"100%",
              maxWidth:"100%"
            }}
            src={iconImgUrl}>
          </img>
        </AppLayout>
        <Form {...layout} ref={this.formRef} name="control-ref" onSubmit={this.handleSubmit}>
          <Form.Item
            label='Name'
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label='EMAIL ADDRESS'
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label='HOW CAN WE HELP YOU'
          >
            {getFieldDecorator('question', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(<Input.TextArea />)}
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <AppFooter></AppFooter>
      </div>

    );
  }
}


const ContactUs = Form.create({ name: 'contactUs' })(Contact);

export default ContactUs;
