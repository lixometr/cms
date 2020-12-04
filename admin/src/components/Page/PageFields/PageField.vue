<template>
  <div class="page-field mb-3">
    <PageFieldChooser
      :template="template"
      :type="type"
      :value="value"
      @input="onChange"
    />
    <Label class="mt-1" label=" ">
      <p class="text-dark">{{ template.comment }}</p>
    </Label>
  </div>
</template>

<script>
import EditComponent from "@/components/Edit/EditComponent";
import PageFieldChooser from "./PageFieldChooser";
export default {
  props: {
    value: null,
    template: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    EditComponent,
    PageFieldChooser,
  },
  computed: {
    
    type() {
      return this.template.type;
    },
  },
  methods: {
    onChange(value) {

      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>