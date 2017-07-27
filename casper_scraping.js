/**
 * created by Tejesh on 21/07/2016
 */

var casper = require("casper").create({
    pageSettings: {
        loadImages: false,
        loadPlugins: false,
        javascriptEnabled: true,
        localToRemoteUrlAccessEnabled: true,
        XSSAuditingEnabled: true,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.'
    }
});

casper.start();

casper.open('www.charbi.com/dsa/dsa_login.asp', {
    method: 'post',
    data: {
        'txtname': 'HYD67',
        'txtpin': 'thyrocare123'
    }
}, function (response) {
    if(response.status != 200){
        casper.exit(4);
    }
    casper.echo('Logged In');
});

casper.then(function () {
    casper.echo("Logged In");
});