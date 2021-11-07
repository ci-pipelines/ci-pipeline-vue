<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PipelineContainer",
});
</script>

<template>
  <div class="ci-pipeline-container">
    <slot></slot>
  </div>
</template>

<style>
.ci-pipeline-container {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 50px 0;
  color: #202d40;
  -ms-flex-align: start;
  align-items: flex-start;
  color: #202d40;
  font-size: 14px;
  font-family: PingFang SC, Helvetica Neue, Hiragino Sans GB, Segoe UI,
    Microsoft YaHei, sans-serif;
  flex: 1;
  width: 100%;
}
</style>
