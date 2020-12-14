<template>
  <Label :label="label" class="mb-3">
    <div v-if="showMultipleUpload" key="no_items">
      <ImageUpload
        width="150px"
        :value="multipleValue"
        @input="onLoadMultiple"
        :multiple="true"
        :maximum="maximum"
        ref="upload"
      />
    </div>
    <div v-else key="has_items">
      <CRow>
        <CCol v-for="(item, idx) in value" :key="idx">
          <EditImage :value="item" @input="onItemChange(idx, $event)" />
        </CCol>
      </CRow>
    </div>
  </Label>
</template>

<script>
import ImageUpload from "@/components/ImageUpload";
import EditImage from "@/components/EditImage";
export default {
  props: {
    label: String,
    value: {
      type: Array,
      default: () => [],
    },
    maximum: Number,
  },
  components: {
    ImageUpload,
    EditImage,
  },
  computed: {
    showMultipleUpload() {
      const uploaded = this.$refs.upload && this.$refs.upload.$refs.upload.uploaded;
      const leng = this.multipleValue.length < 1;
      return !uploaded && leng;
    },
    multipleValue() {
      return this.value
        .map((val) => (val ? val.url : ""))
        .filter((item) => !!item);
    },
    url() {
      return (this.value && this.value.url) || "";
    },
    attrs() {
      return {
        ...this.$attrs,
        value: this.url,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
      };
    },
    horizontal() {
      return this.$store.getters.horizontal;
    },
  },
  data() {
    return {};
  },

  methods: {
    onLoadMultiple(value) {
      console.log("loaded ", value);
      if (!value) value = [];
      const newValue = value.map((val) => ({ url: val }));
      this.$emit("input", newValue);
    },
    onItemChange(idx, value) {
      const newValue = [...this.value];
      newValue[idx] = value;
      this.$emit("input", newValue);
    },
    onInput(val) {
      const newValue = { ...this.value };
      newValue.url = val;
      this.$emit("input", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>