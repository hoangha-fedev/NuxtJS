<template>
    <section class="single-recipe">
        <h1>{{ recipe.title }}</h1>
        <div>
            <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
        </div>
        <p>{{recipe.descriptionText}}</p>
    </section>
</template>

<script>
// import Recipe from '@/components/Recipe'
export default {
    // components: {
    //     Recipe
    // },
    asyncData(context){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    recipe: [
                        {
                            id: "1",
                            title: "Delicious Food",
                            previewText: "Awesome Food",
                            descriptionText: "This is a really a delicious meal",
                            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
                        },
                        {
                            id: "2",
                            title: "Delicious Food 2",
                            previewText: "Awesome Food 2",
                            descriptionText: "This is a really a delicious meal",
                            thumbnail: "https://www.thesun.co.uk/wp-content/uploads/2019/12/Iceland_15PartyBundle_Lifestyle.png"
                        }
                    ].find(el => el.id === context.params.id)
                })
            }, 1000)
        })
    },
}
</script>

<style lang="scss">
.single-recipe { display: flex;flex-flow: column; justify-content: center; align-items: center;text-align: center;padding: 30px;}
.recipe-iamage {max-width: 100%;}
</style>