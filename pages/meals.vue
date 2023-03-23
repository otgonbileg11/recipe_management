<template>
    <div>
        <Navbar />
        <div class="meals-container">
            <div id="recipe-grid" class="recipe-grid">
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
                    <NuxtLink class="button" :to="{name: 'recipes-recipeid', params: {recipeid: meal.idMeal}}">Get More Info</NuxtLink>
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
            }
        },
        async fetch() {
            const data = await fetch('https://themealdb.com/api/json/v1/1/search.php?s=' + 'dumpling').then((res) => res.json())
            data.meals.forEach((meal) => {
                this.recipes.push(meal)
            })
        },

        methods: {

        }
    }
</script>

<style scoped>
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
        background-color: white;
        border-radius: 1.75rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .recipe {
        margin: 1rem;
        display:flex;
        flex-direction: column;
    }
    .recipe-img {
        position:relative;
        overflow:hidden;
        /* border-radius: 60px 60px 0 0; */
    }
    .image {
        display:block;
        width: 400px;
        /* border-radius: 60px 60px 0 0; */
    }
    .instruction {
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
    }
    .category-container {
        display:flex;
        gap: .5rem;
        margin-top: .75rem;
    }

    .category {
        width: 20%;
        padding: .2rem .5rem;
        background: rgba(255, 224, 123, 0.4);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);
        border: 1px solid rgba(255, 224, 123, 0.3);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .button {
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
    .button:hover {
        background-color: #FAD02C;
        border: 0;
    }

    .info {
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-top: .5rem;   
    }

    .heart {
        width: 30px;
        cursor: pointer;
    }

    .heart:hover {
        fill:pink;
    }

</style>