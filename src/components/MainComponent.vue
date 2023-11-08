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
        <section class="section">
            <h1 class="label">
                <em>
                    Album
                </em>
           </h1>
            <div v-if="artistAlbums" class="container">
                <div v-for="(album,index) in artistAlbums.items" :key="index" class="card">
                        <a class="link" :href="album.external_urls.spotify" target="_blank">
                            <h4 class="name">
                                {{ album.name }}
                            </h4>
                            <img class="image" :src="album.images[1].url" :alt="album.name +' image'">
                        </a>
                </div>
            </div>
            <div v-else>
            {{ albumMessageError }}
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
main::-webkit-scrollbar {
        display: none;
    }

main{
    height: calc(100vh - 110px);
    margin-top: 110px;
    overflow-y: scroll;
    background-color: rgb(252, 255, 168);
    .label{
        text-align: center;
        font-size: 3rem;
        color:#ff0000;
        text-shadow: 0px 0px 20px #ffb1b1;
    }
    .container{
        padding: 20px 20px 30px 20px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 1400px;
        height: 100%;
        background-color: aqua;
        .card{
            margin: 15px 0 10px 0;
            min-width: calc(100% / 3 - 50px);
            text-align: center;
            .name{
                height: 30px;
                transition: all .3s ease-in-out;
                color: black; 
                
                &:hover{ 
                    font-size: 1.1rem;
                    // transform: translateX(-10px);
                }
            }
           .link{
                text-decoration: none;
            }
           .image{
                border-radius: 5px;
                box-shadow: 0px 0px #191919;
                transition: all .3s ease-in-out; 
                &:hover{ 
                    transform:translate(5px,-5px);
                    box-shadow: -10px 10px #191919;
                }
            }
        }
    }
}
</style>