<template>
  <div class="page-template-text">
    <CRow class="mb-3">
      <CCol col="6">
        <Label label="Миниммальное значение">
          <NInput v-model="item.settings.min" @input="emitData" />
        </Label>
      </CCol>
      <CCol col="6">
        <Label label="Максимальное значение">
          <NInput v-model="item.settings.max" @input="emitData" />
        </Label>
      </CCol>
    </CRow>
    <Label label="Шаг">
      <NInput v-model="item.settings.step" @input="emitData" />
    </Label>
  </div>
</template>

<script>
import PageTemplateFieldMixin from "./PageTemplateFieldMixin";
export default {
  mixins: [PageTemplateFieldMixin],
};
</script>

<style>
</style>