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
    <div v-if="errors.length" class="mt-2 ml-1 text-xs text-left w-96" :class="[setColorError]">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors[0] }}
    </div>  
  </div>
</template>
<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
export default {
  components: {  Dropzone },
  props: {
     width: String,
      errors: {
                type: Array,
                default: () => []
            },
  },
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
  },
  computed: {
      setColorError() {
                switch (this.colorError) {
                    case 'red':
                        return 'text-red-600'
                        break;

                    case 'green':
                        return 'text-green-600'
                        break;
                     case 'white':
                        return 'text-white'
                        break;               
            
                    default:
                        break;
                } 
            },
    },

  
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