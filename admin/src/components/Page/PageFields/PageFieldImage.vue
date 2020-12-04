<template>
  <EditImage :label="label" :value="value" @input="onChange" />
</template>



<script>
import Mixin from "./PageFieldMixin";
import EditImage from "@/components/EditImage";
export default {
  mixins: [Mixin],
  components: {
    EditImage,
  },
  computed: {
    
  },
  methods: {
    onChange(link) {
      
      console.log("on hcange", link);
      this.emitData(link);
    },
  },
};
</script>

<style>
</style>