/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Mẫu Tiếng Anh Khối 12 (Demo KHKT)
   ========================================================= */

const grade12Data = {
    title: "Khối 12 - Tiếng Anh THPT (Chương trình Demo KHKT)",
    description: "Mô hình dữ liệu mẫu chuẩn bị cho việc tích hợp toàn bộ chương trình Khối 12 khi chính thức vận hành.",
    units: [
        {
            id: "g12_u1",
            title: "Unit 1: Life Stories (Sample)",
            description: "Chủ đề Câu chuyện cuộc đời các danh nhân, Từ vựng Tiểu sử & Thì Quá khứ đơn vs. Quá khứ tiếp diễn",
            vocab: [
                { word: "Biography", pos: "n", ipa: "/baɪˈɒɡ.rə.fi/", meaning: "Tiểu sử, lý lịch", example: "He wrote an inspiring biography of Uncle Ho." },
                { word: "Perseverance", pos: "n", ipa: "/ˌpɜː.sɪˈvɪə.rəns/", meaning: "Sự kiên trì, nhẫn nại", example: "Success requires hard work and perseverance." },
                { word: "Dedicate", pos: "v", ipa: "/ˈded.ɪ.keɪt/", meaning: "Cống hiến, tận tụy", example: "She dedicated her whole life to helping the poor." }
            ],
            quiz: [
                {
                    id: 1,
                    question: "She showed great _______ in overcoming all difficulties to achieve her dream.",
                    options: ["perseverance", "laziness", "fear", "anger"],
                    answer: 0,
                    explanation: "'Perseverance' nghĩa là sự kiên trì vượt qua khó khăn."
                },
                {
                    id: 2,
                    question: "While Uncle Ho _______ abroad, he worked many different jobs to learn about foreign countries.",
                    options: ["was living", "lived", "is living", "lives"],
                    answer: 0,
                    explanation: "Hành động đang xảy ra trong quá khứ đi với 'While' -> Dùng Quá khứ tiếp diễn (was living)."
                }
            ]
        }
    ]
};
