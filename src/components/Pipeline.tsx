import { defineComponent, withDefaults, defineProps, PropType } from "vue-demi";

import StageGroup from "./StageGroup";
import AddStageIconButton from "./buttons/AddStageIconButton.vue";
import { PipelineData } from "./models";
import "./Pipeline.css";

export interface PipelineProps {
  value: PipelineData;
}

export default defineComponent({
  name: "Pipeline",
  props: {
    value: {
      type: Object as PropType<PipelineData>,
      required: true,
    },
  },
  setup(props) {
    const addSequnceClick = (sequnce: number) => {
      props.value.groups.splice(sequnce, 0, {
        name: `Group ${sequnce}`,
        description: "",
        stages: [
          {
            name: `Stage ${sequnce}`,
            description: "",
            steps: [],
          },
        ],
      });
    };

    const deleteSequnceClick = (sequnce: number) => {
      props.value.groups.splice(sequnce, 1);
    };

    console.log(JSON.stringify(props));

    return () => {
      console.log(JSON.stringify(props));
      return (
        <div class="ci-pipeline">
          <StageGroup mode={"start"} />
          <AddStageIconButton onClick={() => addSequnceClick(0)} />
          {props.value &&
            props.value.groups &&
            props.value.groups.map((group, index) => (
              <div class="stage-with-add">
                <StageGroup
                  value={group}
                  sequnce={index}
                  onAddSequnce={addSequnceClick}
                  onDeleteSequnce={deleteSequnceClick}
                />
                <AddStageIconButton
                  onClick={() => addSequnceClick(index + 1)}
                />
              </div>
            ))}

          <StageGroup
            sequnce={props.value.groups.length}
            mode="last"
            onAddSequnce={addSequnceClick}
            onDeleteSequnce={deleteSequnceClick}
          />
          <StageGroup mode="end" value={props.value.post} />
        </div>
      );
    };
  },
});
