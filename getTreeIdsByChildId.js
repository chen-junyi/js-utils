/**
 *
 * @param {Array} tree 树形结构的数据
 * @param {id} id 需要查询到的id
 * @param {Array} arr 已经查询到的id拼接后的数据
 * @returns {Array} 返回子节点的所有父节点的id
 * @note 此函数利用了递归和闭包的原理，参考这个函数，基本所有的树形结构遍历的要求都能实现
 */

export function getTreeIds(tree, id, ids = []) {
    if (id === null || id === undefined) {
      return []
    }
    for (const item of tree) {
      const result = [...ids]
      if (item.id === id) {
        return result.concat(id)
      } else if (item.children && item.children.length) {
        result.push(item.id)
        const nextResult = getTreeIds(item.children, id, result)
        if (nextResult) {
          return nextResult
        }
      }
    }
}