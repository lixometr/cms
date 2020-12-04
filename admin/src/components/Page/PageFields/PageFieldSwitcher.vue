<template>
  <Label :label="label">
    <CInputCheckbox
      custom
      :checked="value || settings.default"
      @update:checked="emitData"
    />
  </Label>
</template>



<script>
import Mixin from "./PageFieldMixin";
export default {
  mixins: [Mixin],
};
</script>

<style>
</style>