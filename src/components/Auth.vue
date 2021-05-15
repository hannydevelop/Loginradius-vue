<template> 
<div class="container">
  <h1 class="topp">You've Not Been Authenticated</h1>
    <div class="arrange flex">
        <h3 class="bottomm">Don't have an Account? Click this button to register</h3>
        <b-button a href="https://vueapp.hub.loginradius.com/auth.aspx?action=register&return_url=http://localhost:8080/hello" 
        variant="success" class="login-button">Register</b-button>
    </div>
    <div class="arrange flex">
      <h3 class="bottomm">Already have an Account? Click this button to Sign-in</h3>
        <b-button type="submit" a href="https://vueapp.hub.loginradius.com/auth.aspx?action=login&return_url=http://localhost:8080/hello" 
        variant="success" class="login-button">Login</b-button>
    </div>
</div>
</template>

<script>
export default {
    data() {
    return {
    };
  },
};
</script>

<style>
.container {
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 40px;
    height: 100%;
}

.topp{
  text-align: center;
  margin: 100px;
}

.bottomm{
  text-align: center;
  margin: 10px 20px 0 0;
}

.flex {
    display: flex;
    justify-content: center; 
    align-items: center;    /**Align to center vertically**/
}
</style>