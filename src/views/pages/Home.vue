<template>
    <main>
    <h1>Hi {{ email }}</h1>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">List posts</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Created at</th>
                      <th style="width: 40px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="post in posts">
                      <td>{{ post.id }}</td>
                      <td>Update software</td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-danger">55%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    </main>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Home',

    data() {
        return {
            email: this.$store.getters.GET_AUTH_INFO.email,
            posts: []
        }
    },
    methods:{
        async getListPosts(){
            axios.get(base_path+'/blogs',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+this.$store.getters.GET_AUTH_TOKEN
                },
            })
            .then((res) => {
                    console.log(res)
                    this.posts = res.data.reverse()
                }).catch((error) => {
                    console.log(error.response.data)
                })
        }
    }
}
</script>