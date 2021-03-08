import Mock from 'mockjs'

import songList from './songList.json'


Mock.mock('/mock/songList',{code:200,data:songList})