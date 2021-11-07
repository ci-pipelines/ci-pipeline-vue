<script setup lang="ts">
import { ref } from 'vue';
import RemoveIconButton from './buttons/RemoveIconButton.vue';
import { PipelineStageStepData } from './models';
import StageStepIcon from './StageStepIcon.vue';

export interface StageStepProps {
  last: boolean;
  value: PipelineStageStepData;
  sequnce: number;
  parallel: number;
}

const props = withDefaults(defineProps<StageStepProps>(), {
  last: false
});

const count = ref(0);
</script>

<template>
  <div>
    <div class="step-wrapper">
      <div role="button" class="step-box ci-pipeline-step">
        <StageStepIcon />
        <div class="step-label">{{ props.value.name }}</div>
        <div style="display: flex; align-items: center">
          <RemoveIconButton @click="$emit('onDeleteStepClick')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-box {
  border-radius: 2px;
  margin: 10px 45px;
  width: 200px;
  height: 40px;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  border: 1px solid #dadfe6;
  position: relative;
  z-index: 9;
  cursor: pointer;
}

.step-box:hover {
  border-color: #3385ff;
}

.step-wrapper {
  margin: 10px 0;
  position: relative;
}
.step-wrapper:after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  top: -3px;
  left: 12px;
  border: 1px solid #dadfe6;
  border-radius: 50%;
  background-color: #fff;
  z-index: 9;
}

.step-wrapper:before {
  content: '';
  width: 1px;
  height: 10px;
  background: #dadfe6;
  position: absolute;
  top: -11px;
  left: 15px;
}

.step-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
}

.step-label {
  padding: 10px;
  text-align: left;
  -ms-flex: 1 1;
  flex: 1 1;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
</style>
