import { defineComponent, PropType } from "vue-demi";

import RemoveIconButton from "./buttons/RemoveIconButton.vue";
import { PipelineStageStepData } from "./models";
import StageStepIcon from "./buttons/StageStepIcon.vue";
import "./StageStep.css";

export interface StageStepProps {
  last: boolean;
  value?: PipelineStageStepData;
  sequnce: number;
  parallel: number;
  onDeleteStepClick: () => void;
}

export default defineComponent({
  name: "StageStep",
  props: {
    last: Boolean,
    value: Object as PropType<PipelineStageStepData>,
    sequnce: Number,
    parallel: Number,
    onDeleteStepClick: Function,
  },
  setup(props) {
    return () => (
      <div>
        <div class="step-wrapper">
          <div role="button" class="step-box ci-pipeline-step">
            <StageStepIcon />
            <div class="step-label">{props.value?.name}</div>
            <div style="display: flex; align-items: center">
              <RemoveIconButton onClick={props.onDeleteStepClick} />
            </div>
          </div>
        </div>
      </div>
    );
  },
});
