<template>
  <div>
    <Label :label="label">
      <VueRangeSlider
        :value="value"
        @change="emitData"
        :min="settings.min"
        :max="settings.max"
        :interval="settings.step"
        tooltip="always"
      />
    </Label>
  </div>
</template>



<script>
import Mixin from "./PageFieldMixin";
import VueRangeSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  mixins: [Mixin],
  components: {
    VueRangeSlider,
  },

};
</script>

<style>
</style>