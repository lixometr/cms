<template></template>

<script>
export default {
  props: {
    template: {
      type: Object,
      default: () => ({}),
    },
    value: null,
  },

  data() {
    return {};
  },
  computed: {
    objValue() {
      return this.value || {};
    },
    arrValue() {
      return this.value || [];
    },
    label() {
      return this.template.name;
    },
    varName() {
      return this.template.var_name;
    },
    settings() {
      return this.template.settings || {};
    },
  },
  methods: {
    emitData(value) {
      this.$emit("input", value);
    },
  },
  watch: {},
};
</script>

<style>
</style>