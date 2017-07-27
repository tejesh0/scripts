var casper = require('casper').create({
    // verbose: true,
    // logLevel: 'debug',
    pageSettings: {
        loadImages:  false,
        loadPlugins: true,
        javascriptEnabled: true,
        localToRemoteUrlAccessEnabled: true,
        XSSAuditingEnabled: true,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.'
    }
});
casper.options.viewportSize = {width: 1600, height: 950};
casper.options.waitTimeout = 1200000;

casper.start();
casper.clear();

/* To log console log statements */
casper.on("remote.message", function(msg){
    casper.echo("remote.msg: " + msg);
});

/* To log javascript errors */
casper.on("page.error", function(pageErr){
    casper.echo("page.err: " + JSON.stringify(pageErr));
});

var my_global_variable = 0;

casper.thenOpen('http://facebook.com/', function step2(response){
    if(response.status != 200){
        casper.exit(2);
    }
    casper.echo("On Page");
    // casper.capture('screenshot.png')
})

casper.thenEvaluate(function fillSignUpForm(email, password) {
    document.getElementById("email").value = customer_email; // email
    document.getElementById("password").value = password; // Password
    document.getElementById("login").click();
})


/* WAIT FOR PAGE TO LOAD */
casper.waitFor(function check(){
    return this.evaluate(function () {
        return window.__doPostBack !== undefined;
    })
}, function then() {
	my_global_variable = 42;
    casper.echo("global variable ", my_global_variable) // logs 0 FAIL

}, function onTimeOut(){
    console.log("TimeOut");
    this.echo("TimeOut");
}, 60000);
/* DONE WAITING FOR PAGE TO LOAD */


/* WAIT FOR PAGE TO LOAD */
casper.waitFor(function check(){
    return this.evaluate(function () {
        return window.__doPostBack !== undefined;
    })
}, function then() {
    helper_func(casper);
    console.log("global variable ", my_global_variable) // logs 42 Ayyee!!

}, function onTimeOut(){
    console.log("TimeOut");
    this.echo("TimeOut");
}, 60000);
/* DONE WAITING FOR PAGE TO LOAD */

function helper_func(casper) {
	// change global variable
	my_global_variable = 42;
}

