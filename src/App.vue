<template>
  <MenuDropdown :dropdown="dropdown" />
</template>

<script setup lang="ts">
import MenuDropdown from "./components/MenuDropdown.vue";

const dropdown = {
  label: "Dropdown",
  options: [
    {
      label: "Option 1",
      onClick: () => console.log("Option 1 clicked"),
    },
    {
      label: "Option 2",
      onClick: () => console.log("Option 2 clicked"),
    },
    {
      label: "Option 3",
      href: "/test",
    },
  ]
};
</script>