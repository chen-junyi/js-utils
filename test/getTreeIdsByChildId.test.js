import { getTreeIds } from '../getTreeIdsByChildId'

test('测试 getTreeIds 函数', () => {

    const tree = [
        {
            id: 1,
            name: '1',
            children: [
                {
                    id: 11,
                    name: '1-1'
                },
                {
                    id: 12,
                    name: '1-2',
                    children: [
                        {
                            id: 121,
                            name: '1-2-1',
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: '2',
            children: [
                {
                    id: 21,
                    name: '2-1'
                },
                {
                    id: 22,
                    name: '2-2',
                    children: [
                        {
                            id: 221,
                            name: '2-2-1',
                        }
                    ]
                }
            ]
        }
    ]
    expect(getTreeIds(tree, 221)).toStrictEqual([2,22,221])
    // expect(getTreeIds(tree, 12)).toBe([1,12])
})
