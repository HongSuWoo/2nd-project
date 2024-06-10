<script setup>

</script>

<template>
  <div class="parent">
    <div class="main_bg main_size main_location">
      <input type="text" style="height: 50px; width: 500px; font-size: 24px; position: relative; bottom: -50px;" placeholder="찾으실 분을 입력해주세요.">
      <button class="custom-button" style="position: absolute; top: 10px; right: 120px;">가입</button>
      <button class="custom-button" style="position: absolute; top: 10px; right: 10px;">로그인</button>
    </div>
    <div class="main2"></div>
  </div>
</template>

<style scoped>
.main_bg {
  background-image: url("./src/data/wood.jpg");
}

.main_size {
  width: 600px;
  height: 200px;
  margin: 5px;
  position: relative;
}

.main_location {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid black;
}

.parent {
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면의 높이를 차지 */
  border: 1px solid black;
}

.custom-button {
  background-color: rgba(196, 72, 72, 0.712);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.main2 {
  width: 600px;
  height: 550px;
  margin: 5px;
  border: 1px solid black; /* 경계선 추가 */
}
</style>
