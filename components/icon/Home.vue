<template>
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    :class="type"
      d="M20.1666 18.3333V11.1595C20.1666 10.6604 20.0648 10.1665 19.8673 9.70818C19.6698 9.24981 19.3808 8.8366 19.018 8.49384L12.2594 2.10651C11.919 1.78469 11.4684 1.60538 10.9999 1.60538C10.5315 1.60538 10.0808 1.78469 9.74042 2.10651L2.98184 8.49384C2.61904 8.8366 2.33004 9.24981 2.13254 9.70818C1.93504 10.1665 1.8332 10.6604 1.83325 11.1595V18.3333C1.83325 18.8196 2.02641 19.2859 2.37022 19.6297C2.71404 19.9735 3.18036 20.1667 3.66659 20.1667H18.3333C18.8195 20.1667 19.2858 19.9735 19.6296 19.6297C19.9734 19.2859 20.1666 18.8196 20.1666 18.3333Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
path {
  stroke: white;
}
.active{
    stroke: #5184e5;
}
</style>