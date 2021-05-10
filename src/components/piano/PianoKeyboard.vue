<template>
  <div>
    <div class="piano__face piano__face--front"></div>
    <div class="piano__face piano__face--back"></div>
    <div class="piano__face piano__face--right"></div>
    <div class="piano__face piano__face--left"></div>
    <div class="piano__face piano__face--top">
      <Keys :keys="keys" />
    </div>
    <div class="piano__face piano__face--bottom"></div>
  </div>
</template>

<script>
import Keys from './PianoKeyboard/Keys.vue'
export default {
  components: {
    Keys,
  },
  props: {
    keys: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
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
    background: linear-gradient(
        217deg,
        rgba(27, 27, 27, 0.8),
        rgba(30, 30, 30, 0.755) 70.71%
      ),
      linear-gradient(
        127deg,
        rgba(29, 29, 29, 0.8),
        rgba(39, 40, 39, 0.455) 70.71%
      ),
      linear-gradient(
        336deg,
        rgba(32, 32, 35, 0.8),
        rgba(0, 0, 0, 0.823) 70.71%
      );
  }

  &--bottom {
    width: 800px;
    height: 150px;
    transform: translateZ(0);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        217deg,
        rgba(17, 17, 17, 0.8),
        rgba(20, 20, 20, 0.755) 70.71%
      ),
      linear-gradient(
        127deg,
        rgba(19, 19, 19, 0.8),
        rgba(29, 30, 29, 0.455) 70.71%
      ),
      linear-gradient(
        336deg,
        rgba(22, 22, 25, 0.8),
        rgba(0, 0, 0, 0.823) 70.71%
      );
  }
}
</style>
