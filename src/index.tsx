/**
 * @file entry of this example.
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import './scss/style.scss';
import './scss/custom.scss';
import {setDefaultTheme} from 'amis';
import {setThemeConfig} from 'amis-editor-core';
import themeConfig from 'amis-theme-editor-helper/lib/systemTheme/cxd';

setDefaultTheme('cxd');
setThemeConfig(themeConfig);

// 全局组件注册
import './plugin';

// react < 18
ReactDOM.render(<App />, document.getElementById('root'));
