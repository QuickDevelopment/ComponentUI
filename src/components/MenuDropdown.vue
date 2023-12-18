<template>
  <div class="fixed text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-primary/80 px-4 py-2 text-sm font-medium text-inverse hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {{ dropdown.label }}
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div v-for="option in dropdown.options" class="px-1 py-1">
            <MenuItem :href="option.href" @click="option.onClick" v-slot="{ active }">
              <a
                :class="[
                  active ? 'bg-primary text-inverse' : 'text-black',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm '+option.classes,
                ]"
              >
                {{ option.label }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
import {DropdownProps} from "../types/components/Dropdown";
import {PropType} from "vue";

defineProps({
  dropdown: {
    type: Object as PropType<DropdownProps>,
    required: true
  }
})
</script>
