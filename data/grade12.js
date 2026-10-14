/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Mẫu Tiếng Anh Khối 12 (Demo KHKT)
   ========================================================= */

const grade12Data = {
    
   title: "Khối 12 - Tiếng Anh THPT",
    description: "Chương trình ôn thi tốt nghiệp THPT và luyện thi Đại học khối D/C03 bám sát SGK Tiếng Anh 12 (Global Success).",
    units: [
        {
            id: "g12-u1",
            title: "Unit 1: Life Stories",
            description: "Chủ đề Câu chuyện cuộc đời các danh nhân, tiểu sử và những cống hiến to lớn.",
            vocab: [
                { word: "Biography", phonetic: "/baɪˈɒɡrəfi/", meaning: "Tiểu sử, lý lịch" },
                { word: "Dedication", phonetic: "/ˌdedɪˈkeɪʃn/", meaning: "Sự cống hiến, tận tụy" },
                { word: "Inspire", phonetic: "/ɪnˈspaɪə(r)/", meaning: "Truyền cảm hứng" },
                { word: "Achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "Thành tựu, thành tích" }
            ],
            quiz: [
                {
                    question: "Reading the __________ of great scientists can motivate young people to pursue research.",
                    options: ["biography", "novel", "fiction", "comic"],
                    answer: 0
                },
                {
                    question: "Her lifelong __________ to medical science has saved thousands of lives.",
                    options: ["dedication", "abandonment", "indifference", "neglect"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u2",
            title: "Unit 2: A Healthy Lifestyle",
            description: "Chủ đề Lối sống lành mạnh, chăm sóc sức khỏe thể chất và tinh thần.",
            vocab: [
                { word: "Well-being", phonetic: "/ˈwel biːɪŋ/", meaning: "Sự khỏe mạnh, hạnh phúc toàn diện" },
                { word: "Immune system", phonetic: "/ɪˈmjuːn ɪstəm/", meaning: "Hệ miễn dịch" },
                { word: "Stress management", phonetic: "/stres ˈmænɪdʒmənt/", meaning: "Quản lý căng thẳng" },
                { word: "Longevity", phonetic: "/lɒnˈdʒevəti/", meaning: "Sự sống lâu, trường thọ" }
            ],
            quiz: [
                {
                    question: "A balanced diet rich in vitamins helps strengthen our __________.",
                    options: ["immune system", "skeleton", "nervous system", "muscles"],
                    answer: 0
                },
                {
                    question: "Practicing yoga and meditation is an effective way to improve mental __________.",
                    options: ["well-being", "illness", "sickness", "weakness"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u3",
            title: "Unit 3: Green Living",
            description: "Chủ đề Sống xanh, bảo vệ tài nguyên thiên nhiên và phát triển bền vững.",
            vocab: [
                { word: "Conservation", phonetic: "/ˌkɒnsəˈveɪʃn/", meaning: "Sự bảo tồn" },
                { word: "Renewable energy", phonetic: "/rɪˈnjuːəbl ˈenədʒi/", meaning: "Năng lượng tái tạo" },
                { word: "Footprint", phonetic: "/ˈfʊtprɪnt/", meaning: "Dấu chân (sinh thái, carbon)" },
                { word: "Biodegradable", phonetic: "/ˌbaɪəʊdɪˈɡreɪdəbl/", meaning: "Có thể phân hủy sinh học" }
            ],
            quiz: [
                {
                    question: "Solar and wind power are popular forms of __________.",
                    options: ["renewable energy", "fossil fuels", "coal", "nuclear waste"],
                    answer: 0
                },
                {
                    question: "Using __________ packaging helps reduce plastic pollution in oceans.",
                    options: ["biodegradable", "toxic", "plastic", "artificial"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u4",
            title: "Unit 4: Urbanisation",
            description: "Chủ đề Đô thị hóa, sự phát triển thành phố và các vấn đề đô thị.",
            vocab: [
                { word: "Urbanisation", phonetic: "/ˌɜːbənaɪˈzeɪʃn/", meaning: "Quá trình đô thị hóa" },
                { word: "Migration", phonetic: "/maɪˈɡreɪʃn/", meaning: "Sự di cư" },
                { word: "Infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə(r)/", meaning: "Cơ sở hạ tầng" },
                { word: "Overcrowded", phonetic: "/ˌəʊvəˈkraʊdɪd/", meaning: "Quá tải, đông đúc" }
            ],
            quiz: [
                {
                    question: "Rapid __________ leads to the movement of millions of people from rural to urban areas.",
                    options: ["urbanisation", "globalization", "industrialization", "education"],
                    answer: 0
                },
                {
                    question: "Many big cities suffer from traffic jams because their __________ is outdated.",
                    options: ["infrastructure", "population", "atmosphere", "landscape"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u5",
            title: "Unit 5: The World of Work",
            description: "Chủ đề Thế giới việc làm, kỹ năng phỏng vấn và xu hướng nghề nghiệp mới.",
            vocab: [
                { word: "Employment", phonetic: "/ɪmˈplɔɪmənt/", meaning: "Việc làm, sự tuyển dụng" },
                { word: "Candidate", phonetic: "/ˈkændɪdət/", meaning: "Ứng viên" },
                { word: "Qualification", phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "Bằng cấp, chuyên môn" },
                { word: "Interpersonal skills", phonetic: "/ˌɪntəˈpɜːsənl skɪlz/", meaning: "Kỹ năng giao tiếp ứng xử" }
            ],
            quiz: [
                {
                    question: "All __________ for this position are required to submit their CVs in English.",
                    options: ["candidates", "employers", "interviewers", "bosses"],
                    answer: 0
                },
                {
                    question: "Good __________ are essential for working effectively in a multicultural team.",
                    options: ["interpersonal skills", "manual skills", "bad habits", "weaknesses"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u6",
            title: "Unit 6: Artificial Intelligence",
            description: "Chủ đề Trí tuệ nhân tạo (AI), ứng dụng công nghệ và tương lai lao động.",
            vocab: [
                { word: "Artificial Intelligence", phonetic: "/ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns/", meaning: "Trí tuệ nhân tạo (AI)" },
                { word: "Automation", phonetic: "/ˌɔːtəˈmeɪʃn/", meaning: "Sự tự động hóa" },
                { word: "Algorithm", phonetic: "/ˈælɡərɪðəm/", meaning: "Thuật toán" },
                { word: "Revolutionary", phonetic: "/ˌrevəˈluːʃənəri/", meaning: "Mang tính cách mạng" }
            ],
            quiz: [
                {
                    question: "__________ allows machines to learn from experience and perform human-like tasks.",
                    options: ["Artificial Intelligence", "Agriculture", "Architecture", "Astronomy"],
                    answer: 0
                },
                {
                    question: "The rise of __________ in factories has increased production efficiency.",
                    options: ["automation", "unemployment", "poverty", "pollution"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u7",
            title: "Unit 7: Artificial Intelligence in Education",
            description: "Chủ đề Ứng dụng AI trong học tập, giảng dạy và cá nhân hóa giáo dục.",
            vocab: [
                { word: "Personalised", phonetic: "/ˈpɜːsənəlaɪzd/", meaning: "Được cá nhân hóa" },
                { word: "Adaptive learning", phonetic: "/əˈdaptɪv ˈlɜːnɪŋ/", meaning: "Học tập thích ứng" },
                { word: "Virtual assistant", phonetic: "/ˈvɜːtʃuəl əˈsɪstənt/", meaning: "Trợ lý ảo" },
                { word: "Assessment", phonetic: "/əˈsesmənt/", meaning: "Sự đánh giá, kiểm tra" }
            ],
            quiz: [
                {
                    question: "AI-powered tools provide __________ feedback to help students improve their weak points.",
                    options: ["personalised", "general", "delayed", "useless"],
                    answer: 0
                },
                {
                    question: "Continuous __________ throughout the semester helps track student progress accurately.",
                    options: ["assessment", "entertainment", "relaxation", "absence"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u8",
            title: "Unit 8: Lifelong Learning",
            description: "Chủ đề Học tập suốt đời, phát triển bản thân và kỹ năng tự học thời số.",
            vocab: [
                { word: "Lifelong learning", phonetic: "/ˈlaɪflɒŋ ˈlɜːnɪŋ/", meaning: "Học tập suốt đời" },
                { word: "Upskill", phonetic: "/ˌʌpˈskɪl/", meaning: "Nâng cao kỹ năng" },
                { word: "Curiosity", phonetic: "/ˌkjʊəriˈɒsəti/", meaning: "Sự tò mò, ham học hỏi" },
                { word: "Adaptability", phonetic: "/əˌdæptəˈbɪləti/", meaning: "Khả năng thích ứng" }
            ],
            quiz: [
                {
                    question: "In a fast-changing world, __________ is crucial for career advancement.",
                    options: ["lifelong learning", "idleness", "ignorance", "stubbornness"],
                    answer: 0
                },
                {
                    question: "Employees need to __________ regularly to keep up with new technology.",
                    options: ["upskill", "retire", "quit", "delay"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u9",
            title: "Unit 9: Cultural Diversity",
            description: "Chủ đề Đa dạng văn hóa toàn cầu, hội nhập quốc tế và giao lưu văn hóa.",
            vocab: [
                { word: "Cultural diversity", phonetic: "/ˈkʌltʃərəl daɪˈvɜːsəti/", meaning: "Sự đa dạng văn hóa" },
                { word: "Integration", phonetic: "/ˌɪntɪˈɡreɪʃn/", meaning: "Sự hội nhập" },
                { word: "Assimilation", phonetic: "/əˌsɪməˈleɪʃn/", meaning: "Sự đồng hóa văn hóa" },
                { word: "Preserve", phonetic: "/prɪˈzɜːv/", meaning: "Bảo tồn, giữ gìn" }
            ],
            quiz: [
                {
                    question: "Globalisation encourages international __________ while maintaining local identities.",
                    options: ["integration", "isolation", "separation", "conflict"],
                    answer: 0
                },
                {
                    question: "Schools should celebrate __________ to teach students respect for different traditions.",
                    options: ["cultural diversity", "uniformity", "sameness", "isolation"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u10",
            title: "Unit 10: The Future of Money",
            description: "Chủ đề Tương lai của tiền tệ, thanh toán điện tử và kinh tế số.",
            vocab: [
                { word: "Cryptocurrency", phonetic: "/ˈkrɪptəʊkʌrənsi/", meaning: "Tiền mã hóa, tiền ảo" },
                { word: "Cashless society", phonetic: "/ˈkæʃləs səˈsəti/", meaning: "Xã hội không dùng tiền mặt" },
                { word: "Transaction", phonetic: "/trænˈzækʃn/", meaning: "Giao dịch (tài chính)" },
                { word: "Financial literacy", phonetic: "/faɪˈnænʃl ˈlɪtərəsi/", meaning: "Kiến thức tài chính" }
            ],
            quiz: [
                {
                    question: "More and more people are using smartphones for daily financial __________.",
                    options: ["transactions", "punishments", "interruptions", "delays"],
                    answer: 0
                },
                {
                    question: "A __________ relies heavily on digital wallets and electronic banking.",
                    options: ["cashless society", "barter economy", "poverty line", "traditional market"],
                    answer: 0
                }
            ]
        }
    ]
};
