```bash

 npm create vite@latest my-project
 cd my-project
 ```

 ```bash

 npm install tailwindcss @tailwindcss/vite 
 ```

 Add the @tailwindcss/vite plugin to your Vite configuration.<br>

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' # include this in vite.config.js
```
export default defineConfig({
  plugins: [
    tailwindcss(), # add this plugin
  ],
})

<br><br>
Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.<br> <br>

```bash 
@import "tailwindcss";
```


Run your build process with `npm run dev` or whatever command is configured in your package.json file.

```bash 
npm run dev
```

React js

```html
<div>
a. Reactjs is a js library used for building user-interface especially for web apps.
b. Features:

1. React router
2. hooks
3. components based
4. props
5. Conditional Rendering
</div>
```

***Installed React Router DOM to use routing***
```bash
npm install react-router-dom
```


***Installed react icons***

```bash 

npm install react-icons
```



***Props***
<!-- props= read only properties that are shared between the components.
 A parent component can send data to the child component.
 <component key=value/> Key value must be unique.-->



 ***To see the Content in mobile device***

```bash
 npm run dev -- --host
 ```

 Note that: Use Conditional Rendering or ternary operator to add see more content in long paragraph.