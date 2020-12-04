<template>
  <component :is="fieldComponent" v-on="$listeners" v-bind="$attrs" :value="value"/>
</template>

<script>
import PageTemplateText from "./PageTemplateText";
import PageTemplateTextArea from "./PageTemplateTextArea";
import PageTemplateRange from "./PageTemplateRange";
import PageTemplateImage from './PageTemplateImage.vue';
import PageTemplateSelect from './PageTemplateSelect.vue';
import PageTemplateCheckbox from './PageTemplateCheckbox.vue';
import PageTemplateRadio from './PageTemplateRadio.vue';
import PageTemplateSwitcher from './PageTemplateSwitcher.vue';
import PageTemplateRepeater from './PageTemplateRepeater.vue';
export default {
  props: {
    value: null,
    type: {
      type: String,
    },
  },
  // components: {
  //   PageTemplateText,
  // },
  computed: {
    fieldComponent() {
      const components = {
        text: PageTemplateText,
        textArea: PageTemplateTextArea,
        range: PageTemplateRange,
        image: PageTemplateImage,
        select: PageTemplateSelect,
        checkbox: PageTemplateCheckbox,
        radio: PageTemplateRadio,
        switcher: PageTemplateSwitcher,
        repeater: PageTemplateRepeater
      };
      return components[this.type];
    },
  },
};
</script>

<style>
</style>