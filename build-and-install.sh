#!/usr/bin/env bash

npm run make
unzip out/make/zip/darwin/arm64/4Bookmark-darwin-arm64-1.0.0.zip
rm -rf  ~/Applications/4Bookmark.app && mv 4Bookmark.app ~/Applications
rm -rf ./out
