<template>
  <div class="flex items-center w-36 ">
    <div class="flex flex-wrap justify-center max-w-sm mx-auto text-center">
      <div class="flex items-center mb-4 mr-4">
        <input id="radio1" type="radio" name="radio" class="hidden" value="1" />
        <label for="radio1" class="flex items-center cursor-pointer">
          <span
            class="inline-block w-4 h-4 mr-1 border rounded-full border-grey"
          ></span>
          Si</label
        >
      </div>

      <div class="flex items-center mb-4 mr-4">
        <input id="radio2" type="radio" name="radio" class="hidden" value="2" />
        <label for="radio2" class="flex items-center cursor-pointer">
          <span
            class="inline-block w-4 h-4 mr-1 border rounded-full border-grey"
          ></span>
          No</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "radioSelect"
};
</script>

<style>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #3490dc;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #3490dc;
}
</style>
