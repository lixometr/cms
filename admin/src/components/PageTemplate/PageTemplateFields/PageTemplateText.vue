<template>
  <div>
    <Label
      label="Ограничение количества символов (Оставьте пустым для снятия ограничений)"
    >
      <NInput v-model="item.settings.limit" />
    </Label>
  </div>
</template>

<script>
import NInput from "@/components/NInput";
import {cloneDeep} from "lodash"
export default {
  props: {
    value: Object,
  },
  components: {
    NInput,
  },
  data() {
    return {
      item: cloneDeep(this.value) || {},
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