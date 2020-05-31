<script>
  export let name;
  export let internalFTemp;
  export let internalCTemp;
  export let parts;
</script>

<style>
  .table-wrapper {
    width: 100%;
    overflow: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
  }

  th,
  td {
    padding: 20px;
  }

  th {
    border-bottom: 2px solid lightgray;
  }

  td {
    border-bottom: 1px solid lightgray;
  }

  p {
    margin: 20px 10px;
  }
</style>

<p>
  For {name}, you should aim for an internal temperature of
  <b>{internalFTemp}F</b>
  or
  <b>{internalCTemp}C</b>
  .
</p>
<div class="table-wrapper">
  <table>
    <tr>
      <th>Part</th>
      <th>Temp F</th>
      <th>Temp C</th>
      <th>Time (min)</th>
    </tr>
    {#each parts as part}
      <tr>
        <td>{part.name}</td>
        <td>{part.fTemp}</td>
        <td>{part.cTemp}</td>
        <td>{part.time}</td>
      </tr>
    {/each}
  </table>
</div>
