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
   HỆ THỐNG QUẢN LÝ PLAYLIST, THU NHỎ VÀ KÉO THẢ WIDGET NHẠC
       XÁC THỰC GOOGLE, QUẢN LÝ PLAYLIST & NÚT XÓA
   ========================================================= */

let playlist = [];
let currentTrackIndex = -1;
let isMinimized = false;

// Khởi tạo khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    checkLocalUserSession();
});

let isUserLoggedIn = false;

// Giải mã token trả về từ Google
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('--' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Xử lý khi đăng nhập thành công
function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);

    const googleUser = {
        name: responsePayload.name,
        email: responsePayload.email,
        avatar: responsePayload.picture
    };

    localStorage.setItem('edupulse_user', JSON.stringify(googleUser));
    applyLoggedInUI(googleUser);
    
    alert(`Xin chào ${googleUser.name}! Đã kết nối tài khoản Google thành công.`);
}

// Áp dụng giao diện khi đã đăng nhập (Biến chữ E thành Avatar)
function applyLoggedInUI(user) {
    isUserLoggedIn = true;
    const logoLetter = document.getElementById('logo-letter');
    const logoAvatar = document.getElementById('logo-avatar');
    
    // Gán thông tin vào bảng popup
    document.getElementById('dropdown-avatar').src = user.avatar;
    document.getElementById('dropdown-name').textContent = user.name;
    document.getElementById('dropdown-email').textContent = user.email;

    // Ẩn chữ E, hiện ảnh đại diện lên ô logo
    if (logoLetter && logoAvatar) {
        logoLetter.classList.add('hidden');
        logoAvatar.classList.remove('hidden');
        logoAvatar.src = user.avatar;
    }
}

// Xử lý khi người dùng bấm vào ô logo chữ E / Avatar
function handleLogoClick() {
    if (!isUserLoggedIn) {
        // Nếu chưa đăng nhập: Kích hoạt hiển thị bảng popup đăng nhập chính thức của Google
        // Google Identity Services tự sinh nút ẩn, ta có thể gọi prompt
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                // Trường hợp trình duyệt chặn popup prompt, hướng dẫn click hoặc hiện thông báo
                console.log("Cần bấm vào khung đăng nhập Google.");
            }
        });
    } else {
        // Nếu đã đăng nhập: Bấm vào sẽ bật/tắt bảng menu thông tin & đăng xuất
        const dropdown = document.getElementById('user-dropdown-menu');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }
    }
}

// Đóng menu khi click ra ngoài
window.addEventListener('click', function(e) {
    const trigger = document.getElementById('profile-trigger');
    const dropdown = document.getElementById('user-dropdown-menu');
    if (trigger && dropdown && !trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

// Kiểm tra phiên đăng nhập khi tải lại trang
document.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('edupulse_user');
    if (savedUser) {
        applyLoggedInUI(JSON.parse(savedUser));
    }
    
    // Khởi tạo Google Identity Services
    if (typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Thay bằng ID của bạn
            callback: handleCredentialResponse
        });
    }
});

// Đăng xuất tài khoản
function logoutGoogle() {
    localStorage.removeItem('edupulse_user');
    location.reload(); // Tải lại trang để reset
}

// 2. Xử lý tải lên danh sách bài hát từ máy tính
function handleMusicUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const musicURL = URL.createObjectURL(file);
        playlist.push({
            name: file.name,
            url: musicURL
        });
    }

    renderPlaylist();

    if (currentTrackIndex === -1 && playlist.length > 0) {
        playTrack(0);
    }
}

