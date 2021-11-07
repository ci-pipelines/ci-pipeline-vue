<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Pipeline'
});
</script>

<script setup lang="ts">
import StageGroup from './StageGroup.vue';
import AddStageIconButton from './buttons/AddStageIconButton.vue';
import { PipelineData } from './models';

export interface PipelineProps {
  value: PipelineData;
}

const props = withDefaults(defineProps<PipelineProps>(), {});

const onAddSequnceClick = (sequnce: number) => {
  props.value.groups.splice(sequnce, 0, {
    name: `Group ${sequnce}`,
    description: '',
    stages: [
      {
        name: `Stage ${sequnce}`,
        description: '',
        steps: []
      }
    ]
  });
};

const onDeleteSequnceClick = (sequnce: number) => {
  props.value.groups.splice(sequnce, 1);
};
</script>

<template>
  <div class="ci-pipeline">
    <StageGroup mode="start" />
    <AddStageIconButton @click="onAddSequnceClick(0)" />

    <div class="stage-with-add" v-for="(group, index) in value.groups">
      <StageGroup
        :value="group"
        :sequnce="index"
        @onAddSequnceClick="onAddSequnceClick"
        @onDeleteSequnceClick="onDeleteSequnceClick"
      />
      <AddStageIconButton @click="onAddSequnceClick(index + 1)" />
    </div>

    <StageGroup
      :sequnce="props.value.groups.length"
      mode="last"
      @onAddSequnceClick="onAddSequnceClick"
      @onDeleteSequnceClick="onDeleteSequnceClick"
    />

    <StageGroup mode="end" :value="props.value.post" />
  </div>
</template>

<style scoped>
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
  font-family: PingFang SC, Helvetica Neue, Hiragino Sans GB, Segoe UI, Microsoft YaHei, sans-serif;
  flex: 1;
  width: 100%;
}
.stage-with-add {
  display: flex;
  align-items: flex-start;
}
</style>
