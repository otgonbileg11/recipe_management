<template>
    <div>
        <p>Sign In</p>
        <button @click="signInWithFacebook">SIGN IN WITH FACEBOOK</button>
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
        await this.$fire.auth.signInWithPopup(provider).then(user => {
            console.log(user);
            this.$router.push('/profile')
        })
      }
    },

    mounted() {
        this.$fire.auth.onAuthStateChanged(user => {
            this.user = user;
            if(this.user) {
                this.$router.push('/profile')
            }
        })
    }
}
</script>
