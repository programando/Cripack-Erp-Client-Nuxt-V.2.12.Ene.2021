  <template>
  <component
    class="flex items-center "
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
    <span v-if="showBtnAnimation">
        <svg class="h-6 ml-2 text-white cursor-not-allowed svg-icon animate-spin" viewBox="0 0 20 20">
				  <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
			  </svg>
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
