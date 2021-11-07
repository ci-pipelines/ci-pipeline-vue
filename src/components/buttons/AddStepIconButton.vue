<script lang="ts">
import { defineComponent } from "vue-demi";
export default defineComponent({
  name: "AddStepIconButton",
});
</script>

<script setup lang="ts"></script>

<template>
  <div class="add-step">
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,5 L10,9 L14,9 L14,10 L9.999,10 L10,14 L9,14 L8.999,10 L5,10 L5,9 L9,9 L9,5 L10,5 Z"
      ></path>
    </svg>
  </div>
</template>

<style>
.add-step {
  top: -20px;
  left: 130px;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  color: #dadfe6;
  background-color: #fff;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  border: 1px solid;
  -webkit-box-shadow: 0 2px 4px 0 rgba(51, 133, 255, 0.15);
  box-shadow: 0 2px 4px 0 rgba(51, 133, 255, 0.15);
  z-index: 9;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  -o-transition: ease-in-out 0.2s;
  transition: 0.2s ease-in-out;
}
.add-step > svg {
  width: 100%;
  height: 100%;
  fill: #3385ff;
  -webkit-transition: 0.2s ease-in-out;
  -o-transition: ease-in-out 0.2s;
  transition: 0.2s ease-in-out;
}
.add-step:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  background-color: #3385ff;
  color: #fff;
  border-color: #3385ff;
}
.add-step:hover > svg {
  fill: #fff;
}
</style>
