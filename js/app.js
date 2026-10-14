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
   4. HỆ THỐNG PHÁT NHẠC (MUSIC PLAYER) & LƯU TRỮ PLAYLIST
   ========================================================= */

function handleMusicUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Audio = e.target.result;
            playlist.push({
                name: file.name,
                url: base64Audio
            });
            savePlaylistToStorage();
            renderPlaylist();

            if (currentTrackIndex === -1 && playlist.length > 0) {
                playTrack(0);
            }
        };
        reader.readAsDataURL(file);
    });
}

function savePlaylistToStorage() {
    try {
        localStorage.setItem('edupulse_playlist', JSON.stringify(playlist));
    } catch (err) {
        console.log("Dung lượng file nhạc quá lớn:", err);
    }
}

function loadPlaylistFromStorage() {
    const saved = localStorage.getItem('edupulse_playlist');
    if (saved) {
        try {
            playlist = JSON.parse(saved);
            renderPlaylist();
            if (playlist.length > 0) {
                currentTrackIndex = 0;
                const trackTitle = document.getElementById('track-title');
                const statusEl = document.getElementById('track-status');
                if (trackTitle) trackTitle.textContent = playlist[0].name;
                if (statusEl) statusEl.textContent = `Đã khôi phục ${playlist.length} bài hát`;
            }
        } catch (e) {
            console.log("Lỗi tải playlist:", e);
        }
    }
}

function renderPlaylist() {
    const container = document.getElementById('playlist-container');
    const countEl = document.getElementById('playlist-count');
    if (!container) return;

    if (countEl) countEl.textContent = playlist.length;

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
                    <button onclick="removeTrack(event, ${index})" title="Xóa bài này" class="text-slate-400 hover:text-rose-600 p-1 transition">
                        <i class="fa-solid fa-trash-can text-[11px]"></i>
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
}

function removeTrack(event, index) {
    event.stopPropagation();
    if (confirm(`Bạn có chắc chắn muốn xóa bài hát "${playlist[index].name}" không?`)) {
        if (index === currentTrackIndex) {
            const audio = document.getElementById('bg-audio');
            if (audio) { audio.pause(); audio.src = ''; }
            currentTrackIndex = -1;
            const trackTitle = document.getElementById('track-title');
            const statusEl = document.getElementById('track-status');
            if (trackTitle) trackTitle.textContent = 'Chưa có bài hát nào';
            if (statusEl) statusEl.textContent = 'Đã xóa bài hiện tại';
        } else if (index < currentTrackIndex) {
            currentTrackIndex--;
        }

        playlist.splice(index, 1);
        savePlaylistToStorage();
        renderPlaylist();
    }
}

function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];

    const audio = document.getElementById('bg-audio');
    const trackTitle = document.getElementById('track-title');
    const statusEl = document.getElementById('track-status');
    const playBtn = document.getElementById('play-btn');

    if (audio) {
        audio.src = track.url;
        if (trackTitle) trackTitle.textContent = track.name;
        if (statusEl) statusEl.textContent = `Bài ${index + 1} / ${playlist.length}`;

        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        }).catch(err => console.log("Lỗi phát nhạc:", err));
    }

    renderPlaylist();
}

function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');

    if (playlist.length === 0) {
        alert("Vui lòng bấm 'Thêm nhạc' để chọn các file MP3 nhé!");
        return;
    }

    if (currentTrackIndex === -1) {
        playTrack(0);
        return;
    }

    if (audio.paused) {
        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        });
    } else {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
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
