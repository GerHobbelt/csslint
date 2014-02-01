(function(){

	/*global YUITest, CSSLint*/
	var Assert = YUITest.Assert;

	YUITest.TestRunner.add(new YUITest.TestCase({

		name: "Relative background urls",

		"Using http:// in an background attribute should result in one warning": function(){
			var result = CSSLint.verify(
                "#pager:hover {background: url('http://test.de/sprites/" +
                "111213.png') no-repeat scroll 0px -1650px transparent;}",
                { "relative-background-urls": 1 }
            );
            
			//asserts
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("You should always use relative urls for background images.", result.messages[0].message);            
		},
	
     
		"Using https:// in an background attribute should result in one warning": function(){
			var result = CSSLint.verify(
                "#pager:hover {background: url('https://test.de/sprites/" +
                "111213.png') no-repeat scroll 0px -1650px transparent;}",
                { "relative-background-urls": 1 }
            );
            
			//asserts
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("You should always use relative urls for background images.", result.messages[0].message);            
		},
		
        "Using // in an background attribute should result in one warning": function(){
			var result = CSSLint.verify(
                "#pager:hover {background: url('//test.de/sprites/" +
                "111213.png') no-repeat scroll 0px -1650px transparent;}",
                { "relative-background-urls": 1 }
            );
            
			//asserts
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("You should always use relative urls for background images.", result.messages[0].message);            
		},

		"Using a relative url should not result in a warning": function(){
			var result = CSSLint.verify(
                "#pager:hover {background: url('/images/sprites/" +
                "111213.png') no-repeat scroll 0px -1650px transparent;}",
                { "relative-background-urls": 1 }
            );
            
			//asserts
            Assert.areEqual(0, result.messages.length);
		},
	}));

})();