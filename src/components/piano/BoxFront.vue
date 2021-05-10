<template>
  <div class="back">
    <div class="pianoback__face pianoback__face--front"></div>
    <div class="pianoback__face pianoback__face--back"></div>
    <div class="pianoback__face pianoback__face--right"></div>
    <div class="pianoback__face pianoback__face--left"></div>
    <div class="pianoback__face pianoback__face--top"></div>
    <div class="pianoback__face pianoback__face--bottom"></div>
  </div>
</template>

<style lang="scss">
.pianoback__face {
  position: absolute;
  background: rgb(20, 20, 20);

  &--front {
    width: 800px;
    background: rgb(15, 15, 15);
    height: 50px;
    transform: rotateX(-90deg) translateZ(-25px) translateY(-25px);
  }
  &--right {
    width: 80px;
    background: rgb(25, 25, 25);
    height: 75px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 36% 100%);
    transform: rotateY(90deg) translateZ(760px) translateY(-74px)
      translateX(-40px);
  }
  &--back {
    width: 800px;
    background: rgb(15, 15, 15);
    height: 75px;
    transform: rotateX(-90deg) translateZ(-112px) translateY(-40px);
  }
  &--left {
    width: 80px;
    background: rgb(25, 25, 25);
    height: 75px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 36% 100%);
    transform: rotateY(90deg) translateZ(-40px) translateY(-74px)
      translateX(-40px);
  }
  &--top {
    width: 800px;
    height: 82px;
    transform: rotateX(339deg) translateZ(33px) translateY(-95px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // &--bottom {
  // }
}
</style>
