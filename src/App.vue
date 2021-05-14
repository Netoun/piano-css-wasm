<template>
  <div class="container">
    <template v-if="synth">
      <div class="ranges">
        <Slider v-for="a in Object.keys(axis)" :key="a" v-model="axis[a]" />
      </div>
      <div>
        <Piano :axis="axis" :synth="synth" />
      </div>
    </template>
    <template v-else>
      <div class="start">
        <button class="button" @click="start">Start</button>
      </div>
    </template>
  </div>
</template>

<script>
import Piano from './components/Piano.vue'
import Slider from './components/Slider.vue'
export default {
  components: {
    Piano,
    Slider,
  },
  data() {
    return {
      synth: null,
      axis: {
        x: 65,
        y: -15,
        z: 30,
      },
    }
  },
  methods: {
    async start() {
      const wasm = await import('./core/pkg')
      await wasm.default()
      this.synth = wasm.FmOsc
    },
  },
}
</script>

<style lang="scss">
*,
::after,
::before {
  margin: 0;
  padding: 0;
  padding-top: 0;
  box-sizing: border-box;
  pointer-events: none;
  transform-style: preserve-3d;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #393e46;
}
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.ranges {
  display: flex;
  margin: 1rem auto;
  padding: 0.75rem;
  background: #222831;
  border-radius: 2rem;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  pointer-events: auto;
  color: white;
  font-weight: bold;
  height: 80px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #33383f, #3d424b);
  box-shadow: 7px 7px 15px #2d3137, -7px -7px 15px #3f444d;
  transition-duration: 0.4s;
  transition-property: box-shadow;
  width: 120px;
  &:hover {
    border-radius: 10px;
    background: linear-gradient(145deg, #3d424b, #33383f);
    box-shadow: 7px 7px 15px #2d3137, -7px -7px 15px #3f444d;
  }
  &:active {
    border-radius: 10px;
    color: rgb(245, 245, 245);
    background: #393e46;
    box-shadow: inset 7px 7px 15px #2d3137, inset -7px -7px 15px #454b55;
  }
}

.start {
  height: inherit;
  margin: auto;
}
</style>
