function iterate(o, cb) {
  Object.keys(o).forEach(cb);
}

function copyProperties(to, from) {
  Object.getOwnPropertyNames(from)
    .forEach((key) => {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    });
  return to;
}

function copy(resource) {
  let obj = Object.create(resource.prototype);
  return copyProperties(obj, resource);
}

function length(o) {
  return Object.keys(o).length;
}

const allType = [
  'Number',
  'String',
  'Date',
  'Boolean',
  'Null',
  'Undefined',
  'Function',
  'Array',
  'Error',
  'RegExp',
  'Math',
  'Object',
];

function _typeFuncGenerator(type) {
  return function (o) {
    return Object.prototype.toString.call(o) === `[object ${type}]`;
  };
}

const type = {}; // 作为判断函数的库

allType.forEach((eachType) => {
  type[`is${eachType}`] = _typeFuncGenerator(eachType);
});



export default type;
