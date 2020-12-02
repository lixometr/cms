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
import {cloneDeep} from "lodash"
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      item: cloneDeep(this.value) || {}
    }
  },
  components: {},
  methods: {},
  watch: {
    item() {
      this.$emit('input', this.item)
    }
  }
};
</script>

<style>
</style>