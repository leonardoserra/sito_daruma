<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import axios from 'axios';

  export default {
    name: 'HomePage',

    data() {
        return {
            name: "PROVA",
            token: "",
            artistInfo: null,
            artistId: "6zUJZaqND4ZduOsIXRH8Sb",
            errorMessage: ""
        }
    },
    components:{
        HeaderComponent
    },
    methods: {
        
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
                    console.log(response.data.access_token);
                    this.token =  response.data.access_token;
                });
        },

        getArtistInfo(token){
            console.log("provo a stampare");
            
            if(token.message){
                this.errorMessage = token.message;
                return;
            }
            console.log(token);
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
    props: {

    },
    mounted(){
        // console.log("mounted attivato");
        this.getArtistToken();
        console.log(this.token);
    },
    updated(){
        this.getArtistInfo(this.token);
    }
    
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  {{ artistInfo ?? errorMessage}}
</template>

<style scoped>

</style>
