/**
 *
 * @param {Function}
 * @param {number}
 * @returns {number} 返回一个新函数， 再指定的时间内没有触发才执行 .
 *
 */
export function debounce(fn, time = 300) {
    var timeout
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            fn.apply(context, args)
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, time)
    }
}