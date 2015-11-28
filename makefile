setup:
	npm install

styles_watch:
	stylus -w client/styles/app.styl -o public/css/

watch:
	NODE_ENV=development gulp

release:
	NODE_ENV=production gulp build
