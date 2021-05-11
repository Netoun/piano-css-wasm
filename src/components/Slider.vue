<template>
  <input
    :value="props.modelValue"
    v-on:input="updateValue($event.target.value)"
    style="pointer-events: auto"
    type="range"
    min="-180"
    max="180"
    step="1"
  />
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'
const props = defineProps({
  modelValue: Number,
})
const emit = defineEmit(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', parseInt(value))
}
</script>

<style lang="scss" scoped>
input[type='range'] {
  background: white;
  border-radius: 2rem;
  margin: 0 1rem;
  -webkit-appearance: none;
  width: 100%;
  height: 10px;

  &,
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
    border: none;
    background: #00fff5;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.75),
      0 2px 4px -1px rgba(0, 0, 0, 0.25);
  }
  &::-moz-range-thumb {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.75),
      0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border: none;
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
    background: #00fff5;
    cursor: pointer;
  }

  &::-ms-thumb {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: 1rem;
    width: 1rem;
    border: none;
    border-radius: 1rem;
    background: #00fff5;
    cursor: pointer;
  }
}
</style>
