  <template>
  <component
    class="flex items-center text-sm lg:text-base"
    v-on="$listeners"
    :class="[btnClass, colorVariants]"
    :disabled="showBtnAnimation"
    :href="to"
    :is="tag"
    :size="size"
    :type="type"
    :variant="variant"
    :variant-type="variantType"
  >
    <span v-if="showBtnAnimation" class="h-6 mr-2" :class="[setColorIcon]">
        <font-awesome-icon class="h-6 animate-spin" :icon="['fa', 'spinner']"/>
    </span>
    <slot />
  </component>
</template>

<script>
//<button class="bg-orange-600 hover:bg-orange-400 text-white text-md py-2 px-4 md:px-6 rounded transition-colors duration-300
export default {
  name: "ButtonCallToActionLoading",
  props: {
     showBtnAnimation: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary"
    },
    variantType: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "normal"
    },
    rounded: {
      type: String,
      default: "medium"
    },
    type: {
      type: String,
      default: ""
    },
    to: {
      type: String
    },
    colorIcon:{
      type: String
    }
  },
  data() {
    return {
      loading: false,
      disableButton: this.disabled
    };
  },

  methods: {
    startLoading() {
      this.loading = true;
      this.disableButton = true;
      this.showBtnAnimate = true
    },
    stopLoading() {
      this.loading = false;
      this.disableButton = false;
      this.showBtnAnimate = false
    }
  },

  computed: {
    btnClass() {
      return {
        "base-spinner": this.loading == true,
        "cursor-not-allowed": this.disableButton == true,
        "rounded-lg": this.rounded === "medium",
        "rounded-full": this.rounded === "large",
        "px-6 py-2": this.size == "normal",
        "px-4 py-1": this.size == "small",
        "px-2 py-1": this.size == "xs",
        "base-button inline-flex align-middle align-items-center justify-center  focus:outline-none border-2": true
      };
    },

    colorVariants() {
      switch (this.variant) {
        case "primary":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "border-blue-300 bg-blue-300 text-white text-xs";
                  break;
                default:
                  break;
              }
              return "border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white text-xs";
              break;
            case "outline":
              return "border-gray-200 text-blue-500 hover:text-blue-700";
              break;
            default:
              break;
          }
          break;
        case "danger":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "border-red-300 bg-red-300 text-white";
                  break;
                default:
                  break;
              }
              return "border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white";
              break;
            case "outline":
              return "border-gray-200 text-red-500 hover:text-red-600";
              break;
            default:
              break;
          }
          break;

        case "warning":
          switch (this.variantType) {
            case "normal":
              return "border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white";
              break;
            default:
              break;
          }
          break;

        case "success":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "border-green-300 bg-green-300 text-white";
                  break;
                default:
                  break;
              }
              return "border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white";
              break;
            case "outline":
              return "border-2 border-gray-200 text-green-500 hover:text-green-700";
              break;
            default:
              break;
          }
          break;

        case "white":
          switch (this.variantType) {
            case "normal":
              return "border-white bg-white text-blue-600 hover:text-blue-800";
              break;
            default:
              break;
          }
          break;

        case "secondary":
          switch (this.variantType) {
            case "outline":
              return "border-gray-300 text-gray-500 hover:text-blue-500";
              break;
            default:
              break;
          }
          break;

        default:
          break;
      }
    },

    setColorIcon(){
      switch(this.colorIcon){
        case "rojo":
          return "text-rojo"
          break;
        case "Azul":
          return "text-azul"
      }
    }

  }
};
</script>
<!-- component -->
<style scoped>
.base-button + .base-button {
  margin-left: 1em;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>
