<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-vue-next";

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  image: string;
  link: string;
  more_info: {
    title: string;
    image: string;
    description: string;
  }[];
}

const project = ref<Project | null>(null);
const route = useRoute();

onMounted(async () => {
  const response = await fetch(
    `http://localhost:3000/projects/${route.params.id}`
  );
  const data = await response.json();
  project.value = data;
});
</script>

<template>
  <div v-if="project" class="p-4">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="mb-5 self-center w-full md:w-[40%] space-y-3">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-2">{{ project.title }}</h1>
          <p class="text-gray-600 text-xl md:text-2xl dark:text-gray-400">
            {{ project.description }}
          </p>
          <p class="text-gray-500">{{ project.creator }}</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            v-for="tech in project.tech_stack"
            :key="tech"
          >
            {{ tech }}
          </Badge>
        </div>
        <div>
          <Button as-child size="sm">
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              <Globe /> View Web
            </a>
          </Button>
        </div>
      </div>

      <!-- Right Section: Image/Video -->
      <div class="w-full md:w-[60%]">
        <AspectRatio :ratio="16 / 9">
          <img
            :src="project.image"
            :alt="project.title"
            class="rounded-md object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>

    <!-- Bottom Section: More Info -->
    <div class="mt-4 space-y-5">
      <h3 class="text-2xl font-semibold">Fitur Utama</h3>
      <div
        v-for="info in project.more_info"
        :key="info.description"
        class="mt-2 flex flex-col md:flex-row gap-7"
      >
        <!-- Image/Video Section -->
        <div class="w-full md:w-[60%]">
          <AspectRatio :ratio="16 / 9">
            <img
              v-if="info.type === 'image'"
              :src="info.image"
              :alt="info.description"
              class="rounded-md object-cover w-full h-full"
            />
            <video
              v-else-if="info.type === 'video'"
              :src="info.image"
              autoplay
              loop
              muted
              playsinline
              class="rounded-md object-cover w-full h-full"
            ></video>
          </AspectRatio>
        </div>

        <!-- Text Content Section -->
        <div class="w-full md:w-[40%] self-center">
          <h4 class="text-2xl md:text-3xl font-bold">{{ info.title }}</h4>
          <p class="mt-2 text-gray-600 dark:text-gray-400">{{ info.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
