<template>
  <div class="product-option">
    <div
      class="d-flex align-items-center cursor-pointer justify-content-between"
      @click="isOpen = !isOpen"
    >
      <span>{{ item.name || `Поле ${idx}` }}</span>
      <CButton color="danger" @click="remove">
        <CIcon name="cil-trash"></CIcon>
      </CButton>
    </div>
    <CCollapse class="pt-3" :show="isOpen">
      <CRow alignVertical="center">
        <CCol col="6">
          <AInput label="Название опции" v-model="item.name" />
        </CCol>
        <CCol col="6">
          <v-select
            placeholder="Выберите тип поля"
            :multiple="false"
            v-model="item.type"
            :options="types"
            label="label"
            :reduce="(item) => item.key"
            :searchable="true"
          />
        </CCol>
      </CRow>
      <CRow class="mb-3">
        <CCol col="6"
          ><AInput class="mt-3" label="Значение в коде" v-model="item.var_name"
        /></CCol>
        <CCol col="12"
          ><AInput class="mt-3" label="Комментарий" v-model="item.comment"
        /></CCol>
      </CRow>
      <PageTemplateFieldChooser v-model="item" :type="item.type" :key="item.type"/>
    </CCollapse>
  </div>
</template>

<script>
import _ from "lodash";
import PageTemplateFieldChooser from "./PageTemplateFieldChooser";

export default {
  props: {
    value: Object,
    idx: Number,
  },
  data() {
    return {
      isOpen: false,
      item: _.cloneDeep(this.value),
    };
  },
  components: {
    PageTemplateFieldChooser,
  },
  computed: {
 
    types() {
      return [
        {
          label: "Текст",
          key: "text",
        },
        {
          label: "Область текста",
          key: "textArea",
        },
        {
          label: "Диапазон",
          key: "range",
        },
        {
          label: "Медиа",
          key: "media",
        },
        {
          label: "Файл",
          key: "file",
        },
        {
          label: "Галлерея",
          key: "gallery",
        },
        {
          label: "Выбор",
          key: "choose",
        },
        {
          label: "Флажок",
          key: "flag",
        },
        {
          label: "Переключатель",
          key: "radio",
        },
        {
          label: "Да/нет",
          key: "switcher",
        },
        {
          label: "Блок",
          key: "block",
        },
      ];
    },
  },
  created() {
    if (!this.item.settings) this.$set(this.item, "settings", {});
  },
  methods: {
    onDragChange(value) {
      this.$set(this.item, "values", value);
    },
    onValueDelete(idx) {
      this.item.values = this.item.values.filter((val, index) => index !== idx);
    },
    changeValue(value, idx) {
      this.$set(this.item.values, idx, value);
    },
    remove() {
      this.$emit("delete");
    },
    addValue() {
      this.item.values.push({
        price: [],
        name: "",
      });
    },
  },
  watch: {
    item: {
      deep: true,
      handler() {
        this.$emit("input", this.item);
      },
    },
  },
};
</script>

<style>
</style>