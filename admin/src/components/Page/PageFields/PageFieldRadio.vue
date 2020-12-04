<template>
  <div>
    <Label :label="template.name">
      <CInputRadioGroup
        custom
        :options="options"
        :checked="value"
        @update:checked="onChange($event)"
      />
    </Label>
  </div>
</template>



<script>
import Mixin from "./PageFieldMixin";
export default {
  mixins: [Mixin],
  computed: {
    options() {
      return this.settings.options.map((opt) => ({
        value: opt.var_name,
        label: opt.value,
      }));
    },
  },
  methods: {
    onChange(item) {
      this.emitData(item);
    },
    addItem(item) {},
  },
};
</script>

<style>
</style>