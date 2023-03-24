<template>
    <div>
        <div class="header">
            <div class="searchbar">
                <input type="text" name="search" placeholder="Search..." @keyup.enter="$fetch" v-model="searchInput"/>
                <button v-show="searchInput !== ''" @click="clearSearch" type="submit" name="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p>|</p>
            <h1 v-if="isLoggedIn === false"><NuxtLink class="link" to="/login">Login</NuxtLink></h1>
            <h1 v-else><NuxtLink class="link" to="/profile">Profile</NuxtLink></h1>
            <div></div>
        </div>
        <Loading v-if="$fetchState.pending"/>
        <div v-else class="meals-container">
            <div v-if="searchInput === ''" id="recipe-grid" class="recipe-grid">
                <div class="recipe" v-for="(meal, index) in recipes" :key="index">
                    <div class="recipe-img">
                        <img :src="`${meal.strMealThumb}`" alt="" class="image"/>
                        <p class="instruction">{{ meal.strInstructions.slice(0,200) }}...</p>
                    </div>
                    <div class="info">
                        <p class="title">{{ meal.strMeal }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="heart">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </div>
                    <div class="category-container">
                        <button class="category">{{ meal.strCategory }}</button>
                        <button class="category">{{ meal.strArea }}</button>
                    </div>
                    <NuxtLink class="button-light" :to="{name: 'recipes-recipeid', params: {recipeid: meal.idMeal}}">Get More Info</NuxtLink>
                </div>
            </div>
            <div v-else id="recipe-grid" class="recipe-grid">
                <div class="recipe" v-for="(meal, index) in searchedRecipes" :key="index">
                    <div class="recipe-img">
                        <img :src="`${meal.strMealThumb}`" alt="" class="image"/>
                        <p class="instruction">{{ meal.strInstructions.slice(0,200) }}...</p>
                    </div>
                    <div class="info">
                        <p class="title">{{ meal.strMeal }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="heart">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </div>
                    <div class="category-container">
                        <button class="category">{{ meal.strCategory }}</button>
                        <button class="category">{{ meal.strArea }}</button>
                    </div>
                    <NuxtLink class="button-light" :to="{name: 'recipes-recipeid', params: {recipeid: meal.idMeal}}">Get More Info</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recipes: [],
                searchInput: '',
                searchedRecipes: [],
                isLoggedIn: false
            }
        },
        beforeMount () {
        if(this.$store.state.authUser) {
            this.isLoggedIn = true
            }
        else this.isLoggedIn = false
        },

        async fetch() {
            if (this.searchInput === '') {
                await this.getRecipes()
                return
            }
            if(this.searchedRecipes.length > 1) {
                this.searchedRecipes = []
            }   
            await this.searchRecipes()
            
        },

        fetchDelay: 1200,

        methods: {
            async getRecipes() {
                const data = await fetch('https://themealdb.com/api/json/v1/1/random.php').then((res) => res.json())
                data.meals.forEach((meal) => {
                this.recipes.push(meal)
                })
                const data1 = await fetch('https://themealdb.com/api/json/v1/1/random.php').then((res) => res.json())
                data1.meals.forEach((meal) => {
                this.recipes.push(meal)
                })
                const data2 = await fetch('https://themealdb.com/api/json/v1/1/random.php').then((res) => res.json())
                data2.meals.forEach((meal) => {
                this.recipes.push(meal)
                })
            },
            async searchRecipes() {
                const data = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${this.searchInput}`).then((res) => res.json())
                data.meals.forEach((meal) => {
                this.searchedRecipes.push(meal)
            })
            },
            clearSearch() {
                this.searchInput = ''
                this.searchedRecipes = []
            }
        }
    }
</script>

<style scoped>
    .svg {
        width: 15px;
        height: 15px;
        color:#334155;
    }
    button {
        background-color:white;
        color:white;
        border-radius: 100%;
        width: 40px;
        font-size: 1rem;
        cursor:pointer;
        border: none;
        margin: .25rem;
    }
    input {
        flex: 1;
        padding-left: 1.2rem;
        font-size: 1rem;
        border-radius: 60px;
        outline: none;
        border:0;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }

    .searchbar {
        width:255px;
        font-size: 1rem;
        border-radius: 60px;
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: space-between;
        overflow:hidden;
        filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)); 
    }

    .header p {
        color: gray;
        font-size: 2rem;
    }

    .header {
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
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }

    .link {
        text-decoration: none;
        color:white;
    }
    .meals-container {
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: #334155;
    }

    .recipe-grid {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap:wrap;
        
    }
    .recipe {
        margin: 1rem;
        display:flex;
        flex-direction: column;
        background-color: white;
        border-radius: 1.75rem;
        padding: 1.75rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .recipe-img {
        position:relative;
        overflow:hidden;
        /* border-radius: 60px 60px 0 0; */
    }
    .image {
        display:block;
        width: 350px;
        /* border-radius: 60px 60px 0 0; */
    }
    .instruction {
        width: 350px;
        z-index:1000;
        line-height: 30px;
        position:absolute;
        background-color: #FAD02C;
        padding: 12px;
        color: black;
        transform: translateY(100%);
        transition: 0.3s ease-in-out all;
        bottom:0px;
    }
    .recipe-img:hover .instruction {
        transform: translateY(0);
    }

    .title {
        font-size:larger;
        font-weight: 900;
        text-overflow:wrap;
    }
    .category-container {
        display:flex;
        gap: .5rem;
        margin-top: .75rem;
    }

    .category {
        width: 30%;
        color:#334155;
        padding: .2rem .5rem;
        background: rgba(255, 224, 123, 0.4);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);
        border: 1px solid rgba(255, 224, 123, 0.3);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .button-light {
        width: 80%;
        margin-top: 1rem;
        font-weight: 300;
        border: solid 2px black;
        outline: 0;
        text-align: center;
        padding: 0.75rem 2rem;
        font-size: 1.5rem;
        letter-spacing: .08rem;
        background-color: white;
        border-radius: 1rem;
        cursor: pointer;
        text-decoration: none;
        color: black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    .button-light:hover {
        background-color: #FAD02C;
        border: 0;
    }

    .info {
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-top: .5rem; 
        width:350px;  
    }

    .heart {
        width: 30px;
        cursor: pointer;
    }

    .heart:hover {
        fill:pink;
    }

</style>