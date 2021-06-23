<template>
  <div>
    <!-- Regular Dropzone -->
    <dropzone
       width="200px" height="80px" 
      id="foo"
      ref="foo"
      :options="dropzoneOptions"
      :destroyDropzone="true"
    ></dropzone>
  </div>
</template>
<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
export default {
  components: {
    Dropzone
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      dropzoneOptions: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>   Presione aquí para subir archivos"
      }
    };
  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.foo.dropzone;
  }
};
</script>
