/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 11 (Chuẩn GDPT 2018)
   ========================================================= */

const grade11Data = {
    title: "Khối 11 - Tiếng Anh THPT",
    description: "Chương trình nâng cao năng lực giao tiếp và các chủ đề hội nhập quốc tế.",
    units: [
        {
            id: "g11_u1",
            title: "Unit 1: A Long and Healthy Life",
            description: "Chủ đề Sống khỏe & Tuổi thọ, Từ vựng Y tế & Động từ khuyết thiếu (Must, Should, Have to)",
            vocab: [
                { word: "Longevity", pos: "n", ipa: "/lɒnˈdʒev.ə.ti/", meaning: "Tuổi thọ, sự sống lâu", example: "Healthy eating habits contribute to a longer longevity." },
                { word: "Immune system", pos: "n", ipa: "/ɪˈmjuːn ˌsɪs.təm/", meaning: "Hệ miễn dịch", example: "Regular exercise helps boost your immune system." },
                { word: "Nutritious", pos: "adj", ipa: "/njuːˈtrɪʃ.əs/", meaning: "Bổ dưỡng, giàu dinh dưỡng", example: "Vegetables and fruits are highly nutritious foods." }
            ],
            quiz: [
                {
                    id: 1,
                    question: "Eating balanced meals and exercising regularly can boost your _______ system.",
                    options: ["immune", "nervous", "digestive", "respiratory"],
                    answer: 0,
                    explanation: "'Immune system' có nghĩa là Hệ miễn dịch."
                },
                {
                    id: 2,
                    question: "You _______ drink at least 2 liters of water every day to stay healthy.",
                    options: ["should", "mustn't", "shouldn't", "needn't"],
                    answer: 0,
                    explanation: "Dùng 'should' để đưa ra lời khuyên nên làm gì."
                }
            ]
        },
        {
            id: "g11_u2",
            title: "Unit 2: The Generation Gap",
            description: "Chủ đề Khoảng cách thế hệ trong gia đình & Động từ nối (Linking Verbs)",
            vocab: [
                { word: "Generation gap", pos: "n", ipa: "/dʒen.əˈreɪ.ʃən ɡæp/", meaning: "Khoảng cách thế hệ", example: "Open communication helps narrow the generation gap." },
                { word: "Curfew", pos: "n", ipa: "/ˈkɜː.fjuː/", meaning: "Giờ nghiêm quân, giờ phải về nhà", example: "My parents set a strict curfew at 10 PM." },
                { word: "Conflict", pos: "n", ipa: "/ˈkɒn.flɪkt/", meaning: "Mâu thuẫn, xung đột", example: "Differences in viewpoint can cause family conflicts." }
            ],
            quiz: [
                {
                    id: 1,
                    question: "My grandparents find it hard to understand teenage trends due to the generation _______.",
                    options: ["gap", "space", "distance", "hole"],
                    answer: 0,
                    explanation: "Cụm từ cố định 'Generation gap' nghĩa là khoảng cách thế hệ."
                }
            ]
        }
    ]
};
