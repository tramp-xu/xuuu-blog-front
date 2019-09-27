import Mock from 'mockjs';
import {loginRes} from './login';

Mock.mock('/api/back/login', 'post', loginRes);
