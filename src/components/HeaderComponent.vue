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
        <div v-if="artistInfo" class="img-frame">
            <a :href="artistInfo.external_urls.spotify" target="_blank">
                <img :src="artistInfo.images[2].url">
            </a>
        </div>
        <div v-if="artistInfo" class="title">
            <span>
                {{ artistInfo.name }}
            </span>
        </div>
        <div v-if="artistInfo" class="followers">
            <span class="content">
                &hearts; {{  artistInfo.followers.total  }}
            </span>
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
        //header height is subtracted from main height
        height: 110px;
        padding: 5px 10px;
        align-items: center;
        .img-frame{
            padding-left: 15px;
            text-align: start;
            width: calc(100% / 3);
            height: 80px;
            img{
                border-radius: 50%;
                width: 80px;
                height: 80px;
                object-fit: cover;
                box-shadow: 0px 0px #55ff93;
                transition: all .8s ease-in-out; 
                border: solid 1px rgb(36, 242, 9);

                &:active{ 
                    border: solid 5px rgb(36, 242, 9);
                    box-shadow: 0 0 20px #55fe93;
                    transform: rotateY( -360deg );
                }
            }
        }
        .title{
            text-align: center;
            width: calc(100% / 3);
            align-self: center;
            padding: 0 5px 0 5px;
            font-size: 4rem;
            font-weight: 600;
            text-transform: uppercase;
        }
        .followers{
            padding-right: 15px;
            text-align: end;
            width: calc(100% / 3);
            font-size: 1.6rem;
        }

        .content{
            border-radius: 10px;
            background-color: rgb(229, 255, 127);
            padding: 10px 20px;
        }
    }
</style>
