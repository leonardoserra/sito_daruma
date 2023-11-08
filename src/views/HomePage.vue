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
            artistAlbums: null,
            artistInfo: null,
            errorMessage: ""
        }
    },
    components:{
        HeaderComponent,
        MainComponent
    },
    methods: {
        //return the token from spotify api
        getArtistToken(){
             axios.post("https://accounts.spotify.com/api/token", 
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
                    return error;
                }).then( response=>{
                    // console.log(response.data.access_token);
                    return response.data.access_token;
                });
        },
        
        async getArtistInfo(){
            const token = await this.getArtistToken();
            
            axios.get(`https://api.spotify.com/v1/artists/${this.artistId}`,{
                headers:{
                    "Authorization": `Bearer ${this.token}`
                }
            }).catch(error=>{
                console.log(error.message);
                return error.message;
            }).then(response=>{
                console.log(response.data);
                this.artistInfo = response.data;
            });
        },

        async getArtistAlbums(){
            const token = await this.getArtistToken();
            
            axios.get(`https://api.spotify.com/v1/artists/${this.artistId}/albums`,{
                headers:{
                    "Authorization": `Bearer ${this.token}`
                }
            }).catch(error=>{
                console.log(error.message);
                return error.message;
            }).then(response=>{
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
