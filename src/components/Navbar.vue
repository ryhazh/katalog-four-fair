<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
</script>

<template>
  <div
    class="py-4 px-6 flex justify-between items-center bg-background border-b border-border"
  >
    <h1 class="text-2xl font-bold">Katalog</h1>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button size="lg">
          <Icon icon="radix-icons:moon" class="h-5 w-5 dark:hidden" />
          <Icon icon="radix-icons:sun" class="h-5 w-5 hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="mode = 'light'">Light</DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'dark'">Dark</DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'auto'">System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
