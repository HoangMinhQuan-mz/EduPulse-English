/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Bộ điều khiển trung tâm (App Logic & DOM Rendering - Đầy đủ tính năng)
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

// Hiển thị danh sách các Unit
function renderUnitList() {
    const container = document.getElementById('unit-list-container');
    if (!container || !currentUnitData || !currentUnitData.units) return;

    container.innerHTML = '';

    currentUnitData.units.forEach(unit => {
        const lessonsCount = unit.lessons ? unit.lessons.length : 0;
        const cardHTML = `
            <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition flex flex-col justify-between">
                <div>
                    <span class="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-semibold mb-2">
                        ${lessonsCount} Phần học theo SGK Global Success
                    </span>
                    <h3 class="font-bold text-lg text-slate-800">${unit.title}</h3>
                    <p class="text-sm text-slate-600 mt-1 mb-4">${unit.description}</p>
                </div>
                <button onclick="openUnitDetail('${unit.id}')" class="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    <i class="fa-solid fa-graduation-cap"></i> Vào học Unit này
                </button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    initMouseLightEffect();
}

// Khi bấm vào 1 Unit -> Hiển thị danh sách Lesson (Getting Started, Language, Reading...)
function openUnitDetail(unitId) {
    if (!currentUnitData || !currentUnitData.units) return;

    const unit = currentUnitData.units.find(u => u.id === unitId);
    if (!unit) {
        alert("Không tìm thấy dữ liệu bài học này!");
        return;
    }

    const mainContainer = document.getElementById('unit-list-container').parentNode;

    let lessonsHTML = '';
    if (unit.lessons && unit.lessons.length > 0) {
        lessonsHTML = unit.lessons.map((lesson, idx) => `
            <div onclick="openLessonDetail('${unit.id}', '${lesson.id}')" class="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md cursor-pointer transition flex items-center justify-between group">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                        0${idx + 1}
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition">${lesson.title}</h4>
                        <p class="text-sm text-slate-500">${lesson.subtitle}</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-400 group-hover:text-indigo-600 transition"></i>
            </div>
        `).join('');
    } else {
        lessonsHTML = `<p class="text-slate-500 italic">Đang cập nhật nội dung các mục bài học cho Unit này...</p>`;
    }

    mainContainer.innerHTML = `
        <div class="space-y-6">
            <button onclick="location.reload()" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition font-medium flex items-center gap-2 text-sm">
                <i class="fa-solid fa-arrow-left"></i> Quay lại chọn khối lớp / Unit
            </button>

            <div class="p-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl shadow-md">
                <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Khối ${currentGrade}</span>
                <h2 class="text-2xl font-bold mt-2">${unit.title}</h2>
                <p class="text-indigo-100 text-sm mt-1">${unit.description}</p>
            </div>

            <div class="space-y-3">
                <h3 class="text-lg font-bold text-slate-800 px-1">Danh sách các phần học trong Unit</h3>
                ${lessonsHTML}
            </div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Khi bấm vào 1 Lesson cụ thể -> Hiển thị lý thuyết, từ vựng và trắc nghiệm
function openLessonDetail(unitId, lessonId) {
    let unit = null;
    if (currentGrade === 10 && typeof grade10Data !== 'undefined') {
        unit = grade10Data.units.find(u => u.id === unitId);
    } else if (currentGrade === 11 && typeof grade11Data !== 'undefined') {
        unit = grade11Data.units.find(u => u.id === unitId);
    } else if (currentGrade === 12 && typeof grade12Data !== 'undefined') {
        unit = grade12Data.units.find(u => u.id === unitId);
    }

    if (!unit) return;
    const lesson = unit.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const mainContainer = document.getElementById('unit-list-container').parentNode;

    let vocabHTML = '';
    if (lesson.vocab && lesson.vocab.length > 0) {
        vocabHTML = `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-book-bookmark text-indigo-600"></i> Từ vựng trọng tâm bài học
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${lesson.vocab.map(v => `
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="text-indigo-600 font-bold">${v.word}</span>
                            <span class="text-slate-500 text-xs ml-2">${v.phonetic}</span>
                            <p class="text-slate-700 text-sm mt-1">${v.meaning}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let quizHTML = '';
    if (lesson.quiz && lesson.quiz.length > 0) {
        quizHTML = `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-pen-clip text-indigo-600"></i> Bài tập củng cố
                </h3>
                <form id="lesson-quiz-form">
                    ${lesson.quiz.map((q, qIdx) => `
                        <div class="mb-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p class="font-semibold text-slate-800 mb-2">Câu ${qIdx + 1}:${q.question}</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                ${q.options.map((opt, oIdx) => `
                                    <label class="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-indigo-50 cursor-pointer transition text-sm">
                                        <input type="radio" name="l-question-${qIdx}" value="${oIdx}" class="text-indigo-600">
                                        <span>${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    <button type="button" onclick="submitLessonQuiz('${unitId}', '${lessonId}')" class="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
                        Nộp bài kiểm tra
                    </button>
                </form>
            </div>
        `;
    }

    mainContainer.innerHTML = `
        <div class="space-y-6">
            <button onclick="openUnitDetail('${unitId}')" class="px-4 py-2 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition font-medium flex items-center gap-2 text-sm">
                <i class="fa-solid fa-arrow-left"></i> Quay lại danh sách các phần trong Unit
            </button>

            <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wider">${unit.title}</span>
                <h2 class="text-2xl font-bold text-slate-800 mt-1">${lesson.title}</h2>
                <p class="text-slate-500 text-sm mt-1">${lesson.subtitle}</p>
                
                <div class="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                    <h4 class="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-lightbulb"></i> Tóm tắt lý thuyết / Nội dung chính
                    </h4>
                    <p class="text-slate-700 text-sm whitespace-pre-line leading-relaxed">${lesson.theory}</p>
                </div>
            </div>

            ${vocabHTML}
            ${quizHTML}
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Chấm điểm nhanh trắc nghiệm bài học
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
        console.log("Đã tải tiến độ học tập.");
    }
}

function initMouseLightEffect() {
    const cards = document.querySelectorAll('#unit-list-container > div');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
}


/* =========================================================
3. XÁC THỰC GOOGLE (GIS) & QUẢN LÝ TÀI KHOẢN
   ========================================================= */

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('--' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')));
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
        google.accounts.id.prompt();
    } else {
        const dropdown = document.getElementById('user-dropdown-menu');
        if (dropdown) dropdown.classList.toggle('hidden');
    }
}

function logoutGoogle() {
    localStorage.removeItem('edupulse_user');
    location.reload();
}


/* =========================================================
   HỆ THỐNG PHÁT NHẠC (MUSIC PLAYER)
   ========================================================= */

const defaultPlaylist = [
    { name: "Khúc Tráng Ca", url: "audio/KHÚC TRÁNG CA.mp3", isDefault: true },
    { name: "Truyền Động Lực", url: "audio/TRUYỀN ĐỘNG LỰC.mp3", isDefault: true },
    { name: "Relax Chill", url: "audio/RELAX CHILL.mp3", isDefault: true }
];

function getDatabaseName() {
    const savedUser = localStorage.getItem('edupulse_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            if (user && user.email) return `EduPulseMusicDB_${user.email.replace(/[@.]/g, '_')}`;
        } catch (e) {}
    }
    return 'EduPulseMusicDB_guest';
}

function openMusicDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(getDatabaseName(), 1);
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

            if (playlist.length > 0) {
                document.getElementById('track-title').textContent = playlist[0].name;
                const audio = document.getElementById('bg-audio');
                if (audio) audio.src = playlist[0].url;
            }
        };
    } catch (e) {
        playlist = [...defaultPlaylist];
        currentTrackIndex = 0;
        renderPlaylist();
    }
}

