# jquery.jsonsimpletemplate

A very simple templating mechanism for jQuery through JSON objects.

## Usage
### Simple Usage


#### Placeholder
    <div id="results"></div>
####  Template
    <div id="template">
       <br><a id="%%id%%" href="http://%%link%%>%%text</a>
    </div>
#### jQuery
    var json = [
    	{id:'1',link:'www.link1.com', text:'Link 1'},
    	{id:'2',link:'www.link2.com', text:'Link 2'}
    ];
    $("#results").JSONSimpleTemplate("#template",json); 
#### Output
    <div id="results">
      <br><a id="1" href="http://www.link1.com">Link 1</a>
      <br><a id="2" href="http://www.link2.com">Link 2</a>
    </div>


### Grouping Usage


#### Placeholder
    <div id="results"></div>
####  Template
    <div id="grouptemplate">
       <br><b>%%groupfield%%</b>
    </div>
    <div id="rowtemplate">
       <br><a id="%%id%%" href="http://%%link%%>%%text</a>
    </div>
#### jQuery
    var json = [
    	{id:'1',link:'www.link1.com', text:'Link 1', groupfied:'Group 1'},
    	{id:'2',link:'www.link2.com', text:'Link 2', groupfied:'Group 1'},
    	{id:'3',link:'www.link3.com', text:'Link 3', groupfied:'Group 2'}
    ];
    $("#results").JSONSimpleTemplate("#rowtemplate",json,'groupfield','#grouptemplate'); 
#### Output
    <div id="results">
      <br><b>Group 1</b>
      <br><a id="1" href="http://www.link1.com">Link 1</a>
      <br><a id="2" href="http://www.link2.com">Link 2</a>
      <br><b>Group 2</b>
      <br><a id="3" href="http://www.link3.com">Link 3</a>
    </div>



## Author

[ChriShawn Lee](http://chrishawn.net)

## License

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
