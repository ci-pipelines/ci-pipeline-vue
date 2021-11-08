import { defineComponent, ref, reactive } from "vue-demi";
import { PipelineData } from "./components/models";
import Pipeline from "./components/Pipeline";
import PipelineContainer from "./components/PipelineContainer";

export default defineComponent({
  setup() {
    const pipelineData = reactive<PipelineData>({
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

    return () => (
      <PipelineContainer>
        <Pipeline value={pipelineData} />
      </PipelineContainer>
    );
  },
});
