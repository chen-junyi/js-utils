/**
 *
 * @param {Function}
 * @param {number}
 * @returns {number} 返回一个新函数， 立即执行，在指定时间内触发不会再重复执行 .
 *
 */
export function throttle(fn, time = 1500) {
    let _lastTime = null
    return function () {
      let _nowTime = + new Date()
      if (_nowTime - _lastTime > time || !_lastTime) {
        fn.apply(this, arguments)
        _lastTime = _nowTime
      }
    }
  }