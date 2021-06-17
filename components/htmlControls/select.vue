<template>
  <div class="z-20 space-y-1">
    <label id="listbox-label" class="block text-xs font-medium leading-5 text-gray-700">
      <slot name="SelectLabel"></slot>
    </label>

    <div class="relative" v-click-outside="closeDropdown">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button type="button" @click="openDropdown" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="relative w-full py-1 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5">
          <div class="flex items-center space-x-3">

            <span class="block truncate">
              {{ value }}
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </span>

      <!-- Select popover, show/hide based on select state. -->
      <div v-show="isOpen" class="absolute w-full mt-1 bg-white rounded-md shadow-lg">
        <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-56 focus:outline-none sm:text-xs sm:leading-5">

          <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
          <li tabindex="0" @click="select(d)" id="listbox-item-0" role="option" v-for="d in data" v-bind:key="d" class="relative py-2 pl-3 text-gray-900 bg-gray-200 cursor-pointer select-none pr-9 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600">
            <div class="flex items-center space-x-3">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="block truncate" v-bind:class="{ 'font-normal' : !isSelected(d) , 'font-semibold' : isSelected(d)}">
                {{ d }}
              </span>
            </div>

            <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
            <span v-show="isSelected(d)" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </span>
          </li>

          <!-- More options... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'VueSelect',
  props: {
    data: Array,
    value: String
  },
  data() {
    return {
      'isOpen' : false
    }
  },
  methods: {
    isSelected(value) {
      return this.value === value;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    openDropdown() {
      this.isOpen = true;
    },
    select(value) {
      this.isOpen = false;

      this.$emit('valueSelect', value);
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>