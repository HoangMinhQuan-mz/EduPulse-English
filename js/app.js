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

/* =========================================================
   HÀM RENDER VÀ KÍCH HOẠT HIỆU ỨNG ÁNH SÁNG THEO CHUỘT
   ========================================================= */

// Hàm hiển thị danh sách bài học (Units) lên màn hình
function renderUnitList() {
    const container = document.getElementById('unit-list-container');
    if (!container || !currentUnitData) return;

    container.innerHTML = '';

    currentUnitData.units.forEach(unit => {
        const cardHTML = `
            <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition flex flex-col justify-between">
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

    // KÍCH HOẠT HIỆU ỨNG CHUỘT NGAY SAU KHI RENDER XONG CARD
    initMouseLightEffect();
}

// Xử lý tọa độ con chuột để tạo hiệu ứng ánh sáng quét theo con trỏ
function initMouseLightEffect() {
    const cards = document.querySelectorAll('#unit-list-container > div');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* =========================================================
   TÍNH NĂNG PHÁT NHẠC VÀ LƯU TRỮ NGOẠI TUYẾN (CACHE API)
   ========================================================= */

const CACHE_NAME = 'edupulse-music-cache-v1';
const AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf756.mp3?filename=lofi-study-112191.mp3';


document.addEventListener('DOMContentLoaded', () => {
    checkOfflineStatus();
});

// Hàm Phát / Tạm dừng nhạc
function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');
    const statusEl = document.getElementById('track-status');

    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
            statusEl.textContent = 'Đang phát nhạc Lofi học tập...';
        }).catch(err => {
            console.log("Lỗi phát nhạc:", err);
            alert("Trình duyệt chặn phát tự động hoặc chưa tải được nguồn nhạc!");
        });
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
        statusEl.textContent = 'Đã tạm dừng';
    }
}

// Hàm tải xuống và lưu trữ tệp nhạc vào Cache của trình duyệt
async function downloadAndCacheMusic() {
    const statusEl = document.getElementById('track-status');
    if (!('caches' in window)) {
        alert("Trình duyệt của bạn không hỗ trợ tính năng lưu trữ ngoại tuyến này!");
        return;
    }

    try {
        statusEl.textContent = 'Đang tải xuống lưu trữ...';
        const cache = await caches.open(CACHE_NAME);
        await cache.add(AUDIO_URL);
        
        statusEl.textContent = 'Đã lưu ngoại tuyến thành công! (Offline ready)';
        alert("Đã tải và lưu trữ tệp nhạc thành công vào thiết bị! Lần sau bạn có thể nghe ngay cả khi mất mạng.");
    } catch (error) {
        console.error("Lỗi khi lưu cache nhạc:", error);
        statusEl.textContent = 'Lưu thất bại, thử lại sau.';
        alert("Không thể tải xuống nhạc. Vui lòng kiểm tra kết nối mạng!");
    }
}

// Kiểm tra trạng thái đã lưu cache hay chưa
async function checkOfflineStatus() {
    if (!('caches' in window)) return;
    try {
        const cache = await caches.open(CACHE_NAME);
        const match = await cache.match(AUDIO_URL);
        const statusEl = document.getElementById('track-status');
        if (match) {
            statusEl.textContent = 'Đã sẵn sàng ngoại tuyến (Offline Mode)';
        }
    } catch (e) {
        console.log("Không thể kiểm tra cache:", e);
    }
}

/* XỬ LÝ TẢI VÀ PHÁT NHẠC TỪ MÁY TÍNH CỦA NGƯỜI DÙNG */
function handleLocalMusicUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Tạo đường dẫn tạm thời cho file nhạc trong trình duyệt
    const musicURL = URL.createObjectURL(file);
    const audio = document.getElementById('bg-audio');
    const trackTitle = document.getElementById('track-title');
    const statusEl = document.getElementById('track-status');
    const playBtn = document.getElementById('play-btn');

    // Cập nhật nguồn phát nhạc và tên bài hát theo tên file
    audio.src = musicURL;
    trackTitle.textContent = file.name;
    statusEl.textContent = 'Đã tải lên • Sẵn sàng phát';

    // Tự động phát luôn bài hát vừa tải lên
    audio.play().then(() => {
        playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        statusEl.textContent = 'Đang phát nhạc của bạn...';
    }).catch(err => {
        console.log("Lỗi phát nhạc:", err);
    });
}
