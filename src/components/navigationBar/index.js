/**
 * Navigation bar component.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon } from 'antd';
import { logout } from '../../actions/userActions';
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';

const { SubMenu } = Menu;

class AppNavigationBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e.key);
    switch (e.key) {
      case "main":
        this.props.history.push('/')
        break;
      case "contact":
        this.props.history.push('/contact')
        break;
      default:
        this.props.history.push('/')
        break;
    }
    this.setState({
      current: e.key,
    });
  };
  // only the Main and contact work according to the requirements.
  // if an user clicks on other tabs, it will just go to home page.
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="main">
          Main
        </Menu.Item>
        <Menu.Item key="prepare">
          How To Prepare
        </Menu.Item>
        <Menu.Item key="cdaInterview">
          CDA Interview Questions
        </Menu.Item>
        <Menu.Item key="contact">
          Contact Us
        </Menu.Item>


      </Menu>
    );
  }
}


export default withRouter(AppNavigationBar);
