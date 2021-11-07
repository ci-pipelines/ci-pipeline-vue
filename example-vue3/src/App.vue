<template>
  <Pipeline :value="pipelineData" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const pipelineData = ref({
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

<script lang="ts">
import { defineComponent } from "vue";
import Pipeline from "ci-pipeline-vue";

export default defineComponent({
  name: "App",
  components: {
    Pipeline,
  },
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
