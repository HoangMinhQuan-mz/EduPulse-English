/* =========================================================
   EDUPULSE ENGLISH - BANNER ĐỘNG
   Mặc định: nền chuyển động bằng code (gradient, khối trôi, chữ bay, sóng âm).
   MUỐN DÙNG VIDEO: bỏ file video vào thư mục video/ của repo rồi điền đường dẫn
   vào BANNER_VIDEO, ví dụ 'video/Re.mp4' (đúng chữ hoa/thường). Để '' để dùng nền code.
   Nên dùng video 5-15 giây, tắt tiếng, dưới ~5MB.
   LƯU Ý: chỉ sửa đúng giá trị trong dấu nháy ở 2 dòng const dưới đây, không dán thêm gì khác vào file.
   ========================================================= */
const BANNER_VIDEO = '';
const BANNER_POSTER = '';   // ảnh hiện trong lúc video đang tải (tùy chọn)

(function () {
    const WORDS = ['Aa', 'Hello', 'ABC', 'Unit', 'Read', 'Listen', 'Speak', 'Write', 'Good!', 'Vocab', '?', 'Grammar'];
    const rnd = (a, b) => a + Math.random() * (b - a);

    function build() {
        const hero = document.querySelector('.hero');
        if (!hero || hero.querySelector('.banner-bg')) return;

        let letters = '';
        for (let i = 0; i < 14; i++) {
            letters += `<span class="fw" style="left:${rnd(2, 92).toFixed(0)}%;font-size:${rnd(.9, 2.2).toFixed(2)}rem;animation-duration:${rnd(12, 24).toFixed(1)}s;animation-delay:-${rnd(0, 20).toFixed(1)}s">${WORDS[i % WORDS.length]}</span>`;
        }
        let bars = '';
        for (let i = 0; i < 26; i++) {
            bars += `<b style="--h:${rnd(.35, 1).toFixed(2)};animation-duration:${rnd(.8, 1.6).toFixed(2)}s;animation-delay:-${rnd(0, 1.6).toFixed(2)}s"></b>`;
        }

        const bg = document.createElement('div');
        bg.className = 'banner-bg';
        bg.setAttribute('aria-hidden', 'true');
        bg.innerHTML = `<div class="fx"><i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i>${letters}</div><div class="wave">${bars}</div><div class="banner-shade"></div>`;
        hero.prepend(bg);

        if (BANNER_VIDEO) {
            const v = document.createElement('video');
            v.className = 'banner-video';
            v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
            v.setAttribute('muted', ''); v.preload = 'metadata';
            if (BANNER_POSTER) v.poster = BANNER_POSTER;
            v.addEventListener('canplay', () => { hero.classList.add('has-video'); v.play().catch(() => {}); });
            v.addEventListener('error', () => v.remove());   // không có file thì giữ nền code
            v.src = BANNER_VIDEO;
            bg.prepend(v);
        }
    }

    function start() {
        try { build(); console.log('[EduPulse] Banner động đã chạy'); }
        catch (e) { console.error('[EduPulse] Lỗi banner:', e); }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
