import { defineComponent, PropType } from "vue-demi";
import StageStep from "./StageStep";
import AddStepIconButton from "./buttons/AddStepIconButton.vue";
import { PipelineStageData } from "./models";
import classnames from "classnames";
import "./Stage.css";

export type Mode = "start" | "normal" | "last" | "end";

export interface StageProps {
  sequnce?: number;
  parallel?: number;
  mode?: Mode;
  value?: PipelineStageData;
  last?: boolean;
  onDeleteStage?: () => void;
}

export default defineComponent({
  name: "Stage",
  props: {
    sequnce: {
      type: Number as PropType<number>,
      default: 0,
    },
    parallel: {
      type: Number as PropType<number>,
      default: 0,
    },
    mode: {
      type: String as PropType<Mode>,
      default: "normal",
    },
    value: {
      type: Object as PropType<PipelineStageData>,
      required: false,
    },
    last: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    onDeleteStage: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
  },
  setup(props) {
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

    return () => (
      <div
        class={classnames("stage-container", {
          "first-stage": props.mode === "start",
          last: props.last,
          end: props.mode === "end",
        })}
      >
        <div
          role="button"
          class={classnames({
            "stage-arrow-box": props.mode !== "start",
          })}
        >
          <div class="stage-wrapper">
            <div class="stage-box ci-pipeline-stage">
              {props.mode === "start" ? (
                <div class="stage-index">
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
                      <path d="M5.854 2.854l4.792 4.792a.5.5 0 010 .708l-4.792 4.792A.5.5 0 015 12.793V3.207a.5.5 0 01.854-.353z"></path>
                    </g>
                  </svg>
                </div>
              ) : props.mode === "end" ? (
                <div class="stage-index">
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
                      <path d="M8 .5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"></path>
                    </g>
                  </svg>
                </div>
              ) : (
                <div class="stage-index">
                  {props.sequnce! + 1}-{props.parallel! + 1}
                </div>
              )}

              <div class="stage-name">
                {props.mode === "end"
                  ? "结束"
                  : props.mode === "start"
                  ? "开始"
                  : props.value?.name}
              </div>
              {(props.mode !== "end" && props.mode !== "start") ?? (
                <div style="display: flex; align-items: center">
                  <div>
                    <div
                      class="stage-icon"
                      onClick={() =>
                        props.onDeleteStage && props.onDeleteStage()
                      }
                    >
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
                          <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zM5.354 4.646a.5.5 0 01.637-.057l.07.057L8 6.586l1.94-1.94a.5.5 0 01.706 0l.708.708a.5.5 0 010 .707L9.414 8l1.94 1.94a.5.5 0 01.057.637l-.057.07-.708.707a.5.5 0 01-.637.057l-.07-.057L8 9.414l-1.94 1.94a.5.5 0 01-.706 0l-.708-.708a.5.5 0 010-.707L6.586 8l-1.94-1.94a.5.5 0 01-.057-.637l.057-.07.708-.707z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {(props.mode === "normal" || props.mode === "end") &&
              props.value?.steps.map((step, index) => (
                <StageStep
                  value={step}
                  last={index === props.value!.steps!.length - 1}
                  sequnce={props.sequnce!}
                  parallel={props.parallel!}
                  onDeleteStepClick={() => onDeleteStepClick(index)}
                />
              ))}
          </div>
          {(props.mode === "normal" || props.mode === "end") && (
            <AddStepIconButton onClick={onAddStepClick} />
          )}
        </div>
      </div>
    );
  },
});
