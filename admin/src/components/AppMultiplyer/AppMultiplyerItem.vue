<template>
  <div class="app-multiplyer-item p-3 border mb-2">
    <div
      class="d-flex align-items-center cursor-pointer justify-content-between"
      @click="isOpen = !isOpen"
    >
      <slot name="itemHeader" v-bind="{ idx }">
        <span>Поле {{idx + 1}}</span>
      </slot>
      <CButton color="danger" @click="remove">
        <CIcon name="cil-trash"></CIcon>
      </CButton>
    </div>
    <CCollapse :show="isOpen">
      <div class="pt-3">
        <slot ></slot>
      </div>
    </CCollapse>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    idx: Number,
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    emitData(value) {
      this.$emit("input", value);
    },
    remove() {
      this.$emit("delete");
    },
  },
  watch: {},
};
</script>

<style>
</style>