function renderPlaylist() {
    const container = document.getElementById('playlist-container');
    const countEl = document.getElementById('playlist-count');
    if (!container) return;
    if (countEl) countEl.textContent = playlist.length;

    if (playlist.length === 0) {
        container.innerHTML = `<div class="text-center py-4 text-slate-400 italic text-[11px]">Chưa có bài hát</div>`;
        return;
    }

    container.innerHTML = playlist.map((track, index) => {
        const isActive = index === currentTrackIndex;
        return `
            <div onclick="playTrack(${index})" class="group flex items-center justify-between p-2 rounded-lg cursor-pointer transition ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100' : 'hover:bg-slate-100 text-slate-700'}">
                <div class="flex items-center gap-2 truncate flex-1">
                    <i class="fa-solid ${isActive ? 'fa-volume-high text-indigo-600' : 'fa-music text-slate-400'} text-[10px]"></i>
                    <span class="truncate text-xs">${track.name}</span>
                </div>
                ${isActive ? '<span class="text-[9px] bg-indigo-600 text-white px-1.5 py-0.5 rounded">Đang phát</span>' : ''}
            </div>
        `;
    }).join('');
}

function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];
    const audio = document.getElementById('bg-audio');
    
    if (audio) {
        audio.src = track.isDefault ? track.url : URL.createObjectURL(track.file);
        audio.play().catch(err => console.log(err));
        document.getElementById('track-title').textContent = track.name;
    }
    renderPlaylist();
}

