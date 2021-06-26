export function debounce(func,delay) {
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout( () => {
      func.apply(this,args)
    },delay)
  }
}

export function formatDate(format,time) {
  if(/(y+)/.test(format)){
    format = format.replace(RegExp.$1,(time.getFullYear()+'').substr(4 - RegExp.$1))
  }
  let o = {
    'M+' : time.getMonth(),
    'd+' : time.getDay(),
    'h+' : time.getHours(),
    'm+' : time.getMinutes(),
    's+' : time.getSeconds()
  }
  for(let k in o){
    if(new RegExp(`(${k})`).test(format)){
      let str = o[k] + ''
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }

  function padLeftZero(str){
    return ('00' + str).substr(str.length)
  }
  return format

}