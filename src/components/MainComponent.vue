<script>
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
    },
    methods:{
         getEmbeddedItemLink(item){
            const id = item.id;
            return `https://open.spotify.com/embed/album/${id}?utm_source=generator`;
        }
    }
   
}
</script>

<template>
    <main>
        <section class="section">
            <h1 >
                <em>
                    <span class="label">
                        Discography
                    </span>
                </em>
           </h1>
            <div v-if="artistAlbums" class="container">
                <div v-for="(album,index) in artistAlbums.items" :key="index" class="card">
                    <!-- <template v-if="album.total_tracks > 1 && album.artists[0].name === 'Daruma'"> -->
                        <a class="link" :href="album.external_urls.spotify" target="_blank">
                            <h4 class="name">
                                {{ album.name }}
                            </h4>
                            <img class="image" :src="album.images[1].url" :alt="album.name +' image'" loading="lazy">
                        </a>

                        <!-- embedding music -->
                            <iframe class="player" style="border-radius:12px" :src="getEmbeddedItemLink(album)"  frameBorder="0"  allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <!-- </template> -->
             
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
    position: relative;
    height: calc(100vh - 90px);
    margin-top: 90px;
    overflow-y: scroll;
    background-color: rgb(44, 44, 44);
    .label{
        position: absolute;
        top: 8px;
        left: 80px;
        padding: 5px 15px;
        border-radius: 0px 10px 10px 0;
        border-left: 10px solid rgb(234, 30, 30);
        text-align: start;
        background-color: rgb(141, 243, 101) ;
        font-size: 2rem;
        color:#232323;
        text-shadow: 0px 0px 30px #29479f61;
    }
    .container{
        padding: 20px 20px 30px 20px;
        margin: auto;
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3 ,minmax(200px, 1fr));
        gap:5px;
        width: 1400px;
        min-width: 500px;
        height: 100%;
        background-color:rgba(255, 255, 255, 0.6);
        
        .card{
            margin: 15px 0 10px 0;
            text-align: center;
            .name{
                height: 30px;
                transition: all .3s ease-in-out;
                color: black; 
                margin-bottom: 15px;
                
                &:hover{ 
                    font-size: 1.1rem;
                }
            }
           .link{
                text-decoration: none;
            }
           .image{
                border-radius: 5px;
                box-shadow: 0px 0px #2a2a2a;
                transition: all .2s ease-in-out; 
                &:hover{ 
                    transform:translate(5px,-5px);
                    box-shadow: -10px 10px #2a2a2a;
                }
            }
            .player{
                margin-top: 10px;
                width: 70%;
                height: 152px;
            }
        }
    }
}
@media all and (max-width: 1400px) {
    main {
        height: calc(100vh - 70px);
        margin-top: 70px;
        .label{
            top:15px;
            left: 80px;
            padding: 3px 7px;
            font-size: 1.9rem;
            border-left: 5px solid rgb(234, 30, 30);

        }
        .container{
       
        grid-template-columns:repeat(2, minmax(200px, 1fr));
        width: 900px;
        min-width: 400px;
        .card{
            margin: auto;
            min-width: 300px;
        }

    }
}
}
@media all and (max-width: 900px) {
    main{
        .label{
            top:25px;
            left: 45px;
            padding: 3px 7px;
            font-size: 1.3rem;
        }
        .container{
            display: block;
            grid-template-columns:none;
            padding: 0;
            width: 400px;
            min-width: 300px;
            .card{
                margin: auto;
                min-width: 300px;
            }

        }
    }
}

</style>