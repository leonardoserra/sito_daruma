<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import axios from 'axios';

  export default {
    name: 'HomePage',

    data() {
        return {
            name: "PROVA",
            artistInfo: []
        }
    },
    components:{
        HeaderComponent
    },
    methods: {
        
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
                    return error.message;
                }).then( response=>{
                    console.log(response.data.access_token);
                    return response.data.access_token;
                });

        },
        getArtistInfo(){
            const token = this.getArtistToken();
        }
    },
    props: {

    },
    mounted(){
        console.log("STAMPA");
        // this.getArtistToken();
    }
    
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
</template>

<style scoped>

</style>
