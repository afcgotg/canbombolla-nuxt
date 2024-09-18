<template>
    <nav class="pb-8">
        <ul class="flex justify-center">
            <li class="px-2" v-for="(item, index) in navItems" :key="index">
                <a class="p-4 text-primary text-2xl hover:bg-primary hover:text-white rounded" :href="item.url">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
interface NavItem {
    name: string,
    url: string
}

const navItems: NavItems[] = [
    { name: 'Inici', url: '#'},
    { name: 'Botiga', url: '#'},
    { name: 'Blog', url: '#'},
    { name: 'Agenda', url: '#'},
    { name: 'Sobre nosaltres', url: '#'},
    { name: 'Contacte', url: '#'},
];
</script>