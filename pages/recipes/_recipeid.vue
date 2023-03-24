<template>
    <Loading v-if="$fetchState.pending" />
    <div v-else class="single-recipe-container">
        <div class="singleRecipe">
            <NuxtLink :to="{name: 'meals'}" class="link">
                <div class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                    </svg>
                    <h4>Back</h4>
                </div>
            </NuxtLink>
            <div class="content">
                <img :src="`${this.recipe.strMealThumb}`" alt="" class="image"/>
                <div class="right-content">
                    <h1>{{ this.recipe.strMeal }}</h1>
                    <div>
                        <p class="instructions"><b>Instruction:</b>
                            {{ this.recipe.strInstructions }}
                        </p>
                    </div>
                    <h3>Ingredients:</h3>
                    <div class="ingredient-list">
                        <div v-for="ingredient in this.ingredients" :key="ingredient">
                            <li class="list">{{ ingredient }}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'single-recipe',
    head() {
        return {
            title: this.recipe.strMeal,
        }
    },

    data() {
        return {
            recipe: '',
            ingredients: []
        }
    },

    async fetch() {
        await this.getSingleRecipe()
        this.getRecipe()
    },

    fetchDelay: 1200,

    methods: {
        async getSingleRecipe() {
            const data = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.recipeid}`).then((res) => res.json())
            this.recipe = data.meals[0]
        },
        getRecipe() {
        let count = 1;
        for(let i in this.recipe) {
            let ingredient = ""
            let measure = ""
            if(i.startsWith("strIngredient") && this.recipe[i]) {
                ingredient = this.recipe[i];
                measure = this.recipe[`strMeasure` + count];
                count += 1;
                this.ingredients.push(`${measure} ${ingredient}`)
            }
        }
    },

        
    }

}
</script>

<style scoped>
.link {
    text-decoration: none;
}
.back-button {
    height: 30px;
    display:flex;
    align-items:normal;
    gap: .5rem;
    padding-top: .5rem;

}

h4 {
    text-decoration:none;
    text-align: center;
    color:#334155;
}

.svg {
    align-self: center;
    height: 30px;
    width: 30px;  
    margin-bottom: .5rem;
    color:#334155;
}
.single-recipe-container {
    display:flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height:100vh;
    flex-direction: column;
    background-color:#334155;
}

.singleRecipe {
    margin-bottom: 1rem;
    width: 1200px;
    height: 600px;
    background-color: white;
    border-radius: 1.75rem;
    padding: .5rem 1.75rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.image {
    height: 90%;
    padding-top: .5rem;
}
.content {
    display:flex;
    width: 100%;
    height: 100%;
}
.right-content {
    display:flex;
    flex-direction: column;
    padding-left: 1rem;
}

.instructions {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: .9rem;
}
.ingredient-list {
    padding-top: 1rem;
    display:flex;
    gap: .25rem;
    flex-wrap: wrap;
}
</style>