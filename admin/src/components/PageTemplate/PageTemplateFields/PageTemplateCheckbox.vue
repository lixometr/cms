<template>
  <div>
    <AppMultiplyer
      class="pt-4"
      v-model="optionsModel"
      addText="Добавить вариант"
    >
      <template v-slot:itemHeader="{ idx }">
        <span>{{ optionsModel[idx].value || `Вариант ${idx + 1}` }}</span>
      </template>
      <template v-slot:default="{ idx }">
        <AInput
          label="Вариант"
          v-model="item.settings.options[idx].value"
          @input="onInput"
        />
        <AInput
          class="mt-3"
          label="Значение в коде"
          v-model="item.settings.options[idx].var_name"
          @input="onInput"
        />
      </template>
    </AppMultiplyer>
  </div>
</template>

<script>
import AppMultiplyer from "@/components/AppMultiplyer";
import AppMultiplyerItem from "@/components/AppMultiplyer/AppMultiplyerItem";
import PageTemplateFieldMixinVue from "./PageTemplateFieldMixin.vue";
export default {
  mixins: [PageTemplateFieldMixinVue],
  components: {
    AppMultiplyerItem,
    AppMultiplyer,
  },
  computed: {
    optionsModel: {
      get() {
        return this.item.settings.options || [];
      },
      set(value) {
        this.$set(this.item.settings, "options", value);
        this.emitData();
      },
    },
  },
  methods: {
    onInput() {
      this.emitData();
    },
  },
};
</script>

<style>
</style>