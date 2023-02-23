# Volvo Cars (Global Online Digital)

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`

## Code conventions

Please try to use Typescript and follow all the code isolated to that component inside the folder structure. If any code is to be used in several components, move it outside to the root.

```bash
- typings.tsx
- components
    - TestComponent
        - interfaces
        - hooks
        - components
        - __tests__
            - TestComponent.test.tsx
        - TestComponent.tsx
        - index.tsx
- app
    - components
        - ui
        - component-parent-folder
          -components-child-folder
            -component.tsx
  - page.tsx
  - loader.tsx
  - layout.tsx
    - Folder-Route
      - page.tsx
```

# Deployed domain

[https://volvo-test-nine.vercel.app/](https://volvo-test-nine.vercel.app/)


## Conclusion 

The app is entirely made with Nextjs 13 with experimental app, so there is a substantial shift mind set in how I used to be in React.
# Server Component
All components inside the app directory are React Server Components by default, including special files and collocated components. This allows you to automatically adopt Server Components with no extra work, and achieve great performance out of the box.
# Client Component 
Client Components enable you to add client-side interactivity to your application. In Next.js, they are pre-rendered on the server and hydrated on the client.

# Achievement  
The carousel is made with Tailwind css with no support of any plugin so it's been a bit challenging to create interactions with the scrolling that could create a change of state. 

# Issue
The logic of the slide indicator in mobile don't have logic at the moment but they work only on click. The idgit aea is to support the mobile with a plugin like Swiper, Framer or Gesture for React.
 

 