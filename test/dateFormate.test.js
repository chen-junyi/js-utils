import { format } from '../dateFormate'

test('测试 dateFormate 函数', () => {
  expect(format(new Date('2020/10/24'), 'YYYY-MM-DD')).toBe('2020-10-24')
})
