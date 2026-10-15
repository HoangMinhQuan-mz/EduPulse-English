/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Bộ điều khiển trung tâm (App Logic & DOM Rendering)
   ========================================================= */

// Biến trạng thái toàn cục (Global State)

let currentGrade = 10;
let currentUnitData = null;
let playlist = [];
let currentTrackIndex = -1;
let isMinimized = false;
let isUserLoggedIn = false;
let isShuffle = false;
let isRepeat = false;

/* =========================================================
   1. KHỞI TẠO ỨNG DỤNG KHI TẢI TRANG
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    console.log("EduPulse English - Hệ thống đã khởi động thành công.");
    
    // Khởi chạy giao diện bài học
    initApp();

    // Kiểm tra phiên đăng nhập Google cũ
    const savedUser = localStorage.getItem('edupulse_user');
    if (savedUser) {
        applyLoggedInUI(JSON.parse(savedUser));
    }
    
    // Khởi tạo Google Identity Services
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
            client_id: "538593494259-vpeufj4eq6i1q900avkn11blbpd47ev7.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
    }

    // Tải danh sách nhạc đã lưu trữ
    loadPlaylistFromStorage();

    // Kích hoạt kéo thả Widget Nhạc
    initMusicWidgetDrag();
});


/* =========================================================
   2. HỆ THỐNG CHUYỂN ĐỔI KHỐI LỚP & BÀI HỌC
   ========================================================= */

function initApp() {
    loadUserProgress();
    switchGrade(10);
}

function switchGrade(gradeNumber) {
    currentGrade = gradeNumber;
    updateGradeButtonsUI(gradeNumber);

    if (gradeNumber === 10) {
        currentUnitData = typeof grade10Data !== 'undefined' ? grade10Data : null;
    } else if (gradeNumber === 11) {
        currentUnitData = typeof grade11Data !== 'undefined' ? grade11Data : null;
    } else if (gradeNumber === 12) {
        currentUnitData = typeof grade12Data !== 'undefined' ? grade12Data : null;
    }

    updateBannerInfo();
    renderUnitList();
}

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

function renderUnitList() {
    const container = document.getElementById('unit-list-container');
    if (!container || !currentUnitData || !currentUnitData.units) return;

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

    initMouseLightEffect();
}

function openUnitDetail(unitId) {
    alert(`Đang mở bài học có mã: ${unitId}\nTính năng học Flashcard và Trắc nghiệm tương tác sẽ được tích hợp tiếp theo!`);
}

function loadUserProgress() {
    const saved = localStorage.getItem('edupulse_progress');
    if (saved) {
        const progress = JSON.parse(saved);
        console.log("Đã tải tiến độ học tập đã lưu:", progress);
    }
}

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
   3. XÁC THỰC GOOGLE (GIS) & QUẢN LÝ TÀI KHOẢN
   ========================================================= */

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('--' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    const googleUser = {
        name: responsePayload.name,
        email: responsePayload.email,
        avatar: responsePayload.picture
    };

    localStorage.setItem('edupulse_user', JSON.stringify(googleUser));
    applyLoggedInUI(googleUser);
    loadPlaylistFromStorage();
    alert(`Xin chào ${googleUser.name}! Đã kết nối tài khoản Google thành công.`);
}

function applyLoggedInUI(user) {
    isUserLoggedIn = true;
    const logoLetter = document.getElementById('logo-letter');
    const logoAvatar = document.getElementById('logo-avatar');
    
    const dropAvatar = document.getElementById('dropdown-avatar');
    const dropName = document.getElementById('dropdown-name');
    const dropEmail = document.getElementById('dropdown-email');

    if (dropAvatar) dropAvatar.src = user.avatar;
    if (dropName) dropName.textContent = user.name;
    if (dropEmail) dropEmail.textContent = user.email;

    if (logoLetter && logoAvatar) {
        logoLetter.classList.add('hidden');
        logoAvatar.classList.remove('hidden');
        logoAvatar.src = user.avatar;
    }
}

function handleLogoClick() {
    if (!isUserLoggedIn) {
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                console.log("Cần bấm vào khung đăng nhập Google.");
            }
        });
    } else {
        const dropdown = document.getElementById('user-dropdown-menu');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }
    }
}

