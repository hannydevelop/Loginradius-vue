<template>
  <div class="container">
    <h1 class="topp">You've been successfully Authenticated</h1>
    <div>
      <h3 class="bottomm">Want to Log out? Click on the button below</h3>
      <div class="button">
      <b-button
        a
        href="https://vueapp.hub.loginradius.com/auth.aspx?action=logout"
        variant="success"
        class="login"
        >Logout</b-button
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  margin: 100px 20px 0 0;
}

.bottomm{
  text-align: center;
  margin: 10px 20px 0 0;
}

.button {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: auto;
}
</style>