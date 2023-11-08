<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import axios from 'axios';
import {store} from '../store'
MainComponent

  export default {
    name: 'HomePage',

    data() {
        return {
            store,
            artistId: "6zUJZaqND4ZduOsIXRH8Sb",
            token: null,
            artistAlbums: null,
            artistInfo: null,
            artistErrorMessage: "",
            albumsErrorMessage: ""
        }
    },
    components:{
        HeaderComponent,
        MainComponent
    },
    methods: {
        //return the token from spotify api
        getArtistToken(){
            return axios.post("https://accounts.spotify.com/api/token", 
                {
                    grant_type:"client_credentials",
                    client_id: store.client_id,
                    client_secret: store.client_secret
                }, 
                {
                    headers:{
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).catch(error =>{
                    console.log(error.message);
                    this.artistErrorMessage = error.message;
                }).then( response=>{
                    // console.log(response.data.access_token);
                    this.token =  response.data.access_token;
                });
        },
        
        async getArtistInfo(){
            await this.getArtistToken();
            
            axios.get(`https://api.spotify.com/v1/artists/${this.artistId}`,{
                headers:{
                    "Authorization": `Bearer ${this.token}`
                }
            }).catch(error=>{
                console.log(error.message);
                this.albumsErrorMessage = error.message;
            }).then(response=>{
                console.log("ARTIST");
                console.log(response.data);
                this.artistInfo = response.data;
            });
        },

        async getArtistAlbums(){

            await this.getArtistToken();
            axios.get(`https://api.spotify.com/v1/artists/${this.artistId}/albums`,
            {
                params:{
                    limit: 50
                },
                headers:{
                    "Authorization": `Bearer ${this.token}`
                }
            }).catch(error=>{
                console.log(error.message);
                return error.message;
            }).then(response=>{
                console.log("ALBUM");
                console.log(response.data);
                this.artistAlbums = response.data;
            });
        }
    },
    mounted(){
        this.getArtistInfo();
        this.getArtistAlbums();
    }
}
</script>

<template>
    <body>
        
    </body>
    <HeaderComponent
        :artistInfo = artistInfo>
    </HeaderComponent>
    
    <MainComponent
        :artistInfo = artistInfo 
        :artistAlbums = artistAlbums 
        :artistId = artistId>
    </MainComponent>
</template>

<style scoped>

</style>
