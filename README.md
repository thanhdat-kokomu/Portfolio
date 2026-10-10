# Dương Thành Đạt — Developer Portfolio

Trang portfolio cá nhân (single-page) của **Dương Thành Đạt** — Fullstack / Backend Developer.
Xây dựng bằng **Vue 3 (Composition API) + Vite + Tailwind CSS v4**, giao diện **Dark Violet / Glassmorphism**.

## Tech stack

- Vue 3 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide (`@lucide/vue`) + Simple Icons (`simple-icons`) cho logo công nghệ

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # xuất ra dist/
npm run preview  # xem thử bản build
```

## Cấu trúc

```
src/
  App.vue                 # lắp ghép các section
  style.css               # Tailwind v4 + theme (màu brand, glass, syntax token)
  data/portfolio.js       # TOÀN BỘ nội dung (sửa thông tin ở đây)
  composables/            # useTheme, useScrollSpy, useClipboard, useToast
  components/             # Navbar, Hero, TechStack, Projects, ApiPlayground, ...
public/
  cv/duong-thanh-dat-cv.pdf   # CV placeholder -> thay bằng CV thật của bạn
```

## Cần cập nhật trước khi publish

Tất cả nằm trong `src/data/portfolio.js`:

- **LinkedIn**: đang để placeholder — cập nhật URL thật hoặc xóa khỏi `profile.socials`.
- **GitHub**: `https://github.com/thanhdat-kokomu` — xác nhận đúng handle của bạn.
- **CV**: thay `public/cv/duong-thanh-dat-cv.pdf` bằng file CV PDF thật (bản export TopCV).

## Deploy

Deploy lên Vercel/Netlify: build command `npm run build`, output directory `dist`.
