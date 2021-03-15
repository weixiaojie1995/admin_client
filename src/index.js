import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

import App from './App'

ReactDom.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
