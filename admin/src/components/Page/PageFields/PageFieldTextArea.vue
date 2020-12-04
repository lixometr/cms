<template>
  <ATextArea :label="label" :value="value" @input="emitData"/>
</template>



<script>
import Mixin from "./PageFieldMixin";
export default {
  mixins: [Mixin],
};
</script>

<style>
</style>