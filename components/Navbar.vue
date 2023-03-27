<template>
    <header>
        <div>
            <h1><NuxtLink class="link home" to="/">Home</NuxtLink></h1>
        </div>
        <div class="top-right">
            <h1><NuxtLink class="link" to="/meals">Browse Recipes</NuxtLink></h1>
            <p>|</p>
            <h1 v-if="isLoggedIn === false"><NuxtLink class="link" to="/login">Login</NuxtLink></h1>
            <h1 v-else><NuxtLink class="link" to="/profile">Profile</NuxtLink></h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'recipe',
    data() {
        return {
            isLoggedIn: false
        }
    },  
    beforeMount () {
        if(this.$store.state.authUser) {
        this.isLoggedIn = true
        }else this.isLoggedIn = false
    }
}
</script>

<style scoped>

    header h1 {
        color:white;
        font-size: 1.5rem;
    }
    .home {
        margin-left: 2rem;
    }

    header p {
        color: gray;
        font-size: 2rem;
    }

    header {
        z-index: 1000;
        position:fixed;
        margin-bottom: 1rem;
        margin-top: 1rem;
        height: 10px;
        width: 100vw;
        padding: 1.5rem;
        padding-right: 2.5rem;
        background-color: transparent;
        border: none;
        display:flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .top-right {
        display:flex;
        align-items: center;
        gap: 1rem;
    }
    .link {
        text-decoration: none;
        color:white;
    }

</style>