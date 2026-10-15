/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 12 (Chuẩn GDPT 2018 - Global Success)
   ========================================================= */

const grade12Data = {
    title: "Khối 12 - Tiếng Anh THPT",
    description: "Chương trình ôn thi tốt nghiệp THPT và luyện thi Đại học khối D/C03 bám sát SGK Tiếng Anh 12 (Global Success).",
    units: [
        {
            id: "g12-u1",
            title: "Unit 1: Life Stories We Admire",
            description: "Chủ đề Câu chuyện cuộc đời các nhân vật đáng noi gương, ngưỡng mộ.",
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
            title: "Unit 2: A Multicultural World",
            description: "Chủ đề mở ra góc nhìn toàn cảnh về sự giao thoa, đa dạng và hội nhập văn hóa trong kỷ nguyên toàn cầu hóa.",
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
            title: "Unit 5: The World Of Work",
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
            title: "Unit 7: The World Of Mass Media",
            description: "Chủ đề đi sâu vào vai trò, sức ảnh hưởng và sự tiến hóa mạnh mẽ của truyền thông trong kỷ nguyên số.",
            vocab: [
                { word: "Mass media", phonetic: "/mæs ˈmiːdiə/", meaning: "Phương tiện thông tin đại chúng" },
                { word: "Broadcast", phonetic: "/ˈbrɔːdkɑːst/", meaning: "Phát sóng, phát thanh" },
                { word: "Social network", phonetic: "/ˈsəʊʃl ˈnetwɜːk/", meaning: "Mạng xã hội" },
                { word: "Sensational", phonetic: "/senˈseɪʃənl/", meaning: "Gây giật gân, gây chú ý lớn" }
            ],
            quiz: [
                {
                    question: "Television, radio, and newspapers are traditional forms of __________.",
                    options: ["mass media", "social media", "private communication", "telecommunications"],
                    answer: 0
                },
                {
                    question: "Some newspapers publish __________ headlines just to attract more readers.",
                    options: ["sensational", "accurate", "objective", "informative"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u8",
            title: "Unit 8: Wildlife Conservation",
            description: "Chủ đề về sự suy giảm đa dạng sinh học và nguy cơ tuyệt chủng của các loài động thực vật hoang dã.",
            vocab: [
                { word: "Endangered species", phonetic: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/", meaning: "Các loài có nguy cơ tuyệt chủng" },
                { word: "Poaching", phonetic: "/ˈpəʊtʃɪŋ/", meaning: "Săn bắt trộm động vật" },
                { word: "Habitat destruction", phonetic: "/ˈhæbɪtæt dɪˈstrʌkʃn/", meaning: "Sự phá hủy môi trường sống" },
                { word: "Sanctuary", phonetic: "/ˈsæŋktʃuəri/", meaning: "Khu bảo tồn thiên nhiên" }
            ],
            quiz: [
                {
                    question: "Governments should impose stricter punishments on illegal __________ and wildlife trade.",
                    options: ["poaching", "gardening", "farming", "fishing"],
                    answer: 0
                },
                {
                    question: "Many national parks serve as a safe __________ for rare animals.",
                    options: ["sanctuary", "factory", "market", "prison"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u9",
            title: "Unit 9: Career Paths",
            description: "Chủ đề mang tính định hướng, giúp học sinh chuẩn bị tâm thế cho giai đoạn chuyển giao quan trọng sau khi tốt nghiệp THPT.",
            vocab: [
                { word: "Career path", phonetic: "/kəˈrɪə pɑːθ/", meaning: "Con đường sự nghiệp" },
                { word: "Apprenticeship", phonetic: "/əˈprentɪsʃɪp/", meaning: "Chương trình học nghề" },
                { word: "Prospects", phonetic: "/ˈprɒspekts/", meaning: "Triển vọng, viễn cảnh tương lai" },
                { word: "Guidance", phonetic: "/ˈɡaɪdns/", meaning: "Sự hướng dẫn, tư vấn" }
            ],
            quiz: [
                {
                    question: "High school students often need career __________ before making major choices about their future.",
                    options: ["guidance", "pressure", "punishment", "neglect"],
                    answer: 0
                },
                {
                    question: "Choosing a clear __________ helps young people stay focused on their professional goals.",
                    options: ["career path", "dead end", "hobby", "vacation"],
                    answer: 0
                }
            ]
        },
        {
            id: "g12-u10",
            title: "Unit 10: Lifelong Learning",
            description: "Chủ đề khơi dậy tinh thần học tập không dừng lại mà là một hành trình liên tục trong suốt cuộc đời.",
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
        }
    ]
};
