<template>
    <section class="recipes">
        <Recipe v-for="recipe in recipes" :key="recipe.id" :thumbnail="recipe.thumbnail" :title="recipe.title" :id="recipe.id" :previewText="recipe.previewText" />
    </section>
</template>

<script>
import Recipe from '@/components/Recipe'
export default {
    components: {
        Recipe
    },
    asyncData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    recipes: [
                        {
                            id: "1",
                            title: "Delicious Food",
                            previewText: "Awesome Food",
                            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
                        },
                        {
                            id: "2",
                            title: "Delicious Food 2",
                            previewText: "Awesome Food 2",
                            thumbnail: "https://www.thesun.co.uk/wp-content/uploads/2019/12/Iceland_15PartyBundle_Lifestyle.png"
                        }
                    ]
                })
            }, 1000)
        })
    },
}
</script>

<style lang="scss">
.recipes {
    display: flex; flex-flow: wrap; justify-content: center;
}

.recipe {
    box-sizing: border-box; width: 280px; padding: 8px; border: 1px solid #ccc; box-shadow: 0 2px 2px #aaa; margin: 10px;
}

.thumbnail {
    background: {position: center; size: cover}
    width: 100%; height:200px
}
</style>