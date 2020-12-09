<template>
  <div>
     <CRow class="mb-3">
      <CCol col="6">
        <Label label="Мин. количество изображений">
          <NInput v-model="item.settings.min" @input="emitData" />
        </Label>
      </CCol>
      <CCol col="6">
        <Label label="Макс. количество изображений">
          <NInput v-model="item.settings.max" @input="emitData" />
        </Label>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import PageTemplateFieldMixinVue from "./PageTemplateFieldMixin.vue";
export default {
  mixins: [PageTemplateFieldMixinVue],
  computed: {
  
  },
};
</script>

<style>
</style>