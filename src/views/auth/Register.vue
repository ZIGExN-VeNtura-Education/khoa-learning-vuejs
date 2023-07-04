<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register</p>

                    <form @submit.prevent="adminRegister">
                        <div class="input-group mb-3">
                            <input type="email" name="email" class="form-control" placeholder="Email" v-model="form.user.email">
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="form.user.password">
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password"
                                v-model="form.user.password_confirmation">
                        </div>
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Register</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <!-- /.social-auth-links -->
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            form: {
                user: {
                    email: null,
                    password: null,
                    password_confirmation: null
                }
            }
        }
    },

    methods: {
        adminRegister() {
            console.log(this.form);
            axios.post('http://103.3.247.87:3000/api/v1/sign_up', {
                user: {
                    email: this.form.user.email,
                    password: this.form.user.password,
                    password_confirmation: this.form.user.password_confirmation,
                }
            })
                .then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error.response.data)
                })
        }
    }
}
</script>