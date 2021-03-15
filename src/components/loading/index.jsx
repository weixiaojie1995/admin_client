import React from 'react'
import { SyncOutlined } from '@ant-design/icons';
import './index.scss'

export default function Loading() {
  return (
    <div className='loading'>
      <SyncOutlined spin  style={{ color: '#399', fontSize: '50px' }} />
    </div>
  )
}