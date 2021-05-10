<template>
  <div class="container">
    <div class="ranges">
      <Slider v-for="a in Object.keys(axis)" v-model="axis[a]" />
    </div>
    <div>
      <Piano :axis="axis" />
    </div>
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
      axis: {
        x: 65,
        y: -15,
        z: 30,
      },
    }
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
}
.container {
  margin: 1rem auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.ranges {
  display: flex;
  padding: 0.75rem;
  background: rgb(41, 41, 41);
  border-radius: 2rem;
}
</style>
