## File structure currently

- components, currently any react components we have. In yearviz.js i have moved functions that dont affect the dom out of the component but kept them in the file.

- data, the files with data in them and a script that we used once to get data into a certain structure (probably dont need it anymore)

- services folder - javascript functions that dont do anything to the dom they just return stuff. The utils file is in here and holds more generic util functions then the functions that are less agnostic are in their own files.



## next steps
- get the highlight paths working (similar to divider paths)
- use real data (i.e. get the data from spreadsheet into structure of LAYERS object)