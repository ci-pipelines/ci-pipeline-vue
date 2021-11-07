<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  last: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  last: false
});

const count = ref(0);
</script>

<template>
  <div>
    <div class="stage-icon">
      <svg
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height="1em"
        width="1em"
        viewBox="0 0 16 16"
        class="cuk2-icon cuk2-icon-close-circle"
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
</template>

<style scoped>
.stage-icon {
  padding-right: 10px;
  display: none;
  cursor: pointer;
}

.step-box:hover .stage-icon {
  display: initial;
}

.cuk2-icon {
  font-size: 14px;
  color: #8592a6;
}
</style>
