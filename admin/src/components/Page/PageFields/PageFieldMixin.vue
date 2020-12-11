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
    isValid() {

    },
    objValue() {
      return this.value || {};
    },
    arrValue() {
      return this.value || [];
    },
    label() {
      return this.template.name;
    },
    required() {
      return this.template.required
    },
    varName() {
      return this.template.var_name;
    },
    settings() {
      return this.template.settings || {};
    },
  },
  methods: {
    validate() {

    },
    emitData(value) {
      this.$emit("input", value);
    },
  },
  watch: {},
};
</script>

<style>
</style>