<template>
    <div>
        <!-- Regular Dropzone -->
        <dropzone id="foo" ref="foo" :options="options" :destroyDropzone="true"></dropzone>

        

        
    </div>
</template>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
    components: {
        Dropzone
    },
    data() {
        return {
            // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
            options: {
                url: "http://httpbin.org/anything",
                addRemoveLinks: true,
            }
        }
    },
    mounted() {
        // Everything is mounted and you can access the dropzone instance
        const instance = this.$refs.foo.dropzone
    }
}
</script>
