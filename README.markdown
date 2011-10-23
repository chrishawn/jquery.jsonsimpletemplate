# jquery.jsonsimpletemplate

---

## Simple Usage


#### Placeholder
    <div id="results"></div>
####  Template
    <div id="template">
       <br><a id="%%id%%" href="http://%%link%%>%%text</a>
    </div>
#### jQuery
    var json = [{id:'1',link:'www.link1.com', text:'Link 1'},{id:'2',link:'www.link2.com', text:'Link 2'}];
    $("#results").JSONSimpleTemplate("#template",json); 
#### Output
    <div id="results">
      <br><a id="1" href="http://www.link1.com">Link 1</a>
      <br><a id="2" href="http://www.link2.com">Link 2</a>
    </div>


## Grouping Usage
more to come

### Author

[ChriShawn Lee](http://chrishawn.net)