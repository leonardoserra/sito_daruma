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
        <div v-if="artistInfo" class="img-frame">
            <a :href="artistInfo.external_urls.spotify">
                <img :src="artistInfo.images[2].url">
            </a>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header{
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
            }
        }
    }
</style>
