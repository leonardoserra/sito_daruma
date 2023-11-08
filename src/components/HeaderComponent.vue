<script >
export default {
    name: 'HeaderComponent',
    props:{
        artistInfo : Object
    }
}
</script>

<template>
    <header class="header">
        <div v-if="artistInfo" class="title">
            {{ artistInfo.type }}<br/>
            {{ artistInfo.name }}
        </div>
        <div v-else>
            ARTIST
        </div>
        <div v-if="artistInfo" class="img-frame">
            <a :href="artistInfo.external_urls.spotify" target="_blank">
                <img :src="artistInfo.images[2].url">
            </a>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header{
        position: fixed;
        top:0;
        left: 0;
        z-index: 1000;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        background-color:#1fdf64;  
        height: 110px;
        padding: 5px 10px;
        .title{
            align-self: center;
            padding: 0 5px 0 5px;
            font-size: 2rem;
            text-transform: uppercase;
        }
        .img-frame{
            align-self: center;
            width: 100px;
            height: 100px;
            img{
                border-radius: 50%;
                width: 100%;
                height: 100%;
                object-fit: cover;
                box-shadow: 0px 0px #888888;
                transition: all .3s ease-in-out; 
                &:hover{ 
                    box-shadow: 0 0  20px #7efead;
                }
            }
        }
    }
</style>
