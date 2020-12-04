<template></template>

<script>
import _ from "lodash";
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      item: _.merge({}, { settings: {} }, _.cloneDeep(this.value)),
    };
  },
  methods: {
    emitData() {
      this.$emit("input", this.item);
    },
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.item = _.cloneDeep(this.value)
      },
    },
  },
};
</script>

<style>
</style>