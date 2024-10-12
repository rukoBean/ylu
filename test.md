---
layout: post
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
ISTART = 0
ICHARG = 2
ENCUT = 350
ISMEAR = 1; SIGMA = 0.2
ISPIN = 2; MAGMOM = 4
# save room
LREAL=.FALSE.
LWAVE=.FALSE.
LCHARG=.FALSE.
  </pre>
</div>

<div id="POSCAR" class="tabcontent">
  <pre>
Fe BCC
2.86
-0.5 0.5 0.5 
0.5 -0.5 0.5
0.5 0.5 -0.5
1
C
0 0 0
  </pre>
</div>

<div id="KPOINTS" class="tabcontent">
  <pre>
Auto
0
G
9 9 9
0 0 0
  </pre>
</div>

<div id="POTCAR" class="tabcontent">
  <pre>
PAW_PBE Fe 06Sep2000                   
  8.00000000000000
…… …… …… ……     
  </pre>
</div>


# 2. Accordion


<div class="accordion">
	<div class="accordion-item">
		<div class="accordion-item-header">INCAR</div>
		<div class="accordion-item-body">
			 <pre>
SYSTEM = Fe
ISTART = 0
ICHARG = 2
ENCUT = 350
ISMEAR = 1; SIGMA = 0.2
ISPIN = 2; MAGMOM = 4
# save room
LREAL=.FALSE.
LWAVE=.FALSE.
LCHARG=.FALSE.
  </pre>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">POSCAR</div>
		<div class="accordion-item-body">
			  <pre>
Fe BCC
2.86
-0.5 0.5 0.5 
0.5 -0.5 0.5
0.5 0.5 -0.5
1
C
0 0 0
  </pre>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-item-header">KPOINTS</div>
		<div class="accordion-item-body">
			<pre>
Auto
0
G
9 9 9
0 0 0
  </pre>
		</div>
	</div>
</div>