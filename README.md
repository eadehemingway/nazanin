## File structure currently

- `components` folder: currently any react components we have. Functions that dont affect the dom I have moved to the services folder. The `TT` or `V` prefix to files refer to whether it is part of the viz or part of the text trigger part of the app.

- data, the files with data in them and a script that we used once to get data into a certain structure (probably dont need it anymore)

- services folder - javascript functions that dont do anything to the dom they just return stuff. The utils file is in here and holds more generic util functions then the functions that are less agnostic are in their own files.

There is a concept of layers and stages within layers. The layers are defined in `data/CONSTANTS.js`. An example of a layer might be politics.
Layers are either divider layers or fill layers. A fill layer could be something like birthdays and a divider layer could be something like location.
Then stages are within a layer, when to reveal which bit of info within that layer. Done in switch statments in services...

currently isnt a way of staggering fill layers. but thats fine, we will just aim to be able to stagger highlights



## next steps
- get the highlight paths working (similar to divider paths).dividers are just lines dividing time. Highlights are lines around filled areas.
- test and improve scrolling triggers? sort triggers to do with highlights.
- use real data (i.e. get the data from spreadsheet into structure of LAYERS object)