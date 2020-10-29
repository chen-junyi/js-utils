/**
 * 时间格式化
 * @param {Date} d
 * @param {String} fmt
 * @example format(new Date(), 'YYYY-MM-DD') => 2020-10-30
 */
export function format(d, fmt = 'YYYY-MM-DD hh:mm:ss') {
    if (!d) return;
    if (!(d instanceof Date)) {
      d = new Date(d.replace(/-g/, '-').replace('T', ' '));
    }
    const obj = {
      'M+': d.getMonth() + 1,
      'D+': d.getDate(),
      'h+': d.getHours(),
      'm+': d.getMinutes(),
      's+': d.getSeconds(),
      'q+': Math.floor((d.getMonth() + 3) / 3),
      S: d.getMilliseconds(),
    };
    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (`${d.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const i in obj) {
      if (new RegExp(`(${i})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? (obj[i])
          : ((`00${obj[i]}`).substr((`${obj[i]}`).length)));
      }
    }
    return fmt
}