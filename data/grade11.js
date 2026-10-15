/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 11 (Chuẩn GDPT 2018 - Global Success)
   Cấu trúc bài học phân tầng theo từng Lesson (Getting Started -> Looking Back)
   ========================================================= */

const grade11Data = {
    title: "Khối 11 - Tiếng Anh THPT",
    description: "Chương trình nâng cao Tiếng Anh 11 (Global Success) phân chia chi tiết theo từng Lesson chuẩn Bộ Giáo Dục.",
    units: [
        {
            id: "g11-u1",
            title: "Unit 1: A Long And Healthy Life",
            description: "Chủ đề Sức khỏe, thói quen sống lành mạnh và bí quyết sống lâu.",
            lessons: [
                {
                    id: "u1-getting-started",
                    title: "Getting Started",
                    subtitle: "Healthy lifestyle - Thói quen sống lành mạnh",
                    theory: "Mở đầu với cuộc trò chuyện về bí quyết giữ gìn sức khỏe và lối sống lành mạnh của người lớn tuổi trong gia đình.",
                    vocab: [
                        { word: "Life expectancy", phonetic: "/ˈlaɪf ɪkspektənsi/", meaning: "Tuổi thọ trung bình" },
                        { word: "Workout", phonetic: "/ˈwɜːkaʊt/", meaning: "Buổi tập luyện thể chất" }
                    ],
                    quiz: [
                        { question: "Regular exercise and a balanced diet can help increase your __________.", options: ["life expectancy", "lifestyle", "living standard", "living room"], answer: 0 }
                    ]
                },
                {
                    id: "u1-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in 3-syllable verbs/nouns) & Grammar (Stative verbs / Past simple vs Present perfect)",
                    theory: "1. Trọng âm trong từ 3 âm tiết.\n2. Ngữ pháp: Động từ chỉ trạng thái (Stative verbs); Ôn tập phân biệt Quá khứ đơn và Hiện tại hoàn thành.",
                    vocab: [
                        { word: "Nutritious", phonetic: "/njʊˈtrɪʃəs/", meaning: "Bổ dưỡng, giàu dinh dưỡng" },
                        { word: "Infectious disease", phonetic: "/ɪnˈfekʃəs dɪˈziːz/", meaning: "Bệnh truyền nhiễm" }
                    ],
                    quiz: [
                        { question: "Antibiotics are used to treat infections caused by __________.", options: ["bacteria", "viruses", "vitamins", "minerals"], answer: 0 },
                        { question: "I __________ in this city for 5 years and still love it.", options: ["have lived", "lived", "live", "am living"], answer: 0 }
                    ]
                },
                {
                    id: "u1-reading",
                    title: "Reading",
                    subtitle: "The Secret to Living to 100",
                    theory: "Bài đọc tìm hiểu các thói quen sinh hoạt của những người sống thọ trên một trăm tuổi (centenarians).",
                    vocab: [
                        { word: "Centenarian", phonetic: "/ˌsentiˈneəriən/", meaning: "Người sống từ 100 tuổi trở lên" },
                        { word: "Longevity", phonetic: "/lɒnˈdʒevəti/", meaning: "Sự trường thọ" }
                    ],
                    quiz: [
                        { question: "A positive attitude towards life contributes greatly to human __________.", options: ["longevity", "disease", "illness", "weakness"], answer: 0 }
                    ]
                },
                {
                    id: "u1-speaking",
                    title: "Speaking",
                    subtitle: "Talking About Healthy Habits and Advice",
                    theory: "Luyện tập đưa ra lời khuyên và thảo luận về các thói quen tốt cho tim mạch và cơ thể.",
                    vocab: [
                        { word: "Impair", phonetic: "/ɪmˈpeə(r)/", meaning: "Làm suy yếu, làm hại" },
                        { word: "Boost", phonetic: "/buːst/", meaning: "Tăng cường, đẩy mạnh" }
                    ],
                    quiz: [
                        { question: "Eating fresh fruits and vegetables helps __________ your immune system.", options: ["boost", "weaken", "harm", "destroy"], answer: 0 }
                    ]
                },
                {
                    id: "u1-listening",
                    title: "Listening",
                    subtitle: "Benefits of Physical Activity",
                    theory: "Nghe hiểu các thông tin chi tiết về lợi ích của việc luyện tập thể dục thể thao đều đặn.",
                    vocab: [
                        { word: "Physical fitness", phonetic: "/ˈfɪzɪkl ˈfɪtnəs/", meaning: "Thể lực, độ dẻo dai" },
                        { word: "Stamina", phonetic: "/ˈstæmɪnə/", meaning: "Sức bền" }
                    ],
                    quiz: [
                        { question: "Cardio exercises help improve heart health and building body __________.", options: ["stamina", "laziness", "tiredness", "weakness"], answer: 0 }
                    ]
                },
                {
                    id: "u1-writing",
                    title: "Writing",
                    subtitle: "Writing Advice on Healthy Living",
                    theory: "Hướng dẫn cách viết thư hoặc đoạn văn đưa ra lời khuyên về sức khỏe cho bạn bè.",
                    vocab: [
                        { word: "Recommendation", phonetic: "/ˌrekəmenˈdeɪʃn/", meaning: "Sự khuyến nghị, lời khuyên" }
                    ],
                    quiz: [
                        { question: "Doctors give health __________ to patients to prevent diseases.", options: ["recommendations", "problems", "pains", "errors"], answer: 0 }
                    ]
                },
                {
                    id: "u1-communication",
                    title: "Communication and Culture",
                    subtitle: "Traditional Remedies Around the World",
                    theory: "Khám phá các bài thuốc dân gian và phương pháp chữa bệnh tự nhiên ở các nền văn hóa khác nhau.",
                    vocab: [
                        { word: "Remedy", phonetic: "/ˈremədi/", meaning: "Bài thuốc, phương thuốc chữa bệnh" }
                    ],
                    quiz: [
                        { question: "Ginger tea is a popular natural __________ for a cold.", options: ["remedy", "poison", "disease", "virus"], answer: 0 }
                    ]
                },
                {
                    id: "u1-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 1 Review & Healthy Lifestyle Guide Project",
                    theory: "Tổng kết ngữ pháp (stative verbs, past simple vs present perfect) và hoàn thành dự án cẩm nang sống khỏe.",
                    vocab: [
                        { word: "Wellness", phonetic: "/ˈwelnes/", meaning: "Sự mạnh khỏe toàn diện" }
                    ],
                    quiz: [
                        { question: "Which verb is a stative verb expressing a mental state?", options: ["believe", "run", "eat", "play"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u2",
            title: "Unit 2: The Generation Gap",
            description: "Chủ đề Khoảng cách thế hệ, xung đột gia đình và giải pháp thấu hiểu.",
            lessons: [
                {
                    id: "u2-getting-started",
                    title: "Getting Started",
                    subtitle: "Family conflicts - Xung đột quan điểm trong gia đình",
                    theory: "Mở đầu với câu chuyện về sự khác biệt trong gu âm nhạc, phong cách ăn mặc giữa bố mẹ và con cái.",
                    vocab: [
                        { word: "Generation gap", phonetic: "/ˌdʒenəˈreɪʃn ɡæp/", meaning: "Khoảng cách thế hệ" },
                        { word: "Nuclear family", phonetic: "/ˌnjuːkliə ˈfæməli/", meaning: "Gia đình hạt nhân" }
                    ],
                    quiz: [
                        { question: "Differences in values and attitudes between parents and children cause a __________.", options: ["generation gap", "family tree", "cultural heritage", "social network"], answer: 0 }
                    ]
                },
                {
                    id: "u2-language",
                    title: "Language",
                    subtitle: "Pronunciation (Strong and weak forms of auxiliary verbs) & Grammar (Modal verbs: Must, Have to, Should)",
                    theory: "1. Phát âm dạng mạnh và yếu của trợ động từ.\n2. Ngữ pháp: Động từ khuyết thiếu chỉ sự bắt buộc, lời khuyên (Must, Have to, Should, Ought to).",
                    vocab: [
                        { word: "Extended family", phonetic: "/ɪkˌstendɪd ˈfæməli/", meaning: "Gia đình đa thế hệ" },
                        { word: "Curfew", phonetic: "/ˈkɜːfjuː/", meaning: "Giờ giới nghiêm" }
                    ],
                    quiz: [
                        { question: "My parents set a strict __________ of 10 p.m. on weekends.", options: ["curfew", "viewpoint", "conflict", "gap"], answer: 0 },
                        { question: "Students __________ wear uniforms when they go to school.", options: ["have to", "can", "may", "might"], answer: 0 }
                    ]
                },
                {
                    id: "u2-reading",
                    title: "Reading",
                    subtitle: "Arguments in the Family",
                    theory: "Bài đọc tìm hiểu các nguyên nhân phổ biến dẫn đến bất đồng giữa thế hệ phụ huynh và tuổi teen.",
                    vocab: [
                        { word: "Viewpoint", phonetic: "/ˈvjuːpɔɪnt/", meaning: "Quan điểm, góc nhìn" },
                        { word: "Impose", phonetic: "/ɪmˈpəʊz/", meaning: "Áp đặt" }
                    ],
                    quiz: [
                        { question: "Parents should not __________ their own choices on their children.", options: ["impose", "accept", "support", "encourage"], answer: 0 }
                    ]
                },
                {
                    id: "u2-speaking",
                    title: "Speaking",
                    subtitle: "Expressing Opinions and Resolving Conflicts",
                    theory: "Luyện tập cách bày tỏ quan điểm cá nhân và thương lượng giải quyết mâu thuẫn một cách khéo léo.",
                    vocab: [
                        { word: "Compromise", phonetic: "/ˈkɒmprəmaɪz/", meaning: "Sự thỏa hiệp, dàn xếp" },
                        { word: "Open-minded", phonetic: "/ˌəʊpən ˈmaɪndɪd/", meaning: "Cởi mở, phóng khoáng" }
                    ],
                    quiz: [
                        { question: "Being __________ helps parents and teenagers understand each other better.", options: ["open-minded", "narrow-minded", "stubborn", "strict"], answer: 0 }
                    ]
                },
                {
                    id: "u2-listening",
                    title: "Listening",
                    subtitle: "Teenagers Talk About Their Parents",
                    theory: "Nghe các học sinh chia sẻ trải nghiệm thực tế về cách giao tiếp với bố mẹ.",
                    vocab: [
                        { word: "Misunderstand", phonetic: "/ˌmɪsʌndəˈstænd/", meaning: "Hiểu lầm" },
                        { word: "Sympathise", phonetic: "/ˈsɪmpəθaɪz/", meaning: "Cảm thông" }
                    ],
                    quiz: [
                        { question: "Good communication helps prevent parents and children from __________ each other.", options: ["misunderstanding", "understanding", "knowing", "supporting"], answer: 0 }
                    ]
                },
                {
                    id: "u2-writing",
                    title: "Writing",
                    subtitle: "Writing A Letter About Family Conflicts",
                    theory: "Hướng dẫn viết thư chia sẻ rắc rối và xin lời khuyên về mâu thuẫn thế hệ.",
                    vocab: [
                        { word: "Advice", phonetic: "/ədˈvaɪs/", meaning: "Lời khuyên" }
                    ],
                    quiz: [
                        { question: "If you have family issues, you can write to a counselor for __________.", options: ["advice", "money", "books", "food"], answer: 0 }
                    ]
                },
                {
                    id: "u2-communication",
                    title: "Communication and Culture",
                    subtitle: "Family Structures in Different Societies",
                    theory: "Tìm hiểu sự thay đổi từ gia đình truyền thống đa thế hệ sang gia đình hạt nhân thời hiện đại.",
                    vocab: [
                        { word: "Tradition", phonetic: "/trəˈdɪʃn/", meaning: "Truyền thống" }
                    ],
                    quiz: [
                        { question: "Living with grandparents is a long-standing __________ in many Asian families.", options: ["tradition", "problem", "conflict", "habit"], answer: 0 }
                    ]
                },
                {
                    id: "u2-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 2 Review & Family Debate Project",
                    theory: "Ôn tập Modal verbs và tổ chức tranh biện về chủ đề khoảng cách thế hệ.",
                    vocab: [
                        { word: "Harmony", phonetic: "/ˈhɑːməni/", meaning: "Sự hòa thuận, hòa hợp" }
                    ],
                    quiz: [
                        { question: "Children __________ respect their elders and listen to their experiences.", options: ["should", "shouldn't", "mustn't", "needn't"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u3",
            title: "Unit 3: Cities Of The Future",
            description: "Chủ đề Đô thị thông minh, kiến trúc tương lai và công nghệ quản lý thành phố.",
            lessons: [
                {
                    id: "u3-getting-started",
                    title: "Getting Started",
                    subtitle: "Smart City - Thành phố thông minh",
                    theory: "Khám phá bức tranh tương lai của các thành phố ứng dụng AI, năng lượng xanh và tự động hóa.",
                    vocab: [
                        { word: "Smart city", phonetic: "/smɑːt ˈsɪti/", meaning: "Thành phố thông minh" },
                        { word: "Infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə(r)/", meaning: "Cơ sở hạ tầng" }
                    ],
                    quiz: [
                        { question: "Modern public transport systems help reduce traffic __________ in big cities.", options: ["congestion", "construction", "pollution", "population"], answer: 0 }
                    ]
                },
                {
                    id: "u3-language",
                    title: "Language",
                    subtitle: "Pronunciation (Intonation for listing) & Grammar (Future tenses review / Relative clauses with participles)",
                    theory: "1. Ngữ điệu khi liệt kê.\n2. Ngữ pháp: Ôn tập các thì tương lai; Mệnh đề quan hệ rút gọn dùng phân từ (Present & Past participles).",
                    vocab: [
                        { word: "Sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "Bền vững" },
                        { word: "Urban planner", phonetic: "/ˈɜːbən ˈplænə(r)/", meaning: "Nhà quy hoạch đô thị" }
                    ],
                    quiz: [
                        { question: "Future cities will rely heavily on renewable energy to become more __________.", options: ["sustainable", "polluted", "crowded", "noisy"], answer: 0 },
                        { question: "The man __________ next to me on the bus is an architect.", options: ["sitting", "sat", "sit", "who sit"], answer: 0 }
                    ]
                },
                {
                    id: "u3-reading",
                    title: "Reading",
                    subtitle: "Living in a Smart City",
                    theory: "Bài đọc tìm hiểu các tiện ích công nghệ thông minh phục vụ cư dân đô thị tương lai.",
                    vocab: [
                        { word: "Sensor", phonetic: "/ˈsensə(r)/", meaning: "Cảm biến" },
                        { word: "Automatics", phonetic: "/ˌɔːtəˈmætɪks/", meaning: "Hệ thống tự động" }
                    ],
                    quiz: [
                        { question: "Traffic lights in smart cities are controlled by smart __________ to avoid jams.", options: ["sensors", "wires", "pipes", "keys"], answer: 0 }
                    ]
                },
                {
                    id: "u3-speaking",
                    title: "Speaking",
                    subtitle: "Discussing Features of Future Cities",
                    theory: "Thảo luận về các tính năng ưu việt của thành phố thông minh như giao thông tự lái và năng lượng sạch.",
                    vocab: [
                        { word: "Solar energy", phonetic: "/ˈsəʊlə(r) ˈenədʒi/", meaning: "Năng lượng mặt trời" },
                        { word: "Eco-friendly", phonetic: "/ˌiːkəʊ ˈfrendli/", meaning: "Thân thiện với môi trường" }
                    ],
                    quiz: [
                        { question: "Homes in future cities will run mostly on __________ energy.", options: ["solar", "coal", "oil", "gas"], answer: 0 }
                    ]
                },
                {
                    id: "u3-listening",
                    title: "Listening",
                    subtitle: "A Podcast About Urbanization",
                    theory: "Nghe podcast thảo luận về tốc độ đô thị hóa và giải pháp xây dựng nhà ở tiết kiệm không gian.",
                    vocab: [
                        { word: "Urbanization", phonetic: "/ˌɜːbənaɪˈzeɪʃn/", meaning: "Sự đô thị hóa" },
                        { word: "Overcrowded", phonetic: "/ˌəʊvəˈkraʊdɪd/", meaning: "Đông đúc, quá tải" }
                    ],
                    quiz: [
                        { question: "Rapid __________ leads to a shortage of housing in metropolitan areas.", options: ["urbanization", "ruralization", "education", "tourism"], answer: 0 }
                    ]
                },
                {
                    id: "u3-writing",
                    title: "Writing",
                    subtitle: "Writing A Paragraph Describing A Future City",
                    theory: "Hướng dẫn viết đoạn văn miêu tả các đặc điểm của thành phố thông minh trong tương lai.",
                    vocab: [
                        { word: "Metropolis", phonetic: "/məˈtrɒpəlɪs/", meaning: "Thành phố lớn, thủ phủ" }
                    ],
                    quiz: [
                        { question: "Ho Chi Minh City is a bustling __________ in the south of Viet Nam.", options: ["metropolis", "village", "town", "countryside"], answer: 0 }
                    ]
                },
                {
                    id: "u3-communication",
                    title: "Communication and Culture",
                    subtitle: "Green Architecture Around the World",
                    theory: "Khám phá các công trình kiến trúc xanh nổi tiếng tích hợp cây xanh vào tòa nhà cao tầng.",
                    vocab: [
                        { word: "Architecture", phonetic: "/ˈɑːkɪtektʃə(r)/", meaning: "Kiến trúc" }
                    ],
                    quiz: [
                        { question: "Vertical forests are a new trend in modern green __________.", options: ["architecture", "agriculture", "mining", "fishing"], answer: 0 }
                    ]
                },
                {
                    id: "u3-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 3 Review & Design A Smart City Project",
                    theory: "Ôn tập cấu trúc rút gọn mệnh đề quan hệ và thiết kế mô hình thành phố thông minh.",
                    vocab: [
                        { word: "Innovation", phonetic: "/ˌɪnəˈveɪʃn/", meaning: "Sự đổi mới, sáng tạo" }
                    ],
                    quiz: [
                        { question: "Smart cities apply cutting-edge __________ to improve living standards.", options: ["technology", "pollution", "traffic", "poverty"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u4",
            title: "Unit 4: ASEAN And Viet Nam",
            description: "Chủ đề Hiệp hội các quốc gia Đông Nam Á và quan hệ hợp tác của Việt Nam.",
            lessons: [
                {
                    id: "u4-getting-started",
                    title: "Getting Started",
                    subtitle: "ASEAN Youth Programme - Chương trình thanh niên ASEAN",
                    theory: "Mở đầu với cuộc trò chuyện về các hoạt động giao lưu văn hóa và thể thao trong khối ASEAN.",
                    vocab: [
                        { word: "Charter", phonetic: "/ˈtʃɑːtə(r)/", meaning: "Hiến chương" },
                        { word: "Solidarity", phonetic: "/ˌsɒlɪˈdærəti/", meaning: "Sự đoàn kết" }
                    ],
                    quiz: [
                        { question: "Participating in youth sports events helps foster __________ among ASEAN member states.", options: ["solidarity", "separation", "disagreement", "competition"], answer: 0 }
                    ]
                },
                {
                    id: "u4-language",
                    title: "Language",
                    subtitle: "Pronunciation (Compound nouns stress) & Grammar (Gerunds and infinitives after certain verbs)",
                    theory: "1. Trọng âm trong danh từ ghép.\n2. Ngữ pháp: Cấu trúc danh động từ (V-ing) và động từ nguyên thể (To-V) sau một số động từ đặc biệt.",
                    vocab: [
                        { word: "Cooperation", phonetic: "/kəʊˌɒpəˈreɪʃn/", meaning: "Sự hợp tác" },
                        { word: "Cultural exchange", phonetic: "/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/", meaning: "Giao lưu văn hóa" }
                    ],
                    quiz: [
                        { question: "ASEAN aims to promote regional peace, stability, and economic __________.", options: ["growth", "war", "conflict", "poverty"], answer: 0 },
                        { question: "Viet Nam agreed __________ part in the ASEAN Youth Games.", options: ["to take", "taking", "take", "took"], answer: 0 }
                    ]
                },
                {
                    id: "u4-reading",
                    title: "Reading",
                    subtitle: "ASEAN: Unity in Diversity",
                    theory: "Bài đọc tìm hiểu về mục tiêu, nguyên tắc hoạt động và sự đa dạng văn hóa trong cộng đồng ASEAN.",
                    vocab: [
                        { word: "Bloc", phonetic: "/blɒk/", meaning: "Khối (liên minh các nước)" },
                        { word: "Diversity", phonetic: "/daɪˈvɜːsəti/", meaning: "Sự đa dạng" }
                    ],
                    quiz: [
                        { question: "ASEAN is a dynamic economic and political __________ in Southeast Asia.", options: ["bloc", "family", "school", "company"], answer: 0 }
                    ]
                },
                {
                    id: "u4-speaking",
                    title: "Speaking",
                    subtitle: "Talking About ASEAN Countries",
                    theory: "Luyện tập giới thiệu về một quốc gia thành viên ASEAN (thủ đô, biểu tượng, văn hóa).",
                    vocab: [
                        { word: "Motto", phonetic: "/ˈmɒtəʊ/", meaning: "Phương châm, khẩu hiệu" },
                        { word: "Flag", phonetic: "/flæɡ/", meaning: "Quốc kỳ" }
                    ],
                    quiz: [
                        { question: "The official __________ of ASEAN is 'One Vision, One Identity, One Community'.", options: ["motto", "name", "song", "dance"], answer: 0 }
                    ]
                },
                {
                    id: "u4-listening",
                    title: "Listening",
                    subtitle: "An Interview About ASEAN Scholarships",
                    theory: "Nghe thông tin về các chương trình học bổng du học trong khu vực ASEAN dành cho học sinh.",
                    vocab: [
                        { word: "Scholarship", phonetic: "/ˈskɒləʃɪp/", meaning: "Học bổng" },
                        { word: "Opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", meaning: "Cơ hội" }
                    ],
                    quiz: [
                        { question: "High school students can apply for regional __________ to study abroad.", options: ["scholarships", "loans", "debts", "taxes"], answer: 0 }
                    ]
                },
                {
                    id: "u4-writing",
                    title: "Writing",
                    subtitle: "Writing A Profile of An ASEAN Country",
                    theory: "Hướng dẫn viết bài giới thiệu tóm tắt thông tin về một quốc gia trong khối ASEAN.",
                    vocab: [
                        { word: "Profile", phonetic: "/ˈprəʊfaɪl/", meaning: "Hồ sơ tóm tắt, lý lịch" }
                    ],
                    quiz: [
                        { question: "A country __________ includes its population, area, and main languages.", options: ["profile", "story", "novel", "diary"], answer: 0 }
                    ]
                },
                {
                    id: "u4-communication",
                    title: "Communication and Culture",
                    subtitle: "ASEAN Festivals",
                    theory: "Khám phá các lễ hội truyền thống đặc sắc mang đậm bản sắc văn hóa các nước Đông Nam Á.",
                    vocab: [
                        { word: "Festival", phonetic: "/ˈfestɪvl/", meaning: "Lễ hội" }
                    ],
                    quiz: [
                        { question: "Songkran is a famous water __________ celebrated in Thailand and Laos.", options: ["festival", "game", "match", "sport"], answer: 0 }
                    ]
                },
                {
                    id: "u4-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 4 Review & ASEAN Exhibition Project",
                    theory: "Ôn tập ngữ pháp To-V / V-ing và tổ chức triển lãm tìm hiểu các nước ASEAN.",
                    vocab: [
                        { word: "Integration", phonetic: "/ˌɪntɪˈɡreɪʃn/", meaning: "Sự hội nhập" }
                    ],
                    quiz: [
                        { question: "Viet Nam's active __________ in ASEAN brings numerous benefits.", options: ["integration", "isolation", "separation", "exclusion"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u5",
            title: "Unit 5: Global Warming",
            description: "Chủ đề Biến đổi khí hậu, hiệu ứng nhà kính và các giải pháp cứu hành tinh.",
            lessons: [
                {
                    id: "g11-u5", // fixed id for consistency
                    title: "Unit 5: Global Warming",
                    description: "Chủ đề Biến đổi khí hậu, hiệu ứng nhà kính và các giải pháp cứu hành tinh.",
                    lessons: [
                        {
                            id: "u5-getting-started",
                            title: "Getting Started",
                            subtitle: "Causes of Global Warming - Nguyên nhân nóng lên toàn cầu",
                            theory: "Mở đầu thảo luận về hiện tượng thời tiết cực đoan, băng tan ở hai cực và khí thải nhà kính.",
                            vocab: [
                                { word: "Greenhouse gas", phonetic: "/ˈɡriːnhaʊs ɡæs/", meaning: "Khí nhà kính" },
                                { word: "Emissions", phonetic: "/ɪˈmɪʃnz/", meaning: "Khí thải" }
                            ],
                            quiz: [
                                { question: "Burning fossil fuels releases dangerous __________ into the atmosphere.", options: ["emissions", "oxygen", "fresh air", "fertilizers"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-language",
                            title: "Language",
                            subtitle: "Pronunciation (Sentence stress for emphasis) & Grammar (Perfect gerunds and perfect participles)",
                            theory: "1. Trọng âm câu để nhấn mạnh ý.\n2. Ngữ pháp: Danh động từ hoàn thành (Perfect gerunds) và Phân từ hoàn thành (Perfect participles).",
                            vocab: [
                                { word: "Deforestation", phonetic: "/diːˌfɒrɪˈsteɪʃn/", meaning: "Nạn phá rừng" },
                                { word: "Catastrophic", phonetic: "/ˌkætəˈstrɒfɪk/", meaning: "Thảm khốc" }
                            ],
                            quiz: [
                                { question: "Tree planting campaigns aim to combat the effects of __________.", options: ["deforestation", "reforestation", "agriculture", "tourism"], answer: 0 },
                                { question: "__________ all the homework, Tom went out to play football.", options: ["Having finished", "Finished", "Finishing", "To finish"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-reading",
                            title: "Reading",
                            subtitle: "The Impacts of Climate Change",
                            theory: "Bài đọc phân tích các tác động nặng nề của biến đổi khí hậu đối với hệ sinh thái và con người.",
                            vocab: [
                                { word: "Sea level", phonetic: "/siː ˈlevl/", meaning: "Mực nước biển" },
                                { word: "Ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", meaning: "Hệ sinh thái" }
                            ],
                            quiz: [
                                { question: "Rising temperatures cause polar ice to melt, leading to higher __________.", options: ["sea levels", "mountain peaks", "cloud heights", "river beds"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Ways to Reduce Carbon Footprint",
                            theory: "Thảo luận về các hành động thiết thực giảm phát thải carbon cá nhân trong sinh hoạt.",
                            vocab: [
                                { word: "Fossil fuel", phonetic: "/ˈfɒsl fjuəl/", meaning: "Nhiên liệu hóa thạch" },
                                { word: "Conserve", phonetic: "/kənˈsɜːv/", meaning: "Tiết kiệm, bảo tồn" }
                            ],
                            quiz: [
                                { question: "We should switch to renewable energy sources instead of burning __________.", options: ["fossil fuels", "clean water", "fresh air", "sunlight"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-listening",
                            title: "Listening",
                            subtitle: "An Environmentalist's Speech",
                            theory: "Nghe bài phát biểu của nhà hoạt động môi trường kêu gọi hành động bảo vệ trái đất.",
                            vocab: [
                                { word: "Activist", phonetic: "/ˈæktɪvɪst/", meaning: "Nhà hoạt động xã hội/môi trường" },
                                { word: "Awareness", phonetic: "/əˈweənəs/", meaning: "Nhận thức" }
                            ],
                            quiz: [
                                { question: "Environmental __________ organise campaigns to educate the public.", options: ["activists", "tourists", "customers", "patients"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-writing",
                            title: "Writing",
                            subtitle: "Writing An Essay on Causes and Solutions of Global Warming",
                            theory: "Hướng dẫn viết bài luận trình bày nguyên nhân và giải pháp ứng phó biến đổi khí hậu.",
                            vocab: [
                                { word: "Consequence", phonetic: "/ˈkɒnsɪkwəns/", meaning: "Hậu quả" }
                            ],
                            quiz: [
                                { question: "Global warming has serious __________ for future generations.", options: ["consequences", "benefits", "helps", "advantages"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-communication",
                            title: "Communication and Culture",
                            subtitle: "Earth Hour Initiative",
                            theory: "Tìm hiểu ý nghĩa chiến dịch Giờ Trái Đất (tắt đèn 1 giờ vì môi trường toàn cầu).",
                            vocab: [
                                { word: "Initiative", phonetic: "/ɪˈnɪʃətɪv/", meaning: "Sáng kiến, Sáng chủ trương" }
                            ],
                            quiz: [
                                { question: "Earth Hour is a global __________ to encourage energy saving.", options: ["initiative", "problem", "conflict", "disaster"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 5 Review & Eco-action Plan Project",
                            theory: "Ôn tập phân từ hoàn thành và lập kế hoạch hành động xanh cho trường học.",
                            vocab: [
                                { word: "Mitigate", phonetic: "/ˈmɪtɪɡeɪt/", meaning: "Làm dịu bớt, giảm nhẹ" }
                            ],
                            quiz: [
                                { question: "Governments worldwide are taking urgent steps to __________ climate change.", options: ["mitigate", "worsen", "increase", "speed"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g11-u6",
            title: "Unit 6: Preserving Our Heritage",
            description: "Chủ đề Bảo tồn di sản văn hóa vật thể và phi vật thể.",
            lessons: [
                {
                    id: "u6-getting-started",
                    title: "Getting Started",
                    subtitle: "World Heritage Sites in Viet Nam - Di sản thế giới tại Việt Nam",
                    theory: "Mở đầu với cuộc trò chuyện về chuyến tham quan vịnh Hạ Long hoặc quần thể di tích Huế.",
                    vocab: [
                        { word: "Heritage site", phonetic: "/ˈherɪtɪdʒ saɪt/", meaning: "Khu di sản" },
                        { word: "Preservation", phonetic: "/ˌprezəˈveɪʃn/", meaning: "Sự bảo tồn" }
                    ],
                    quiz: [
                        { question: "Ha Long Bay is recognized as a UNESCO World Natural __________.", options: ["Heritage Site", "Building", "Park", "Museum"], answer: 0 }
                    ]
                },
                {
                    id: "u6-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in words ending in -ial, -ual) & Grammar (To-infinitive clauses after adjectives and nouns)",
                    theory: "1. Trọng âm từ có đuôi -ial, -ual.\n2. Ngữ pháp: Mệnh đề nguyên thể (To-infinitive clauses) theo sau tính từ và danh từ.",
                    vocab: [
                        { word: "Authentic", phonetic: "/ɔːˈθentɪk/", meaning: "Nguyên bản, đích thực" },
                        { word: "Landscape", phonetic: "/ˈlændskeɪp/", meaning: "Cảnh quan" }
                    ],
                    quiz: [
                        { question: "It is important __________ historical monuments for future generations.", options: ["to preserve", "preserving", "preserve", "preserved"], answer: 0 },
                        { question: "Younger generations should take active roles in the __________ of traditions.", options: ["preservation", "destruction", "neglect", "loss"], answer: 0 }
                    ]
                },
                {
                    id: "u6-reading",
                    title: "Reading",
                    subtitle: "Preserving Cultural Heritage",
                    theory: "Bài đọc tìm hiểu tầm quan trọng của việc duy trì và bảo vệ các giá trị văn hóa vật thể và phi vật thể.",
                    vocab: [
                        { word: "Tangible heritage", phonetic: "/ˈtændʒəbl ˈherɪtɪdʒ/", meaning: "Di sản văn hóa vật thể" },
                        { word: "Intangible heritage", phonetic: "/ɪnˈtændʒəbl ˈherɪtɪdʒ/", meaning: "Di sản văn hóa phi vật thể" }
                    ],
                    quiz: [
                        { question: "Royal Court Music of Hue is recognized as an __________ cultural heritage.", options: ["intangible", "tangible", "physical", "solid"], answer: 0 }
                    ]
                },
                {
                    id: "u6-speaking",
                    title: "Speaking",
                    subtitle: "Discussing How to Protect Heritage Sites",
                    theory: "Luyện tập thảo luận và đề xuất các biện pháp bảo vệ di sản khỏi sự tàn phá của thời gian và du lịch quá tải.",
                    vocab: [
                        { word: "Vandalism", phonetic: "/ˈvændəlɪzəm/", meaning: "Hành vi phá hoại tài sản công cộng/di sản" },
                        { word: "Restore", phonetic: "/rɪˈstɔː(r)/", meaning: "Trùng tu, phục hồi" }
                    ],
                    quiz: [
                        { question: "Authorities need to prevent tourists from __________ ancient walls.", options: ["vandalizing", "protecting", "saving", "cleaning"], answer: 0 }
                    ]
                },
                {
                    id: "u6-listening",
                    title: "Listening",
                    subtitle: "An Audio Guide at a Heritage Site",
                    theory: "Nghe hướng dẫn âm thanh thuyết minh về lịch sử và kiến trúc của một ngôi đền cổ.",
                    vocab: [
                        { word: "Dynasty", phonetic: "/ˈdɪnəsti/", meaning: "Triều đại" },
                        { word: "Artifact", phonetic: "/ˈɑːtɪfækt/", meaning: "Cổ vật, hiện vật" }
                    ],
                    quiz: [
                        { question: "Museums display rare __________ collected from ancient royal tombs.", options: ["artifacts", "plastics", "rubbish", "fabrics"], answer: 0 }
                    ]
                },
                {
                    id: "u6-writing",
                    title: "Writing",
                    subtitle: "Writing A Proposal for Heritage Preservation",
                    theory: "Hướng dẫn viết bài đề xuất các giải pháp bảo tồn di tích lịch sử địa phương.",
                    vocab: [
                        { word: "Proposal", phonetic: "/prəˈpəʊzl/", meaning: "Bản đề xuất" }
                    ],
                    quiz: [
                        { question: "The youth union submitted a __________ to clean up the local temple.", options: ["proposal", "song", "poem", "novel"], answer: 0 }
                    ]
                },
                {
                    id: "u6-communication",
                    title: "Communication and Culture",
                    subtitle: "UNESCO Heritage Sites Around the World",
                    theory: "Khám phá các kỳ quan thế giới nổi tiếng được UNESCO công nhận như Kim tự tháp Ai Cập, Vạn Lý Trường Thành.",
                    vocab: [
                        { word: "Monument", phonetic: "/ˈmɒnjumənt/", meaning: "Đài tưởng niệm, di tích lịch sử" }
                    ],
                    quiz: [
                        { question: "The Great Wall of China is a magnificent ancient __________.", options: ["monument", "factory", "market", "station"], answer: 0 }
                    ]
                },
                {
                    id: "u6-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 6 Review & Heritage Campaign Project",
                    theory: "Ôn tập ngữ pháp To-V clauses và thuyết trình dự án tuyên truyền bảo vệ di sản.",
                    vocab: [
                        { word: "Legacy", phonetic: "/ˈleɡəsi/", meaning: "Di sản để lại" }
                    ],
                    quiz: [
                        { question: "We are proud to inherit a rich cultural __________ from our ancestors.", options: ["legacy", "debt", "pollution", "waste"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u7",
            title: "Unit 7: Education Options After School",
            description: "Chủ đề Định hướng học tập sau THPT: Đại học, học nghề hay đi làm.",
            lessons: [
                {
                    id: "u7-getting-started",
                    title: "Getting Started",
                    subtitle: "Career Choices After School - Lựa chọn sau tốt nghiệp",
                    theory: "Mở đầu với cuộc thảo luận về ngã rẽ quan trọng sau khi hoàn thành chương trình trung học phổ thông.",
                    vocab: [
                        { word: "Higher education", phonetic: "/ˌhaɪər edʒuˈkeɪʃn/", meaning: "Giáo dục đại học" },
                        { word: "Vocational training", phonetic: "/vəʊˈkeɪʃənl ˈtreɪnɪŋ/", meaning: "Đào tạo nghề" }
                    ],
                    quiz: [
                        { question: "Students who prefer practical skills over theory often choose __________.", options: ["vocational training", "academic research", "high school", "primary school"], answer: 0 }
                    ]
                },
                {
                    id: "u7-language",
                    title: "Language",
                    subtitle: "Pronunciation (Emphatic stress) & Grammar (Relative clauses with prepositions)",
                    theory: "1. Trọng âm nhấn mạnh trong câu.\n2. Ngữ pháp: Mệnh đề quan hệ có chứa giới từ (Relative clauses with prepositions).",
                    vocab: [
                        { word: "Apprenticeship", phonetic: "/əˈprentɪsʃɪp/", meaning: "Thời gian học nghề" },
                        { word: "Qualification", phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "Bằng cấp, chứng chỉ" }
                    ],
                    quiz: [
                        { question: "Getting a university degree provides students with professional __________.", options: ["qualifications", "hobbies", "entertainment", "sports"], answer: 0 },
                        { question: "This is the company __________ my brother works.", options: ["for which", "which", "where", "that"], answer: 0 }
                    ]
                },
                {
                    id: "u7-reading",
                    title: "Reading",
                    subtitle: "University vs Vocational School",
                    theory: "Bài đọc so sánh lợi thế của việc học đại học hàn lâm và học nghề thực hành.",
                    vocab: [
                        { word: "Academic", phonetic: "/ˌækəˈdemɪk/", meaning: "Thuộc về học thuật" },
                        { word: "Hands-on experience", phonetic: "/ˌhændz ɒn ɪkˈspɪəriəns/", meaning: "Kinh nghiệm thực tế" }
                    ],
                    quiz: [
                        { question: "Vocational courses offer students valuable __________ experience.", options: ["hands-on", "useless", "boring", "theoretical"], answer: 0 }
                    ]
                },
                {
                    id: "u7-speaking",
                    title: "Speaking",
                    subtitle: "Discussing Future Career Plans",
                    theory: "Luyện tập bày tỏ định hướng cá nhân sau khi tốt nghiệp cấp ba.",
                    vocab: [
                        { word: "Path", phonetic: "/pɑːθ/", meaning: "Con đường, lối đi" },
                        { word: "Employment rate", phonetic: "/ɪmˈplɔɪmənt reɪt/", meaning: "Tỷ lệ có việc làm" }
                    ],
                    quiz: [
                        { question: "Gradates from technical colleges often have a high __________ rate.", options: ["employment", "unemployment", "failure", "absence"], answer: 0 }
                    ]
                },
                {
                    id: "u7-listening",
                    title: "Listening",
                    subtitle: "An Interview With A Career Counselor",
                    theory: "Nghe tư vấn viên hướng nghiệp chia sẻ bí quyết chọn ngành nghề phù hợp năng lực.",
                    vocab: [
                        { word: "Counselor", phonetic: "/ˈkaʊnsələ(r)/", meaning: "Cố vấn, tư vấn viên" },
                        { word: "Aptitude", phonetic: "/ˈæptɪtjuːd/", meaning: "Năng lực, năng khiếu" }
                    ],
                    quiz: [
                        { question: "A career __________ helps students find jobs matching their skills.", options: ["counselor", "driver", "chef", "pilot"], answer: 0 }
                    ]
                },
                {
                    id: "u7-writing",
                    title: "Writing",
                    subtitle: "Writing A Letter Expressing Career Intentions",
                    theory: "Hướng dẫn viết thư chia sẻ về dự định và định hướng học tập sau phổ thông.",
                    vocab: [
                        { word: "Intention", phonetic: "/ɪnˈtenʃn/", meaning: "Ý định, dự định" }
                    ],
                    quiz: [
                        { question: "My main __________ after leaving school is to study software engineering.", options: ["intention", "confusion", "doubt", "fear"], answer: 0 }
                    ]
                },
                {
                    id: "u7-communication",
                    title: "Communication and Culture",
                    subtitle: "Gap Year Tradition",
                    theory: "Tìm hiểu truyền thống 'Gap year' (năm nghỉ ngơi trải nghiệm thực tế trước khi vào đại học) ở các nước phương Tây.",
                    vocab: [
                        { word: "Gap year", phonetic: "/ɡæp jɪə(r)/", meaning: "Năm trải nghiệm gián đoạn học tập" }
                    ],
                    quiz: [
                        { question: "Many students take a __________ to travel or volunteer before entering university.", options: ["gap year", "long sleep", "summer break", "holiday"], answer: 0 }
                    ]
                },
                {
                    id: "u7-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 7 Review & Career Fair Project",
                    theory: "Ôn tập mệnh đề quan hệ với giới từ và tổ chức hội chợ hướng nghiệp.",
                    vocab: [
                        { word: "Prospect", phonetic: "/ˈprɒspekt/", meaning: "Viễn cảnh, triển vọng" }
                    ],
                    quiz: [
                        { question: "Studying information technology offers great job __________ nowadays.", options: ["prospects", "threats", "risks", "dangers"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u8",
            title: "Unit 8: Becoming Independent",
            description: "Chủ đề Rèn luyện tính tự lập, quản lý tài chính và kỹ năng sống.",
            lessons: [
                {
                    id: "g11-u8",
                    title: "Unit 8: Becoming Independent",
                    description: "Chủ đề Rèn luyện tính tự lập, quản lý tài chính và kỹ năng sống.",
                    lessons: [
                        {
                            id: "u8-getting-started",
                            title: "Getting Started",
                            subtitle: "Life Skills for Teens - Kỹ năng sống cho tuổi teen",
                            theory: "Mở đầu cuộc trò chuyện về việc tự nấu ăn, giặt giũ và tự lập quản lý bản thân.",
                            vocab: [
                                { word: "Self-reliance", phonetic: "/ˌself rɪˈlaɪəns/", meaning: "Sự tự lực" },
                                { word: "Independent", phonetic: "/ˌɪndɪˈpendənt/", meaning: "Độc lập, tự lập" }
                            ],
                            quiz: [
                                { question: "Learning how to cook and clean is an essential step towards becoming __________.", options: ["independent", "dependent", "helpless", "lazy"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-language",
                            title: "Language",
                            subtitle: "Pronunciation (Tone and attitude) & Grammar (Cleft sentences with It is/was... that/who)",
                            theory: "1. Ngữ điệu thể hiện thái độ.\n2. Ngữ pháp: Câu chẻ (Cleft sentences) nhấn mạnh chủ ngữ hoặc tân ngữ (It is/was ... that/who ...).",
                            vocab: [
                                { word: "Time management", phonetic: "/taɪm ˈmænɪdʒmənt/", meaning: "Quản lý thời gian" },
                                { word: "Budgeting", phonetic: "/ˈbʌdʒɪtɪŋ/", meaning: "Lập ngân sách chi tiêu" }
                            ],
                            quiz: [
                                { question: "Good __________ skills help students balance study, work, and relaxation.", options: ["time management", "shopping", "gaming", "sleeping"], answer: 0 },
                                { question: "It was my mother __________ taught me how to cook.", options: ["who", "which", "where", "when"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-reading",
                            title: "Reading",
                            subtitle: "Skills for Independent Living",
                            theory: "Bài đọc giới thiệu các kỹ năng thiết yếu khi bắt đầu sống xa gia đình.",
                            vocab: [
                                { word: "Finance", phonetic: "/ˈfaɪnæns/", meaning: "Tài chính" },
                                { word: "Emergency", phonetic: "/ɪˈmɜːdʒənsi/", meaning: "Trường hợp khẩn cấp" }
                            ],
                            quiz: [
                                { question: "Teens should learn basic personal __________ management before college.", options: ["finance", "sport", "game", "art"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Daily Independence",
                            theory: "Luyện tập thảo luận về mức độ tự lập của bản thân trong các công việc thường ngày.",
                            vocab: [
                                { word: "Reliable", phonetic: "/rɪˈlaɪəbl/", meaning: "Đáng tin cậy" },
                                { word: "Confident", phonetic: "/ˈkɒnfɪdənt/", meaning: "Tự tin" }
                            ],
                            quiz: [
                                { question: "Being self-reliant makes teenagers more __________ in life.", options: ["confident", "afraid", "shy", "weak"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-listening",
                            title: "Listening",
                            subtitle: "Managing Money Wisely",
                            theory: "Nghe lời khuyên về cách chi tiêu tiết kiệm và quản lý tiền bạc hợp lý cho học sinh.",
                            vocab: [
                                { word: "Save up", phonetic: "/seɪv ʌp/", meaning: "Tiết kiệm tiền" },
                                { word: "Allowance", phonetic: "/əˈlaʊəns/", meaning: "Tiền tiêu vặt" }
                            ],
                            quiz: [
                                { question: "He decided to __________ his monthly allowance to buy a laptop.", options: ["save up", "spend", "waste", "lose"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-writing",
                            title: "Writing",
                            subtitle: "Writing A Guide on Life Skills",
                            theory: "Hướng dẫn cách viết cẩm nang hướng dẫn các bước rèn luyện một kỹ năng sống.",
                            vocab: [
                                { word: "Instruction", phonetic: "/ɪnˈstrʌkʃn/", meaning: "Lời chỉ dẫn, hướng dẫn" }
                            ],
                            quiz: [
                                { question: "Follow the __________ carefully when operating this home appliance.", options: ["instructions", "jokes", "games", "songs"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-communication",
                            title: "Communication and Culture",
                            subtitle: "Teens Leaving Home Early in Western Cultures",
                            theory: "Tìm hiểu văn hóa tự lập sớm và ra ở riêng của thanh thiếu niên phương Tây.",
                            vocab: [
                                { word: "Adulthood", phonetic: "/ˈadʌlthʊd/", meaning: "Tuổi trưởng thành" }
                            ],
                            quiz: [
                                { question: "Moving out of parents' house is a major step towards __________.", options: ["adulthood", "childhood", "infancy", "babyhood"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 8 Review & Independent Living Project",
                            theory: "Ôn tập cấu trúc câu chẻ và hoàn thành dự án kỹ năng sống tự lập.",
                            vocab: [
                                { word: "Maturity", phonetic: "/məˈtʃʊərəti/", meaning: "Sự chín chắn, trưởng thành" }
                            ],
                            quiz: [
                                { question: "It is through overcoming challenges __________ teenagers achieve maturity.", options: ["that", "which", "who", "where"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g11-u9",
            title: "Unit 9: Social Issues",
            description: "Chủ đề Các vấn đề xã hội: Áp lực đồng lứa, bạo lực mạng và sức khỏe tinh thần.",
            lessons: [
                {
                    id: "u9-getting-started",
                    title: "Getting Started",
                    subtitle: "Teen Pressures - Áp lực lứa tuổi học đường",
                    theory: "Mở đầu thảo luận về các vấn đề áp lực từ bạn bè, thi cử và mạng xã hội.",
                    vocab: [
                        { word: "Peer pressure", phonetic: "/ˈpɪə(r) preʃə(r)/", meaning: "Áp lực từ bạn bè đồng lứa" },
                        { word: "Cyberbullying", phonetic: "/ˈsaɪbəbʊliɪŋ/", meaning: "Bắt nạt trên không gian mạng" }
                    ],
                    quiz: [
                        { question: "Teenagers often experience __________ when trying to fit in with their friends.", options: ["peer pressure", "praise", "support", "success"], answer: 0 }
                    ]
                },
                {
                    id: "u9-language",
                    title: "Language",
                    subtitle: "Pronunciation (Sentence stress in complex sentences) & Grammar (Reported speech with to-infinitive / gerunds)",
                    theory: "1. Trọng âm trong câu phức.\n2. Ngữ pháp: Câu tường thuật dạng nguyên thể có 'to' (to-infinitive) và danh động từ (gerunds).",
                    vocab: [
                        { word: "Depression", phonetic: "/dɪˈpreʃn/", meaning: "Sự trầm cảm, lo âu" },
                        { word: "Anxiety", phonetic: "/æŋˈzaɪəti/", meaning: "Sự lo âu, bồn chồn" }
                    ],
                    quiz: [
                        { question: "Schools need to raise students' __________ about the dangers of cyberbullying.", options: ["awareness", "ignorance", "indifference", "confusion"], answer: 0 },
                        { question: "The teacher advised us __________ hard for the upcoming exam.", options: ["to study", "studying", "study", "studied"], answer: 0 }
                    ]
                },
                {
                    id: "u9-reading",
                    title: "Reading",
                    subtitle: "Dealing with Social Issues",
                    theory: "Bài đọc tìm hiểu các giải pháp giúp học sinh vượt qua khủng hoảng tâm lý và bạo lực mạng.",
                    vocab: [
                        { word: "Victim", phonetic: "/ˈvɪktɪm/", meaning: "Nạn nhân" },
                        { word: "Support system", phonetic: "/səˈpɔːt ˈsɪstəm/", meaning: "Hệ thống hỗ trợ tinh thần" }
                    ],
                    quiz: [
                        { question: "Victims of cyberbullying should seek help from school counselors or parents.", options: ["Victims", "Offenders", "Leaders", "Bosses"], answer: 0 }
                    ]
                },
                {
                    id: "u9-speaking",
                    title: "Speaking",
                    subtitle: "Discussing Solutions to School Pressures",
                    theory: "Thảo luận chia sẻ các mẹo giảm stress, cân bằng thời gian học tập và giải trí.",
                    vocab: [
                        { word: "Relieve", phonetic: "/rɪˈliːv/", meaning: "Giải tỏa, làm giảm bớt" },
                        { word: "Mental health", phonetic: "/ˈmentl helθ/", meaning: "Sức khỏe tinh thần" }
                    ],
                    quiz: [
                        { question: "Doing yoga and listening to music helps __________ stress effectively.", options: ["relieve", "increase", "worsen", "double"], answer: 0 }
                    ]
                },
                {
                    id: "u9-listening",
                    title: "Listening",
                    subtitle: "A Talk Show on Mental Health",
                    theory: "Nghe talkshow tư vấn tâm lý học đường về cách vượt qua cảm giác tự ti.",
                    vocab: [
                        { word: "Confident", phonetic: "/ˈkɒnfɪdənt/", meaning: "Tự tin" },
                        { word: "Insecure", phonetic: "/ˌɪnsɪˈkjʊə(r)/", meaning: "Kém tự tin, bất an" }
                    ],
                    quiz: [
                        { question: "Teens often feel __________ about their appearance due to social media standards.", options: ["insecure", "proud", "confident", "brave"], answer: 0 }
                    ]
                },
                {
                    id: "u9-writing",
                    title: "Writing",
                    subtitle: "Writing A Problem-and-Solution Essay",
                    theory: "Hướng dẫn viết bài luận phân tích một vấn đề xã hội học đường và đưa ra giải pháp.",
                    vocab: [
                        { word: "Intervention", phonetic: "/ˌɪntəˈvenʃn/", meaning: "Sự can thiệp, trợ giúp" }
                    ],
                    quiz: [
                        { question: "Early __________ from teachers can stop school violence successfully.", options: ["intervention", "neglect", "avoidance", "delay"], answer: 0 }
                    ]
                },
                {
                    id: "u9-communication",
                    title: "Communication and Culture",
                    subtitle: "Anti-bullying Campaigns Globally",
                    theory: "Tìm hiểu các chiến dịch phòng chống bạo lực học đường và bắt nạt trên mạng toàn cầu.",
                    vocab: [
                        { word: "Bullying", phonetic: "/ˈbʊliɪŋ/", meaning: "Hành vi bắt nạt" }
                    ],
                    quiz: [
                        { question: "Many schools around the world launch strict anti-__________ policies.", options: ["bullying", "sports", "arts", "reading"], answer: 0 }
                    ]
                },
                {
                    id: "u9-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 9 Review & Mental Health Campaign Project",
                    theory: "Ôn tập câu tường thuật nâng cao và thiết kế poster tuyên truyền sức khỏe tinh thần.",
                    vocab: [
                        { word: "Resilience", phonetic: "/rɪˈzɪliəns/", meaning: "Khả năng phục hồi, kiên cường" }
                    ],
                    quiz: [
                        { question: "Building emotional __________ helps teenagers overcome life challenges.", options: ["resilience", "weakness", "laziness", "sadness"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g11-u10",
            title: "Unit 10: The Ecosystem",
            description: "Chủ đề Hệ sinh thái, đa dạng sinh học và sự cân bằng tự nhiên.",
            lessons: [
                {
                    id: "g11-u10",
                    title: "Unit 10: The Ecosystem",
                    description: "Chủ đề Hệ sinh thái, đa dạng sinh học và sự cân bằng tự nhiên.",
                    lessons: [
                        {
                            id: "u10-getting-started",
                            title: "Getting Started",
                            subtitle: "Exploring Ecosystems - Khám phá các hệ sinh thái",
                            theory: "Mở đầu tìm hiểu về rừng nhiệt đới, hệ sinh thái biển và sự phong phú của sinh vật.",
                            vocab: [
                                { word: "Ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", meaning: "Hệ sinh thái" },
                                { word: "Biodiversity", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", meaning: "Đa dạng sinh học" }
                            ],
                            quiz: [
                                { question: "Tropical rainforests are famous for their rich __________ and wildlife.", options: ["biodiversity", "pollution", "urbanization", "poverty"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-language",
                            title: "Language",
                            subtitle: "Pronunciation (Intonation in conditional sentences) & Grammar (Conditional sentences in reported speech)",
                            theory: "1. Ngữ điệu trong câu điều kiện.\n2. Ngữ pháp: Câu điều kiện trong câu tường thuật (Conditional sentences in reported speech).",
                            vocab: [
                                { word: "Flora and fauna", phonetic: "/ˈflɔːrə ənd ˈfɔːnə/", meaning: "Thảm thực vật và hệ động vật" },
                                { word: "Balance of nature", phonetic: "/ˈbæləns əv ˈneɪtʃə(r)/", meaning: "Sự cân bằng sinh thái" }
                            ],
                            quiz: [
                                { question: "Disrupting the food chain can harm the delicate __________.", options: ["ecosystem", "economy", "technology", "society"], answer: 0 },
                                { question: "He said that if he __________ more time, he would join the wildlife club.", options: ["had", "has", "have", "would have"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-reading",
                            title: "Reading",
                            subtitle: "Protecting Marine Ecosystems",
                            theory: "Bài đọc tìm hiểu về tầm quan trọng của các rạn san hô và sinh vật biển.",
                            vocab: [
                                { word: "Coral reef", phonetic: "/ˈkɒrəl riːf/", meaning: "Rạn san hô" },
                                { word: "Overfishing", phonetic: "/ˌəʊvəˈfɪʃɪŋ/", meaning: "Đánh bắt cá quá mức" }
                            ],
                            quiz: [
                                { question: "Strict regulations are needed to stop illegal __________ in marine reserves.", options: ["overfishing", "gardening", "farming", "planting"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Threats to Ecosystems",
                            theory: "Thảo luận về các mối đe dọa từ con người đối với môi trường sống tự nhiên.",
                            vocab: [
                                { word: "Pollutant", phonetic: "/pəˈluːtənt/", meaning: "Chất gây ô nhiễm" },
                                { word: "Degradation", phonetic: "/ˌdeɡrəˈdeɪʃn/", meaning: "Sự suy thoái" }
                            ],
                            quiz: [
                                { question: "Industrial waste is a major __________ destroying river ecosystems.", options: ["pollutant", "nutrient", "vitamin", "medicine"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-listening",
                            title: "Listening",
                            subtitle: "A Documentary on Mangrove Forests",
                            theory: "Nghe tài liệu khoa học về vai trò phòng hộ và bảo vệ bờ biển của rừng ngập mặn.",
                            vocab: [
                                { word: "Mangrove forest", phonetic: "/ˈmæŋɡrəʊv ˈfɒrɪst/", meaning: "Rừng ngập mặn" },
                                { word: "Coastline", phonetic: "/ˈkəʊstlaɪn/", meaning: "Đường bờ biển" }
                            ],
                            quiz: [
                                { question: "Mangrove forests protect our __________ from storms and rising sea levels.", options: ["coastlines", "deserts", "mountains", "volcanoes"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-writing",
                            title: "Writing",
                            subtitle: "Writing A Report on An Ecosystem",
                            theory: "Hướng dẫn viết báo cáo ngắn mô tả thực trạng và giải pháp bảo vệ một hệ sinh thái.",
                            vocab: [
                                { word: "Preservation", phonetic: "/ˌprezəˈveɪʃn/", meaning: "Sự bảo tồn" }
                            ],
                            quiz: [
                                { question: "The report highlights the urgent need for forest __________.", options: ["preservation", "destruction", "removal", "clearance"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-communication",
                            title: "Communication and Culture",
                            subtitle: "Protected Areas Around the World",
                            theory: "Khám phá các khu dự trữ sinh quyển thế giới được UNESCO công nhận.",
                            vocab: [
                                { word: "Biosphere reserve", phonetic: "/ˈbaɪəʊsfɪə(r) rɪˈzɜːv/", meaning: "Khu dự trữ sinh quyển" }
                            ],
                            quiz: [
                                { question: "Can Gio is recognized by UNESCO as a global __________ reserve.", options: ["biosphere", "military", "factory", "commercial"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 10 Review & Ecosystem Protection Project",
                            theory: "Ôn tập tổng hợp ngữ pháp Unit 10 và thuyết trình dự án bảo vệ hệ sinh thái địa phương.",
                            vocab: [
                                { word: "Sustainability", phonetic: "/səˌsteɪnəˈbɪləti/", meaning: "Tính bền vững" }
                            ],
                            quiz: [
                                { question: "Balancing human activities with nature ensures long-term __________.", options: ["sustainability", "destruction", "failure", "poverty"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
