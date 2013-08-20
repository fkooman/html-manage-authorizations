#!/bin/sh

JQUERY_VERSION=1.10.2
HANDLEBARS_VERSION=1.0.0
JSO_VERSION=master
BOOTSTRAP_VERSION=3.0.0

rm -rf ext
mkdir -p ext/js
mkdir -p ext/bootstrap

# jQuery
curl -L -o ext/js/jquery.js http://code.jquery.com/jquery-${JQUERY_VERSION}.min.js

# handlebars.js
curl -L -o ext/js/handlebars.js https://raw.github.com/wycats/handlebars.js/${HANDLEBARS_VERSION}/dist/handlebars.js

# JSO (JavaScript OAuth 2 client)
curl -L -o ext/js/jso.js https://raw.github.com/andreassolberg/jso/${JSO_VERSION}/jso.js

# Bootstrap
curl -L -o ext/bootstrap-${BOOTSTRAP_VERSION}-dist.zip https://github.com/twbs/bootstrap/releases/download/v${BOOTSTRAP_VERSION}/bootstrap-${BOOTSTRAP_VERSION}-dist.zip
(cd ext/ && unzip -q bootstrap-${BOOTSTRAP_VERSION}-dist.zip -d bootstrap && rm bootstrap-${BOOTSTRAP_VERSION}-dist.zip)
