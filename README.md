# Svgr component generator

SVGR-component-generator is small utility tool for automatically generating 
React components used to group SVG icons in a project.

This utility is still under development.

## How it works?
In order to use this utility you have to:
* Clone this repo (`git clone https://github.com/andrius-skucas-db/svgr-component-generator.git`)
* Go into repository directory (`cd svgr-component-generator`)
* run `npm install`
* run `npm build`
* run `npm link`
* then go to project icons directory and run `svgr-generate-comopnents`

### What it does?
When running `svgr-generate-comopnents` command. This tools check current directory (and sub directories) for folders that 
contain .svg files.
When tool find folder with svg files in them it creates React component in the same folder
which imports all .svg files that are in that folder and lets user to use that component for inserting icons more easily;

#### Example

Lets say you have this file structure:

```
Icons
│   icon.svg   
│
└───menu-icons
    │ 
    │   menu-icon-1.svg
    │   menu-icon-2.svg
```

After running `svgr-generate-comopnents` command in Icons directory you should get something like this:

```
Icons
│   icon.svg   
│
└───menu-icons
    │ 
    │   MenuIcons.js
    │   menu-icon-1.svg
    │   menu-icon-2.svg
```

Note that scrip only creates component for subfolder (it assumes that icons inside folders are the ones that needs to be grouped)

