<template>
  <div>
    <PageField
      v-for="(item, idx) in items"
      :template="item"
      :value="value[item.var_name]"
      @input="onFieldChange(item, $event)"
      :key="idx"
    />
  </div>
</template>

<script>
import PageField from "./PageField";
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PageField,
  },

  methods: {
    onFieldChange(item, newValue) {
      const value = { ...this.value };
      value[item.var_name] = newValue;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>