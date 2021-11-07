<script setup lang="ts">
import { PipelineGroupData } from "./models";
import Stage, { Mode } from "./Stage.vue";

export interface StageGroupProps {
  sequnce?: number;
  mode?: Mode;
  value?: PipelineGroupData;
}

const props = withDefaults(defineProps<StageGroupProps>(), {
  mode: "normal",
});

const onAddParallelClick = () => {
  props.value?.stages.push({
    name: "测试阶段。。",
    description: "",
    steps: [],
  });
};

const emit = defineEmits(["delete-sequnce", "add-sequnce"]);

const onDeleteStageClick = (index: number) => {
  if (props.value?.stages.length == 1) {
    emit("delete-sequnce", props.sequnce);
  } else {
    props.value?.stages.splice(index, 1);
  }
};
</script>

<template>
  <div
    class="stage-group-box"
    :class="{
      first: props.mode === 'start',
      last: props.mode === 'end',
      end: props.mode === 'end',
    }"
  >
    <div v-if="props.mode === 'normal'" class="stage-group-rb">
      <Stage
        :value="stage"
        v-for="(stage, index) in props.value?.stages"
        :last="index === props.value!.stages.length-1"
        :mode="props.mode"
        :sequnce="props.sequnce"
        :parallel="index"
        @delete-stage="onDeleteStageClick(index)"
      />
      <div class="add-parallel-stage-box" @click="onAddParallelClick">
        + 增加并行阶段
      </div>
    </div>
    <div
      v-if="props.mode === 'end'"
      class="stage-group-rb"
      :class="{ end: props.mode === 'end' }"
    >
      <Stage mode="end" :value="props.value?.stages[0]" />
    </div>
    <div
      v-if="props.mode === 'start'"
      class="stage-group-rb"
      :class="{ first: props.mode === 'start' }"
    >
      <Stage mode="start" />
    </div>
    <div
      v-if="props.mode === 'last'"
      class="stage-group-rb last"
      @click="$emit('add-sequnce', props.sequnce)"
    >
      <div class="add-sequence-stage-box">+ 增加阶段</div>
    </div>
  </div>
</template>

<style>
.stage-group-rb {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-animation: change-background-1RSfRAHzBv 1s ease-in-out;
  animation: change-background-1RSfRAHzBv 1s ease-in-out;
  position: relative;
}

.stage-group-rb:not(.first):before {
  content: "";
  height: 1px;
  width: 45px;
  background: #3385ff;
  position: absolute;
  left: 0;
  top: 30px;
}

.stage-group-rb:not(.last):not(.end):after {
  content: "";
  height: 1px;
  width: 45px;
  background: #3385ff;
  position: absolute;
  right: 0;
  top: 30px;
}

.stage-group-rb.end:before {
  width: 90px;
  left: -50px;
}

.add-sequence-stage-box,
.add-parallel-stage-box {
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
}

.add-sequence-stage-box {
  border: 1px dashed #dadfe6;
  cursor: pointer;
}

.add-parallel-stage-box:hover,
.add-sequence-stage-box:hover {
  border-color: #3385ff;
}
.add-parallel-stage-box {
  border: 1px dashed #dadfe6;
  cursor: pointer;
}
.add-parallel-stage-box:before {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
  border-left: 5px solid #dadfe6;
}
.stage-group-box {
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
</style>