window.addEventListener('click', function(e) {
    const trigger = document.getElementById('profile-trigger');
    const dropdown = document.getElementById('user-dropdown-menu');
    if (trigger && dropdown && !trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

function logoutGoogle() {
    localStorage.removeItem('edupulse_user');
    location.reload();
}


/* =========================================================
   HỆ THỐNG PHÁT NHẠC (MUSIC PLAYER) & LƯU TRỮ PLAYLIST THEO TÀI KHOẢN
   ========================================================= */

// Danh sách 3 bài hát mặc định từ thư mục audio

const defaultPlaylist = [
    {
        name: "Khúc Tráng Ca",
        url: "audio/KHÚC TRÁNG CA.mp3",
        isDefault: true
    },
    {
        name: "Truyền Động Lực",
        url: "audio/TRUYỀN ĐỘNG LỰC.mp3",
        isDefault: true
    },
    {
        name: "Relax Chill",
        url: "audio/RELAX CHILL.mp3",
        isDefault: true
    }
];

// Lấy tên Database riêng theo Email tài khoản để phân tách dữ liệu
function getDatabaseName() {
    const savedUser = localStorage.getItem('edupulse_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            if (user && user.email) {
                return `EduPulseMusicDB_${user.email.replace(/[@.]/g, '_')}`;
            }
        } catch (e) {}
    }
    return 'EduPulseMusicDB_guest';
}

// Mở kết nối IndexedDB của tài khoản hiện tại
function openMusicDB() {
    return new Promise((resolve, reject) => {
        const dbName = getDatabaseName();
        const request = indexedDB.open(dbName, 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('tracks')) {
                db.createObjectStore('tracks', { keyPath: 'id', autoIncrement: true });
            }
        };
    });
}

// Lưu các bài hát do người dùng tự tải lên vào CSDL IndexedDB của tài khoản
async function savePlaylistToStorage() {
    try {
        const db = await openMusicDB();
        const transaction = db.transaction('tracks', 'readwrite');
        const store = transaction.objectStore('tracks');

        store.clear();
        // Chỉ lưu các bài tự tải lên (loại bỏ bài mặc định ra khỏi DB để tránh trùng lặp)
        playlist.forEach(track => {
            if (!track.isDefault) {
                store.add({ name: track.name, file: track.file });
            }
        });
    } catch (err) {
        console.log("Lỗi lưu file nhạc:", err);
    }
}

// Tải danh sách: Gộp 3 bài mặc định lên đầu + các bài tự tải từ IndexedDB

async function loadPlaylistFromStorage() {
    try {
        const db = await openMusicDB();
        const transaction = db.transaction('tracks', 'readonly');
        const store = transaction.objectStore('tracks');
        const request = store.getAll();

        request.onsuccess = () => {
            const userTracks = request.result || [];
            playlist = [...defaultPlaylist, ...userTracks];
            
            // TỰ ĐỘNG CHỌN SẴN BÀI ĐẦU TIÊN KHI LOAD TRANG
            currentTrackIndex = playlist.length > 0 ? 0 : -1;
            
            const trackTitle = document.getElementById('track-title');
            const statusEl = document.getElementById('track-status');
            
            renderPlaylist();

            if (playlist.length > 0) {
                if (trackTitle) trackTitle.textContent = playlist[0].name;
                if (statusEl) statusEl.textContent = `Bài 1 / ${playlist.length}`;
                
                // Gán sẵn nguồn audio để sẵn sàng bấm Play là chạy ngay
                const audio = document.getElementById('bg-audio');
                if (audio) {
                    let audioSrc = playlist[0].isDefault ? playlist[0].url : URL.createObjectURL(playlist[0].file);
                    audio.src = audioSrc;
                }
            } else {
                if (trackTitle) trackTitle.textContent = 'Chưa có bài hát nào';
                if (statusEl) statusEl.textContent = 'Tải lên danh sách nhạc MP3';
            }
        };
    } catch (e) {
        console.log("Lỗi tải playlist:", e);
        playlist = [...defaultPlaylist];
        currentTrackIndex = playlist.length > 0 ? 0 : -1;
        renderPlaylist();
    }
}

