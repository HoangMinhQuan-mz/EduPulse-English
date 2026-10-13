/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Bộ điều khiển trung tâm (App Logic & DOM Rendering)
   ========================================================= */

// Khởi tạo ứng dụng ngay khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    console.log("EduPulse English - Hệ thống đã khởi động thành công.");
    initApp();
});

// Biến trạng thái toàn cục (Global State)
let currentGrade = 10;
let currentUnitData = null;

// Hàm khởi chạy ứng dụng
function initApp() {
    loadUserProgress();
    // Mặc định nạp dữ liệu Khối 10 khi mở trang
    switchGrade(10);
}

// Hàm chuyển đổi giữa các khối lớp (10, 11, 12)
function switchGrade(gradeNumber) {
    currentGrade = gradeNumber;
    console.log(`Đã chuyển sang Khối ${gradeNumber}`);

    // Cập nhật trạng thái hiển thị của nút bấm trên Header
    updateGradeButtonsUI(gradeNumber);

    // Gán dữ liệu tương ứng dựa trên khối lớp
    if (gradeNumber === 10) {
        currentUnitData = grade10Data;
    } else if (gradeNumber === 11) {
        currentUnitData = grade11Data;
    } else if (gradeNumber === 12) {
        currentUnitData = grade12Data;
    }

    // Cập nhật tiêu đề Banner & Render danh sách bài học ra giao diện
    updateBannerInfo();
    renderUnitList();
}

// Hàm cập nhật giao diện nút bấm chọn khối
function updateGradeButtonsUI(activeGrade) {
    for (let i = 10; i <= 12; i++) {
        const btn = document.getElementById(`btn-grade-${i}`);
        if (!btn) continue;
        
        if (i === activeGrade) {
            btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold transition bg-white text-indigo-600 shadow-sm";
        } else {
            btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold transition text-slate-600 hover:text-slate-900";
        }
    }
}

// Hàm cập nhật nội dung Banner theo khối
function updateBannerInfo() {
    const titleEl = document.getElementById('grade-title');
    const descEl = document.getElementById('grade-desc');
    
    if (titleEl && currentUnitData) {
        titleEl.textContent = currentUnitData.title;
    }
    if (descEl && currentUnitData) {
        descEl.textContent = currentUnitData.description;
    }
}

// Hàm hiển thị danh sách bài học (Units) lên màn hình
function renderUnitList() {
    const container = document.getElementById('unit-list-container');
    if (!container || !currentUnitData) return;

    container.innerHTML = '';

    currentUnitData.units.forEach(unit => {
        const cardHTML = `
            <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                    <span class="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-semibold mb-2">
                        ${unit.vocab.length} Từ vựng • ${unit.quiz.length} Câu hỏi trắc nghiệm
                    </span>
                    <h3 class="font-bold text-lg text-slate-800">${unit.title}</h3>
                    <p class="text-sm text-slate-600 mt-1 mb-4">${unit.description}</p>
                </div>
                <button onclick="openUnitDetail('${unit.id}')" class="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    <i class="fa-solid fa-graduation-cap"></i> Vào học bài này
                </button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Hàm mở chi tiết bài học (Sẽ phát triển thêm tính năng học từ vựng & làm quiz ở bước tới)
function openUnitDetail(unitId) {
    alert(`Đang mở bài học có mã: ${unitId}\nTính năng học Flashcard và Trắc nghiệm tương tác sẽ được tích hợp tiếp theo!`);
}

// Hàm lưu trữ tiến độ học tập trên trình duyệt (LocalStorage)
function loadUserProgress() {
    const saved = localStorage.getItem('edupulse_progress');
    if (saved) {
        const progress = JSON.parse(saved);
        console.log("Đã tải tiến độ học tập đã lưu:", progress);
    }
}
