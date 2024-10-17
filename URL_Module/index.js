// ----------------------------URL Module----------------------------------------
//-------------------------------------------------------------------------------
// The url module provides utilities for URL resolution and parsing.
// const url = require(‘url’);
// import url from ‘url’;

// const myURL =  new URL('https://www.example.com:8080/p/a/t/h?query=string#hash’);

// hash – Gets and sets the fragment portion of the URL.
// host – Gets and sets the host portion of the URL.
// hostname – Gets and sets the host name portion of the URL. The key difference between url.host and url.hostname is that url.hostname does not include the port.
// href – Gets and sets the serialized URL.
// pathname – Gets and sets the path portion of the URL.
// port – Gets and sets the port portion of the URL.


const url = require('url');
const myURL = new url.URL('https://www.example.com:8080/p/a/t/h?query=string#mrinal');

console.log('url.hash: ', myURL.hash);
console.log('url.host: ', myURL.host);
console.log('url.hostname: ', myURL.hostname);
console.log('url.href: ', myURL.href);
console.log('url.pathname: ', myURL.pathname);
console.log('url.port: ', myURL.port);
console.log('url.protocol: ', myURL.protocol);
console.log('url.search: ', myURL.search);
console.log('url.searchParams: ', myURL.searchParams);

// output 
// url.hash:  #mrinal
// url.host:  www.example.com:8080
// url.hostname:  www.example.com
// url.href:  https://www.example.com:8080/p/a/t/h?query=string#mrinal
// url.pathname:  /p/a/t/h
// url.port:  8080
// url.protocol:  https:
// url.search:  ?query=string
// url.searchParams:  URLSearchParams { 'query' => 'string' }