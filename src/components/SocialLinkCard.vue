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

</template>

<script setup lang="ts">
import { PropType } from 'vue';
import SocialCardInfo from '../interfaces/types';

defineProps({
    cardInfo: {
        type: Object as PropType<SocialCardInfo>,
        required: true,
    }
});
</script>

<style src="../scss/SocialLinkCard.scss" scoped />