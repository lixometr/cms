<template>
  <AInput
    :label="label"
    :value="value"
    @keypress="onKeyPress"
    @input="onInput"
  />
</template>



<script>
import Mixin from "./PageFieldMixin";
export default {
  mixins: [Mixin],
  methods: {
    onKeyPress(e) {
      const maxLength = this.settings.limit;
      if (maxLength && this.value && maxLength <= this.value.length) {
        e.preventDefault();
      }
    },
    onInput(value) {
      this.emitData(value);
    },
  },
};
</script>

<style>
</style>