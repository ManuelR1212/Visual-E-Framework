![Logo](https://github.com/ManuelR1212/Visual-E-Framework/assets/156364733/9d4b5ef5-a93d-4986-90eb-c28015a10c66)

[![Licence](https://img.shields.io/badge/Licence-MIT-green?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE) [![npm package](https://img.shields.io/badge/npm%20package-10.4.0-green?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE) [![stable](https://img.shields.io/badge/stable-1.0.0-blue?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)


# Visual E

This is the official Visual E repository, where you will find the information necessary for its implementation in your projects, such as; plugins, dependencies and tutorials. For more information, visit the [documentation](https://manuelr1212.github.io/visuale-page/) page.


## Introduction

Visual E is a modern CSS styling framework, with adaptability for ReactJS projects. It is mainly oriented towards the design of informative web pages, however, if you are a beginner in the world of web styles, Visual E will surely be able to help you; It is a framework, dynamic, accessible and best of all, very easy to use!

If handling only CSS and HTML is your thing, Visual E offers you a wide number of very interesting styles and shortcuts for your HTML projects.

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>My project!</title>
    </head>
    <body>
        <h1 class="txt-size-2 center-txt, t-white50">¡Breaking News!</h1>
    </body>
</html>
```

On the other hand, you can combine your ReactJS projects with Visual E. Using its modular and completely modifiable components to your preference.

```javascript
function App() {
return (
< 
    <Header/> /* Import a super component! */
	<h1 class="display-1 left-txt">Push the button to launch!</h1>
	<Button/> /* Botón modificable */
/>)
}
```

This example shows you a small part of all the functions that Visual E offers for your projects, to learn more about them visit the [documentation](https://manuelr1212.github.io/visuale-page/).

Do you feel prepared? Follow the steps in the "quick start" section to get started with your projects.

## Quick Start

Visual E offers those users who need a fast but pleasant and consistent design, a method of implementing the framework in their projects without the need for prior installations; all this through the use of the Visual E [CDN Link](https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css).

`https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css`

Paste the [CDN Link](https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css) inside the "head" of your HTML code. Simply with this, you will be able to use all Visual E styles and tags within your project. For more information, visit the [documentation] page (https://manuelr1212.github.io/visuale-page/).

```html
<!DOCTYPE html>
<html lang="en"> 
  <head> 
    <meta charset="utf-8"> 
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	 <title>Visual E Project</title>
	 <link href="https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css" rel="stylesheet"> 
  </head>
</html>
```

Visual E also offers a version adapted to ReactJs, perfect for all those users who want to experiment with their React projects and Visual E components.

Before installing Visual E in your projects, make sure you have a version of Node.js v21.1.0 or higher on your system. Next is to run the Visual E installation command using npm or yarn in the root of your React project.

`$ npm install visual-e`

`$ yarn add visual-e`

This will cause npm to install all the necessary packages so you can use Visual E in your React projects. npm will return a folder with all the Visual E components, in addition to giving you the possibility of using all the CSS styles of the framework. Once the process is finished, you need to import the "components" and "styles" folders into your project files that require the help of Visual E.

## Documentation

You can find all the available Visual E documentation on our [official website](https://manuelr1212.github.io/visuale-page/). Visual E documentation is still under development, we invite you to start your projects with us!

## Licence

Visual E has an MIT license. You can find out more and read about it [here](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENCE.md).