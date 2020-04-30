<script>
  import foods from "./foods.js";
  import Food from "./components/Food.svelte";
</script>

<style>
  :global(body) {
    background-color: slateblue;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
  }

  .logo {
    font-size: 2em;
    font-weight: 900;
    color: white;
    margin-top: 10px;
    margin-left: 10px;
  }

  .message {
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .foods {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -202px -475px;
  }

  @media screen and (max-width: 960px) {
    .foods {
      width: 300px;
      top: 80px;
      left: 50%;
      margin: 0 0 0 -150px;
    }
  }

  .content {
    min-height: calc(100vh - 100px);
  }

  .attributes {
    color: white;
    font-size: 12px;
    height: 80px;
    text-align: center;
  }

  .attributes a {
    color: white;
  }

  .attributes p {
    margin: 3px 0;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
</svelte:head>

<div class="content">
  <div class="logo">fooodee</div>

  <div class="foods">
    <div class="message">Select the type of meat you wish to oven bake:</div>

    {#each foods as food}
      <Food {...food} />
    {/each}
  </div>
</div>
<div class="attributes">
  <p>Created by Ashley Newman</p>
  <p>
    <a href="http://www.ajkprojects.com">ajkprojects.com</a>
  </p>
  Icons made by
  <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
  from
  <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>
