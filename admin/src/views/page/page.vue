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
      <CCardHeader>Редактировать страницу</CCardHeader>
      <CCardBody>
        <AInput class="mb-3" label="Заголовок" v-model="data.name" />
        <AInput class="mb-3" label="Slug" v-model="data.slug" @input="noSlug=false"/>
        <PageTemplateSelect label="Шаблон" class="mb-3" v-model="templateId" />
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>Поля</CCardHeader>
      <CCardBody>
        <PageFields v-model="data.values" :items="template.fields" />
      </CCardBody>
    </CCard>
    <SeoEdit v-model="data" />
    <BtnSave @click="save"> Сохранить </BtnSave>
    <CButton color="danger" class="mb-2" @click="onDelete">Удалить</CButton>
  </div>
</template>

<script>
import EditImage from "@/components/EditImage";
import PostTagSelect from "@/components/PostTagSelect";
import PageTemplateSelect from "@/components/PageTemplateSelect";
import PageFields from "@/components/Page/PageFields";
import cyrillicToTranslit from "cyrillic-to-translit-js";

export default {
  components: {
    EditImage,
    PostTagSelect,
    PageTemplateSelect,
    PageFields,
  },
  props: {
    isNew: Boolean,
  },
  data() {
    return {
      data: {},
      template: {},
      templateId: "",
      noSlug: false,
    };
  },
  computed: {},
  async created() {
    this.$loading.start();
    await this.fetchData();
    await this.fetchTemplate();
    this.$loading.stop();
  },
  methods: {
    async fetchData() {
      try {
        if (!this.isNew) {
          const { data } = await this.$api.get("pageByIdAdmin", {
            id: this.$route.params.id,
          });
          this.data = data;
          this.templateId = this.data.template;
          if (!data.slug) {
            this.noSlug = true;
          }
        } else {
          const { data } = await this.$api.post("pages");
          this.$router.push({ name: "Page", params: { id: data._id } });
          this.data = data;
        }
      } catch (err) {
        this.$error(err);
      }
    },
    async fetchTemplate() {
      try {
        if (!this.templateId) return;
        const { data } = await this.$api.get("pageTemplateById", {
          id: this.templateId,
        });
        this.template = data;
      } catch (err) {
        this.$error(err);
      }
    },
    async save() {
      try {
        const { data: response } = await this.$api.put(
          "pageById",
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
        const { data } = await this.$api.delete("pageById", {
          id: this.data._id,
        });
        this.$notify({
          group: "main",
          title: "Удалено!",
          type: "success",
        });
        this.$router.push({ name: "Pages" });
      } catch (err) {
        this.$error(err);
      }
    },
  },
  watch: {
    templateId(newVal, prevVal) {
      this.$set(this.data, "template", this.templateId);
      if (newVal !== prevVal && !this.$store.getters.isLoading) {
        this.$set(this.data, "values", {});
        this.fetchTemplate();
      }
    },
    data: {
      deep: true,
      handler() {
        if (this.data.name && this.noSlug) {
          const name = this.data.name || "";
          const sValue = cyrillicToTranslit().transform(
            name.toLowerCase(),
            "-"
          );
          this.$set(this.data, "slug", sValue);
        }
      },
    },
  },
};
</script>

<style lang="scss">
</style>