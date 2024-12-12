<template>
  <header class="header">
    <div class="container">
      <div class="header__input-div">
        <input
          placeholder="Search"
          class="header__input"
          type="text"
          v-model="input"
        />
        <div class="close" v-if="input" @click="clearInput">
          <IconClose />
        </div>
      </div>
      <div class="header__buttons">
        <IconWallet />

        <IconBell :type="bell" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const input = ref();
const bell = ref("empty");
const clearInput = () => {
  input.value = "";
};
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 20px;
  &__input {
    border-radius: 10px;
    padding: 8px;
    width: 251px;
    border: none;
    background: rgba(250, 250, 250, 0.93);
    &-div {
      position: relative;
      max-width: 251px;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    max-height: max-content;
  }
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
}
.close {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
