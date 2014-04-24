var httpHostMain = '{{host}}:{{ports[http][0]}}'; //name of the server that this page must accessed over port 80
var httpHostMainNoPort = '{{host}}'
var httpHostAlias = '{{domains[www]}}:{{ports[http][0]}}'; //another hostname (must be a subdomain so document.domain can be set to a higher domain) that accesses the same content, over HTTP
var httpsHostAlias = httpHostAlias; //another hostname (can be same as httpHostAlias) that accesses the same content, over HTTPS port
var httpPortAlias = {{ports[http][1]}}; //another port that accesses the same content on the current hostname, over HTTP
//XXX HTTPS
var httpsPortAlias = 8443; //another port that accesses the same content on the httpsHostAlias, over HTTPS

function crossOriginUrl(subdomain, relative_url) {
  var a = document.createElement("a");
  a.href = relative_url;
  return a.href.replace(location.href.replace("://", "://" + subdomain + "."));
}
