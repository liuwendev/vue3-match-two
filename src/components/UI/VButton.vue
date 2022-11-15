<template>
  <button :class="'btn ' + type" @click="clickHandler">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'btn-primary',
  },
});

const emits = defineEmits(['clickHandler']);

const clickHandler = (e) => {
  e.preventDefault();
  emits('clickHandler');
};

</script>

<style lang="scss">
.btn {
  display: inline-block;
  font-size: 1rem;
  background-color: #4caf50;
  border: none;
  border-radius: 0.25rem;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  margin-right: 1rem;

  &-primary {
    color: white;
    background-color: #4caf50;
  }

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
