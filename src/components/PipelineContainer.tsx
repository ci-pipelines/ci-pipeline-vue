import { defineComponent } from "vue-demi";
import "./Pipeline.css";

export default defineComponent({
  name: "PipelineContainer",
  setup(props, { slots }) {
    return () => (
      <div class="ci-pipeline-container">
        {slots.default && slots.default()}
      </div>
    );
  },
});
