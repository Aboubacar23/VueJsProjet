<template>
    <div>
        <h1> {{ pagetitle }}</h1>
        <ul>
           <ListItem
                v-for="item in list"
                :key="item"
                :item="item"      
            />
        </ul>
    </div>
</template>
<script>
import ListItem from './components/ListItem.v'
export default{
    name: "GroceryList",
    components: {
        ListItem
    },
    data(){
        return {
            list: ['pommes', 'bananes', 'cerises'],
            pagetitle: "Ma liste de courses"
        }
    }
}
</script>
<style scoped>

</style>