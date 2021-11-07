<template>
  <div class="add-parallel-stage-box">+ 增加并行阶段</div>
</template>

<style>
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
  cursor: pointer;
}

.add-parallel-stage-box:hover {
  border-color: #3385ff;
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
</style>
