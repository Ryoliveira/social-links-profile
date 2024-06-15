<template>

    <main>
        <!-- container -->
        <section class="container">

            <!-- avatar -->
            <img class="avatar" :src="cardInfo.avatar" alt="Avatar Photo">

            <!-- name -->
            <p class="name">{{ cardInfo.name }}</p>

            <!-- location -->
            <p class="residence">{{ cardInfo.residence }}</p>

            <!-- bio -->
            <p class="bio">{{ cardInfo.bio }}</p>

            <!-- links -->
            <a class="link" :href="link.url" target="_blank" v-for="link in cardInfo.links">{{ link.title }}</a>

        </section>

    </main>
    <footer>
        <span>
            Frontend Mentor Challenge <a :href="solutionUrl" target="_blank">Social Links Profile</a>.
        </span>
        <span>
            Coded By <a :href="githubUrl" target="_blank">Ryan Oliveira</a>.
        </span>
    </footer>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import SocialCardInfo from '../interfaces/types';

const solutionUrl = "https://www.frontendmentor.io/solutions/social-link-card-component-made-in-vue-with-composition-api-ITDZ95iYAo";
const githubUrl = "https://github.com/Ryoliveira"

defineProps({
    cardInfo: {
        type: Object as PropType<SocialCardInfo>,
        required: true,
    }
});
</script>

<style src="../scss/SocialLinkCard.scss" scoped />