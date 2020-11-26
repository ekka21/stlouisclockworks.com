.PHONY: push
push:
	aws s3 sync ./ s3://stlouisclockworks.com --acl public-read
