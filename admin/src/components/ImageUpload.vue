<template>
  <div :style="{ width: width }" class="position-relative">
    <div class="image-upload-info" v-if="showInfo">
      <Label label="Изображение" required>
        <label class="cursor-pointer text-info mb-0" :for="inputId"
          >Загрузить новое</label
        >
        /
        <span class="cursor-pointer text-info" @click="reset"
          >Удалить изображение</span
        >
      </Label>
    </div>
    <div class="reset-btn bg-danger" @click="reset" v-if="value && !showInfo">
      <span>&times;</span>
    </div>
    <file-upload
      class="upload w-100"
      :class="{ 'p-4': showInfo }"
      :input-id="inputId"
      ref="upload"
      v-model="files"
      :custom-action="doUpload"
      :drop="true"
      :multiple="multiple"
      :maximum="maximum"
      @input-file="inputFile"
      @input-filter="inputFilter"
    >
    {{$refs.upload && $refs.upload.uploaded}}

      <CImg
        class="upload-image d-block"
        :class="{ shadow: showInfo }"
        :src="value"
        maxWidth="100%"
        v-if="value && !multiple"
      />

      <CRow v-else-if="multiple && value && value.length > 0">
        <CCol col="4" v-for="(src, idx) in value" :key="idx">
          <CImg
            class="upload-image d-block"
            :class="{ shadow: showInfo }"
            :src="src"
            maxWidth="100%"
          />
        </CCol>
      </CRow>
      <CIcon
        name="cil-cloud-upload"
        width="100%"
        v-else
        :style="{ maxWidth: '300px' }"
      />
    </file-upload>
  </div>
</template>

<script>
export default {
  props: {
    // url
    value: [String, Array],
    width: String,
    showInfo: Boolean,
    multiple: {
      type: Boolean,
      default: false,
    },
    maximum: Number,
  },
  data() {
    return {
      files: [],
    };
  },
  computed: {
    inputId() {
      return "file-upload-" + this._uid;
    },
  },

  methods: {
    reset() {
      this.$emit("input", undefined);
    },
    async doUpload(file, component) {
      try {
        console.log(this.$refs.upload);
        const formData = new FormData();
        formData.append("image", file.file);
        const { data: result } = await this.$api.post(
          "uploadImage",
          null,
          formData
        );
        this.$refs.upload.update(file, {active: true})
        setTimeout(() => {
          console.log(this.$refs.upload);
        }, 1000);

        if (this.multiple) {
          let val = this.value;
          if (!val) val = [];
          val.push(result.url);
          this.$emit("input", val);
        } else {
          this.$emit("input", result.url);
        }
      } catch (err) {
        this.$error(err);
      }
    },
    inputFile(newFile, oldFile) {
      this.$refs.upload.active = true;

      // if (newFile && oldFile && !newFile.active && oldFile.active) {
      //   console.log('hey', newFile)
      // }
    },
    /**
     * Pretreatment
     * @param  Object|undefined   newFile   Read and write
     * @param  Object|undefined   oldFile   Read only
     * @param  Function           prevent   Prevent changing
     */
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|svg|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      }

      // Create a blob field
      newFile.blob = "";
      let URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    },
  },
  watch: {
    files: {
      deep: true,
      handler() {
        console.log(this.files)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.upload {
  cursor: pointer;
}
.upload-image {
  max-width: 100%;
  cursor: pointer;
}
.reset-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  line-height: 12px;
  padding: 0;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  z-index: 2;
}
</style>