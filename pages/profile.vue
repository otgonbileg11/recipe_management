<template>
    <div>
        <p>Signed In</p>
        <button @click="logout">Log Out</button>
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