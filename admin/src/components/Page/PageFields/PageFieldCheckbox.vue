<template>
  <div>
    <Label
      :label="item.value"
      v-for="(item, idx) in settings.options"
      :key="idx"
    >
      <CInputCheckbox
        custom
        @update:checked="onChange(item.var_name, $event)"
        :checked="arrValue.includes(item.var_name)"
      />
    </Label>
  </div>
</template>



<script>
import Mixin from "./PageFieldMixin";
export default {
  mixins: [Mixin],
  methods: {
    onChange(item, value) {
      let newValue = this.value;
      if (!newValue || !Array.isArray(newValue)) newValue = [];
      if (value) {
        if (newValue.includes(item)) return;
        newValue.push(item);
      } else {
        if (!newValue.includes(item)) return;
        newValue = newValue.filter((itm) => itm !== item);
      }
      this.emitData(newValue);
    },
    addItem(item) {},
  },
};
</script>

<style>
</style>