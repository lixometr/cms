<template>
  <div>
    <CTabs variant="tabs" class="p-2" :active-tab="0">
      <CTab :title="tab.name" v-for="(tab, idx) in settings.fields" :key="idx">
        <div class="mt-3">
          <PageField
            :template="templateItem"
            :value="objValue[templateItem.var_name]"
            @input="onFieldChange(templateItem.var_name, $event)"
            v-for="(templateItem, idx) in tab.fields"
            :key="idx"
          />
        </div>
      </CTab>
    </CTabs>
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
    onFieldChange(varName, newValue) {
      const value = { ...this.objValue };
      value[varName] = newValue;
      this.$emit("input", value);
    },
  },
};
</script>

<style></style>
