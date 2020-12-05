<template>
  <div>
    <CTabs variant="pills" :active-tab="1">
      <CTab title="Home">
        1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CTab>
      <CTab title="Profile">
        2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CTab>
      <CTab title="Disabled" disabled> Text will not be shown. </CTab>
    </CTabs>
    <PageField
      :template="templateItem"
      :value="value[templateItem.var_name]"
      @input="onFieldChange(idx, templateItem.var_name, $event)"
      v-for="(templateItem, idx) in fields"
      :key="idx"
    />
  </div>
</template>



<script>
// value: [ {var_name1: '', var_name2: '} ]
// template: {settings: {fields: [ {name: '', var_name1: '', type: ''}, {var_name2: ''} ]  }
import Mixin from "./PageFieldMixin";
import AppMultiplyer from "@/components/AppMultiplyer";
export default {
  mixins: [Mixin],
  components: {
    AppMultiplyer,
    PageField: () => import("./PageField"),
  },
  computed: {
    fields() {
      return this.settings.fields || [];
    },
  },
  created() {},
  methods: {
    onInput(value) {
      this.emitData(value);
    },
    onFieldChange(idx, varName, newValue) {
      const value = [...this.value];
      value[idx][varName] = newValue;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>