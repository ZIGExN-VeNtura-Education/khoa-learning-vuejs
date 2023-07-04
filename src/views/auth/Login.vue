<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="adminLogin">
                        <div class="input-group mb-3">
                            <input type="email" name="email" class="form-control" placeholder="Email" v-model="form.user.email">
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="form.user.password">
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <!-- /.social-auth-links -->
                    <p class="mb-0">
                        <router-link :to="{ name: 'Register' }" class="text-center">Register a new membership</router-link>
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data(){
            return {
                form: {
                    user: {
                        email: null,
                        password: null,
                    }
                }
            }
        },

        methods: {
            adminLogin(){
                this.$store.dispatch("LOGIN",{ user: {email: this.form.user.email, password: this.form.user.password}})
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