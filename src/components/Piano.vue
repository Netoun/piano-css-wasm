<template>
  <div class="scene">
    <div
      class="piano"
      :style="`transform: rotateY(${axis.y}deg) rotateX(${axis.x}deg) rotateZ(${axis.z}deg) translateZ(-150px);`"
    >
      <BoxFront />
      <PianoKeyboard :keys="keys" :synth="synth" />
    </div>
  </div>
</template>

<script>
import midi from '../utils/midi.js'
import PianoKeyboard from './piano/PianoKeyboard.vue'
import BoxFront from './piano/BoxFront.vue'

const NOTE_ON = 144
const NOTE_OFF = 128

export default {
  components: {
    PianoKeyboard,
    BoxFront,
  },
  props: {
    axis: {
      type: Object,
      required: true,
    },
    synth: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      noMIDIAccess: false,
      keys: [
        { note: 'C', isActive: false, color: 'white', code: 48 },
        { note: 'C#', isActive: false, color: 'black', code: 49 },
        { note: 'D', isActive: false, color: 'white', code: 50 },
        { note: 'D#', isActive: false, color: 'black', code: 51 },
        { note: 'E', isActive: false, color: 'white', code: 52 },
        { note: 'F', isActive: false, color: 'white', code: 53 },
        { note: 'F#', isActive: false, color: 'black', code: 54 },
        { note: 'G', isActive: false, color: 'white', code: 55 },
        { note: 'G#', isActive: false, color: 'black', code: 56 },
        { note: 'A', isActive: false, color: 'white', code: 57 },
        { note: 'A#', isActive: false, color: 'black', code: 58 },
        { note: 'B', isActive: false, color: 'white', code: 59 },
        { note: 'C', isActive: false, color: 'white', code: 60 },
        { note: 'C#', isActive: false, color: 'black', code: 61 },
        { note: 'D', isActive: false, color: 'white', code: 62 },
        { note: 'D#', isActive: false, color: 'black', code: 63 },
        { note: 'E', isActive: false, color: 'white', code: 64 },
        { note: 'F', isActive: false, color: 'white', code: 65 },
        { note: 'F#', isActive: false, color: 'black', code: 66 },
        { note: 'G', isActive: false, color: 'white', code: 67 },
        { note: 'G#', isActive: false, color: 'black', code: 68 },
        { note: 'A', isActive: false, color: 'white', code: 69 },
        { note: 'A#', isActive: false, color: 'black', code: 70 },
        { note: 'B', isActive: false, color: 'white', code: 71 },
        { note: 'C', isActive: false, color: 'white', code: 72 },
      ],
    }
  },
  created() {
    midi
      .accessMidi()
      .then((midiAccess) => {
        const input = midi.getAllMIDIPorts(midiAccess)[0]
        midi.listenToMIDIPorts(input, this.onMessage)
      })
      .catch((err) => {})
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      const note = midi.noteMapKeyboard[e.keyCode] || 0
      if (e.repeat || !note) {
        return
      }
      this.onMessage({ data: [NOTE_ON, note, 127] })
    })
    window.addEventListener('keyup', (e) => {
      const note = midi.noteMapKeyboard[e.keyCode] || 0
      this.onMessage({ data: [NOTE_OFF, note, 127] })
    })
  },
  methods: {
    onMessage(e) {
      const note = e.data[1]
      const _index = this.keys.findIndex((k) => k.code === note)
      const _key = Object.assign({}, this.keys[_index], {
        isActive: NOTE_ON === e.data[0] ? true : false,
      })
      this.keys[_index] = _key
    },
  },
}
</script>

<style lang="scss">
.scene {
  width: 800px;
  height: 600px;
}

.piano {
  height: 200px;
  perspective: 10000px;
  transform: rotateY(-15deg) rotateX(65deg) rotateZ(30deg) translateZ(-150px);
  transform-origin: bottom left;
}
</style>
