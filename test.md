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
  <button class="tablinks" onclick="tabs(event, 'INCAR')" id="defaultOpen">INCAR</button>
  <button class="tablinks" onclick="tabs(event, 'POSCAR')">POSCAR</button>
  <button class="tablinks" onclick="tabs(event, 'KPOINTS')">KPOINTS</button>
  <button class="tablinks" onclick="tabs(event, 'POTCAR')">POTCAR</button>
</div>

<div id="INCAR" class="tabcontent">
  <pre>
SYSTEM = Fe
  </pre>
</div>

<div id="POSCAR" class="tabcontent">
  <pre>
Fe BCC
  </pre>
</div>

<div id="KPOINTS" class="tabcontent">
  <pre>
Auto
  </pre>
</div>

<div id="POTCAR" class="tabcontent">
  <pre>
PAW_PBE Fe 06Sep2000                   
  </pre>
</div>


# 2. Accordion


<div class="accordion">
	<div class="accordion-item">
		<div class="accordion-item-header">INCAR</div>
		<div class="accordion-item-body">
			 <pre>
SYSTEM = Fe
  </pre>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">POSCAR</div>
		<div class="accordion-item-body">
			  <pre>
Fe BCC
  </pre>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">KPOINTS</div>
		<div class="accordion-item-body">
			<pre>
Auto
  </pre>
		</div>
	</div>
</div>