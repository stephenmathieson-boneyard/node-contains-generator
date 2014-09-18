
BIN := node_modules/.bin
REPORTER ?= spec

test: node_modules
	@$(BIN)/mocha --reporter $(REPORTER)

node_modules: package.json
	@npm install
	@touch $@

.PHONY: test