function togglePlayMusic() {
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');
    if (playlist.length === 0) return;
    if (currentTrackIndex === -1) { playTrack(0); return; }

    if (audio.paused) {
        audio.play();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause text-xs"></i>';
    } else {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play text-xs"></i>';
    }
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    const btn = document.getElementById('shuffle-btn');
    if (btn) btn.classList.toggle('text-indigo-600', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    const btn = document.getElementById('repeat-btn');
    if (btn) btn.classList.toggle('text-indigo-600', isRepeat);
}

function playNextTrack() {
    if (playlist.length === 0) return;
    let nextIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : currentTrackIndex + 1;
    if (nextIndex >= playlist.length) nextIndex = 0;
    playTrack(nextIndex);
}

function playPreviousTrack() {
    if (playlist.length === 0) return;
    let prevIndex = isShuffle ? Math.floor(Math.random() * playlist.length) : currentTrackIndex - 1;
    if (prevIndex < 0) prevIndex = playlist.length - 1;
    playTrack(prevIndex);
}

function handleTrackEnded() {
    const audio = document.getElementById('bg-audio');
    if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
    } else {
        playNextTrack();
    }
}

function toggleMinimizeWidget() {
    const body = document.getElementById('widget-body');
    const widget = document.getElementById('music-player-widget');
    isMinimized = !isMinimized;
    if (body) body.classList.toggle('hidden', isMinimized);
    if (widget) widget.style.width = isMinimized ? '240px' : '320px';
}

function initMusicWidgetDrag() {
    const widget = document.getElementById('music-player-widget');
    const header = document.getElementById('widget-header');
    if (!widget || !header) return;

    let isDragging = false, offsetX, offsetY;
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - widget.getBoundingClientRect().left;
        offsetY = e.clientY - widget.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let x = Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - widget.offsetWidth));
        let y = Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - widget.offsetHeight));
        widget.style.left = `${x}px`;
        widget.style.top = `${y}px`;
        widget.style.bottom = 'auto';
        widget.style.right = 'auto';
    });

    document.addEventListener('mouseup', () => isDragging = false);
}

function toggleHeader() {
    const header = document.getElementById('main-header');
    const expandBtn = document.getElementById('btn-expand-header');
    if (!header || !expandBtn) return;
    header.classList.toggle('-translate-y-full');
    header.classList.toggle('opacity-0');
    header.classList.toggle('pointer-events-none');
    expandBtn.classList.toggle('hidden');
}
