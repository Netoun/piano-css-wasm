const lAudioContext =
  typeof AudioContext !== 'undefined'
    ? AudioContext
    : typeof webkitAudioContext !== 'undefined'
    ? webkitAudioContext
    : undefined
let wasm

const heap = new Array(32).fill(undefined)

heap.push(undefined, null, true, false)

function getObject(idx) {
  return heap[idx]
}

let heap_next = heap.length

function dropObject(idx) {
  if (idx < 36) return
  heap[idx] = heap_next
  heap_next = idx
}

function takeObject(idx) {
  const ret = getObject(idx)
  dropObject(idx)
  return ret
}

let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true,
})

cachedTextDecoder.decode()

let cachegetUint8Memory0 = null
function getUint8Memory0() {
  if (
    cachegetUint8Memory0 === null ||
    cachegetUint8Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer)
  }
  return cachegetUint8Memory0
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len))
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1)
  const idx = heap_next
  heap_next = heap[idx]

  heap[idx] = obj
  return idx
}

function handleError(f, args) {
  try {
    return f.apply(this, args)
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e))
  }
}
/**
 */
export class FmOsc {
  static __wrap(ptr) {
    const obj = Object.create(FmOsc.prototype)
    obj.ptr = ptr

    return obj
  }

  __destroy_into_raw() {
    const ptr = this.ptr
    this.ptr = 0

    return ptr
  }

  free() {
    const ptr = this.__destroy_into_raw()
    wasm.__wbg_fmosc_free(ptr)
  }
  /**
   */
  constructor() {
    var ret = wasm.fmosc_new()
    return FmOsc.__wrap(ret)
  }
  /**
   * Sets the gain for this oscillator, between 0.0 and 1.0.
   * @param {number} gain
   */
  set_gain(gain) {
    wasm.fmosc_set_gain(this.ptr, gain)
  }
  /**
   * @param {number} freq
   */
  set_primary_frequency(freq) {
    wasm.fmosc_set_primary_frequency(this.ptr, freq)
  }
  /**
   * @param {number} note
   */
  set_note(note) {
    wasm.fmosc_set_note(this.ptr, note)
  }
  /**
   * This should be between 0 and 1, though higher values are accepted.
   * @param {number} amt
   */
  set_fm_amount(amt) {
    wasm.fmosc_set_fm_amount(this.ptr, amt)
  }
  /**
   * This should be between 0 and 1, though higher values are accepted.
   * @param {number} amt
   */
  set_fm_frequency(amt) {
    wasm.fmosc_set_fm_frequency(this.ptr, amt)
  }
}

async function load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports)
      } catch (e) {
        if (module.headers.get('Content-Type') != 'application/wasm') {
          console.warn(
            '`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
            e
          )
        } else {
          throw e
        }
      }
    }

    const bytes = await module.arrayBuffer()
    return await WebAssembly.instantiate(bytes, imports)
  } else {
    const instance = await WebAssembly.instantiate(module, imports)

    if (instance instanceof WebAssembly.Instance) {
      return { instance, module }
    } else {
      return instance
    }
  }
}

async function init(input) {
  if (typeof input === 'undefined') {
    input = new URL('core_bg.wasm', import.meta.url)
  }
  const imports = {}
  imports.wbg = {}
  imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
    takeObject(arg0)
  }
  imports.wbg.__wbg_connect_796a016dae0d9764 = function () {
    return handleError(function (arg0, arg1) {
      var ret = getObject(arg0).connect(getObject(arg1))
      return addHeapObject(ret)
    }, arguments)
  }
  imports.wbg.__wbg_connect_439ee8e638c38083 = function () {
    return handleError(function (arg0, arg1) {
      getObject(arg0).connect(getObject(arg1))
    }, arguments)
  }
  imports.wbg.__wbg_destination_f9a58d7e763557df = function (arg0) {
    var ret = getObject(arg0).destination
    return addHeapObject(ret)
  }
  imports.wbg.__wbg_new_513f7c570bdcbfc5 = function () {
    return handleError(function () {
      var ret = new lAudioContext()
      return addHeapObject(ret)
    }, arguments)
  }
  imports.wbg.__wbg_close_d4d3c966433dc452 = function () {
    return handleError(function (arg0) {
      var ret = getObject(arg0).close()
      return addHeapObject(ret)
    }, arguments)
  }
  imports.wbg.__wbg_createGain_fa8df723598c5011 = function () {
    return handleError(function (arg0) {
      var ret = getObject(arg0).createGain()
      return addHeapObject(ret)
    }, arguments)
  }
  imports.wbg.__wbg_createOscillator_f8dd8d56f937c0dd = function () {
    return handleError(function (arg0) {
      var ret = getObject(arg0).createOscillator()
      return addHeapObject(ret)
    }, arguments)
  }
  imports.wbg.__wbg_value_ca777336f3ba2ae9 = function (arg0) {
    var ret = getObject(arg0).value
    return ret
  }
  imports.wbg.__wbg_setvalue_6e17b5b4894860a0 = function (arg0, arg1) {
    getObject(arg0).value = arg1
  }
  imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1)
    return addHeapObject(ret)
  }
  imports.wbg.__wbg_settype_952e72688f483ca0 = function (arg0, arg1) {
    getObject(arg0).type = takeObject(arg1)
  }
  imports.wbg.__wbg_frequency_df03f59e234cf86e = function (arg0) {
    var ret = getObject(arg0).frequency
    return addHeapObject(ret)
  }
  imports.wbg.__wbg_start_c349669816506d38 = function () {
    return handleError(function (arg0) {
      getObject(arg0).start()
    }, arguments)
  }
  imports.wbg.__wbg_gain_f6c8ef1bb6ff877e = function (arg0) {
    var ret = getObject(arg0).gain
    return addHeapObject(ret)
  }
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1))
  }
  imports.wbg.__wbindgen_rethrow = function (arg0) {
    throw takeObject(arg0)
  }

  if (
    typeof input === 'string' ||
    (typeof Request === 'function' && input instanceof Request) ||
    (typeof URL === 'function' && input instanceof URL)
  ) {
    input = fetch(input)
  }

  const { instance, module } = await load(await input, imports)

  wasm = instance.exports
  init.__wbindgen_wasm_module = module

  return wasm
}

export default init
