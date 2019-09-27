import Mock from 'mockjs';
import { param2Obj } from '@/utils';

const Random = Mock.Random;
const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: Number(Random.date('T')),
    author: '@first',
    title: '@title(5, 10)',
    short: '我是测试数据',
    content: Random.paragraph,
    'status|1': ['published', 'draft', 'deleted'],
    pageviews: '@integer(300, 5000)',
    tags: []
  }));
}

export default {
  getList: config => {
    const { type, title, page = 1, limit = 20, sort } = param2Obj(config.url);

    let mockList = List.filter(item => {
      if (type && item.type !== type) return false;
      if (title && item.title.indexOf(title) < 0) return false;
      return true;
    });

    if (sort === '-id') {
      mockList = mockList.reverse();
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));

    return {
      total: mockList.length,
      items: pageList
    };
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: (config) => {
    const { id } = param2Obj(config.url);
    for (const article of List) {
      if (article.id === Number(id)) {
        return article;
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
};
