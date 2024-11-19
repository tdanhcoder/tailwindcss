# Getting Started

Tailwind CSS hoạt động bằng cách quét tất cả các tệp HTML, thành phần JavaScript và bất kỳ mẫu nào khác để tìm tên lớp, tạo kiểu tương ứng rồi ghi chúng vào tệp CSS tĩnh.

Nó nhanh, linh hoạt và đáng tin cậy — không có thời gian chạy.

## I. Tailwind CLI

Cách đơn giản và nhanh nhất để thiết lập và chạy Tailwind CSS từ đầu là sử dụng công cụ Tailwind CLI. CLI cũng có sẵn dưới dạng tệp [thực thi độc lập](https://tailwindcss.com/blog/standalone-cli) nếu bạn muốn sử dụng nó mà không cần cài đặt Node.js.

`1`. **Install Tailwind CSS**

Cài đặt `tailwindcss` qua npm và tạo tệp `tailwind.config.js` của bạn.

```sh
> npm install -D tailwindcss
> npx tailwindcss init
```

`2`. **Configure your template paths**

Thêm đường dẫn đến tất cả các tệp mẫu trong tệp `tailwind.config.js` của bạn.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`3`. **Add the Tailwind directives to your CSS**

Thêm chỉ thị `@tailwind` cho từng lớp của Tailwind vào tệp CSS chính của bạn (`src/index.css`).

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`4`. **Start the Tailwind CLI build process**

Chạy công cụ CLI để quét các tệp mẫu của bạn để tìm lớp và xây dựng CSS của bạn.

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

`4`. **Start using Tailwind in your HTML**

Thêm tệp CSS đã biên dịch của bạn vào `<head>` và bắt đầu sử dụng các lớp tiện ích của Tailwind để tạo kiểu cho nội dung của bạn.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

## II. Using PostCSS

Cài đặt Tailwind CSS làm plugin PostCSS là cách liền mạch nhất để tích hợp nó với các công cụ xây dựng như webpack, Rollup, Vite và Parcel.

> Tham khảo: <https://tailwindcss.com/docs/installation/using-postcss>

## III. Framework Guides

Hướng dẫn dành riêng cho khung bao gồm phương pháp được đề xuất của chúng tôi để cài đặt CSS Tailwind trong một số môi trường phổ biến.

> Tham khảo: <https://tailwindcss.com/docs/installation/framework-guides>

## IV. Play CDN

> Tham khảo: <https://tailwindcss.com/docs/installation/play-cdn>
