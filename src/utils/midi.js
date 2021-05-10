const NOTE_ON = 144
const NOTE_OFF = 128
const CONTROL_CHANGE = 176
const SYSTEM_REALTIME = 240
const REALTIME_CLOCK = 248
const REALTIME_START = 250
const REALTIME_CONTINUE = 251
const REALTIME_STOP = 252

const noteMapKeyboard = {
  81: 48, // q C5
  87: 49, // w D5
  69: 50, // e E5
  82: 51, // r F5
  84: 52, // t G5
  89: 53, // y A5
  85: 54, // u B5
  73: 55, // i C6
  79: 56, // o D6
  80: 57, // p E6
  219: 58, // [ F6
  221: 59, // ] G6
  83: 60, // s C#4
  68: 61, // d D#4
  71: 62, // g F#4
  72: 63, // h G#4
  74: 64, // j A#4
  76: 65, // l C#5
  186: 66, // ; D#5
  90: 67, // z C4
  88: 68, // x D4
  67: 69, // c E4
  86: 70, // v F4
  66: 71, // b G4
  78: 72, // n A4
}

/**
 * Request access to the MIDI devices.
 */
function accessMidi() {
  return new Promise((resolve, reject) => {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({ sysex: false }).then(
        (access) => {
          resolve(access)
        },
        () => {
          reject(`MIDI access failed.`)
        }
      )
    } else {
      reject(`No MIDI access in this browser.`)
    }
  })
}

/**
 * Listen to MIDI events.
 * @param {Object} midiAccessObj MidiAccess object.
 */
function listenToMIDIPorts(input, onMidiMessage) {
  input.onmidimessage = onMidiMessage
}

/**
 * Get all MIDI input and output ports.
 * @returns {Array} Array of all ports.
 */
function getAllMIDIPorts(midiAccess) {
  const inputs = midiAccess.inputs.values()
  return [...inputs]
}

export default {
  noteMapKeyboard,
  accessMidi,
  getAllMIDIPorts,
  listenToMIDIPorts,
}
