import { defineComponent, PropType } from "vue-demi";

import { PipelineGroupData } from "./models";
import Stage, { Mode } from "./Stage";
import AddParallelStageButton from "./buttons/AddParallelStageButton.vue";
import classnames from "classnames";
import "./StageGroup.css";

export interface StageGroupProps {
  sequnce?: number;
  mode?: Mode;
  value?: PipelineGroupData;
  onAddSequnce?: (sequnce: number) => void;
  onDeleteSequnce?: (sequnce: number) => void;
}

export default defineComponent({
  name: "StageGroup",
  props: {
    sequnce: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String as PropType<Mode>,
      default: "normal",
    },
    value: {
      type: Object as PropType<PipelineGroupData>,
      default: () => ({
        name: "",
        description: "",
        stages: [],
      }),
    },
    onAddSequnce: {
      type: Function,
      default: () => {},
    },
    onDeleteSequnce: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const onAddParallelClick = () => {
      props.value?.stages.push({
        name: "测试阶段。。",
        description: "",
        steps: [],
      });
    };

    const onDeleteStageClick = (index: number) => {
      if (props.value?.stages.length == 1) {
        props.onDeleteSequnce?.(props.sequnce!);
      } else {
        props.value?.stages.splice(index, 1);
      }
    };

    return () => (
      <div
        class={classnames("stage-group-box", {
          first: props.mode === "start",
          last: props.mode === "end",
          end: props.mode === "end",
        })}
      >
        {props.mode === "normal" && (
          <div class="stage-group-rb">
            {props.value?.stages.map((stage, index) => (
              <Stage
                value={stage}
                last={index === props.value!.stages.length - 1}
                mode={props.mode}
                sequnce={props.sequnce}
                parallel={index}
                onDeleteStage={() => onDeleteStageClick(index)}
              />
            ))}
            <AddParallelStageButton onClick={() => onAddParallelClick()}>
              + 增加并行阶段
            </AddParallelStageButton>
          </div>
        )}
        {props.mode === "end" && (
          <div
            class={classnames("stage-group-rb", {
              end: props.mode === "end",
            })}
          >
            <Stage mode="end" value={props.value?.stages[0]} />
          </div>
        )}
        {props.mode === "start" && (
          <div
            class={classnames("stage-group-rb", {
              first: props.mode === "start",
            })}
          >
            <Stage mode="start" />
          </div>
        )}
        {props.mode === "last" && (
          <div
            class="stage-group-rb last"
            onClick={() => {
              props.onAddSequnce && props.onAddSequnce(props.sequnce!);
            }}
          >
            <AddParallelStageButton />
          </div>
        )}
      </div>
    );
  },
});
