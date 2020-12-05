<template>
  <EditFile :label="label" :value="value" @input="onChange" />
</template>



<script>
import Mixin from "./PageFieldMixin";
import EditFile from "@/components/EditFile";
export default {
  mixins: [Mixin],
  components: {
    EditFile,
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