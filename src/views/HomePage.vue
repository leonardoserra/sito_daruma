<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import axios from 'axios';

  export default {
    name: 'HomePage',

    data() {
        return {
            name: "PROVA",
            artistInfo: null,
            artistId: "6zUJZaqND4ZduOsIXRH8Sb",
            errorMessage: ""
        }
    },
    components:{
        HeaderComponent
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
                    return error;
                }).then( response=>{
                    // console.log(response.data.access_token);
                    this.token =  response.data.access_token;
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
        }
    },
    mounted(){
        this.getArtistInfo();
    }
    
}
</script>

<template>
  <HeaderComponent :artistInfo = this.artistInfo></HeaderComponent>
</template>

<style scoped>

</style>
