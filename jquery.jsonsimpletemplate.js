/*
 * jQuery json simple templating plug-in 
 *
 * Copyright (c) 2011 Shawn Lee
 * Based on jsontemplate from Ryan Day
 */

(function($){
	$.fn.extend({
		getJSONPTemplate:function(templateSelector,jsonurl,params,complete,beforeComplete){
			this.getJSONTemplate(templateSelector,jsonurl+"?callback=?",params,complete,beforeComplete);
			return this;
		},
		getJSONTemplate:function(templateSelector,jsonurl,params,complete,beforeComplete){
			var contentArea = this[0];
			if(contentArea){
				$.getJSON(jsonurl,params,function(json){
					if(typeof beforeComplete == 'function'){
						this.cb = beforeComplete;
						json = this.cb(json);
					}
					//do templating here
					$(contentArea).JSONTemplate(templateSelector,json);
					//stop templating
					
					if(complete){
						this.cb = complete;
						this.cb(json);
					}
				});
			}
			return this;
		},
		JSONSimpleTemplate:function(templateSelector, json, groupField, groupTemplateSelector){
			var templateTagOpen = '%%';
			var templateTagClose = '%%';
			var contentArea = this[0];
			
			var groupTemplate="";
			if(groupTemplateSelector!=null){
				groupTemplate = $(groupTemplateSelector).clone()[0];
			}

			var template = $(templateSelector).clone()[0];
			if(template){
				/**
				 *this allows you to handle a one row type result
				 * takes a basic object as an argument
				 *	{taco:'happy',price:1.50}
				 * and turns it into
				 *	[{taco:'happy',price:1.50}]
				 * we can iterate over it without changing the multi dimensional array type data structure logic in the loop.
				 *
				 * the != 'object' check allows you to work with true multi dimensional arrays
				 *[as opposed to the assumption of an array of objects (aka: associative arrays or hashes)]
				 *
				 * 	[['one','two','three'],['one','two','three']]
				 */
				if(!json[0] || typeof json[0] != 'object') json = [json];
				
				var compiled="";
				var regex, tag;				var templateString = $(template).html();
				//
				var lastGroupValue=null;
				var groupValue=null;
				var groupTemplateString = $(groupTemplate).html();

				$.each(json,function(k,row){
					var rowString=templateString;
					var groupRowString=groupTemplateString;
					$.each(row,function(k,v){
						tag = templateTagOpen+k+templateTagClose;
						regex = new RegExp(tag, "g");
						rowString = rowString.replace(regex,v);
						if(groupField!=null && k==groupField){
							groupValue=v;
						}
					});
					//
					if(groupField!=null && groupValue!=lastGroupValue){
						$.each(row,function(k,v){
							tag = templateTagOpen+k+templateTagClose;
							regex = new RegExp(tag, "g");
							groupRowString = groupRowString.replace(regex,v);
						});
						lastGroupValue=groupValue;
						compiled+=groupRowString;
					}
					compiled+=rowString;
				});
				
				$(contentArea).html(compiled);
			}
			return this;
		}
		
	});
})(jQuery);