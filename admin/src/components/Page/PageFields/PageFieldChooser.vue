<template>
  <component
    :is="fieldComponent"
    v-on="$listeners"
    v-bind="$attrs"
    :value="value"
    :template="template"
  />
</template>

<script>
import AInput from "@/components/AInput";
import EditImage from "@/components/EditImage";
import PageFieldInput from "./PageFieldInput"
import PageFieldTextArea from "./PageFieldTextArea"
import PageFieldSelect from "./PageFieldSelect"
import PageFieldImage from "./PageFieldImage"
import PageFieldSwitcher from './PageFieldSwitcher.vue';
import PageFieldCheckbox from './PageFieldCheckbox.vue';
import PageFieldRadio from './PageFieldRadio.vue';
import PageFieldRange from './PageFieldRange.vue';
import PageFieldRepeater from './PageFieldRepeater.vue';
import PageFieldAccordion from './PageFieldAccordion.vue';
import PageFieldTab from './PageFieldTab.vue';
export default {
  props: {
    value: null,
    template: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    type() {
      return this.template.type;
    },
    fieldComponent() {
      const components = {
        text: PageFieldInput,
        textArea: PageFieldTextArea,
        select: PageFieldSelect,
        image: PageFieldImage,
        switcher: PageFieldSwitcher,
        checkbox: PageFieldCheckbox,
        radio: PageFieldRadio,
        range: PageFieldRange,
        repeater: PageFieldRepeater,
        accordion: PageFieldAccordion,
        tab: PageFieldTab,

      };
      return components[this.type];
    },
  },
};
</script>

<style>
</style>