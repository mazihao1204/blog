//类型判断
function isType(type){
  return function(obj){
    return Object.prototype.toString.call(obj).includes(type)
  }
}

//包装成一个高阶函数，批量生成函数
let types = ['String','Object','Array','Null','Undefiend','Boolean']
let fns = {}
types.forEach(type => {
  fns['is' + type] = isType(type)
})

const find = function(nums){
  let L = R = 0,begin
  while(1){
    L = nums[L]
    R = nums[nums[R]]
    if(L=== R){
      begin = 0
      while(begin !== L){
        begin = nums[begin]
        L = nums[L]
      }
      return begin
    }
  }
}