// 2. Sửa hàm playTrack để xử lý chuẩn xác
function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];

    const audio = document.getElementById('bg-audio');
    const trackTitle = document.getElementById('track-title');
    const statusEl = document.getElementById('track-status');
    const playBtn = document.getElementById('play-btn');

    if (audio) {
        let audioSrc = "";
        
        if (track.isDefault) {
            audioSrc = track.url;
        } else if (track.file instanceof File || track.file instanceof Blob) {
            audioSrc = URL.createObjectURL(track.file);
        } else if (track.file) {
            const blob = new Blob([track.file], { type: 'audio/mp3' });
            audioSrc = URL.createObjectURL(blob);
        }

        audio.src = audioSrc;
        if (trackTitle) trackTitle.textContent = track.name;
        if (statusEl) statusEl.textContent = `Bài ${index + 1} / ${playlist.length}`;

        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        }).catch(err => console.log("Lỗi phát nhạc:", err));
    }

    renderPlaylist();
}

// 3. Sửa hàm togglePlayMusic để bấm phát được ngay lập tức
function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');

    if (playlist.length === 0) {
        alert("Danh sách trống!");
        return;
    }

    if (currentTrackIndex === -1) {
        playTrack(0);
        return;
    }

    if (audio.paused) {
        // Nếu audio chưa có src thì gán src cho bài hiện tại
        if (!audio.src || audio.src === "") {
            playTrack(currentTrackIndex);
            return;
        }
        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        });
    } else {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
    }
}

// 4. Thêm hàm xử lý nút Lặp lại (Repeat) và Ngẫu nhiên (Shuffle)
function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById('shuffle-btn');
    if (btn) {
        if (isShuffle) {
            btn.classList.add('text-indigo-600', 'bg-indigo-50');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('text-indigo-600', 'bg-indigo-50');
            btn.classList.add('text-slate-400');
        }
    }
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    const btn = document.getElementById('repeat-btn');
    if (btn) {
        if (isRepeat) {
            btn.classList.add('text-indigo-600', 'bg-indigo-50');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('text-indigo-600', 'bg-indigo-50');
            btn.classList.add('text-slate-400');
        }
    }
}

// 5. Cập nhật hàm Next và Previous hỗ trợ Ngẫu nhiên
function playNextTrack() {
    if (playlist.length === 0) return;
    
    if (isShuffle) {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * playlist.length);
        } while (nextIndex === currentTrackIndex && playlist.length > 1);
        playTrack(nextIndex);
    } else {
        let nextIndex = currentTrackIndex + 1;
        if (nextIndex >= playlist.length) nextIndex = 0;
        playTrack(nextIndex);
    }
}

function playPreviousTrack() {
    if (playlist.length === 0) return;
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) prevIndex = playlist.length - 1;
    playTrack(prevIndex);
}

// 6. Lắng nghe sự kiện khi bài hát kết thúc để tự động chuyển bài hoặc lặp lại
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.addEventListener('ended', () => {
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                playNextTrack();
            }
        });
    }
});

function toggleMinimizeWidget() {
    const body = document.getElementById('widget-body');
    const minimizeBtn = document.getElementById('minimize-btn');
    const widget = document.getElementById('music-player-widget');

    isMinimized = !isMinimized;
    if (isMinimized) {
        if (body) body.classList.add('hidden');
        if (minimizeBtn) minimizeBtn.innerHTML = '<i class="fa-solid fa-window-maximize text-xs"></i>';
        if (widget) widget.style.width = '240px';
    } else {
        if (body) body.classList.remove('hidden');
        if (minimizeBtn) minimizeBtn.innerHTML = '<i class="fa-solid fa-window-minimize text-xs"></i>';
        if (widget) widget.style.width = '320px';
    }
}

function initMusicWidgetDrag() {
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
}

// Hàm Thu gọn / Mở rộng toàn bộ thanh Header
function toggleHeader() {
    const header = document.getElementById('main-header');
    const expandBtn = document.getElementById('btn-expand-header');

    if (!header || !expandBtn) return;

    if (header.classList.contains('-translate-y-full')) {
        // Hiện lại Header
        header.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
        expandBtn.classList.add('hidden');
    } else {
        // Thu gọn rút ẩn Header lên trên
        header.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        expandBtn.classList.remove('hidden');
    }
}
