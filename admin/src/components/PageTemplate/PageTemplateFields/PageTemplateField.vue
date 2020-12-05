<template>
  <div class="product-option">
    <!-- <div
      class="d-flex align-items-center cursor-pointer justify-content-between"
      @click="isOpen = !isOpen"
    >
      <span>{{ item.name || `Поле ${idx}` }}</span>
      <CButton color="danger" @click="remove">
        <CIcon name="cil-trash"></CIcon>
      </CButton>
    </div> -->
    <!-- <CCollapse class="pt-3" :show="isOpen"> -->
    <CRow alignVertical="center">
      <CCol col="6">
        <AInput label="Название поля" v-model="item.name" @input="emitData" />
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
          @input="changeType"
        />
      </CCol>
    </CRow>
    <CRow class="mb-4 border-bottom pb-3" alignVertical="center">
      <CCol col="6"
        ><AInput
          class="mt-3"
          label="Значение в коде"
          v-model="item.var_name"
          @input="emitData"
      /></CCol>
      <CCol col="6">
        <Label label="Обязательное?" class="mt-3">
          <CInputCheckbox
            custom
            :checked.sync="item.required"
            @update:checked="emitData"
          />
        </Label>
      </CCol>
      <CCol col="12">
        <CRow class="d-flex align-items-center">
          <CCol col="2" class="text-right"><span> Комментарий</span></CCol>
          <CCol col="10" class="pl-2"
            ><CInput
              class="mt-3 w-100 flex-1"
              :canFull="true"
              v-model="item.comment"
              @input="emitData"
          /></CCol>
        </CRow>
      </CCol>
    </CRow>
    <PageTemplateFieldChooser
      v-model="item"
      @input="emitData"
      :type="item.type"
      :key="item.type"
    />
    <!-- </CCollapse> -->
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
          label: "Изображение",
          key: "image",
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
          key: "select",
        },
        {
          label: "Флажок",
          key: "checkbox",
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
          label: "Аккардеон",
          key: "accordion",
        },
        {
          label: "Таб",
          key: "tab",
        },
        {
          label: "Повторитель",
          key: "repeater",
        },
      ];
    },
  },
  created() {
    if (!this.item.settings) this.$set(this.item, "settings", {});
  },
  methods: {
    changeType() {
      // if(this.dat)
      this.$set(this.item, "settings", {});
      this.emitData();
    },
    emitData() {
      this.$emit("input", this.item);
    },

    remove() {
      this.$emit("delete");
    },
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.item = _.cloneDeep(this.value);
      },
    },
  },
};
</script>

<style>
</style>