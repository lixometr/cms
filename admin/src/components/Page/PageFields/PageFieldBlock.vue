<template>
  <div class="border">
    <div class="p-3  cursor-pointer " :class="{'border-bottom': isOpen}" @click="toggle">{{ label }}</div>
    <CCollapse class="pt-4 pr-4" :show="isOpen">
      <PageField
        :template="templateItem"
        :value="objValue[templateItem.var_name]"
        @input="onFieldChange(templateItem.var_name, $event)"
        v-for="(templateItem, idx) in fields"
        :key="idx"
      />
    </CCollapse>
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
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    fields() {
      return this.settings.fields || [];
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    onInput(value) {
      this.emitData(value);
    },
    onFieldChange(varName, newValue) {
      const value = { ...this.objValue };
      value[varName] = newValue;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>