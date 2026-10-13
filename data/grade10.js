/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 10 (Chuẩn GDPT 2018)
   ========================================================= */

const grade10Data = {
    title: "Khối 10 - Tiếng Anh THPT",
    description: "Chương trình cốt lõi bám sát SGK Tiếng Anh 10 theo định hướng phát triển năng lực.",
    units: [
        {
            id: "g10_u1",
            title: "Unit 1: Family Life",
            description: "Chủ đề Cuộc sống Gia đình, Từ vựng & Ngữ pháp Thì Hiện tại đơn vs. Hiện tại tiếp diễn",
            vocab: [
                { word: "Household chores", pos: "n", ipa: "/ˈhaʊs.hoʊld tʃɔːrz/", meaning: "Công việc nhà", example: "Dividing household chores equally helps keep the family happy." },
                { word: "Breadwinner", pos: "n", ipa: "/ˈbredˌwɪn.ər/", meaning: "Trụ cột gia đình", example: "My father is the main breadwinner in our family." },
                { word: "Groceries", pos: "n", ipa: "/ˈɡroʊ.sə.riz/", meaning: "Thực phẩm, hàng tạp hóa", example: "Mom asked me to buy some groceries at the supermarket." },
                { word: "Homemaker", pos: "n", ipa: "/ˈhoʊmˌmeɪ.kər/", meaning: "Người nội trợ", example: "She decided to stay at home and be a full-time homemaker." }
            ],
            quiz: [
                {
                    id: 1,
                    question: "In many traditional families, the husband is the main _______ who earns money for the family.",
                    options: ["homemaker", "breadwinner", "housewife", "child"],
                    answer: 1,
                    explanation: "'Breadwinner' có nghĩa là người trụ cột kiếm tiền nuôi gia đình."
                },
                {
                    id: 2,
                    question: "My mother _______ the cooking while my father cleans the floor right now.",
                    options: ["does", "is doing", "did", "has done"],
                    answer: 1,
                    explanation: "Dấu hiệu 'right now' thể hiện hành động đang diễn ra -> Dùng thì Hiện tại tiếp diễn (is doing)."
                }
            ]
        },
        {
            id: "g10_u2",
            title: "Unit 2: Humans and the Environment",
            description: "Chủ đề Con người và Môi trường, Từ vựng Sống xanh & Câu bị động (Passive Voice)",
            vocab: [
                { word: "Eco-friendly", pos: "adj", ipa: "/ˌiː.koʊˈfrend.li/", meaning: "Thân thiện với môi trường", example: "We should use eco-friendly products to protect nature." },
                { word: "Carbon footprint", pos: "n", ipa: "/ˌkɑːr.bən ˈfʊt.prɪnt/", meaning: "Lượng khí thải carbon", example: "Riding bicycles helps reduce our carbon footprint." },
                { word: "Adopt", pos: "v", ipa: "/əˈdɑːpt/", meaning: "Áp dụng, tiếp nhận", example: "Many modern schools adopt green habits." }
            ],
            quiz: [
                {
                    id: 1,
                    question: "Turning off electrical appliances when not in use helps reduce our carbon _______.",
                    options: ["footprint", "mark", "step", "fingerprint"],
                    answer: 0,
                    explanation: "'Carbon footprint' là thuật ngữ chỉ lượng khí thải carbon tạo ra."
                }
            ]
        }
    ]
};
