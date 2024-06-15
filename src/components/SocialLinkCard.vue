<template>

    <main>
        <!-- header -->
        <h1 class="sr-only">Social Links Profile Card Component</h1>

        <!-- container -->
        <section class="container">

            <!-- avatar -->
            <img class="avatar" :src="cardInfo.avatar" alt="User avatar photo">

            <!-- name -->
            <h1 class="name">{{ cardInfo.name }}</h1>

            <!-- location -->
            <p class="residence">{{ cardInfo.residence }}</p>

            <!-- bio -->
            <p class="bio">{{ cardInfo.bio }}</p>

            <!-- links -->
            <ul>
                <li v-for="link in cardInfo.links">
                    <a class="link" :href="link.url" target="_blank">{{ link.title }}
                        <span class="sr-only">This link leaves the page to a new tab or window</span>
                    </a>
                </li>
            </ul>


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