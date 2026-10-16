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
                    <i class="fa-solid fa-graduation-cap"></i> Vào học bài này
                </button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    initMouseLightEffect();
}

// Mở danh sách các phần học (Lessons) trong Unit
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
                <i class="fa-solid fa-arrow-left"></i> Quay lại danh sách Unit
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

// Mở chi tiết từng bài học nhỏ (Lesson) hiển thị lý thuyết, từ vựng và trắc nghiệm
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
                <i class="fa-solid fa-arrow-left"></i> Quay lại danh sách các phần
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
