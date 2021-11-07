<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import { PipelineData } from "./components/models";
import Pipeline from "./components/Pipeline.vue";
import PipelineContainer from "./components/PipelineContainer.vue";

const pipelineData = ref<PipelineData>({
  name: "测试样例",
  description: "",
  groups: [
    {
      name: "Group 1",
      description: "",
      stages: [
        {
          name: "检出",
          description: "",
          steps: [
            {
              name: "从代码仓库检出",
              description: "任务1-1的描述",
              type: "shell",
              script: 'echo "hello world"',
            },
          ],
        },
      ],
    },
    {
      name: "Group 2",
      description: "",
      stages: [
        {
          name: "推送镜像",
          description: "",
          steps: [
            {
              name: "执行Shell脚本",
              description: "",
              type: "shell",
              script: 'echo "hello world"',
            },
          ],
        },
      ],
    },
  ],
  post: {
    name: "结果",
    description: "",
    stages: [
      {
        name: "结束",
        description: "",
        steps: [
          {
            name: "成功后回调",
            description: "",
            type: "shell",
            script: 'echo "hello world"',
          },
          {
            name: "失败后回调",
            description: "",
            type: "shell",
            script: 'echo "hello world"',
          },
        ],
      },
    ],
  },
});
</script>

<template>
  <PipelineContainer>
    <Pipeline :value="pipelineData" />
  </PipelineContainer>
</template>

<style></style>
