<template>
  <div class="page-fields pt-2">
    <draggable
      class="page-fields__items"
      tag="div"
      :value="value"
      @input="onDragChange"
    >
      <PageTemplateField
        class="p-3 border mb-4"
        v-for="(item, idx) in value"
        :key="idx"
        :value="item"
        :idx="idx + 1"
        @input="onItemChange($event, idx)"
        @delete="onItemDelete(idx)"
      />
    </draggable>
    <div class="d-flex mt-3">
      <CButton color="warning" class="w-100" @click="add"
        >Добавить поле</CButton
      >
    </div>
  </div>
</template>

<script>
import PageTemplateField from "./PageTemplateField";
import draggable from "vuedraggable";

export default {
  /* [ { name: '', type: '', values: [{name: '', price: [{}]}] } ] */
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    PageTemplateField,
    draggable,
  },
  methods: {
    onItemChange(value, idx) {
      const items = [...this.value];
      items[idx] = value;
      this.$emit("input", items);
    },
    onItemDelete(idx) {
      const items = [...this.value];
      items.splice(idx, 1);
      this.$emit("input", items);
    },
    onDragChange(value) {
      this.$emit("input", value);
    },
    add() {
      const newItem = {
        // name: "",
        // varName: "",
        // type: "",
        // settings: [],
      };
      const items = [...this.value, newItem];
      this.$emit("input", items);
    },
  },
};
</script>

<style>
</style>