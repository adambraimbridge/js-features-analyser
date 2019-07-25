const methods = {
  sharedarraybuffer: {
    byteLength: "SharedArrayBuffer.prototype.byteLength",
    constructor: "SharedArrayBuffer.prototype.constructor",
    slice: "SharedArrayBuffer.prototype.slice",
    "@@toStringTag": "SharedArrayBuffer.prototype[@@toStringTag]",
  },
  int8array: {
    buffer: "Int8Array.prototype.buffer",
    byteLength: "Int8Array.prototype.byteLength",
    byteOffset: "Int8Array.prototype.byteOffset",
    constructor: "Int8Array.prototype.constructor",
    copyWithin: "Int8Array.prototype.copyWithin",
    entries: "Int8Array.prototype.entries",
    every: "Int8Array.prototype.every",
    fill: "Int8Array.prototype.fill",
    filter: "Int8Array.prototype.filter",
    find: "Int8Array.prototype.find",
    findIndex: "Int8Array.prototype.findIndex",
    forEach: "Int8Array.prototype.forEach",
    includes: "Int8Array.prototype.includes",
    indexOf: "Int8Array.prototype.indexOf",
    join: "Int8Array.prototype.join",
    keys: "Int8Array.prototype.keys",
    lastIndexOf: "Int8Array.prototype.lastIndexOf",
    length: "Int8Array.prototype.length",
    map: "Int8Array.prototype.map",
    reduce: "Int8Array.prototype.reduce",
    reduceRight: "Int8Array.prototype.reduceRight",
    reverse: "Int8Array.prototype.reverse",
    set: "Int8Array.prototype.set",
    slice: "Int8Array.prototype.slice",
    some: "Int8Array.prototype.some",
    sort: "Int8Array.prototype.sort",
    subarray: "Int8Array.prototype.subarray",
    toLocaleString: "Int8Array.prototype.toLocaleString",
    toString: "Int8Array.prototype.toString",
    values: "Int8Array.prototype.values",
    "@@iterator": "Int8Array.prototype[@@iterator]",
    "@@toStringTag": "Int8Array.prototype[@@toStringTag]",
  },
  uint8array: {
    buffer: "Uint8Array.prototype.buffer",
    byteLength: "Uint8Array.prototype.byteLength",
    byteOffset: "Uint8Array.prototype.byteOffset",
    constructor: "Uint8Array.prototype.constructor",
    copyWithin: "Uint8Array.prototype.copyWithin",
    entries: "Uint8Array.prototype.entries",
    every: "Uint8Array.prototype.every",
    fill: "Uint8Array.prototype.fill",
    filter: "Uint8Array.prototype.filter",
    find: "Uint8Array.prototype.find",
    findIndex: "Uint8Array.prototype.findIndex",
    forEach: "Uint8Array.prototype.forEach",
    includes: "Uint8Array.prototype.includes",
    indexOf: "Uint8Array.prototype.indexOf",
    join: "Uint8Array.prototype.join",
    keys: "Uint8Array.prototype.keys",
    lastIndexOf: "Uint8Array.prototype.lastIndexOf",
    length: "Uint8Array.prototype.length",
    map: "Uint8Array.prototype.map",
    reduce: "Uint8Array.prototype.reduce",
    reduceRight: "Uint8Array.prototype.reduceRight",
    reverse: "Uint8Array.prototype.reverse",
    set: "Uint8Array.prototype.set",
    slice: "Uint8Array.prototype.slice",
    some: "Uint8Array.prototype.some",
    sort: "Uint8Array.prototype.sort",
    subarray: "Uint8Array.prototype.subarray",
    toLocaleString: "Uint8Array.prototype.toLocaleString",
    toString: "Uint8Array.prototype.toString",
    values: "Uint8Array.prototype.values",
    "@@iterator": "Uint8Array.prototype[@@iterator]",
    "@@toStringTag": "Uint8Array.prototype[@@toStringTag]",
  },
  uint8clampedarray: {
    buffer: "Uint8ClampedArray.prototype.buffer",
    byteLength: "Uint8ClampedArray.prototype.byteLength",
    byteOffset: "Uint8ClampedArray.prototype.byteOffset",
    constructor: "Uint8ClampedArray.prototype.constructor",
    copyWithin: "Uint8ClampedArray.prototype.copyWithin",
    entries: "Uint8ClampedArray.prototype.entries",
    every: "Uint8ClampedArray.prototype.every",
    fill: "Uint8ClampedArray.prototype.fill",
    filter: "Uint8ClampedArray.prototype.filter",
    find: "Uint8ClampedArray.prototype.find",
    findIndex: "Uint8ClampedArray.prototype.findIndex",
    forEach: "Uint8ClampedArray.prototype.forEach",
    includes: "Uint8ClampedArray.prototype.includes",
    indexOf: "Uint8ClampedArray.prototype.indexOf",
    join: "Uint8ClampedArray.prototype.join",
    keys: "Uint8ClampedArray.prototype.keys",
    lastIndexOf: "Uint8ClampedArray.prototype.lastIndexOf",
    length: "Uint8ClampedArray.prototype.length",
    map: "Uint8ClampedArray.prototype.map",
    reduce: "Uint8ClampedArray.prototype.reduce",
    reduceRight: "Uint8ClampedArray.prototype.reduceRight",
    reverse: "Uint8ClampedArray.prototype.reverse",
    set: "Uint8ClampedArray.prototype.set",
    slice: "Uint8ClampedArray.prototype.slice",
    some: "Uint8ClampedArray.prototype.some",
    sort: "Uint8ClampedArray.prototype.sort",
    subarray: "Uint8ClampedArray.prototype.subarray",
    toLocaleString: "Uint8ClampedArray.prototype.toLocaleString",
    toString: "Uint8ClampedArray.prototype.toString",
    values: "Uint8ClampedArray.prototype.values",
    "@@iterator": "Uint8ClampedArray.prototype[@@iterator]",
    "@@toStringTag": "Uint8ClampedArray.prototype[@@toStringTag]",
  },
  int16array: {
    buffer: "Int16Array.prototype.buffer",
    byteLength: "Int16Array.prototype.byteLength",
    byteOffset: "Int16Array.prototype.byteOffset",
    constructor: "Int16Array.prototype.constructor",
    copyWithin: "Int16Array.prototype.copyWithin",
    entries: "Int16Array.prototype.entries",
    every: "Int16Array.prototype.every",
    fill: "Int16Array.prototype.fill",
    filter: "Int16Array.prototype.filter",
    find: "Int16Array.prototype.find",
    findIndex: "Int16Array.prototype.findIndex",
    forEach: "Int16Array.prototype.forEach",
    includes: "Int16Array.prototype.includes",
    indexOf: "Int16Array.prototype.indexOf",
    join: "Int16Array.prototype.join",
    keys: "Int16Array.prototype.keys",
    lastIndexOf: "Int16Array.prototype.lastIndexOf",
    length: "Int16Array.prototype.length",
    map: "Int16Array.prototype.map",
    reduce: "Int16Array.prototype.reduce",
    reduceRight: "Int16Array.prototype.reduceRight",
    reverse: "Int16Array.prototype.reverse",
    set: "Int16Array.prototype.set",
    slice: "Int16Array.prototype.slice",
    some: "Int16Array.prototype.some",
    sort: "Int16Array.prototype.sort",
    subarray: "Int16Array.prototype.subarray",
    toLocaleString: "Int16Array.prototype.toLocaleString",
    toString: "Int16Array.prototype.toString",
    values: "Int16Array.prototype.values",
    "@@iterator": "Int16Array.prototype[@@iterator]",
    "@@toStringTag": "Int16Array.prototype[@@toStringTag]",
  },
  uint16array: {
    buffer: "Uint16Array.prototype.buffer",
    byteLength: "Uint16Array.prototype.byteLength",
    byteOffset: "Uint16Array.prototype.byteOffset",
    constructor: "Uint16Array.prototype.constructor",
    copyWithin: "Uint16Array.prototype.copyWithin",
    entries: "Uint16Array.prototype.entries",
    every: "Uint16Array.prototype.every",
    fill: "Uint16Array.prototype.fill",
    filter: "Uint16Array.prototype.filter",
    find: "Uint16Array.prototype.find",
    findIndex: "Uint16Array.prototype.findIndex",
    forEach: "Uint16Array.prototype.forEach",
    includes: "Uint16Array.prototype.includes",
    indexOf: "Uint16Array.prototype.indexOf",
    join: "Uint16Array.prototype.join",
    keys: "Uint16Array.prototype.keys",
    lastIndexOf: "Uint16Array.prototype.lastIndexOf",
    length: "Uint16Array.prototype.length",
    map: "Uint16Array.prototype.map",
    reduce: "Uint16Array.prototype.reduce",
    reduceRight: "Uint16Array.prototype.reduceRight",
    reverse: "Uint16Array.prototype.reverse",
    set: "Uint16Array.prototype.set",
    slice: "Uint16Array.prototype.slice",
    some: "Uint16Array.prototype.some",
    sort: "Uint16Array.prototype.sort",
    subarray: "Uint16Array.prototype.subarray",
    toLocaleString: "Uint16Array.prototype.toLocaleString",
    toString: "Uint16Array.prototype.toString",
    values: "Uint16Array.prototype.values",
    "@@iterator": "Uint16Array.prototype[@@iterator]",
    "@@toStringTag": "Uint16Array.prototype[@@toStringTag]",
  },
  int32array: {
    buffer: "Int32Array.prototype.buffer",
    byteLength: "Int32Array.prototype.byteLength",
    byteOffset: "Int32Array.prototype.byteOffset",
    constructor: "Int32Array.prototype.constructor",
    copyWithin: "Int32Array.prototype.copyWithin",
    entries: "Int32Array.prototype.entries",
    every: "Int32Array.prototype.every",
    fill: "Int32Array.prototype.fill",
    filter: "Int32Array.prototype.filter",
    find: "Int32Array.prototype.find",
    findIndex: "Int32Array.prototype.findIndex",
    forEach: "Int32Array.prototype.forEach",
    includes: "Int32Array.prototype.includes",
    indexOf: "Int32Array.prototype.indexOf",
    join: "Int32Array.prototype.join",
    keys: "Int32Array.prototype.keys",
    lastIndexOf: "Int32Array.prototype.lastIndexOf",
    length: "Int32Array.prototype.length",
    map: "Int32Array.prototype.map",
    reduce: "Int32Array.prototype.reduce",
    reduceRight: "Int32Array.prototype.reduceRight",
    reverse: "Int32Array.prototype.reverse",
    set: "Int32Array.prototype.set",
    slice: "Int32Array.prototype.slice",
    some: "Int32Array.prototype.some",
    sort: "Int32Array.prototype.sort",
    subarray: "Int32Array.prototype.subarray",
    toLocaleString: "Int32Array.prototype.toLocaleString",
    toString: "Int32Array.prototype.toString",
    values: "Int32Array.prototype.values",
    "@@iterator": "Int32Array.prototype[@@iterator]",
    "@@toStringTag": "Int32Array.prototype[@@toStringTag]",
  },
  uint32array: {
    buffer: "Uint32Array.prototype.buffer",
    byteLength: "Uint32Array.prototype.byteLength",
    byteOffset: "Uint32Array.prototype.byteOffset",
    constructor: "Uint32Array.prototype.constructor",
    copyWithin: "Uint32Array.prototype.copyWithin",
    entries: "Uint32Array.prototype.entries",
    every: "Uint32Array.prototype.every",
    fill: "Uint32Array.prototype.fill",
    filter: "Uint32Array.prototype.filter",
    find: "Uint32Array.prototype.find",
    findIndex: "Uint32Array.prototype.findIndex",
    forEach: "Uint32Array.prototype.forEach",
    includes: "Uint32Array.prototype.includes",
    indexOf: "Uint32Array.prototype.indexOf",
    join: "Uint32Array.prototype.join",
    keys: "Uint32Array.prototype.keys",
    lastIndexOf: "Uint32Array.prototype.lastIndexOf",
    length: "Uint32Array.prototype.length",
    map: "Uint32Array.prototype.map",
    reduce: "Uint32Array.prototype.reduce",
    reduceRight: "Uint32Array.prototype.reduceRight",
    reverse: "Uint32Array.prototype.reverse",
    set: "Uint32Array.prototype.set",
    slice: "Uint32Array.prototype.slice",
    some: "Uint32Array.prototype.some",
    sort: "Uint32Array.prototype.sort",
    subarray: "Uint32Array.prototype.subarray",
    toLocaleString: "Uint32Array.prototype.toLocaleString",
    toString: "Uint32Array.prototype.toString",
    values: "Uint32Array.prototype.values",
    "@@iterator": "Uint32Array.prototype[@@iterator]",
    "@@toStringTag": "Uint32Array.prototype[@@toStringTag]",
  },
  float32array: {
    buffer: "Float32Array.prototype.buffer",
    byteLength: "Float32Array.prototype.byteLength",
    byteOffset: "Float32Array.prototype.byteOffset",
    constructor: "Float32Array.prototype.constructor",
    copyWithin: "Float32Array.prototype.copyWithin",
    entries: "Float32Array.prototype.entries",
    every: "Float32Array.prototype.every",
    fill: "Float32Array.prototype.fill",
    filter: "Float32Array.prototype.filter",
    find: "Float32Array.prototype.find",
    findIndex: "Float32Array.prototype.findIndex",
    forEach: "Float32Array.prototype.forEach",
    includes: "Float32Array.prototype.includes",
    indexOf: "Float32Array.prototype.indexOf",
    join: "Float32Array.prototype.join",
    keys: "Float32Array.prototype.keys",
    lastIndexOf: "Float32Array.prototype.lastIndexOf",
    length: "Float32Array.prototype.length",
    map: "Float32Array.prototype.map",
    reduce: "Float32Array.prototype.reduce",
    reduceRight: "Float32Array.prototype.reduceRight",
    reverse: "Float32Array.prototype.reverse",
    set: "Float32Array.prototype.set",
    slice: "Float32Array.prototype.slice",
    some: "Float32Array.prototype.some",
    sort: "Float32Array.prototype.sort",
    subarray: "Float32Array.prototype.subarray",
    toLocaleString: "Float32Array.prototype.toLocaleString",
    toString: "Float32Array.prototype.toString",
    values: "Float32Array.prototype.values",
    "@@iterator": "Float32Array.prototype[@@iterator]",
    "@@toStringTag": "Float32Array.prototype[@@toStringTag]",
  },
  float64array: {
    buffer: "Float64Array.prototype.buffer",
    byteLength: "Float64Array.prototype.byteLength",
    byteOffset: "Float64Array.prototype.byteOffset",
    constructor: "Float64Array.prototype.constructor",
    copyWithin: "Float64Array.prototype.copyWithin",
    entries: "Float64Array.prototype.entries",
    every: "Float64Array.prototype.every",
    fill: "Float64Array.prototype.fill",
    filter: "Float64Array.prototype.filter",
    find: "Float64Array.prototype.find",
    findIndex: "Float64Array.prototype.findIndex",
    forEach: "Float64Array.prototype.forEach",
    includes: "Float64Array.prototype.includes",
    indexOf: "Float64Array.prototype.indexOf",
    join: "Float64Array.prototype.join",
    keys: "Float64Array.prototype.keys",
    lastIndexOf: "Float64Array.prototype.lastIndexOf",
    length: "Float64Array.prototype.length",
    map: "Float64Array.prototype.map",
    reduce: "Float64Array.prototype.reduce",
    reduceRight: "Float64Array.prototype.reduceRight",
    reverse: "Float64Array.prototype.reverse",
    set: "Float64Array.prototype.set",
    slice: "Float64Array.prototype.slice",
    some: "Float64Array.prototype.some",
    sort: "Float64Array.prototype.sort",
    subarray: "Float64Array.prototype.subarray",
    toLocaleString: "Float64Array.prototype.toLocaleString",
    toString: "Float64Array.prototype.toString",
    values: "Float64Array.prototype.values",
    "@@iterator": "Float64Array.prototype[@@iterator]",
    "@@toStringTag": "Float64Array.prototype[@@toStringTag]",
  },
  array: {
    concat: "Array.prototype.concat",
    constructor: "Array.prototype.constructor",
    copyWithin: "Array.prototype.copyWithin",
    entries: "Array.prototype.entries",
    every: "Array.prototype.every",
    fill: "Array.prototype.fill",
    filter: "Array.prototype.filter",
    find: "Array.prototype.find",
    findIndex: "Array.prototype.findIndex",
    flat: "Array.prototype.flat",
    flatMap: "Array.prototype.flatMap",
    forEach: "Array.prototype.forEach",
    includes: "Array.prototype.includes",
    indexOf: "Array.prototype.indexOf",
    join: "Array.prototype.join",
    keys: "Array.prototype.keys",
    lastIndexOf: "Array.prototype.lastIndexOf",
    map: "Array.prototype.map",
    pop: "Array.prototype.pop",
    push: "Array.prototype.push",
    reduce: "Array.prototype.reduce",
    reduceRight: "Array.prototype.reduceRight",
    reverse: "Array.prototype.reverse",
    shift: "Array.prototype.shift",
    slice: "Array.prototype.slice",
    some: "Array.prototype.some",
    sort: "Array.prototype.sort",
    splice: "Array.prototype.splice",
    toLocaleString: "Array.prototype.toLocaleString",
    toString: "Array.prototype.toString",
    unshift: "Array.prototype.unshift",
    values: "Array.prototype.values",
    "@@iterator": "Array.prototype[@@iterator]",
    "@@unscopables": "Array.prototype[@@unscopables]",
  },
  boolean: {
    constructor: "Boolean.prototype.constructor",
    toString: "Boolean.prototype.toString",
    valueOf: "Boolean.prototype.valueOf",
  },
  object: {
    constructor: "Object.prototype.constructor",
    hasOwnProperty: "Object.prototype.hasOwnProperty",
    isPrototypeOf: "Object.prototype.isPrototypeOf",
    propertyIsEnumerable: "Object.prototype.propertyIsEnumerable",
    toLocaleString: "Object.prototype.toLocaleString",
    toString: "Object.prototype.toString",
    valueOf: "Object.prototype.valueOf",
  },
  error: {
    constructor: "Error.prototype.constructor",
    message: "Error.prototype.message",
    name: "Error.prototype.name",
    toString: "Error.prototype.toString",
  },
  number: {
    constructor: "Number.prototype.constructor",
    toExponential: "Number.prototype.toExponential",
    toFixed: "Number.prototype.toFixed",
    toLocaleString: "Number.prototype.toLocaleString",
    toPrecision: "Number.prototype.toPrecision",
    toString: "Number.prototype.toString",
    valueOf: "Number.prototype.valueOf",
  },
  date: {
    constructor: "Date.prototype.constructor",
    getDate: "Date.prototype.getDate",
    getDay: "Date.prototype.getDay",
    getFullYear: "Date.prototype.getFullYear",
    getHours: "Date.prototype.getHours",
    getMilliseconds: "Date.prototype.getMilliseconds",
    getMinutes: "Date.prototype.getMinutes",
    getMonth: "Date.prototype.getMonth",
    getSeconds: "Date.prototype.getSeconds",
    getTime: "Date.prototype.getTime",
    getTimezoneOffset: "Date.prototype.getTimezoneOffset",
    getUTCDate: "Date.prototype.getUTCDate",
    getUTCDay: "Date.prototype.getUTCDay",
    getUTCFullYear: "Date.prototype.getUTCFullYear",
    getUTCHours: "Date.prototype.getUTCHours",
    getUTCMilliseconds: "Date.prototype.getUTCMilliseconds",
    getUTCMinutes: "Date.prototype.getUTCMinutes",
    getUTCMonth: "Date.prototype.getUTCMonth",
    getUTCSeconds: "Date.prototype.getUTCSeconds",
    setDate: "Date.prototype.setDate",
    setFullYear: "Date.prototype.setFullYear",
    setHours: "Date.prototype.setHours",
    setMilliseconds: "Date.prototype.setMilliseconds",
    setMinutes: "Date.prototype.setMinutes",
    setMonth: "Date.prototype.setMonth",
    setSeconds: "Date.prototype.setSeconds",
    setTime: "Date.prototype.setTime",
    setUTCDate: "Date.prototype.setUTCDate",
    setUTCFullYear: "Date.prototype.setUTCFullYear",
    setUTCHours: "Date.prototype.setUTCHours",
    setUTCMilliseconds: "Date.prototype.setUTCMilliseconds",
    setUTCMinutes: "Date.prototype.setUTCMinutes",
    setUTCMonth: "Date.prototype.setUTCMonth",
    setUTCSeconds: "Date.prototype.setUTCSeconds",
    toDateString: "Date.prototype.toDateString",
    toISOString: "Date.prototype.toISOString",
    toJSON: "Date.prototype.toJSON",
    toLocaleDateString: "Date.prototype.toLocaleDateString",
    toLocaleString: "Date.prototype.toLocaleString",
    toLocaleTimeString: "Date.prototype.toLocaleTimeString",
    toString: "Date.prototype.toString",
    toTimeString: "Date.prototype.toTimeString",
    toUTCString: "Date.prototype.toUTCString",
    valueOf: "Date.prototype.valueOf",
    "@@toPrimitive": "Date.prototype[@@toPrimitive]",
  },
  string: {
    charAt: "String.prototype.charAt",
    charCodeAt: "String.prototype.charCodeAt",
    codePointAt: "String.prototype.codePointAt",
    concat: "String.prototype.concat",
    constructor: "String.prototype.constructor",
    endsWith: "String.prototype.endsWith",
    includes: "String.prototype.includes",
    indexOf: "String.prototype.indexOf",
    lastIndexOf: "String.prototype.lastIndexOf",
    localeCompare: "String.prototype.localeCompare",
    match: "String.prototype.match",
    matchAll: "String.prototype.matchAll",
    normalize: "String.prototype.normalize",
    padEnd: "String.prototype.padEnd",
    padStart: "String.prototype.padStart",
    repeat: "String.prototype.repeat",
    replace: "String.prototype.replace",
    search: "String.prototype.search",
    slice: "String.prototype.slice",
    split: "String.prototype.split",
    startsWith: "String.prototype.startsWith",
    substring: "String.prototype.substring",
    toLocaleLowerCase: "String.prototype.toLocaleLowerCase",
    toLocaleUpperCase: "String.prototype.toLocaleUpperCase",
    toLowerCase: "String.prototype.toLowerCase",
    toString: "String.prototype.toString",
    toUpperCase: "String.prototype.toUpperCase",
    trim: "String.prototype.trim",
    trimEnd: "String.prototype.trimEnd",
    trimStart: "String.prototype.trimStart",
    valueOf: "String.prototype.valueOf",
    "@@iterator": "String.prototype[@@iterator]",
  },
  regexp: {
    constructor: "RegExp.prototype.constructor",
    exec: "RegExp.prototype.exec",
    dotAll: "RegExp.prototype.dotAll",
    flags: "RegExp.prototype.flags",
    global: "RegExp.prototype.global",
    ignoreCase: "RegExp.prototype.ignoreCase",
    "@@match": "RegExp.prototype[@@match]",
    "@@matchAll": "RegExp.prototype[@@matchAll]",
    multiline: "RegExp.prototype.multiline",
    "@@replace": "RegExp.prototype[@@replace]",
    "@@search": "RegExp.prototype[@@search]",
    source: "RegExp.prototype.source",
    "@@split": "RegExp.prototype[@@split]",
    sticky: "RegExp.prototype.sticky",
    test: "RegExp.prototype.test",
    toString: "RegExp.prototype.toString",
    unicode: "RegExp.prototype.unicode",
  },
  map: {
    clear: "Map.prototype.clear",
    constructor: "Map.prototype.constructor",
    delete: "Map.prototype.delete",
    entries: "Map.prototype.entries",
    forEach: "Map.prototype.forEach",
    get: "Map.prototype.get",
    has: "Map.prototype.has",
    keys: "Map.prototype.keys",
    set: "Map.prototype.set",
    size: "Map.prototype.size",
    values: "Map.prototype.values",
    "@@iterator": "Map.prototype[@@iterator]",
    "@@toStringTag": "Map.prototype[@@toStringTag]",
  },
  weakMap: {
    constructor: "WeakMap.prototype.constructor",
    delete: "WeakMap.prototype.delete",
    get: "WeakMap.prototype.get",
    has: "WeakMap.prototype.has",
    set: "WeakMap.prototype.set",
    "@@toStringTag": "WeakMap.prototype[@@toStringTag]",
  },
  weakSet: {
    add: "WeakSet.prototype.add",
    constructor: "WeakSet.prototype.constructor",
    delete: "WeakSet.prototype.delete",
    has: "WeakSet.prototype.has",
    "@@toStringTag": "WeakSet.prototype[@@toStringTag]",
  },
  arrayBuffer: {
    byteLength: "ArrayBuffer.prototype.byteLength",
    constructor: "ArrayBuffer.prototype.constructor",
    slice: "ArrayBuffer.prototype.slice",
    "@@toStringTag": "ArrayBuffer.prototype[@@toStringTag]",
  },
  dataView: {
    buffer: "DataView.prototype.buffer",
    byteLength: "DataView.prototype.byteLength",
    byteOffset: "DataView.prototype.byteOffset",
    constructor: "DataView.prototype.constructor",
    getFloat32: "DataView.prototype.getFloat32",
    getFloat64: "DataView.prototype.getFloat64",
    getInt8: "DataView.prototype.getInt8",
    getInt16: "DataView.prototype.getInt16",
    getInt32: "DataView.prototype.getInt32",
    getUint8: "DataView.prototype.getUint8",
    getUint16: "DataView.prototype.getUint16",
    getUint32: "DataView.prototype.getUint32",
    setFloat32: "DataView.prototype.setFloat32",
    setFloat64: "DataView.prototype.setFloat64",
    setInt8: "DataView.prototype.setInt8",
    setInt16: "DataView.prototype.setInt16",
    setInt32: "DataView.prototype.setInt32",
    setUint8: "DataView.prototype.setUint8",
    setUint16: "DataView.prototype.setUint16",
    setUint32: "DataView.prototype.setUint32",
    "@@toStringTag": "DataView.prototype[@@toStringTag]",
  },
  promise: {
    catch: "Promise.prototype.catch",
    constructor: "Promise.prototype.constructor",
    finally: "Promise.prototype.finally",
    then: "Promise.prototype.then",
    "@@toStringTag": "Promise.prototype[@@toStringTag]",
  },
  set: {
    add: "Set.prototype.add",
    clear: "Set.prototype.clear",
    constructor: "Set.prototype.constructor",
    delete: "Set.prototype.delete",
    entries: "Set.prototype.entries",
    forEach: "Set.prototype.forEach",
    has: "Set.prototype.has",
    keys: "Set.prototype.keys",
    size: "Set.prototype.size",
    values: "Set.prototype.values",
    "@@iterator": "Set.prototype[@@iterator]",
    "@@toStringTag": "Set.prototype[@@toStringTag]",
  },
  symbol: {
    constructor: "Symbol.prototype.constructor",
    description: "Symbol.prototype.description",
    toString: "Symbol.prototype.toString",
    valueOf: "Symbol.prototype.valueOf",
    "@@toPrimitive": "Symbol.prototype[@@toPrimitive]",
    "@@toStringTag": "Symbol.prototype[@@toStringTag]",
  },
  function: {
    apply: "Function.prototype.apply",
    bind: "Function.prototype.bind",
    call: "Function.prototype.call",
    constructor: "Function.prototype.constructor",
    toString: "Function.prototype.toString",
    "@@hasInstance": "Function.prototype[@@hasInstance]",
  },
  abortController: {
    signal: "AbortController.prototype.signal",
    abort: "AbortController.prototype.abort",
  },
  abortSignal: {
    aborted: "AbortSignal.prototype.aborted",
    onabort: "AbortSignal.prototype.onabort",
  },
  documentFragment: {
    append: "DocumentFragment.prototype.append",
    prepend: "DocumentFragment.prototype.prepend",
  },
  domTokenList: {
    "@@iterator": "DOMTokenList.prototype[@@iterator]",
  },
  element: {
    after: "Element.prototype.after",
    append: "Element.prototype.append",
    before: "Element.prototype.before",
    classList: "Element.prototype.classList",
    cloneNode: "Element.prototype.cloneNode",
    closest: "Element.prototype.closest",
    dataset: "Element.prototype.dataset",
    inert: "Element.prototype.inert",
    matches: "Element.prototype.matches",
    placeholder: "Element.prototype.placeholder",
    prepend: "Element.prototype.prepend",
    remove: "Element.prototype.remove",
    replaceWith: "Element.prototype.replaceWith",
    toggleAttribute: "Element.prototype.toggleAttribute",
  },
  htmlCanvasElement: {
    toBlob: "HTMLCanvasElement.prototype.toBlob",
  },
  node: {
    contains: "Node.prototype.contains",
  },
  nodeList: {
    forEach: 'NodeList.prototype.forEach',
    "@@iterator": 'NodeList.prototype[@@iterator',
  },
}

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const instanceMethods = Object.values(methods).reduce(
  function(previous, current) {
    for (const [key, value] of Object.entries(current)) {
      if (has(previous, key)) {
        if (Array.isArray(previous[key])) {
          previous[key].push(value);
        } else {
          previous[key] = [previous[key], value];
        }
      } else {
        previous[key] = value;
      }
    }
    return previous;
  },
  {}
);

module.exports = instanceMethods;
