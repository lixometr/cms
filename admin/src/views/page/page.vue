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
        <AInput class="mb-3" label="Slug" v-model="data.slug" />
        <EditComponent
          c="ATextArea"
          v="content"
          label="Текст"
          :changeValue.sync="data"
        />
      </CCardBody>
    </CCard>
    <SeoEdit v-model="data" />
    <BtnSave @click="save"> Сохранить </BtnSave>
    <CButton color="danger" class="mb-2" @click="onDelete">Удалить</CButton>
  </div>
</template>

<script>
import AInput from "@/components/AInput";
import NInput from "@/components/NInput";
import ImageUpload from "@/components/ImageUpload";
import EditImage from "@/components/EditImage";
import PostTagSelect from "@/components/PostTagSelect";
export default {
  components: {
    AInput,
    NInput,
    EditImage,
    ImageUpload,
    PostTagSelect,
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
  },
  async created() {
    this.$loading.start();
    try {
      if (!this.isNew) {
        const { data } = await this.$api.get("pageByIdAdmin", {
          id: this.$route.params.id,
        });
        this.data = data;
      } else {
        const { data } = await this.$api.post("pages");
        this.$router.push({ name: "Page", params: { id: data._id } });
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
};
</script>

<style lang="scss">
</style>