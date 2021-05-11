<template>
  <div
    :class="[
      'key',
      `key--${keyNote.color}`,
      keyNote.isActive ? `key--active` : null,
    ]"
  >
    <div
      :class="[
        `key__face_${keyNote.color}`,
        `key__face_${keyNote.color}--front`,
      ]"
    />
    <div
      :class="[
        `key__face_${keyNote.color}`,
        `key__face_${keyNote.color}--back`,
      ]"
    />
    <div
      :class="[
        `key__face_${keyNote.color}`,
        `key__face_${keyNote.color}--right`,
      ]"
    />
    <div
      :class="[
        `key__face_${keyNote.color}`,
        `key__face_${keyNote.color}--left`,
      ]"
    />
    <div
      :class="[`key__face_${keyNote.color}`, `key__face_${keyNote.color}--top`]"
    >
      <p>{{ keyNote.note }}</p>
    </div>
    <div
      :class="[
        `key__face_${keyNote.color}`,
        `key__face_${keyNote.color}--bottom`,
      ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    keyNote: {
      type: Object,
      required: true,
    },
    synth: {
      type: Function,
      required: true,
    },
  },
  data() {
    _synth: null
  },
  async created() {
    const _synth = new this.synth()
    this._synth = _synth
    _synth.set_note(this.keyNote.code)
    _synth.set_fm_frequency(0)
    _synth.set_fm_amount(0)
    _synth.set_gain(0)
  },

  watch: {
    keyNote(value) {
      console.log(value)
      const _synth = this._synth
      if (value.isActive) {
        _synth.set_gain(0.8)
      } else {
        _synth.set_gain(0)
      }
    },
  },
}
</script>

<style lang="scss">
.key {
  pointer-events: auto;
  & > * {
    pointer-events: auto;
  }
  &--white {
    width: 40px;
  }
  &--black {
    width: 1px;
  }
  .key__face_white {
    position: absolute;
    transition: 0.4s;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    p {
      color: rgb(17, 16, 16);
      margin-bottom: 10px;
      font-weight: bold;
      transform: rotateY(180deg);
    }

    &--front {
      width: 38px;
      height: 20px;
      transform: rotateX(-90deg) translateZ(118px);
      background: radial-gradient(
          ellipse at top,
          rgb(200, 200, 200),
          rgb(220, 220, 220)
        ),
        radial-gradient(
          ellipse at bottom,
          rgb(170, 170, 170),
          rgb(170, 170, 170)
        );
    }
    &--right {
      height: 128px;
      width: 20px;
      transform: rotateY(90deg) translateZ(28px);
    }
    &--back {
      transform: rotateY(180deg) translateZ(75px);
    }
    &--left {
      height: 128px;
      width: 20px;
      transform: rotateY(90deg) translateZ(-10px);
      background: radial-gradient(
          ellipse at top,
          rgb(210, 210, 210),
          rgb(230, 230, 230)
        ),
        radial-gradient(
          ellipse at bottom,
          rgb(180, 180, 180),
          rgb(180, 180, 180)
        );
    }
    &--top {
      width: 38px;
      height: 128px;
      transform: rotateY(0deg) translateZ(-10px);
      background: radial-gradient(
          ellipse at top,
          rgb(248, 248, 248),
          rgb(255, 255, 255)
        ),
        radial-gradient(
          ellipse at bottom,
          rgb(270, 270, 270),
          rgb(270, 270, 270)
        );
    }
    &--bottom {
      height: 150px;
      transform: rotateX(-90deg) translateZ(225px);
    }
  }

  .key__face_black {
    width: 1px;
    position: absolute;
    transition: 0.4s;
    background: black;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    p {
      color: white;
      margin-bottom: 10px;
      font-weight: bold;
      transform: rotateY(180deg);
    }

    &--front {
      width: 20px;
      background: rgb(13, 13, 13);
      height: 30px;
      transform: rotateX(-90deg) translateZ(85px) translateX(-10px)
        translateY(10px);
    }
    &--right {
      background: radial-gradient(
          ellipse at top,
          rgb(48, 48, 48),
          rgb(55, 55, 55)
        ),
        radial-gradient(ellipse at bottom, rgb(44, 44, 44), rgb(55, 55, 55));
      height: 100px;
      width: 30px;
      transform: rotateY(90deg) translateZ(-5px) translateX(10px);
    }
    &--back {
      transform: rotateY(180deg) translateZ(75px);
    }
    &--left {
      background: rgb(10, 10, 10);
      height: 100px;
      width: 30px;
      transform: rotateY(90deg) translateZ(-25px) translateX(10px);
    }
    &--top {
      background: rgb(34, 33, 33);
      width: 20px;
      height: 100px;
      transform: rotateY(0deg) translateZ(-25px) translateX(-10px);
    }
  }

  &--active {
    .key__face_white {
      position: absolute;
      &--front {
        width: 38px;
        height: 20px;
        transform: rotateX(-90deg) translateZ(118px) translateY(-12px);
      }
      &--right {
        height: 128px;
        width: 20px;
        transform: rotateY(90deg) translateZ(28px) translateX(-12px);
      }
      &--back {
        transform: rotateY(180deg) translateZ(75px);
      }
      &--left {
        height: 128px;
        width: 20px;
        transform: rotateY(90deg) translateZ(-10px) translateX(-12px);
        background: radial-gradient(
            ellipse at top,
            rgb(210, 210, 210),
            rgb(230, 230, 230)
          ),
          radial-gradient(
            ellipse at bottom,
            rgb(180, 180, 180),
            rgb(180, 180, 180)
          );
      }
      &--top {
        width: 38px;
        height: 128px;
        transform: rotateY(0deg) translateZ(2px);
        background: radial-gradient(
            ellipse at top,
            rgb(248, 248, 248),
            rgb(255, 255, 255)
          ),
          radial-gradient(
            ellipse at bottom,
            rgb(270, 270, 270),
            rgb(270, 270, 270)
          );
      }
      &--bottom {
        height: 150px;
        transform: rotateX(-90deg) translateZ(225px);
      }
    }

    .key__face_black {
      position: absolute;
      background: black;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      p {
        color: white;
        margin-bottom: 10px;
        font-weight: bold;
        transform: rotateY(180deg);
      }

      &--front {
        width: 20px;
        background: rgb(10, 10, 10);
        height: 30px;
        transform: rotateX(-90deg) translateZ(85px) translateX(-10px);
      }
      &--right {
        background: radial-gradient(
            ellipse at top,
            rgb(48, 48, 48),
            rgb(55, 55, 55)
          ),
          radial-gradient(ellipse at bottom, rgb(44, 44, 44), rgb(55, 55, 55));
        height: 100px;
        width: 30px;
        transform: rotateY(90deg) translateZ(-5px) translateX(0);
      }
      &--back {
        transform: rotateY(180deg) translateZ(75px);
      }
      &--left {
        background: rgb(10, 10, 10);
        height: 100px;
        width: 30px;
        transform: rotateY(90deg) translateZ(-25px);
      }
      &--top {
        background: rgb(34, 33, 33);
        width: 20px;
        height: 100px;
        transform: rotateY(0deg) translateZ(-15px) translateX(-10px);
      }
    }
  }
}
</style>
