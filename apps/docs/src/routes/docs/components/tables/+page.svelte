<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Tables - launch.css</title>
</svelte:head>

<h1>Tables</h1>
<p>Data tables with proper structure and styling.</p>

<h2>Basic Table</h2>

<CodePreview
	code={`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>Developer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>Designer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Carol White</td>
      <td>Manager</td>
      <td>Away</td>
    </tr>
  </tbody>
</table>`}
/>

<h2>With Caption</h2>

<CodePreview
	code={`<table>
  <caption>Team Members</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Design</td>
    </tr>
  </tbody>
</table>`}
/>

<h2>With Footer</h2>

<CodePreview
	code={`<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Qty</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget A</td>
      <td>2</td>
      <td>$10.00</td>
    </tr>
    <tr>
      <td>Widget B</td>
      <td>1</td>
      <td>$25.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2"><strong>Total</strong></td>
      <td><strong>$45.00</strong></td>
    </tr>
  </tfoot>
</table>`}
/>

<h2>Numeric Data</h2>
<p>Numbers can be right-aligned for better readability:</p>

<CodePreview
	code={`<table>
  <thead>
    <tr>
      <th>Product</th>
      <th style="text-align: right;">Sales</th>
      <th style="text-align: right;">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product A</td>
      <td style="text-align: right;">1,234</td>
      <td style="text-align: right;">$12,340</td>
    </tr>
    <tr>
      <td>Product B</td>
      <td style="text-align: right;">567</td>
      <td style="text-align: right;">$5,670</td>
    </tr>
  </tbody>
</table>`}
/>
