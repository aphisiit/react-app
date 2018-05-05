import React, { Component } from 'react';
import { I18n } from 'i18next';
import './App.css';

class Old_App extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
          <I18n>
              <div>test</div>
          </I18n>
        );
    }
}
