<template>
  <div v-if="!$store.getters.isLoading">
    <CCard>
      <CCardHeader>Информация</CCardHeader>
      <CCardBody>
        <div>
          Создан:
          <b>{{ data.created_at | moment("DD.MM.YYYY hh:mm") }}</b>
        </div>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>Редактировать шаблон</CCardHeader>
      <CCardBody>
        <AInput class="mb-5" label="Заголовок" v-model="data.name" />
        <PageTemplateFields v-model="data.fields" />
        <!-- <ATextArea class="mb-5" label="Контент" v-model="data.content" /> -->
      </CCardBody>
    </CCard>
    <BtnSave @click="save"> Сохранить </BtnSave>
    <CButton color="danger" class="mb-2" @click="onDelete">Удалить</CButton>
  </div>
</template>

<script>
import AInput from "@/components/AInput";
import PageTemplateFields from "@/components/PageTemplate/PageTemplateFields";
export default {
  components: {
    AInput,
    PageTemplateFields,
  },
  props: {
    isNew: Boolean,
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    horizontal() {
      return this.$store.getters.horizontal;
    },
    contentItems() {
      return [
        {
          c: "AInput",
          v: "anchor",
          label: "Якорь",
        },
        {
          c: "ATextArea",
          v: "text",
          label: "Текст",
        },
      ];
    },
    contentSchema() {
      return {
        content: [
          {
            anchor: "",
            text: "",
          },
        ],
      };
    },
  },
  async created() {
    this.$loading.start();
    try {
      if (!this.isNew) {
        const { data } = await this.$api.get("pageTemplateByIdAdmin", {
          id: this.$route.params.id,
        });
        this.data = data;
      } else {
        const { data } = await this.$api.post("pageTemplates");
        this.$router.push({ name: "PageTemplate", params: { id: data._id } });
        this.data = data;
      }
    } catch (err) {
      this.$error(err);
    }

    this.$loading.stop();
  },
  methods: {
    async save() {
      try {
        const { data: response } = await this.$api.put(
          "pageTemplateById",
          { id: this.data._id },
          this.data
        );
        this.$notify({
          group: "main",
          title: "Сохранено!",
          type: "success",
        });
      } catch (err) {
        this.$error(err);
      }
    },
    async onDelete() {
      try {
        const { data } = await this.$api.delete("pageTemplateById", {
          id: this.data._id,
        });
        this.$notify({
          group: "main",
          title: "Удалено!",
          type: "success",
        });
        this.$router.push({ name: "PageTemplates" });
      } catch (err) {
        this.$error(err);
      }
    },
  },
};
</script>

<style lang="scss">
</style>