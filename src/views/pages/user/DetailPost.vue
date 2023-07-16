<template>
    <div>
        <h3>{{ postDetail.title }}</h3>
        <p>{{ postDetail.body }}</p>
        <p>author: {{ postDetail.author }}</p>
    </div>
    <br>
    <hr/>
    <section class="shop_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Recent posts
                </h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3"  v-for="recentPost in recentPosts">
                    <div class="box" style="text-align: center;">
                        <router-link :to="{ name: 'DetailPost' , params: { id: recentPost.id }}">
                            <div class="img-box">
                                <img src="" alt="">
                            </div>
                            <div class="detail-box" style="color:red">
                                <h5>
                                    {{ recentPost.title }}
                                </h5>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    {{ recentPost.body }}
                                </h6>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="shop_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Trending posts
                </h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3"  v-for="trendingPost in trendingPosts">
                    <div class="box" style="text-align: center;">
                        <router-link :to="{ name: 'DetailPost' , params: { id: trendingPost.id }}">
                            <div class="img-box">
                                <img src="" alt="">
                            </div>
                            <div class="detail-box" style="color:red">
                                <h5>
                                    {{ trendingPost.title }}
                                </h5>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    {{ trendingPost.body }}
                                </h6>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import "@/assets/css/style.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/responsive.css";
import "@/assets/css/style.css";
import axios from 'axios';
export default {
    name: 'DetailPost',

    data() {
        return {
            postID: this.$route.params.id,
            postDetail: '',
            recentPosts: [],
            trendingPosts: []
        }
    },
    methods: {
        getDetailPost() {
            axios.get('http://103.3.247.87:3000/home/detail/' + this.postID, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    this.postDetail = res.data
                }).catch((error) => {
                    console.log(error.response)
                })
        },
        getRecentPost(){
            axios.get('http://103.3.247.87:3000/home/recent', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    console.log(res)
                    this.recentPosts = res.data.reverse()
                }).catch((error) => {
                    console.log(error.response)
                })
        },
        getTrendingPost(){
            axios.get('http://103.3.247.87:3000/home/trending', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    console.log(res)
                    this.trendingPosts = res.data.reverse()
                }).catch((error) => {
                    console.log(error.response)
                })
        }
    },
    created: function () {
        this.getDetailPost(),
        this.getRecentPost(),
        this.getTrendingPost()
    }
}
</script>