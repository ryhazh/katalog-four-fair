<script>
import { defineComponent } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Globe } from "lucide-vue-next";

export default defineComponent({
  name: "ProjectsList",
  components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Badge,
    Button,
    AspectRatio,
    Globe,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "PlayLynk",
          description:
            "PlayLynk adalah pemutar musik web yang memungkinkan pengguna mengunggah dan memutar file MP3 dari penyimpanan lokal. Aplikasi ini dirancang sebagai prototipe sederhana yang mensimulasikan fitur dasar platform musik modern.",
          image_or_video: "/assets/video/mp3.mp4",
          tech_stack: ["cPanel", "Tailwind CSS", "ReactJS", "Flowbite"],
          link: "https://playlynk.nichicdx.com",
        },
        {
          id: 2,
          title: "ProSync",
          description:
            "ProSync adalah aplikasi manajemen tugas, aplikasi ini dirancang untuk mengatur alur kerja tim, memberikan tugas kepada tim, dan meningkatkan produktivitas.",
          image_or_video: "/assets/video/ProSycn.mp4",
          tech_stack: ["Laravel", "Tailwind CSS", "Flowbite"],
          link: "https://www.smartclass.id",
        },
        {
          id: 3,
          title: "Cekin.GU",
          description:
            "CEKIN.GU adalah sistem pemantauan kegiatan guru yang dirancang untuk memudahkan pengelolaan dan pemantauan kegiatan belajar mengajar. Sistem ini berbasis web dan memiliki tujuan utama untuk memberikan platform digital bagi para guru dalam mengelola kegiatan secara efisien.",
          image_or_video: "/assets/video/cekingu.mp4",
          tech_stack: ["Laravel", "Bootstrap", "Vue JS"],
          link: "https://cekin-gu-57lg.vercel.app/",
        },
        {
          id: 3,
          title: "Alumni Tracer",
          description:
            "Alumni Tracer adalah aplikasi yang digunakan untuk melacak dan mengelola data alumni. Alumni bisa mengisi formulir dua kali sehari, sementara admin dapat mengakses data lengkap, logs, statistik, serta menambahkan dan mengekspor data alumni.",
          image_or_video: "/assets/video/AlumniTrace.mp4",
          tech_stack: ["Laravel", "Bootstrap", "Vue JS"],
          link: "https://alumni-tracer-amber.vercel.app/",
        },
        {
          id: 4,
          title: "Raporku",
          description:
            "Raporku adalah aplikasi web yang dirancang untuk mempermudah pengelolaan nilai dan data siswa. Aplikasi ini membuat siswa untuk memasukkan nilai ujian mereka, sementara guru dapat mengelola dan memantau perkembangan nilai siswa selama 6 semester.",
          image_or_video: "/assets/video/raporku.mp4",
          tech_stack: ["Laravel", "Vue JS", "Tailwind CSS", "ShadCN Vue"],
          link: "https://raporku.vercel.app/",
        },
        {
          id: 4,
          title: "GudangKita",
          description:
            "GudangKita adalah aplikasi web berbasis Laravel yang dirancang untuk membantu pengelolaan inventaris barang dengan lebih efisien, akurat, dan mudah diakses dari mana saja.",
          image_or_video: "/assets/video/GudangKita.mp4",
          tech_stack: [
            "Laravel",
            "React JS",
            "Node JS",
            "Tailwind CSS",
            "DaisyUI",
          ],
          link: "https://example.com/project-three",
        },
      ],
    };
  },
  methods: {
    navigateToProject(project) {
      window.open(project.link, "_blank");
    },
    isVideo(url) {
      return url.toLowerCase().endsWith(".mp4");
    },
  },
});
</script>

<template>
  <div>
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 py-4">
      <Card
        v-for="project in projects"
        :key="project.id"
        class="hover:shadow-lg transition-shadow cursor-pointer"
        @click="navigateToProject(project)"
      >
        <CardHeader class="mb-4">
          <AspectRatio :ratio="16 / 9">
            <!-- Check if the media is a video by verifying if it ends with '.mp4' -->
            <template v-if="isVideo(project.image_or_video)">
              <video
                loop
                autoplay
                muted
                class="rounded-t-md object-cover w-full h-full"
              >
                <source :src="project.image_or_video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </template>
            <template v-else>
              <img
                :src="project.image_or_video"
                :alt="project.title"
                class="object-cover w-full h-full"
              />
            </template>
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <CardTitle class="text-xl mb-2">{{ project.title }}</CardTitle>
          <CardDescription>{{ project.description }}</CardDescription>
          <div class="flex flex-wrap gap-2 mt-4">
            <Badge
              v-for="tech in project.tech_stack"
              :key="tech"
              variant="outline"
            >
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button as-child size="sm">
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              <Globe /> View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
