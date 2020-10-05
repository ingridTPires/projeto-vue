<template>
    <div class="barraNav">
        <nav>
            <router-link to="/conteudos">Conteúdos</router-link>
            <router-link to="/conteudos-finalizados">Conteúdos Finalizados</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .barraNav {
        background-color: #333;
    }
    nav {
        padding: 15px 15px 15px 0px;
    }
    nav a {
        color: white;
        padding: 15px 15px;
        text-decoration: none;
    }
    nav a:hover {
        background-color: #111;
    }
</style>
