import React, { Component } from "react";
import { render } from "react-dom";

import MyDemoComponent from '../lib'
import * as projectConf from '../../build/project.config';

class Main extends Component {
    render() {
        const {options} = this.props;
        return (
            <MyDemoComponent options={options}/>
        );
    }
}

for (let $DOM of document.querySelectorAll(projectConf.selector)) {
    render(<Main options={JSON.parse($DOM.getAttribute('data-options'))}/>, $DOM);
}
