<script>
	import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<svelte:head>
	<title>Select - launch.css</title>
</svelte:head>

<h1>Select</h1>
<p>Dropdown select menus for choosing from a list of options.</p>

<h2>Basic Select</h2>

<CodePreview
	code={`<label>
  Country
  <select>
    <option value="">Choose a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </select>
</label>`}
/>

<h2>With Option Groups</h2>

<CodePreview
	code={`<label>
  Car
  <select>
    <optgroup label="German">
      <option value="audi">Audi</option>
      <option value="bmw">BMW</option>
      <option value="mercedes">Mercedes</option>
    </optgroup>
    <optgroup label="Japanese">
      <option value="honda">Honda</option>
      <option value="toyota">Toyota</option>
      <option value="mazda">Mazda</option>
    </optgroup>
  </select>
</label>`}
/>

<h2>Multiple Select</h2>

<CodePreview
	code={`<label>
  Select multiple
  <select multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
</label>`}
/>

<h2>Disabled Select</h2>

<CodePreview
	code={`<label>
  Disabled select
  <select disabled>
    <option>Can't change this</option>
  </select>
</label>`}
/>
