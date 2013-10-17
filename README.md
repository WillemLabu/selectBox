selectBox
=========

Very simple jQuery &lt;select> wrapper plugin.

- Responsive
- Cross-browser compliant
- Mobile friendly

## Usage:

### HTML

    <select>
        <option val="0">Option label</option>
        <option val="1">Option label</option>
        <option val="2">Option label</option>
    </select>
	
### JS

    (function(){
        $('select').selectBox();
    });
	
### Notes:

- Add your own styles. These are the minimum.
- Add an arrow: there's a <span class="indicator">
- First <option> becomes the label.