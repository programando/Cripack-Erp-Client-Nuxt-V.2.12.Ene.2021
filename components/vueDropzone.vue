<template>
  <div>
    <!-- Regular Dropzone -->
    <dropzone
          @vdropzone-files-added = "getUploadingFiles"
          @vdropzone-removed-file= "removeFile"
          id                     = "uploadFiles"
          ref                    = "uploadFiles"
        :destroyDropzone         = "true"
        :options                 = "dropzoneOptions"
    ></dropzone>
  </div>
</template>
<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
export default {
  components: {  Dropzone },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      dropzoneOptions: {
        addRemoveLinks    : true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>   Presione aquí para subir archivos",
        duplicateCheck    : true,
        url               : "http://httpbin.org/anything",
      },
      filesAdd:[],
    };
  },
/*   mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.uploadFiles.dropzone;
  }, */
  methods: {
      getUploadingFiles(){
        this.filesAdd= this.$refs.uploadFiles.getAcceptedFiles();
        this.$emit('input', this.filesAdd);  
      },
      removeFile(file) {
        this.filesAdd= this.$refs.uploadFiles.getAcceptedFiles();
         this.$emit('input', this.filesAdd); 
      }
  }
  
};
</script>

<style scope>
  #customdropzone {
    background-color: orange;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    height: 100px;
    padding: 40px;
  }
  .dropzone {
    height: 40px !important;
    padding: 10px 10px 10px 10px !important;
  }
.dropzone .dz-preview {
    height: 25px !important;
    width: 140px !important;
}
  #customdropzone .dz-preview {
    width: 160px;
    display: inline-block;
        
  }
 #customdropzone .dz-preview .dz-image {
    width: 20px;
    height: 20px;
    margin-left: 40px;
    margin-bottom: 10px;
  }
  #customdropzone .dz-preview .dz-image > div {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-size: contain;
  }
  #customdropzone .dz-preview .dz-image > img {
    width: 100%;
  }

   #customdropzone .dz-preview .dz-details {
    color: white;
    transition: opacity .2s linear;
    text-align: center;
  }
  #customdropzone .dz-success-mark, .dz-error-mark, .dz-remove {
    display: none;
  }
</style>