<script>
// import {apiMethods} from '../methods.js';
export default{
    name:'MainComponent',
    data(){
        return{
            message:"L'artista non ha ancora pubblicato un album"
    }
    },
    
    props:{
        artistInfo : Object,
        artistAlbums : Object,
        artistId: String
    }
   
}
</script>

<template>
    <main>
        <div v-if="artistAlbums" class="albums-container">
            <div  v-for="(album,index) in artistAlbums.items" :key="index" class="album-card">
                <a class="album-link" :href="album.external_urls.spotify">
                    <h4 class="album-name">
                        {{ album.name }}
                    </h4>
                    <img class="album-image" :src="album.images[1].url" :alt="album.name +' image'">
                </a>
            </div>
        </div>
        <div v-else>
           {{ message }}
        </div>
    </main>
</template>

<style scoped lang="scss">
main{
    // height: calc(100vh - 110px);
    background-color: aqua;

    .albums-container{
        padding: 20px 20px 30px 20px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 1400px;
        height: 100%;
        background-color: rgb(255, 247, 0);
        .album-card{
            min-width: calc(100% / 3 - 40px);
        }
    }
}
</style>