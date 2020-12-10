<template>
  <div>
    <CCard>
      <CCardHeader>{{template.name}}</CCardHeader>
      <CCardBody>
        <AppMultiplyer :value="arrValue" @input="emitData">
          <template v-slot:default="{ idx }">
            <PageField
              :template="templateItem"
              :value="value[idx][templateItem.var_name]"
              @input="onFieldChange(idx, templateItem.var_name, $event)"
              v-for="(templateItem, index) in fields"
              :key="index"
            />
          </template>
        </AppMultiplyer>
      </CCardBody>
    </CCard>
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