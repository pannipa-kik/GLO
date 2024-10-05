<script setup>
import { cardData } from '../../data/data.js';
</script>

<template>
    <v-row>
        <v-col cols="12" md="4" sm="6" v-for="(card, index) in cardData" :key="index">
            <Card
                :name="card.name"
                :date="card.date"
                :views="card.views"
                :likes="card.likes"
                :saves="card.saves"
                :title="card.title"
                :description="card.description"
                :chip="card.chip"
                :imageSrc="card.imageSrc"
                :avatarSrc="card.avatarSrc"
                :archive="card.archive"
                link="/knowledgeCenter/detail"
            />
        </v-col>
    </v-row>

</template>
