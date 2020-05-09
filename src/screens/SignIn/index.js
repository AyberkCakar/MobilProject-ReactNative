import React, { Component } from 'react';
import { Body, Header, Title } from 'native-base'

import SinginForm from './SinginForm';

import {observer,inject} from 'mobx-react';

@inject('AuthStore')
@observer
export default class SingIn extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render() {
    return (
        <React.Fragment>
            <Header>
                <Body>
                <Title>
                    SingIn
                </Title>
                </Body>
            </Header>
            <SinginForm/>
        </React.Fragment>
    );
  }
}
