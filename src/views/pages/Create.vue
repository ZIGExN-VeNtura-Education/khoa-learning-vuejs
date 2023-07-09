<template>
       <!-- Main content -->
       <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Create Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="createPost">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" class="form-control" v-model="form.post.email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Body</label>
                    <input type="text" class="form-control"  v-model="form.post.body">
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                     <div class="custom-file">
                        <input type="file">
                        <label class="custom-file-label" for="exampleInputFile" >Choose file</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" class="form-control"  v-model="form.post.description">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button type="submit">Create</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
          <!--/.col (left) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</template>
<script>
import axios from 'axios';
export default {
    name: 'Create',

    data() {
        return {
            form: {
                post: {
                    title: null,
                    body: null,
                    image: null,
                    description: null,
                }
            }
        }
    },
    methods:{
        createPost(){
            axios.post('/blogs',this.form.post ,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.getters.GET_AUTH_TOKEN
                },
            })
            .then((res) => {
                    console.log(res)
                    this.$router.push({ name: 'Home'});
            }).catch((error) => {
                console.log(error.response.data)
            })
        }
    }
}
</script>