---
layout: page
title: Page Tests
custom_js: 
  - tabs
  - accordions
category: example
---

# 1. Tabs

<div class="tab">
  <button class="tablinks" onclick="tabs(event, 'id1')" id="defaultOpen">Item1</button>
  <button class="tablinks" onclick="tabs(event, 'id2')">Item2</button>
  <button class="tablinks" onclick="tabs(event, 'id3')">Item3</button>
  <button class="tablinks" onclick="tabs(event, 'id4')">Item4</button>
</div>

<div id="id1" class="tabcontent">
<p>This is item 1.</p>
</div>

<div id="id2" class="tabcontent">
<p>This is item 2.</p>
</div>

<div id="id3" class="tabcontent">
<p>This is item 3.</p>
</div>

<div id="id4" class="tabcontent">
<p>This is item 4.</p>
</div>


# 2. Accordion


<div class="accordion">
	<div class="accordion-item">
		<div class="accordion-item-header">Item1</div>
		<div class="accordion-item-body">
			<p>This is item 1.</p>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">Item2</div>
		<div class="accordion-item-body">
			<p>This is item 2.</p>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">Item3</div>
		<div class="accordion-item-body">
			<p>This is item 3.</p>
		</div>
	</div>
</div>