// 3. Hiển thị danh sách phát kèm nút XÓA (Thùng rác)
function renderPlaylist() {
    const container = document.getElementById('playlist-container');
    const countEl = document.getElementById('playlist-count');
    if (!container) return;

    countEl.textContent = playlist.length;

    if (playlist.length === 0) {
        container.innerHTML = `<div class="text-center py-4 text-slate-400 italic text-[11px]">Chưa có bài hát trong danh sách</div>`;
        return;
    }

    container.innerHTML = '';

    playlist.forEach((track, index) => {
        const isActive = index === currentTrackIndex;
        const itemHTML = `
            <div onclick="playTrack(${index})" class="group flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100' : 'hover:bg-slate-100 text-slate-700'}">
                <div class="flex items-center gap-2 truncate flex-1">
                    <i class="fa-solid ${isActive ? 'fa-volume-high text-indigo-600' : 'fa-music text-slate-400'} text-[10px]"></i>
                    <span class="truncate text-xs">${track.name}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${isActive ? '<span class="text-[9px] bg-indigo-600 text-white px-1.5 py-0.5 rounded">Đang phát</span>' : ''}
                    <!-- Nút Xóa bài hát (Thùng rác) -->
                    <button onclick="removeTrack(event, ${index})" title="Xóa bài này" class="text-slate-400 hover:text-rose-600 p-1 transition">
                        <i class="fa-solid fa-trash-can text-[11px]"></i>
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
}

// 4. Xóa bài hát khỏi danh sách
function removeTrack(event, index) {
    event.stopPropagation(); // Ngăn không cho sự kiện click nhầm vào việc phát nhạc

    if (confirm(`Bạn có chắc chắn muốn xóa bài hát "${playlist[index].name}" không?`)) {
        if (index === currentTrackIndex) {
            const audio = document.getElementById('bg-audio');
            audio.pause();
            audio.src = '';
            currentTrackIndex = -1;
            document.getElementById('track-title').textContent = 'Chưa có bài hát nào';
            document.getElementById('track-status').textContent = 'Đã xóa bài hiện tại';
        } else if (index < currentTrackIndex) {
            currentTrackIndex--;
        }

        playlist.splice(index, 1);
        renderPlaylist();
    }
}

// 5. Các hàm điều khiển phát nhạc (Play, Pause, Next, Prev)
function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];

    const audio = document.getElementById('bg-audio');
    const trackTitle = document.getElementById('track-title');
    const statusEl = document.getElementById('track-status');
    const playBtn = document.getElementById('play-btn');

    audio.src = track.url;
    trackTitle.textContent = track.name;
    statusEl.textContent = `Bài ${index + 1} / ${playlist.length}`;

    audio.play().then(() => {
        playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
    }).catch(err => {
        console.log("Lỗi phát nhạc:", err);
    });

    renderPlaylist();
}

function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');

    if (playlist.length === 0) {
        alert("Vui lòng bấm 'Thêm nhạc' để chọn các file MP3 từ máy tính trước nhé!");
        return;
    }

    if (currentTrackIndex === -1) {
        playTrack(0);
        return;
    }

    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        });
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
    }
}

function playNextTrack() {
    if (playlist.length === 0) return;
    let nextIndex = currentTrackIndex + 1;
    if (nextIndex >= playlist.length) nextIndex = 0;
    playTrack(nextIndex);
}

function playPreviousTrack() {
    if (playlist.length === 0) return;
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) prevIndex = playlist.length - 1;
    playTrack(prevIndex);
}

// 6. Thu nhỏ / Mở rộng widget
function toggleMinimizeWidget() {
    const body = document.getElementById('widget-body');
    const minimizeBtn = document.getElementById('minimize-btn');
    const widget = document.getElementById('music-player-widget');

    isMinimized = !isMinimized;
    if (isMinimized) {
        body.classList.add('hidden');
        minimizeBtn.innerHTML = '<i class="fa-solid fa-window-maximize text-xs"></i>';
        widget.style.width = '240px';
    } else {
        body.classList.remove('hidden');
        minimizeBtn.innerHTML = '<i class="fa-solid fa-window-minimize text-xs"></i>';
        widget.style.width = '320px';
    }
}

// 7. Kéo thả widget tự do
document.addEventListener('DOMContentLoaded', () => {
    const widget = document.getElementById('music-player-widget');
    const header = document.getElementById('widget-header');
    if (!widget || !header) return;

    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - widget.getBoundingClientRect().left;
        offsetY = e.clientY - widget.getBoundingClientRect().top;
        widget.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        const maxX = window.innerWidth - widget.offsetWidth;
        const maxY = window.innerHeight - widget.offsetHeight;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        widget.style.left = `${x}px`;
        widget.style.top = `${y}px`;
        widget.style.bottom = 'auto';
        widget.style.right = 'auto';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            widget.style.transition = 'all 0.3s ease';
        }
    });
});
