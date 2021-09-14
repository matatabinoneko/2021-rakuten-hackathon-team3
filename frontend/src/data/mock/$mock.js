/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './user/_userId/getUsersList'

export default (client) => mockServer([
  {
    path: '/user/_userId/getUsersList',
    methods: mock0
  }
], client, '')
