<template>

    <!-- container -->
    <div class="container">

        <!-- avatar -->
        <img class="avatar" :src="cardInfo?.avatar" alt="Avatar Photo"/>

        <!-- name -->
        <p class="name">{{ cardInfo?.name }}</p>
        <!-- location -->
        <p class="residence">{{ cardInfo?.residence }}</p>

        <!-- bio -->
        <p class="bio">{{ cardInfo?.bio }}</p>

        <!-- links -->
        <div @click="redirect(link.url)" class="link" v-for="link in cardInfo?.links">
            <span class="link-text">{{ link.title }}</span>
        </div>

    </div>

</template>

<script setup lang="ts">
defineProps({ cardInfo: Object });

const redirect = (url) => {
    window.location.href = url;
}

console.log
</script>

<style src="../scss/SocialLinkCard.scss" scoped />