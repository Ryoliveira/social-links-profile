<script setup lang="ts">
import SocialLinkCard from './components/SocialLinkCard.vue';
import avatarImg from './assets/avatar-ryan.jpg';

const cardInfo = {
  name: "Ryan Oliveira",
  avatar: avatarImg,
  residence: "California, United States",
  bio: "\"Front-end developer and avid gamer.\"",
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/Ryoliveira'
    },
    {
      title: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/profile/Ryoliveira'
    },
    {
      title: 'LinkedIn',
      url: '#'
    },
    {
      title: 'Twitter',
      url: '#'
    },
    {
      title: 'Instagram',
      url: '#'
    }
  ],
}
</script>

<template>
  <SocialLinkCard :card-info="cardInfo" />
</template>
