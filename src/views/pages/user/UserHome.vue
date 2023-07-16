<template>
    <body>
        <section class="shop_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Latest Products
                </h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3"  v-for="blog in blogs">
                    <div class="box" style="text-align: center;">
                        <router-link :to="{ name: 'DetailPost' , params: { id: blog.id }}">
                            <div class="img-box">
                                <img src="" alt="">
                            </div>
                            <div class="detail-box" style="color:red">
                                <h5>
                                    {{ blog.title }}
                                </h5>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    {{ blog.body }}
                                </h6>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="">
                    View All Products
                </a>
            </div>
        </div>
    </section>
    </body>
    
</template>
<script>
import "@/assets/css/style.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/responsive.css";
import "@/assets/css/style.css";
import axios from 'axios';
export default {
    name: 'UserHome',

    data() {
        return {
            blogs: []
        }
    },
    methods: {
        getListPosts() {
            axios.get('http://103.3.247.87:3000/home/listing', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((res) => {
                    console.log(res)
                    this.blogs = res.data.blogs.reverse()
                }).catch((error) => {
                    console.log(error.response)
                })
        }
    },
    created: function () {
        this.getListPosts()
    }
}
</script>