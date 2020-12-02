<template>
  <component :is="fieldComponent" v-on="$listeners" v-bind="$attrs"/>
</template>

<script>
import PageTemplateText from "./PageTemplateText";
import PageTemplateTextArea from "./PageTemplateTextArea";
import PageTemplateRange from "./PageTemplateRange";
export default {
  props: {
    value: null,
    type: {
      type: String,
    },
  },
  components: {
    PageTemplateText,
  },
  computed: {
    fieldComponent() {
      const components = {
        text: PageTemplateText,
        textArea: PageTemplateTextArea,
        range: PageTemplateRange,
      };
      return components[this.type];
    },
  },
};
</script>

<style>
</style>