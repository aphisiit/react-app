import React, { Component } from 'react';
import i18n from './i18n';
import { translate } from 'react-i18next';
import './App.css';

// var log = require('log4js');//.getLogger('App');

// log.debug("This is in App.js");


// const fs = require('fs');
// var Log = require('log')
//     , log = new Log('debug', fs.createWriteStream('app.log'));
//
// log.debug('preparing email app');
// log.info('sending email app');
// log.error('failed to send email app');


let button_center = {
    textAlign : "center",
    paddingTop : "10px",
    alignItem : "center"
}

function doLogin(){
    let formData = {
        username : document.getElementById("username").value,
        password : document.getElementById('password').value
    }
    let a = fetch('http://localhost:9000/auth/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': '"application/json; charset=utf-8',
        },
        dataType : 'json',
        body: JSON.stringify({
            username : formData.username,
            password : formData.password
        })
    });

    let data = fetch('http://localhost:9000/auth', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    console.log('data');
    console.log(data);

}

const App = ({t}) =>(
    <div className="App">
        <section className="hero is-info">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <h1 className="title">{t('title')}</h1>
                    <span>{t('lang_text')}</span>
                </div>
            </div>
        </section>

        <div className="container" >
            <div className="field">
                <div className="column is-offset-one-third is-one-third">
                    <label className="label">{t('label_username')}</label>
                    <div className="control">
                        <input className="input" type="text" id="username" name="username" placeholder={t('label_username')} />
                    </div>
                    <label className="label">{t('label_password')}</label>
                    <div className="control">
                        <input className="input" type="password" id="password" name="password" placeholder={t('label_password')} />
                    </div>
                    <div className="column is-offset-one-fifth ">
                        <div className="field is-grouped " style={button_center}>
                            <div className="control">
                                <button className="button is-link" onClick={doLogin} id="login_button">{t('button_login')}</button>
                            </div>
                            <div className="control">
                                <button className="button is-danger is-outlined" id="register_button">{t('button_register')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <footer className="footer">
            {/*<div className="container">*/}
                {/*<div className="content has-text-centered">*/}
            <div className="column is-offset-two-fifths  is-one-third">
                <div className="has-text-centered " style={button_center}>
                <div className="container">
                    <div className="field is-grouped level-item">
                        <div className="control">
                            <button className="button is-link" onClick={() => { i18n.changeLanguage('th')}}>{t('button_change_lang_th')}</button>
                        </div>
                        <div className="control">
                            <button className="button is-warning" onClick={() => { i18n.changeLanguage('en')}}>{t('button_change_lang_en')}</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
);

export default translate()(App);
