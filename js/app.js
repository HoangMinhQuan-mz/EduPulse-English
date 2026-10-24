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
   2. HỆ THỐNG CHUYỂN ĐỔI KHỐI LỚP & BÀI HỌC (VIETJACK STYLE)
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
        if (btn) btn.className = i === activeGrade ? "nav-item is-active" : "nav-item";
    }
    const num = document.getElementById('grade-num');
    if (num) num.textContent = activeGrade;
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

function crumbHTML(unit, lesson) {
    const unitPart = lesson
        ? `<button onclick="openUnitDetail('${unit.id}')" class="crumb">${unit.title}</button><i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i><span class="font-bold text-slate-700 truncate">${lesson.title}</span>`
        : `<span class="font-bold text-slate-700 truncate">${unit.title}</span>`;
    return `<nav class="crumbs"><button onclick="renderUnitList()" class="crumb"><i class="fa-solid fa-arrow-left"></i> Khối ${currentGrade}</button><i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>${unitPart}</nav>`;
}

function renderUnitList() {
    const container = document.getElementById('unit-list-container');
    if (!container || !currentUnitData || !currentUnitData.units) return;

    document.querySelector('.hero').classList.remove('hidden');
    const count = document.getElementById('grade-count');
    if (count) count.textContent = `${currentUnitData.units.length} Unit`;

    container.className = "roadmap";
    container.innerHTML = currentUnitData.units.map((unit, i) => `
        <div class="rd-row">
            <div class="rd-node">${i + 1}</div>
            <div class="rd-card" role="button" tabindex="0" onclick="openUnitDetail('${unit.id}')" onkeydown="if(event.key==='Enter')this.click()">
                <div class="min-w-0">
                    <h3 class="font-extrabold text-lg text-slate-900">${unit.title}</h3>
                    <p class="text-sm text-slate-600 mt-1">${unit.description}</p>
                    <p class="rd-meta"><i class="fa-solid fa-layer-group"></i> ${unit.lessons ? unit.lessons.length : 0} phần học</p>
                </div>
                <span class="rd-go"><i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>`).join('');
}

