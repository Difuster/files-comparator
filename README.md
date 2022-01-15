### Hexlet tests and linter status:
[![Actions Status](https://github.com/Difuster/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Difuster/frontend-project-lvl2/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/e0f9bdaabf345dc3f04b/maintainability)](https://codeclimate.com/github/Difuster/frontend-project-lvl2/maintainability)

![example workflow](https://github.com/Difuster/frontend-project-lvl2/actions/workflows/linter.yml/badge.svg)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e0f9bdaabf345dc3f04b/test_coverage)](https://codeclimate.com/github/Difuster/frontend-project-lvl2/test_coverage)


Programm to compare two files.   
Supported file formats: json, yaml.  
Available formats to display differences: stylish(default format), plain, json.  

**Install**

`make install`

### compare json files:  
gendiff file1.json file2.json  

[![asciicast](https://asciinema.org/a/454031.svg)](https://asciinema.org/a/454031)
  
### compare yaml files:  
gendiff file1.yaml file2.yaml  

[![asciicast](https://asciinema.org/a/uB9GKXJWCUqVBljoiDTVqSkai.svg)](https://asciinema.org/a/uB9GKXJWCUqVBljoiDTVqSkai)
  
### get default output format (stylish):  
gendiff file1.json file2.json  

[![asciicast](https://asciinema.org/a/UGEJ8kk2903z4eWT3YO7NFdCP.svg)](https://asciinema.org/a/UGEJ8kk2903z4eWT3YO7NFdCP)
  
### get plain output format:  
gendiff file1.yaml file2.yaml --format plain  

[![asciicast](https://asciinema.org/a/w0gUj6gQfmKl2kipWOEurOGj6.svg)](https://asciinema.org/a/w0gUj6gQfmKl2kipWOEurOGj6)
  
### get json output format:  
gendiff file1.yaml file2.yaml --format json  

[![asciicast](https://asciinema.org/a/vIS2VjSaor1RZLXfMb6MKDhm3.svg)](https://asciinema.org/a/vIS2VjSaor1RZLXfMb6MKDhm3)
  