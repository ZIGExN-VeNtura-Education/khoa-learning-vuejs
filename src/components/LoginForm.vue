<template>
    <div id="login-form">
        <form>
            <h1>Authentication</h1>
            <p>Fill out this form to login.</p>

            <div>
                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                />
            </div>
           
            <div>
                <label for="email"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    id="pwd"
                    name="pwd"
                    required
                />
            </div>   
            <p><button type="submit">Login</button></p>
        </form>
    </div>
</template>
