<script>
  import { createEventDispatcher } from "svelte";

  export let visible;

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .modal-hidden {
    visibility: hidden;
  }

  .modal-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    top: 0;
    left: 0;
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    max-width: 900px;
    max-height: 600px;
    background-color: white;
    border-radius: 5px;
  }

  button {
    position: absolute;
    border: none;
    background-color: green;
    color: white;
    margin: 0 auto;
    bottom: 20px;
    transform: translate(-50%, 0);
    left: 50%;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<div class:modal-hidden={!visible} class="modal">
  <div class="modal-bg" />

  <div class="modal-content">
    <slot />
    <button on:click={close}>Got It!</button>
  </div>
</div>
