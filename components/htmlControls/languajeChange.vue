<<template>
  <div >
          <div @click="idioma = !idioma" >
        <div class="">
          <div
            v-if="idioma"
            :class="[setTransicion]"
          >
            <img
              @click="changeLanguage('es')"
              class="h-7"
              src="/images/colombia.svg"
              alt=""
            />
          </div>

          <div
            v-else
            :class="[setTransicion]"
          >
            <img
              @click="changeLanguage('en')"
              class="h-7"
              src="/images/united-states.svg"
              alt=""
            />
          </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
      name: "LanguajeChange",
      props: { tipoTransicion:String },
      data: () => ({
          idioma: false,
      }),
      methods: {
         changeLanguage(lang) {
          // Change the i18n context object's locale
          // This makes it so the correct locale file is used
          this.$i18n.locale = lang;
        }
      },
        computed: {
            setTransicion() {
                switch (this.tipoTransicion) {
                    case 'derecha':
                        return 'z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-7 hover:scale-110'
                    case 'arriba' :
                       return 'z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-y-4 hover:scale-110'
                }
              }
         }      
      
    }
</script>