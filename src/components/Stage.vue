<script setup lang="ts">
import StageStep from "./StageStep.vue";
import AddStepIconButton from "./buttons/AddStepIconButton.vue";
import { PipelineStageData } from "./models";

export type Mode = "start" | "normal" | "last" | "end";

export interface StageProps {
  sequnce?: number;
  parallel?: number;
  mode?: Mode;
  value?: PipelineStageData;
  last?: boolean;
}

const props = withDefaults(defineProps<StageProps>(), {
  sequnce: undefined,
  parallel: undefined,
  mode: "normal",
  value: undefined,
  last: false,
});

const onAddStepClick = () => {
  props.value?.steps.push({
    name: "执行shell脚本",
    description: "",
    type: "shell",
    script: 'echo "hello world"',
  });
};

const onDeleteStepClick = (index: number) => {
  props.value?.steps.splice(index, 1);
};
</script>

<template>
  <div
    class="stage-container"
    :class="{
      'first-stage': props.mode === 'start',
      last: props.last,
      end: props.mode === 'end',
    }"
  >
    <div role="button" :class="{ 'stage-arrow-box': props.mode !== 'start' }">
      <div class="stage-wrapper">
        <div class="stage-box ci-pipeline-stage">
          <div v-if="props.mode === 'start'" class="stage-index">
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 16 16"
              class="cuk2-icon-caretright cuk2-icon start-icon"
              style="vertical-align: middle"
            >
              <g>
                <path
                  d="M5.854 2.854l4.792 4.792a.5.5 0 010 .708l-4.792 4.792A.5.5 0 015 12.793V3.207a.5.5 0 01.854-.353z"
                ></path>
              </g>
            </svg>
          </div>
          <div v-else-if="props.mode === 'end'" class="stage-index">
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 16 16"
              class="cuk2-icon-circle cuk2-icon end-icon"
              style="vertical-align: middle"
            >
              <g>
                <path
                  d="M8 .5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
                ></path>
              </g>
            </svg>
          </div>
          <div v-else class="stage-index">
            {{ props.sequnce! + 1 }}-{{ props.parallel! + 1 }}
          </div>
          <div class="stage-name">
            {{
              props.mode === "end"
                ? "结束"
                : props.mode === "start"
                ? "开始"
                : props.value?.name
            }}
          </div>
          <div
            style="display: flex; align-items: center"
            v-if="props.mode !== 'end' && props.mode !== 'start'"
          >
            <div>
              <div class="stage-icon" @click="$emit('delete-stage')">
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 16 16"
                  class="cuk2-icon cuk2-icon-close-circle null"
                  style="vertical-align: middle"
                >
                  <g>
                    <path
                      d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zM5.354 4.646a.5.5 0 01.637-.057l.07.057L8 6.586l1.94-1.94a.5.5 0 01.706 0l.708.708a.5.5 0 010 .707L9.414 8l1.94 1.94a.5.5 0 01.057.637l-.057.07-.708.707a.5.5 0 01-.637.057l-.07-.057L8 9.414l-1.94 1.94a.5.5 0 01-.706 0l-.708-.708a.5.5 0 010-.707L6.586 8l-1.94-1.94a.5.5 0 01-.057-.637l.057-.07.708-.707z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div v-if="props.mode === 'normal' || props.mode === 'end'">
          <StageStep
            :value="step"
            v-for="(step, index) in props.value?.steps"
            :last="index === (props.value!.steps!.length - 1)"
            :sequnce="props.sequnce!"
            :parallel="props.parallel!"
            @delete-step="onDeleteStepClick(index)"
          />
        </div>
      </div>
      <AddStepIconButton
        v-if="props.mode === 'normal' || props.mode === 'end'"
        @click="onAddStepClick"
      />
    </div>
  </div>
</template>

<style>
.stage-container {
  position: relative;
}

.stage-container:not(.end):before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  border: 1px solid #3385ff;
  border-top-color: transparent;
}

.stage-container.last:before {
  border-color: #dadfe6;
  border-style: dashed;
  border-top: transparent;
  border-radius: 0 0 12px 12px;
}

.stage-container.first-stage:before {
  border-color: transparent;
}

.stage-box {
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

.stage-box:hover {
  border-color: #3385ff;
}
.stage-arrow-box {
  overflow: hidden;
}
.stage-arrow-box:before {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  position: absolute;
  left: 41px;
  top: 25px;
  border-left: 5px solid #3385ff;
}
.stage-wrapper {
  margin: 10px 45px;
}

.stage-box {
  font-weight: 700;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
}

.stage-box .stage-index {
  height: 100%;
  width: 40px;
  background: #3385ff;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  border-radius: 2px 0 0 2px;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

.stage-box .stage-name {
  -ms-flex: 1 1;
  flex: 1 1;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.stage-box .stage-icon {
  padding-right: 10px;
  display: none;
  cursor: pointer;
}

.stage-box:hover .stage-icon {
  display: initial;
}
</style>