function openUnitDetail(unitId) {
    if (!currentUnitData || !currentUnitData.units) return;
    const unit = currentUnitData.units.find(u => u.id === unitId);
    if (!unit) { alert("Không tìm thấy dữ liệu bài học này!"); return; }
    const container = document.getElementById('unit-list-container');
    if (!container) return;

    document.querySelector('.hero').classList.add('hidden');
    container.className = "";

    const tiles = (unit.lessons && unit.lessons.length)
        ? unit.lessons.map((lesson, idx) => `
            <div class="rd-card tile" role="button" tabindex="0" onclick="openLessonDetail('${unit.id}', '${lesson.id}')" onkeydown="if(event.key==='Enter')this.click()">
                <div class="rd-node sm">${idx + 1}</div>
                <div class="min-w-0 flex-1">
                    <h4 class="font-bold text-slate-900">${lesson.title}</h4>
                    <p class="text-sm text-slate-500 mt-0.5">${lesson.subtitle}</p>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-300"></i>
            </div>`).join('')
        : `<p class="text-slate-500 italic">Đang cập nhật nội dung các mục bài học cho Unit này...</p>`;

    container.innerHTML = `
        ${crumbHTML(unit)}
        <div class="unit-head">
            <p class="text-sm font-bold opacity-80">Khối ${currentGrade}</p>
            <h2 class="text-3xl font-extrabold mt-1">${unit.title}</h2>
            <p class="mt-2 opacity-90 max-w-xl">${unit.description}</p>
        </div>
        <div class="tiles">${tiles}</div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openLessonDetail(unitId, lessonId) {
    const data = currentGrade === 10 ? (typeof grade10Data !== 'undefined' && grade10Data)
               : currentGrade === 11 ? (typeof grade11Data !== 'undefined' && grade11Data)
               : (typeof grade12Data !== 'undefined' && grade12Data);
    const unit = data && data.units.find(u => u.id === unitId);
    if (!unit) return;
    const lesson = unit.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    const container = document.getElementById('unit-list-container');
    if (!container) return;

    document.querySelector('.hero').classList.add('hidden');
    container.className = "";

    const vocabHTML = (lesson.vocab && lesson.vocab.length) ? `
        <section class="panel">
            <h3 class="panel-title"><i class="fa-solid fa-book-bookmark"></i> Từ vựng trọng tâm</h3>
            <div class="grid sm:grid-cols-2 gap-3">
                ${lesson.vocab.map(v => `
                    <div class="vocab">
                        <p><b class="text-indigo-600">${v.word}</b> <span class="text-xs text-slate-500">${v.phonetic}</span></p>
                        <p class="text-sm text-slate-700 mt-1">${v.meaning}</p>
                    </div>`).join('')}
            </div>
        </section>` : '';

    const quizHTML = (lesson.quiz && lesson.quiz.length) ? `
        <aside class="panel quiz-panel">
            <h3 class="panel-title"><i class="fa-solid fa-pen-clip"></i> Bài tập củng cố</h3>
            <form id="lesson-quiz-form">
                ${lesson.quiz.map((q, qIdx) => `
                    <fieldset class="mb-5">
                        <p class="font-semibold text-slate-800 text-sm mb-2">Câu ${qIdx + 1}: ${q.question}</p>
                        <div class="grid gap-2">
                            ${q.options.map((opt, oIdx) => `
                                <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white cursor-pointer transition text-sm">
                                    <input type="radio" name="l-question-${qIdx}" value="${oIdx}" class="accent-indigo-600">
                                    <span>${opt}</span>
                                </label>`).join('')}
                        </div>
                    </fieldset>`).join('')}
                <button type="button" onclick="submitLessonQuiz('${unitId}', '${lessonId}')" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition">Nộp bài</button>
            </form>
        </aside>` : '';

    container.innerHTML = `
        ${crumbHTML(unit, lesson)}
        <div class="lesson-grid ${quizHTML ? 'has-quiz' : ''}">
            <div class="space-y-5 min-w-0">
                <section class="panel">
                    <h2 class="text-2xl font-extrabold text-slate-900">${lesson.title}</h2>
                    <p class="text-slate-500 text-sm mt-1">${lesson.subtitle}</p>
                    <div class="theory">
                        <h4 class="font-bold mb-2"><i class="fa-solid fa-lightbulb"></i> Tóm tắt lý thuyết</h4>
                        <p class="text-sm whitespace-pre-line leading-relaxed">${lesson.theory}</p>
                    </div>
                </section>
                ${vocabHTML}
            </div>
            ${quizHTML}
        </div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitLessonQuiz(unitId, lessonId) {
    let unit = null;
    if (currentGrade === 10) unit = grade10Data.units.find(u => u.id === unitId);
    else if (currentGrade === 11) unit = grade11Data.units.find(u => u.id === unitId);
    else if (currentGrade === 12) unit = grade12Data.units.find(u => u.id === unitId);

    if (!unit) return;
    const lesson = unit.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    let score = 0;
    lesson.quiz.forEach((q, qIdx) => {
        const selected = document.querySelector(`input[name="l-question-${qIdx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    alert(`Kết quả bài tập phần ${lesson.title}:\nĐúng ${score} / ${lesson.quiz.length} câu.`);
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

// 3 bài hát mặc định từ thư mục audio/ trên GitHub
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

// Lấy tên Database riêng theo tài khoản
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

// Mở kết nối IndexedDB
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

// Lưu file cá nhân vào CSDL
async function savePlaylistToStorage() {
    try {
        const db = await openMusicDB();
        const transaction = db.transaction('tracks', 'readwrite');
        const store = transaction.objectStore('tracks');
        store.clear();
        playlist.forEach(track => {
            if (!track.isDefault) {
                store.add({ name: track.name, file: track.file });
            }
        });
    } catch (err) {
        console.log("Lỗi lưu file:", err);
    }
}

// Tải danh sách (Gộp 3 bài mặc định + bài cá nhân)
async function loadPlaylistFromStorage() {
    try {
        const db = await openMusicDB();
        const transaction = db.transaction('tracks', 'readonly');
        const store = transaction.objectStore('tracks');
        const request = store.getAll();

        request.onsuccess = () => {
            const userTracks = request.result || [];
            playlist = [...defaultPlaylist, ...userTracks];
            currentTrackIndex = playlist.length > 0 ? 0 : -1;
            
            renderPlaylist();

            const trackTitle = document.getElementById('track-title');
            const statusEl = document.getElementById('track-status');

            if (playlist.length > 0) {
                if (trackTitle) trackTitle.textContent = playlist[0].name;
                if (statusEl) statusEl.textContent = `Bài 1 / ${playlist.length}`;
                
                const audio = document.getElementById('bg-audio');
                if (audio) {
                    audio.src = playlist[0].isDefault ? playlist[0].url : URL.createObjectURL(playlist[0].file);
                }
            }
        };
    } catch (e) {
        playlist = [...defaultPlaylist];
        currentTrackIndex = playlist.length > 0 ? 0 : -1;
        renderPlaylist();
    }
}

// Thêm file nhạc từ máy
function handleMusicUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        playlist.push({
            name: files[i].name,
            file: files[i],
            isDefault: false
        });
    }

    savePlaylistToStorage();
    renderPlaylist();

    if (currentTrackIndex === -1 && playlist.length > 0) {
        playTrack(0);
    }
}

// Hiển thị danh sách phát
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
        container.innerHTML += `
            <div onclick="playTrack(${index})" class="group flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100' : 'hover:bg-slate-100 text-slate-700'}">
                <div class="flex items-center gap-2 truncate flex-1">
                    <i class="fa-solid ${isActive ? 'fa-volume-high text-indigo-600' : 'fa-music text-slate-400'} text-[10px]"></i>
                    <span class="truncate text-xs">${track.name} ${track.isDefault ? '<span class="text-[9px] text-indigo-500 font-normal">(Mặc định)</span>' : ''}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${isActive ? '<span class="text-[9px] bg-indigo-600 text-white px-1.5 py-0.5 rounded">Đang phát</span>' : ''}
                    <button onclick="removeTrack(event, ${index})" title="Xóa" class="text-slate-400 hover:text-rose-600 p-1 transition">
                        <i class="fa-solid fa-trash-can text-[11px]"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// Xóa bài hát
function removeTrack(event, index) {
    event.stopPropagation();
    const track = playlist[index];

    if (confirm(`Xóa bài hát "${track.name}"?`)) {
        playlist.splice(index, 1);
        if (!track.isDefault) savePlaylistToStorage();

        if (index === currentTrackIndex) {
            const audio = document.getElementById('bg-audio');
            if (audio) { audio.pause(); audio.src = ''; }
            currentTrackIndex = -1;
            document.getElementById('track-title').textContent = 'Chưa có bài hát nào';
        } else if (index < currentTrackIndex) {
            currentTrackIndex--;
        }
        renderPlaylist();
    }
}

// Phát một bài cụ thể theo index
function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];

    const audio = document.getElementById('bg-audio');
    const trackTitle = document.getElementById('track-title');
    const statusEl = document.getElementById('track-status');
    const playBtn = document.getElementById('play-btn');

    if (audio) {
        let audioSrc = track.isDefault ? track.url : URL.createObjectURL(track.file);
        audio.src = audioSrc;
        
        if (trackTitle) trackTitle.textContent = track.name;
        if (statusEl) statusEl.textContent = `Bài ${index + 1} / ${playlist.length}`;

        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        }).catch(err => console.log("Lỗi phát:", err));
    }
    renderPlaylist();
}

// Nút Play / Pause
function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');

    if (playlist.length === 0) return;
    if (currentTrackIndex === -1) {
        playTrack(0);
        return;
    }

    if (audio.paused) {
        if (!audio.src) playTrack(currentTrackIndex);
        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
        });
    } else {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
    }
}

