export const profile = {
  name: 'Dương Thành Đạt',
  initials: 'Đ',
  role: 'Fullstack / Backend Developer',
  tagline:
    'Chuyên xây dựng hệ thống Web API ổn định với Spring Boot 3.x và giao diện mượt mà với Vue 3.',
  location: 'Đồng Hỷ, Thái Nguyên',
  email: 'duongthanhdat05122007@gmail.com',
  phone: '0398 831 101',
  cvUrl: '/cv/duong-thanh-dat-cv.pdf',
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/thanhdat-kokomu' },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/d%C6%B0%C6%A1ng-th%C3%A0nh-%C4%91%E1%BA%A1t-44aa50435/',
    },
    { label: 'Email', icon: 'mail', href: 'mailto:duongthanhdat05122007@gmail.com' },
  ],
}

export const objective = {
  title: 'Mục tiêu nghề nghiệp',
  intro:
    'Lập trình viên tốt nghiệp chuyên ngành Phát triển phần mềm (FPT Polytechnic) có nền tảng về Java (Spring Boot 3.x), Vue 3 (Pinia/Tailwind) và thiết kế CSDL SQL Server.',
  short:
    'Ngắn hạn: Vận dụng kinh nghiệm thực tế từ đồ án (xây dựng RESTful API, bảo mật JWT, tích hợp POS/QR Code) để tiếp quản công việc nhanh chóng, đóng góp vào việc phát triển và tối ưu hóa các sản phẩm web của công ty.',
  long:
    'Dài hạn: Nâng cao tư duy kiến trúc hệ thống, mở rộng kỹ năng sang TypeScript/Node.js để trở thành Lập trình viên Fullstack thực thụ trong 2–3 năm tới.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const techGroups = [
  {
    title: 'Backend',
    icon: 'Server',
    accent: 'from-emerald-400 to-teal-500',
    items: [
      { name: 'Java 17', si: 'openjdk' },
      { name: 'Spring Boot 3.x', si: 'springboot' },
      { name: 'Spring Security', si: 'springsecurity' },
      { name: 'JWT', si: 'jsonwebtokens' },
      { name: 'Spring Data JPA', si: 'hibernate' },
      { name: 'RESTful API', lucide: 'Database', color: '#22d3ee' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'LayoutGrid',
    accent: 'from-brand-400 to-fuchsia-500',
    items: [
      { name: 'Vue 3', si: 'vuedotjs' },
      { name: 'Pinia', si: 'pinia' },
      { name: 'Tailwind CSS', si: 'tailwindcss' },
      { name: 'Vuetify', si: 'vuetify' },
      { name: 'JavaScript (ES6+)', si: 'javascript' },
      { name: 'HTML5', si: 'html5' },
      { name: 'CSS3', si: 'css' },
    ],
  },
  {
    title: 'Database & Tools',
    icon: 'Database',
    accent: 'from-sky-400 to-indigo-500',
    items: [
      { name: 'MS SQL Server', lucide: 'Database', color: '#CC2927' },
      { name: 'Git / GitHub', si: 'git' },
      { name: 'Swagger UI', si: 'swagger' },
      { name: 'Postman', si: 'postman' },
      { name: 'Vite', si: 'vite' },
    ],
  },
]

export const projects = [
  {
    id: 'shopao',
    name: 'ShopAo',
    subtitle: 'Hệ thống Quản lý & Thương mại Áo Thể Thao',
    context: 'Đồ án tốt nghiệp DATN-SU26',
    role: 'Fullstack Developer',
    variant: 'pos',
    tags: ['Fullstack', 'Vue 3', 'Spring Boot 3.x', 'Vuetify', 'SQL Server'],
    summary:
      'Hệ thống bán hàng trực tuyến tích hợp quản lý kho/biến thể phức tạp và tính năng Bán hàng tại điểm (POS) qua quét mã QR.',
    highlights: [
      'Backend: Xây dựng RESTful API xử lý nghiệp vụ tạo/cập nhật biến thể (Size, Màu sắc, Tồn kho) và quy trình xử lý đơn hàng.',
      'Frontend: Lập trình giao diện Quản trị (Admin Dashboard) bằng Vue 3 & Vuetify, kết nối API và quản lý trạng thái đơn hàng qua Pinia.',
      'POS với mã QR: Tự động khởi tạo mã QR cho từng biến thể ở Backend và tích hợp camera quét trực tiếp trên giao diện POS để thêm sản phẩm vào đơn hàng.',
      'Là 1 trong 3 lập trình viên chính: trực tiếp Pull/Clone code, Code Review, kiểm thử chéo và xử lý xung đột/bug.',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/htt3095/ShopAo', kind: 'primary' },
    ],
  },
  {
    id: 'ikus',
    name: 'IKUS Task Manager',
    subtitle: 'Hệ thống Quản lý Dự án & Công việc',
    context: 'Thực tập — Công ty cổ phần IKU STUDIOS',
    role: 'Backend Developer',
    variant: 'swagger',
    tags: ['Backend', 'Spring Security', 'JWT', 'Swagger', 'SQL Server'],
    summary:
      'Hệ thống RESTful API hoàn chỉnh phục vụ quản lý dự án nội bộ, phân công nhiệm vụ và theo dõi tiến độ công việc.',
    highlights: [
      'Thiết kế & chuẩn hóa CSDL quan hệ MS SQL Server với ràng buộc chặt chẽ (CHECK Constraints, Composite Unique Keys, ON DELETE CASCADE).',
      'Phát triển toàn bộ RESTful API quản lý dự án, phân công công việc (Task Assignment) và theo dõi tiến độ; tối ưu truy vấn bằng Spring Data JPA.',
      'Tích hợp Spring Security & JWT xác thực và phân quyền theo vai trò (RBAC: ROLE_USER, ROLE_MANAGER), bảo vệ toàn bộ endpoint.',
      'Chuẩn hóa tài liệu API với Swagger UI (OpenAPI 3), triển khai Global Exception Handling và bộ test-case toàn diện trên Postman.',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/thanhdat-kokomu/IKUS_ThucTap', kind: 'primary' },
    ],
  },
]

export const timeline = [
  {
    type: 'work',
    role: 'Backend Developer (Thực tập sinh)',
    org: 'Công ty cổ phần IKU STUDIOS',
    project: 'IKUS Task Manager — Backend API',
    period: '2025',
    bullets: [
      'Thiết kế & chuẩn hóa CSDL MS SQL Server với CHECK Constraints, Composite Unique Keys, ON DELETE CASCADE.',
      'Xây dựng toàn bộ RESTful API (Spring Boot 3.x) cho quản lý dự án, phân công và theo dõi tiến độ công việc.',
      'Bảo mật bằng Spring Security & JWT với phân quyền RBAC (ROLE_USER, ROLE_MANAGER); tài liệu hóa bằng Swagger UI & Postman.',
    ],
  },
  {
    type: 'work',
    role: 'Fullstack Developer',
    org: 'Đồ án tốt nghiệp — ShopAo',
    project: 'DATN-SU26 · Hệ thống Quản lý & Thương mại Áo Thể Thao',
    period: '2026',
    bullets: [
      'Phát triển module Quản lý Biến thể & Đơn hàng (Backend API + Admin Dashboard Vue 3/Vuetify + Pinia).',
      'Triển khai tính năng POS quét mã QR: tự động khởi tạo mã QR ở Backend và tích hợp camera quét ở giao diện POS.',
      'Thành viên trong nhóm 3 lập trình viên chính: Code Review, kiểm thử chéo và xử lý bug/xung đột.',
    ],
  },
  {
    type: 'education',
    role: 'Phát triển phần mềm',
    org: 'Cao đẳng FPT Polytechnic',
    period: '2025 – 2026',
    bullets: ['Điểm trung bình: 7.5 · 101 tín chỉ'],
  },
  {
    type: 'education',
    role: 'Công nghệ thông tin',
    org: 'FPT Polyschool',
    period: '2022 – 2025',
    bullets: ['Điểm trung bình: 7.4 · 124 tín chỉ'],
  },
]

// Simulated backend endpoints for the interactive Live API playground.
export const apiEndpoints = [
  {
    id: 'projects',
    method: 'GET',
    path: '/api/v1/projects',
    query: '?page=0&size=2',
    title: 'IKUS — Danh sách dự án',
    status: 200,
    latency: 42,
    response: {
      content: [
        { id: 12, name: 'ShopAo Migration', owner: 'dat.duong', status: 'ACTIVE', tasks: 14 },
        { id: 13, name: 'IKUS Internal Portal', owner: 'dat.duong', status: 'PLANNING', tasks: 6 },
      ],
      page: 0,
      size: 2,
      totalElements: 18,
      totalPages: 9,
    },
  },
  {
    id: 'login',
    method: 'POST',
    path: '/api/v1/auth/login',
    query: '',
    title: 'IKUS — Đăng nhập & cấp JWT',
    status: 200,
    latency: 63,
    response: {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ...',
      tokenType: 'Bearer',
      expiresIn: 86400,
      user: { id: 7, username: 'dat.duong', roles: ['ROLE_MANAGER'] },
    },
  },
  {
    id: 'tasks',
    method: 'GET',
    path: '/api/v1/tasks',
    query: '?projectId=12&status=TODO',
    title: 'IKUS — Task theo dự án (RBAC)',
    status: 200,
    latency: 51,
    response: {
      projectId: 12,
      tasks: [
        { id: 501, title: 'Thiết kế schema biến thể sản phẩm', status: 'TODO', assignee: 'dat.duong', priority: 'HIGH' },
        { id: 502, title: 'Viết test-case Postman cho Auth', status: 'IN_PROGRESS', assignee: 'dat.duong', priority: 'MEDIUM' },
      ],
      total: 2,
    },
  },
  {
    id: 'forbidden',
    method: 'GET',
    path: '/api/v1/admin/users',
    query: '',
    title: 'IKUS — Endpoint chỉ dành cho Manager',
    status: 403,
    latency: 18,
    response: {
      timestamp: '2026-10-10T09:21:44Z',
      status: 403,
      error: 'Forbidden',
      message: 'Access denied: yêu cầu vai trò ROLE_MANAGER.',
      path: '/api/v1/admin/users',
    },
  },
]
