/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './user/_userId/getWishList'
import mock1 from './user/_userId/getUsersList'

export default (client) => mockServer([
  {
    path: '/user/_userId/getWishList',
    methods: mock0
  },
  {
    path: '/user/_userId/getUsersList',
    methods: mock1
  }
], client, '')
