import Mock from 'mockjs'
import data from '@/mock/data.json'


// 水果图片
Mock.mock('/fruits', {
    code: 0,
    data: data.fruits
})
// 食材图片
Mock.mock('/ingredients', {
    code: 0,
    data: data.ingredients
})
// 零食图片
Mock.mock('/snakes', {
    code: 0,
    data: data.snakes
})
// 牛奶图片
Mock.mock('/milks', {
    code: 0,
    data: data.milks
})
// 蔬菜图片
Mock.mock('/vegetables', {
    code: 0,
    data: data.vegetables
})