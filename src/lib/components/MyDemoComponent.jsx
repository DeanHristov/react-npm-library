import React, { Component } from "react";

import * as conf from '../../../build/project.config';
import * as locale from '../../locales';
import './MyDemoComponent.scss'

export default class MyDemoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: conf.lang,
            ...this.props.options
        }
    }
 
    render() {
      const { lang } = this.state;

      console.log(locale)
      return (
          <div className={'my-demo-component'}>{locale[`${lang}:message`]}</div>
        );
    }
}
