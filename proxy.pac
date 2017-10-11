function FindProxyForURL(url, host) {

if (shExpMatch(host, "*.google.com") || 
    shExpMatch(host, "*.stuff.co.nz")

	)
        return "DIRECT";
else
	return "PROXYNOWORKY:8080";

}
