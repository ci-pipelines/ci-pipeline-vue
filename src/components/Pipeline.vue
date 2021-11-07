<script lang="ts">
import { defineComponent } from "vue-demi";
export default defineComponent({
  name: "Pipeline",
  setup() {
    return () =>
      `<div>
        <h1>Pipeline</h1>
        </div>
  `;
  },
});
</script>

<script setup lang="ts">
import StageGroup from "./StageGroup.vue";
import AddStageIconButton from "./buttons/AddStageIconButton.vue";
import { PipelineData } from "./models";

export interface PipelineProps {
  value: PipelineData;
}

const props = withDefaults(defineProps<PipelineProps>(), {});

const addSequnceClick = (sequnce: number) => {
  props.value.groups.splice(sequnce, 0, {
    name: `Group ${sequnce}`,
    description: "",
    stages: [
      {
        name: `Stage ${sequnce}`,
        description: "",
        steps: [],
      },
    ],
  });
};

const deleteSequnceClick = (sequnce: number) => {
  props.value.groups.splice(sequnce, 1);
};
</script>

<template>
  <div class="ci-pipeline">
    <StageGroup mode="start" />
    <AddStageIconButton @click="addSequnceClick(0)" />

    <div class="stage-with-add" v-for="(group, index) in value.groups">
      <StageGroup
        :value="group"
        :sequnce="index"
        @add-sequnce="addSequnceClick"
        @delete-sequnce="deleteSequnceClick"
      />
      <AddStageIconButton @click="addSequnceClick(index + 1)" />
    </div>

    <StageGroup
      :sequnce="props.value.groups.length"
      mode="last"
      @add-sequnce="addSequnceClick"
      @delete-sequnce="deleteSequnceClick"
    />

    <StageGroup mode="end" :value="props.value.post" />
  </div>
</template>

<style>
.ci-pipeline {
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
.stage-with-add {
  display: flex;
  align-items: flex-start;
}
</style>
