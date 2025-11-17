# CityResQ360

Nền tảng phản ánh – cảnh báo – giám sát đô thị mở kết nối người dân, chính quyền và AI để xử lý sự cố theo thời gian thực.

## 🚨 Giới thiệu

CityResQ360 cho phép:
- Người dân gửi phản ánh kèm ảnh, GPS, mô tả và theo dõi tiến độ xử lý
- AI Recognition Engine (Vision + NLP) nhận dạng sự cố, phân loại tiếng Việt, đánh giá mức độ khẩn cấp
- Bản đồ Mapbox/Leaflet hiển thị biểu tượng phản ánh, cảnh báo màu, heatmap mật độ sự cố
- CityWallet + CivicPoint thưởng token minh bạch cho phản ánh hữu ích và xếp hạng Citizen Hero
- Chuẩn dữ liệu NGSI-LD giúp mở API cho chính quyền, doanh nghiệp và startup smart city tích hợp nhanh chóng

## 🎯 Tác nhân & Màn hình

### 🧑‍🤝‍🧑 1. Citizen App (Web/Mobile)

| Screen | Mô tả | Thành phần chính |
|--------|-------|------------------|
| **/ – Trang chủ** | Giới thiệu CityResQ360, module chính, CTA triển khai | HeroSection, ModuleGrid, CTA |
| **/map – Bản đồ sự cố** | Mapbox realtime: phản ánh, cảnh báo màu, heatmap mật độ | CesiumJS/MapboxGL, LayerToggle |
| **/actions – Chiến dịch** | Lộ trình xử lý, checklist Citizen Hero, thông báo chiến dịch | ActionCard, FilterBar |
| **/feedback – Gửi phản ánh** | Form gửi ảnh + GPS + mô tả + CivicPoint | Formik, Upload component |
| **/stats – Bảng dẫn động** | Thống kê CivicPoint, KPI phản ánh, biểu đồ SLA | BarChart, RadarChart |

### 🛰️ 2. Citizen Hero Programs (`/school/*`)

| Screen | Mô tả | Thành phần chính |
|--------|-------|------------------|
| **/school/dashboard** | KPI chiến dịch Citizen Hero, tiến độ nhiệm vụ cộng đồng | Table + Recharts |
| **/school/courses** | Bộ kịch bản huấn luyện (ứng phó cháy nổ, ngập, rác) | CourseCard, CRUD modals |
| **/school/new** | Tạo kịch bản / nhiệm vụ mới cho cộng đồng | Form component |
| **/school/profile** | Hồ sơ đơn vị đồng hành (phường/xã/trường) | Profile card + edit form |

### 🏛️ 3. Trang quản lý (Admin)

| Screen | Mô tả | Thành phần chính |
|--------|-------|------------------|
| **/admin/dashboard** | Tổng quan phản ánh, cảnh báo, SLA xử lý theo thời gian thực | Multi-card dashboard, Recharts, Map overview |
| **/admin/wards** | Quản lý tuyến/phường, điều phối đội xử lý | Table, map bounding boxes |
| **/admin/ai** | Nhật ký AI Recognition (Vision + NLP), chất lượng mô hình | Correlation heatmap, AIInsightCard |
| **/admin/users** | Quản lý người dùng / quyền hạn | CRUD table |
| **/admin/logs** | Nhật ký hệ thống | Timeline / AuditLog |

### 🤖 4. AI Recognition & Bot

| Screen | Mô tả | Thành phần chính |
|--------|-------|------------------|
| **/chat** | ChatOps với CityResQ360 Bot: tra cứu phản ánh, lệnh phân công | ChatUI + backend proxy |
| **/recommendations** | Playbook AI đề xuất cho từng sự cố (kẹt xe, ngập, cháy...) | List + impact chart |

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom components với shadcn/ui patterns
- **Charts**: ApexCharts & Recharts
- **Maps**: Mapbox GL & CesiumJS (tùy chọn)
- **Forms**: React Dropzone, Flatpickr
- **State Management**: Zustand
- **API**: React Query (TanStack Query)

