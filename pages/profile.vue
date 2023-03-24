<template>
    <div class="profile-container">
        <div class="logout">
            <h1>Signed In</h1>
            <NuxtLink :to="{name: 'meals'}" class="button-light">Browse Recipes</NuxtLink>
            <button @click="logout" class="logout-button">Log Out</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    middleware: 'auth',
    methods: {
        async logout() {
        await this.$fire.auth.signOut()
        this.$router.push('/login')
            },
    },
    // // beforeCreate() {
    // //     this.$fire.auth.onAuthStateChanged(user => {
    // //         if(!user) {
    // //             this.$router.push('/login')
    // //         }
    // //     })
        
    // }   

}
</script>

<style scoped>

.profile-container {
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height:100vh;
}

.logout {
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 1.75rem;
    padding: 1.75rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.button-light {
    text-decoration: none;
    margin-top: 2rem;
    color:#334155;
    padding: 1.5rem 3rem;
    background: rgba(255, 224, 123, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(255, 224, 123, 0.3);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
}
</style>