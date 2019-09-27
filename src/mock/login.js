import Mock from 'mockjs';

let uid = Mock.Random.id();
export const loginRes = function() {
  return {
    code: 200,
    message: 'success',
    data:{
      user:{
        userId: uid
      }
    }
  };
};