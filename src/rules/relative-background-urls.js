/*
 * Rule: Background images without relative URL should not exist.
 */
/*global CSSLint*/
CSSLint.addRule({

    //rule information
    id: "relative-background-urls",
    name: "Relative background urls",
    desc: "Only allow relative urls for background images",
    browsers: "All",

	//initialization
	init: function(parser, reporter) {
		var rule = this;
		
        parser.addListener("property", function(event){

            var propertyName    = event.property.toString().toLowerCase(),
                value           = event.value.toString(),
                line            = event.line,
                col             = event.col;
                
            if (propertyName == 'background') {
            
                if (value.match(/^url\(/i) && value.match(/(http|https|\/\/){1}/i)) {
                    reporter.report("You should always use relative urls for background images.", line, col, rule);
                }
            }
        });        
	}
});
