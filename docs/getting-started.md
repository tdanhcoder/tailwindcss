# Getting Started

## Installation

### Using React

- **`1. Create your project`**

  Bắt đầu bằng cách tạo một dự án Vite mới nếu bạn chưa thiết lập dự án nào. Cách tiếp cận phổ biến nhất là sử dụng [Create Vite](https://vite.dev/guide/#scaffolding-your-first-vite-project).

  ```sh
  > npm create vite@latest my-project -- --template react
  > cd my-project
  ```

- **`2. Install Tailwind CSS`**

  Cài đặt `tailwindcss` và các phần phụ thuộc ngang hàng của nó, sau đó tạo các tệp `tailwind.config.js` và `postcss.config.js`.

  ```sh
  > npm install -D tailwindcss postcss autoprefixer
  > npx tailwindcss init -p
  ```

- **`3. Configure your template paths`**

  Thêm đường dẫn đến tất cả các tệp mẫu trong tệp `tailwind.config.js` của bạn.

  ```js
  // tailwind.config.js

  /** @type {import('tailwindcss').Config} */
  export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- **`4. Add the Tailwind directives to your CSS`**

  Thêm lệnh `@tailwind` cho từng lớp của Tailwind vào tệp `./src/index.css` của bạn.

  ```css
  <!-- src/index.css -->

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- **`5. Start your build process`**

  Chạy quá trình xây dựng của bạn với `npm run dev`.

  ```sh
  > npm run dev
  ```

- **`6. Start using Tailwind in your project`**
  Bắt đầu sử dụng các lớp tiện ích của Tailwind để tạo kiểu cho nội dung của bạn.

  ```js
  <!-- App.js -->

  export default function App() {
    return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
  }
  ```

### Other Install

> Tham khảo: <https://tailwindcss.com/docs/installation>

## Editor Setup

### [IntelliSense for VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Automatic class sorting with Prettier

Để bắt đầu, hãy cài đặt `prettier-plugin-tailwindcss` làm phần phụ thuộc vào nhà phát triển:

```sh
> npm install -D prettier prettier-plugin-tailwindcss
```

Sau đó thêm plugin vào Prettier configuration

```js
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Using with Preprocessors

> Tham khảo: <https://tailwindcss.com/docs/using-with-preprocessors>

- Using PostCSS as your preprocessor
  - Build-time imports
  - Nesting
  - Variables
  - Vendor prefixes
- Using Sass, Less, or Stylus
  - Sass
  - Stylus

## Optimizing for Production

Nếu đang sử dụng Tailwind CLI, bạn có thể giảm thiểu CSS bằng cách thêm cờ `--minify`:

```sh
npx tailwindcss -o build.css --minify
```

Nếu bạn đã cài đặt Tailwind làm plugin PostCSS, hãy thêm `cssnano` vào cuối danh sách plugin của bạn:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
```
