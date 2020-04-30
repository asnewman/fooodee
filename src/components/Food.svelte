<script>
  import InfoModal from "./InfoModal.svelte";
  import FoodTable from "./FoodTable.svelte";

  export let name;
  export let parts;
  export let imagePath;
  export let internalFTemp;
  export let internalCTemp;

  let infoModalVisible = false;
</script>

<style>
  .food-block {
    height: 300px;
    width: 300px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .food-block:last-child {
    margin-right: 0;
  }

  .food-block img {
    height: 150px;
    width: 150px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .food-block-name {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
    font-size: 1.5em;
    font-weight: 600;
  }
</style>

<InfoModal
  on:close={() => (infoModalVisible = false)}
  visible={infoModalVisible}>
  <FoodTable {parts} {name} {internalFTemp} {internalCTemp} />
</InfoModal>

<div class="food-block" on:click={() => (infoModalVisible = true)}>
  <div class="food-block-name">{name}</div>
  <img src={imagePath} alt={name} />
</div>
