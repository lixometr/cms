<template>
  <div class="page-template-text">
    <Label label="Количество">
      <NInput v-model="item.count" />
    </Label>
   
  </div>
</template>

<script>
import NInput from "@/components/NInput";
export default {
  props: {
    value: Object,
  },
  components: {
    NInput,
  },
  data() {
    return {
      item: this.value || {},
    };
  },
  watch: {
    item() {
      this.$emit("input", this.item);
    },
  },
};
</script>

<style>
</style>