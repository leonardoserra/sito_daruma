<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import axios from 'axios';
MainComponent

  export default {
    name: 'HomePage',

    data() {
        return {
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
                    client_id: "998481fea10a46fc9478a6c2a4ef75ff",
                    client_secret: "8332585bb2e0426f878d6f5cca316e20"
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
