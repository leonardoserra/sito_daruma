<script>
// import {apiMethods} from '../methods.js';
export default{
    name:'MainComponent',
    data(){
        return{
            albumMessageError:"L'artista non ha ancora pubblicato un album",
            singleMessageError:"L'artista non ha ancora pubblicato singoli"
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
        <section id="section">
            <h1 class="label">ALBUM</h1>
            <div v-if="artistAlbums" class="container">
                <div v-for="(album,index) in artistAlbums.items" :key="index" class="card">
                    <div v-if="album.album_type === 'album'" class="type ">
                        <a class="link" :href="album.external_urls.spotify">
                            <h4 class="name">
                                {{ album.name }}
                            </h4>
                            <img class="image" :src="album.images[1].url" :alt="album.name +' image'">
                        </a>
                    </div>
                </div>
            </div>
            <div v-else>
            {{ albumMessageError }}
            </div>
        </section>

        <section id="section">
            <h1 class="label">SINGOLI</h1>
            <div v-if="artistAlbums" class="container">
                <div v-for="(single,index) in artistAlbums.items" :key="index" class="card">
                        <div v-if="single.album_type === 'single'" class="type ">
                            <a class="link" :href="single.external_urls.spotify">
                                <h4 class="name">
                                    {{ single.name }}
                                </h4>
                                <img class="image" :src="single.images[1].url" :alt="single.name +' image'">
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div v-else>
                    {{ singleMessageError }}
                </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
main{
    // height: calc(100vh - 110px);
    background-color: aqua;
    
    .container{
        padding: 20px 20px 30px 20px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 1400px;
        height: 100%;
        background-color: rgb(255, 247, 0);
        .card{
            margin: 10px 0 10px 0;
            min-width: calc(100% / 3 - 50px);
            text-align: center;
            background-color: beige;
           .link{
            text-decoration: none;
            color: red;
           }
        }
    }
}
</style>