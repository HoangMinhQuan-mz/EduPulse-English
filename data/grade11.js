/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 11 (Chuẩn GDPT 2018)
   ========================================================= */

const grade11Data = {
    
   title: "Khối 11 - Tiếng Anh THPT",
    description: "Chương trình nâng cao Tiếng Anh 11 (Global Success) luyện tập từ vựng, ngữ pháp và định dạng trắc nghiệm THPT Quốc gia.",
    units: [
        {
            id: "g11-u1",
            title: "Unit 1: A Long And Healthy Life",
            description: "Chủ đề Sức khỏe, thói quen sống lành mạnh và tuổi thọ.",
            vocab: [
                { word: "Life expectancy", phonetic: "/ˈlaɪf ɪkspektənsi/", meaning: "Tuổi thọ trung bình" },
                { word: "Nutritious", phonetic: "/njʊˈtrɪʃəs/", meaning: "Bổ dưỡng, giàu dinh dưỡng" },
                { word: "Workout", phonetic: "/ˈwɜːkaʊt/", meaning: "Buổi tập luyện thể chất" },
                { word: "Infectious disease", phonetic: "/ɪnˈfekʃəs dɪˈziːz/", meaning: "Bệnh truyền nhiễm" }
            ],
            quiz: [
                {
                    question: "Regular exercise and a balanced diet can help increase your __________.",
                    options: ["life expectancy", "lifestyle", "living standard", "living room"],
                    answer: 0
                },
                {
                    question: "Antibiotics are used to treat infections caused by __________.",
                    options: ["bacteria", "viruses", "vitamins", "minerals"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u2",
            title: "Unit 2: The Generation Gap",
            description: "Chủ đề Khoảng cách thế hệ, xung đột gia đình và sự thấu hiểu.",
            vocab: [
                { word: "Generation gap", phonetic: "/dʒenəˈreɪʃn ɡæp/", meaning: "Khoảng cách thế hệ" },
                { word: "Nuclear family", phonetic: "/ˌnjuːkliə ˈfæməli/", meaning: "Gia đình hạt nhân (bố mẹ và con)" },
                { word: "Extended family", phonetic: "/ɪkˌstendɪd ˈfæməli/", meaning: "Gia đình đa thế hệ" },
                { word: "Curfew", phonetic: "/ˈkɜːfjuː/", meaning: "Lệnh giới nghiêm, giờ giới nghiêm" }
            ],
            quiz: [
                {
                    question: "My parents set a strict __________ of 10 p.m. on weekends.",
                    options: ["curfew", "viewpoint", "conflict", "gap"],
                    answer: 0
                },
                {
                    question: "Differences in values and attitudes between parents and children can cause a __________.",
                    options: ["generation gap", "family tree", "cultural heritage", "social network"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u3",
            title: "Unit 3: Cities Of The Future",
            description: "Chủ đề Đô thị thông minh, thành phố tương lai và công nghệ đô thị.",
            vocab: [
                { word: "Smart city", phonetic: "/smɑːt ˈsɪti/", meaning: "Thành phố thông minh" },
                { word: "Infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə(r)/", meaning: "Cơ sở hạ tầng" },
                { word: "Sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "Bền vững" },
                { word: "Urban planner", phonetic: "/ˈɜːbən ˈplænə(r)/", meaning: "Nhà quy hoạch đô thị" }
            ],
            quiz: [
                {
                    question: "Future cities will rely heavily on renewable energy to become more __________.",
                    options: ["sustainable", "polluted", "crowded", "noisy"],
                    answer: 0
                },
                {
                    question: "Modern public transport systems help reduce traffic __________ in big cities.",
                    options: ["congestion", "construction", "pollution", "population"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u4",
            title: "Unit 4: ASEAN And Viet Nam",
            description: "Chủ đề Hiệp hội các quốc gia Đông Nam Á và vai trò của Việt Nam.",
            vocab: [
                { word: "Charter", phonetic: "/ˈtʃɑːtə(r)/", meaning: "Hiến chương" },
                { word: "Solidarity", phonetic: "/ˌsɒlɪˈdærəti/", meaning: "Sự đoàn kết" },
                { word: "Cooperation", phonetic: "/kəʊˌɒpəˈreɪʃn/", meaning: "Sự hợp tác" },
                { word: "Cultural exchange", phonetic: "/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/", meaning: "Giao lưu văn hóa" }
            ],
            quiz: [
                {
                    question: "ASEAN aims to promote regional peace, stability, and economic __________.",
                    options: ["growth", "war", "conflict", "poverty"],
                    answer: 0
                },
                {
                    question: "Participating in youth sports events helps foster __________ among ASEAN member states.",
                    options: ["solidarity", "separation", "disagreement", "competition"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u5",
            title: "Unit 5: Global Warming",
            description: "Chủ đề Biến đổi khí hậu, hiệu ứng nhà kính và các biện pháp giảm thiểu.",
            vocab: [
                { word: "Greenhouse gas", phonetic: "/ˈɡriːnhaʊs ɡæs/", meaning: "Khí nhà kính" },
                { word: "Emissions", phonetic: "/ɪˈmɪʃnz/", meaning: "Khí thải" },
                { word: "Deforestation", phonetic: "/diːˌfɒrɪˈsteɪʃn/", meaning: "Nạn phá rừng" },
                { word: "Catastrophic", phonetic: "/ˌkætəˈstrɒfɪk/", meaning: "Thảm khốc, tai hại" }
            ],
            quiz: [
                {
                    question: "Burning fossil fuels releases dangerous __________ into the atmosphere.",
                    options: ["emissions", "oxygen", "fresh air", "fertilizers"],
                    answer: 0
                },
                {
                    question: "Tree planting campaigns aim to combat the effects of __________.",
                    options: ["deforestation", "reforestation", "agriculture", "tourism"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u6",
            title: "Unit 6: Preserving Our Heritage",
            description: "Chủ đề Bảo tồn di sản văn hóa vật thể và phi vật thể.",
            vocab: [
                { word: "Heritage site", phonetic: "/ˈherɪtɪdʒ saɪt/", meaning: "Khu di sản" },
                { word: "Preservation", phonetic: "/ˌprezəˈveɪʃn/", meaning: "Sự bảo tồn" },
                { word: "Authentic", phonetic: "/ɔːˈθentɪk/", meaning: "Đích thực, nguyên bản" },
                { word: "Landscape", phonetic: "/ˈlændskeɪp/", meaning: "Cảnh quan" }
            ],
            quiz: [
                {
                    question: "Ha Long Bay is recognized as a UNESCO World Natural __________.",
                    options: ["Heritage Site", "Building", "Park", "Museum"],
                    answer: 0
                },
                {
                    question: "Younger generations should take active roles in the __________ of traditional arts.",
                    options: ["preservation", "destruction", "neglect", "loss"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u7",
            title: "Unit 7: Education Options After School",
            description: "Chủ đề Định hướng học tập sau THPT: Đại học, học nghề, du học.",
            vocab: [
                { word: "Higher education", phonetic: "/ˌhaɪər edʒuˈkeɪʃn/", meaning: "Giáo dục đại học / cao đẳng" },
                { word: "Vocational training", phonetic: "/vəʊˈkeɪʃənl ˈtreɪnɪŋ/", meaning: "Đào tạo nghề" },
                { word: "Apprenticeship", phonetic: "/əˈprentɪsʃɪp/", meaning: "Thời gian học việc, học nghề" },
                { word: "Qualification", phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "Bằng cấp, chứng chỉ" }
            ],
            quiz: [
                {
                    question: "Students who prefer practical skills over theory often choose __________.",
                    options: ["vocational training", "academic research", "high school", "primary school"],
                    answer: 0
                },
                {
                    question: "Getting a university degree provides students with professional __________.",
                    options: ["qualifications", "hobbies", "entertainment", "sports"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u8",
            title: "Unit 8: Becoming Independent",
            description: "Chủ đề Rèn luyện tính tự lập, quản lý thời gian và tài chính cá nhân.",
            vocab: [
                { word: "Self-reliance", phonetic: "/ˌself rɪˈlaɪəns/", meaning: "Sự tự lực, tự dựa vào mình" },
                { word: "Time management", phonetic: "/taɪm ˈmænɪdʒmənt/", meaning: "Quản lý thời gian" },
                { word: "Budgeting", phonetic: "/ˈbʌdʒɪtɪŋ/", meaning: "Lập ngân sách, quản lý chi tiêu" },
                { word: "Decision-making", phonetic: "/dɪˈsɪʒn meɪkɪŋ/", meaning: "Kỹ năng ra quyết định" }
            ],
            quiz: [
                {
                    question: "Good __________ skills help students balance study, work, and relaxation.",
                    options: ["time management", "shopping", "gaming", "sleeping"],
                    answer: 0
                },
                {
                    question: "Learning how to cook and clean is an essential step towards becoming __________.",
                    options: ["independent", "dependent", "helpless", "lazy"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u9",
            title: "Unit 9: Social Issues",
            description: "Chủ đề Các vấn đề xã hội: Bạo lực học đường, áp lực lứa tuổi, nghiện mạng xã hội.",
            vocab: [
                { word: "Peer pressure", phonetic: "/ˈpɪə preʃə(r)/", meaning: "Áp lực từ bạn bè đồng lứa" },
                { word: "Cyberbullying", phonetic: "/ˈsaɪbəbʊliɪŋ/", meaning: "Bắt nạt trên mạng" },
                { word: "Awareness", phonetic: "/əˈweənəs/", meaning: "Nhận thức" },
                { word: "Depression", phonetic: "/dɪˈpreʃn/", meaning: "Sự trầm cảm, lo âu" }
            ],
            quiz: [
                {
                    question: "Teenagers often experience __________ when trying to fit in with their friends.",
                    options: ["peer pressure", "praise", "support", "success"],
                    answer: 0
                },
                {
                    question: "Schools need to raise students' __________ about the dangers of cyberbullying.",
                    options: ["awareness", "ignorance", "indifference", "confusion"],
                    answer: 0
                }
            ]
        },
        {
            id: "g11-u10",
            title: "Unit 10: The Ecosystem",
            description: "Chủ đề Hệ sinh thái, đa dạng sinh học và sự cân bằng tự nhiên.",
            vocab: [
                { word: "Biodiversity", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", meaning: "Đa dạng sinh học" },
                { word: "Ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", meaning: "Hệ sinh thái" },
                { word: "Flora and fauna", phonetic: "/ˈflɔːrə ənd ˈfɔːnə/", meaning: "Thảm thực vật và hệ động vật" },
                { word: "Balance of nature", phonetic: "/ˈbæləns əv ˈneɪtʃə(r)/", meaning: "Sự cân bằng sinh thái" }
            ],
            quiz: [
                {
                    question: "Tropical rainforests are famous for their rich __________ and wildlife.",
                    options: ["biodiversity", "pollution", "urbanization", "poverty"],
                    answer: 0
                },
                {
                    question: "Disrupting the food chain can harm the delicate __________.",
                    options: ["ecosystem", "economy", "technology", "society"],
                    answer: 0
                }
            ]
        }
    ]
};