## 📦 Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd CityResQ360-DTUDZ/app
```

2. Cài đặt dependencies:
```bash
yarn install
```

3. Thiết lập environment variables (tạo file `.env.local`):
```env
# Database
DATABASE_URL="postgresql://..."

# API Keys
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_AI_API_KEY=your_ai_api_key

# App
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
```

4. Chạy migrations:
```bash
yarn prisma:migrate
```

5. Chạy development server:
```bash
yarn dev
```

6. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## 🌐 Routes Structure

```
/                           # Trang chủ công cộng
/map                        # Bản đồ phản ánh realtime
/actions                    # Chiến dịch / playbook phản ứng
/feedback                   # Gửi phản ánh + CivicPoint
/stats                      # KPI SLA & heatmap sự cố

/school/*                   # Chương trình Citizen Hero / đối tác cộng đồng
  ├── /dashboard            # KPI chiến dịch
  ├── /courses              # Bộ kịch bản huấn luyện
  ├── /new                  # Tạo nhiệm vụ mới
  └── /profile              # Hồ sơ đơn vị

/admin/*                    # Routes của quản trị viên
  ├── /dashboard            # Tổng quan hệ thống
  ├── /wards                # Quản lý phường
  ├── /ai                   # AI insights
  ├── /users                # Quản lý người dùng
  └── /logs                 # Nhật ký hệ thống

/chat                       # ChatOps với CityResQ360 Bot
/recommendations            # Playbook AI đề xuất
```

## 🎨 Theme Support

CityResQ360 hỗ trợ light và dark theme:
- Toggle theme trong header
- Theme preference được lưu tự động
- Dark mode được tối ưu cho trải nghiệm tốt nhất

## 📱 Responsive Design

Platform hoạt động mượt mà trên:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚦 Available Scripts

- `yarn dev` - Chạy development server
- `yarn build` - Build cho production
- `yarn start` - Chạy production server
- `yarn lint` - Chạy ESLint
- `yarn prisma:generate` - Generate Prisma client
- `yarn prisma:migrate` - Chạy database migrations
- `yarn prisma:seed` - Seed database với dữ liệu mẫu

## 🔐 Authentication & Authorization

Hệ thống phân quyền dựa trên vai trò:
- **Citizen** - Người dùng công cộng (xem bản đồ, gửi feedback)
- **School** - Đơn vị giáo dục (quản lý khóa học, học viên)
- **Admin** - Quản trị viên (quản lý toàn bộ hệ thống)

## 🗄️ Database Schema

Dự án sử dụng Prisma ORM với PostgreSQL:
- Users & Authentication
- Citizen Reports (ảnh, tọa độ, mức độ khẩn cấp)
- CivicPoint Wallet & Transactions
- AI Labels / Model outputs
- Response Teams & Assignments

## 📊 Features

### Citizen App
- Gửi phản ánh bằng ảnh + GPS + biểu mẫu động
- Theo dõi tiến độ xử lý, thông báo SLA
- Nhận CivicPoint khi phản ánh hữu ích

### AI Recognition Engine
- Vision AI nhận dạng kẹt xe, ngập, rác, cháy nổ
- NLP AI phân loại tiếng Việt, đánh giá mức độ khẩn cấp
- Tự động gợi ý tuyến/đội xử lý phù hợp

### CityWallet & CivicPoint
- Cấp phát token cho Citizen Hero, doanh nghiệp tài trợ
- Bảng xếp hạng minh bạch, lịch sử đổi thưởng
- Webhook/NGSI-LD để chia sẻ dữ liệu mở

### Admin Dashboard
- Bản đồ realtime, heatmap mật độ sự cố
- KPI SLA, báo cáo phân tích xu hướng theo khu vực
- Quản lý đội xử lý, phân quyền người dùng, nhật ký hệ thống

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án được phát hành dưới giấy phép MIT.

## 👥 Support

Để được hỗ trợ và đặt câu hỏi:
- Tạo issue trong repository
- Liên hệ development team

## 🙏 Acknowledgments

- Next.js team
- Mapbox & CesiumJS
- Tailwind CSS
- Các thư viện open-source đã sử dụng

---

**CityResQ360** - Kết nối phản ánh – cảnh báo – giám sát để xây dựng đô thị thông minh, an toàn hơn 🚨