// Bật / Tắt Ngẫu nhiên (Shuffle)
function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById('shuffle-btn');
    if (btn) {
        if (isShuffle) {
            btn.classList.add('text-indigo-600', 'bg-indigo-50', 'border', 'border-indigo-200');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('text-indigo-600', 'bg-indigo-50', 'border', 'border-indigo-200');
            btn.classList.add('text-slate-400');
        }
    }
}

// Bật / Tắt Lặp lại (Repeat)
function toggleRepeat() {
    isRepeat = !isRepeat;
    const btn = document.getElementById('repeat-btn');
    if (btn) {
        if (isRepeat) {
            btn.classList.add('text-indigo-600', 'bg-indigo-50', 'border', 'border-indigo-200');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('text-indigo-600', 'bg-indigo-50', 'border', 'border-indigo-200');
            btn.classList.add('text-slate-400');
        }
    }
}

// Nút Next (Hỗ trợ Shuffle ngẫu nhiên)
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

// Nút Previous
function playPreviousTrack() {
    if (playlist.length === 0) return;

    if (isShuffle) {
        let prevIndex;
        do {
            prevIndex = Math.floor(Math.random() * playlist.length);
        } while (prevIndex === currentTrackIndex && playlist.length > 1);
        playTrack(prevIndex);
    } else {
        let prevIndex = currentTrackIndex - 1;
        if (prevIndex < 0) prevIndex = playlist.length - 1;
        playTrack(prevIndex);
    }
}

// Xử lý khi bài hát chạy hết tự nhiên (Gắn trực tiếp vào onended của thẻ audio)
function handleTrackEnded() {
    const audio = document.getElementById('bg-audio');
    if (isRepeat) {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    } else {
        playNextTrack();
    }
}

// Khởi chạy khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    loadPlaylistFromStorage();
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
