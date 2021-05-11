<template>
  <div>
    <div class="piano__face piano__face--front"></div>
    <div class="piano__face piano__face--back"></div>
    <div class="piano__face piano__face--right"></div>
    <div class="piano__face piano__face--left"></div>
    <div class="piano__face piano__face--top">
      <div class="keys_wrappers">
        <div v-for="keyNote in keys.slice().reverse()">
          <Key :keyNote="keyNote" :synth="synth" />
        </div>
      </div>
    </div>
    <div class="piano__face piano__face--bottom"></div>
  </div>
</template>

<script>
import Key from './PianoKeyboard/Key.vue'
export default {
  components: {
    Key,
  },
  props: {
    keys: {
      type: Object,
      required: true,
    },
    synth: {
      type: Function,
      required: true,
    },
  },
  created() {
    console.log(this.keys.slice().reverse())
  },
}
</script>

<style lang="scss">
.keys_wrappers {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: inherit;
  transform: rotateY(180deg) translateZ(-8px);
}

.piano__face {
  position: absolute;
  background: rgb(10, 10, 10);
  &--front {
    width: 800px;
    height: 20px;
    transform: rotateX(-90deg) translateZ(138px) translateY(-10px);
    background: linear-gradient(
        217deg,
        rgb(17, 17, 17),
        rgba(20, 20, 20, 0.748) 70.71%
      ),
      linear-gradient(127deg, rgba(19, 19, 19, 0.8), rgb(24, 25, 24) 70.71%),
      linear-gradient(
        336deg,
        rgba(22, 22, 25, 0.8),
        rgba(19, 19, 20, 0.714) 70.71%
      );
  }
  &--back {
    width: 800px;
    height: 20px;
    transform: rotateX(-90deg) translateZ(-10px) translateY(-10px);
    background: linear-gradient(
        217deg,
        rgb(17, 17, 17),
        rgba(20, 20, 20, 0.748) 70.71%
      ),
      linear-gradient(127deg, rgba(19, 19, 19, 0.8), rgb(24, 25, 24) 70.71%),
      linear-gradient(
        336deg,
        rgba(22, 22, 25, 0.8),
        rgba(19, 19, 20, 0.714) 70.71%
      );
  }
  &--left {
    width: 20px;
    height: 150px;
    transform: rotateY(90deg) translateZ(790px) translateX(-10px);
    background: linear-gradient(
        217deg,
        rgb(17, 17, 17),
        rgba(20, 20, 20, 0.748) 70.71%
      ),
      linear-gradient(127deg, rgba(19, 19, 19, 0.8), rgb(24, 25, 24) 70.71%),
      linear-gradient(
        336deg,
        rgba(22, 22, 25, 0.8),
        rgba(19, 19, 20, 0.714) 70.71%
      );
  }

  &--right {
    width: 20px;
    height: 150px;
    transform: rotateY(90deg) translateZ(0) translateX(-10px);
    background: linear-gradient(
        217deg,
        rgb(17, 17, 17),
        rgba(20, 20, 20, 0.748) 70.71%
      ),
      linear-gradient(127deg, rgba(19, 19, 19, 0.8), rgb(24, 25, 24) 70.71%),
      linear-gradient(
        336deg,
        rgba(22, 22, 25, 0.8),
        rgba(19, 19, 20, 0.714) 70.71%
      );
  }
  &--top {
    width: 800px;
    height: 150px;
    transform: translateZ(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(30, 30, 30);
  }

  &--bottom {
    width: 800px;
    height: 150px;
    transform: translateZ(0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
