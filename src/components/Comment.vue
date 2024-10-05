<template>
  <div class="comment-container">
    <div class="comment-box">
      <textarea placeholder="รายละเอียดความคิดเห็น"></textarea>
      <div class="button-container">
        <button class="cancel-button">ยกเลิก</button>
        <button class="submit-button">แสดงความคิดเห็น</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.comment-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.comment-box {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 6px rgba(0, 0, 0, 0.10);
  padding: 20px;
  background-color: #fff;
}

textarea {
  width: 100%;
  height: 150px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  color: #595D62;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}

.cancel-button {
  background: none;
  border: none;
  color: #FF5E5E;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
}

.submit-button {
  background-color: #0033A1;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #00237a;
}

.submit-button:active {
  background-color: #001a5a;
}
</style>
