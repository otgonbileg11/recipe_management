<template>
    <div class="login-container">
        <div class="login">
            <h1>Sign In</h1>
            <button @click="signInWithFacebook" class="signInButton">SIGN IN WITH FACEBOOK</button>
            <NuxtLink :to="{name: 'meals'}" class="backButton">Back</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
        user: ''
        }
    },
    methods: {
      async signInWithFacebook() {
        var provider = new this.$fireModule.auth.FacebookAuthProvider();
        await this.$fire.auth.signInWithPopup(provider).then(
            this.$router.push('/profile')
        )
      }
    },
    async fetch() {
        await this.signInWithFacebook()
    },
    // check below code  
    // mounted() {
    //     this.$fire.auth.onAuthStateChanged(user => {
    //         this.user = user;
    //         if(this.user) {
    //             this.$router.push('/profile')
    //         }
    //     })
    // }
}
</script>

<style scoped>
.login-container {
    background-image: url(../assets/background-image.jpg);
    display:flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height:100vh;
}

.login {
    margin-bottom: 1rem;
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
    gap:1.5rem;
}
.signInButton {
    width: 300px;
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
.backButton {
    text-decoration: none;
    text-align: center;
    width:300px;
    margin-top: 2rem;
    color:#334155;
    padding: 1.5rem 3rem;
    background: rgba( 251, 123, 123, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    cursor: pointer;
}
</style>