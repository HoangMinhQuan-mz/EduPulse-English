/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 10 (Chuẩn GDPT 2018 - Global Success)
   Cấu trúc bài học phân tầng theo từng Lesson (Getting Started -> Looking Back)
   ========================================================= */

const grade10Data = {
    title: "Khối 10 - Tiếng Anh THPT",
    description: "Chương trình cốt lõi bám sát SGK Tiếng Anh 10 (Global Success) phân chia chi tiết theo từng Lesson chuẩn Bộ Giáo Dục.",
    units: [
        {
            id: "g10-u1",
            title: "Unit 1: Family Life",
            description: "Chủ đề Cuộc sống Gia đình, việc nhà và sự phân chia công việc giữa các thành viên.",
            lessons: [
                {
                    id: "u1-getting-started",
                    title: "Getting Started",
                    subtitle: "Household chores - Từ vựng & Hội thoại mở đầu",
                    theory: "Phần mở đầu xoay quanh cuộc trò chuyện về việc nhà trong gia đình Nam. Các em làm quen với bối cảnh và từ vựng cơ bản về phân công công việc gia đình.",
                    vocab: [
                        { word: "Household chores", phonetic: "/ˈhaʊshəʊld tʃɔːz/", meaning: "Việc nhà" },
                        { word: "Routine", phonetic: "/ruːˈtiːn/", meaning: "Thói quen hàng ngày" }
                    ],
                    quiz: [
                        { question: "My mother usually takes responsibility for doing the __________ in our house.", options: ["homework", "housework", "business", "job"], answer: 1 }
                    ]
                },
                {
                    id: "u1-language",
                    title: "Language",
                    subtitle: "Pronunciation (/bl/, /cl/) & Grammar (Present Simple vs Present Continuous)",
                    theory: "1. Phát âm: Nhận biết các cụm phụ âm đầu /bl/ và /cl/.\n2. Ngữ pháp: Phân biệt thì Hiện tại đơn (diễn tả thói quen, lặp đi lặp lại) và Hiện tại tiếp diễn (diễn tả hành động đang diễn ra tại thời điểm nói).",
                    vocab: [
                        { word: "Breadwinner", phonetic: "/ˈbredwɪnə(r)/", meaning: "Trụ cột gia đình" },
                        { word: "Homemaker", phonetic: "/ˈhəʊmmeɪkə(r)/", meaning: "Người nội trợ" }
                    ],
                    quiz: [
                        { question: "He is the main __________ of the family, working hard to support his wife and children.", options: ["homemaker", "breadwinner", "househusband", "worker"], answer: 1 },
                        { question: "Look! My sister __________ the dishes in the kitchen.", options: ["washes", "is washing", "washed", "has washed"], answer: 1 }
                    ]
                },
                {
                    id: "u1-reading",
                    title: "Reading",
                    subtitle: "Benefits of Doing Housework for Children",
                    theory: "Bài đọc tìm hiểu về những lợi ích thiết thực khi trẻ em tham gia làm việc nhà: rèn luyện tính tự lập, kỹ năng sống và trách nhiệm gia đình.",
                    vocab: [
                        { word: "Life skills", phonetic: "/ˈlaɪf skɪlz/", meaning: "Kỹ năng sống" },
                        { word: "Gratitude", phonetic: "/ˈɡrætɪtjuːd/", meaning: "Lòng biết ơn" }
                    ],
                    quiz: [
                        { question: "Doing housework helps children learn to take __________ for their actions.", options: ["responsibility", "response", "responsible", "responsibly"], answer: 0 }
                    ]
                },
                {
                    id: "u1-speaking",
                    title: "Speaking",
                    subtitle: "Talking About Family Life and Chores",
                    theory: "Luyện tập diễn đạt ý kiến, sự đồng ý hoặc không đồng ý về phân chia việc nhà giữa bố mẹ và con cái.",
                    vocab: [
                        { word: "Split", phonetic: "/splɪt/", meaning: "Phân chia, chia sẻ" },
                        { word: "Equally", phonetic: "/ˈiːkwəli/", meaning: "Một cách công bằng, bình đẳng" }
                    ],
                    quiz: [
                        { question: "In modern families, housework should be split __________ among members.", options: ["equally", "equal", "equality", "equalize"], answer: 0 }
                    ]
                },
                {
                    id: "u1-listening",
                    title: "Listening",
                    subtitle: "Family Routines in Different Families",
                    theory: "Luyện nghe chọn lọc thông tin chi tiết về thói quen sinh hoạt và lịch phân công việc nhà của các gia đình.",
                    vocab: [
                        { word: "Heavy lifting", phonetic: "/ˌhevi ˈlɪftɪŋ/", meaning: "Việc nặng nhọc" },
                        { word: "Iron", phonetic: "/ˈaɪən/", meaning: "Là, ủi (quần áo)" }
                    ],
                    quiz: [
                        { question: "Who usually does the heavy lifting in most traditional families?", options: ["The mother", "The father", "The children", "The grandmother"], answer: 1 }
                    ]
                },
                {
                    id: "u1-writing",
                    title: "Writing",
                    subtitle: "Writing About Family Routines",
                    theory: "Hướng dẫn bố cục một đoạn văn ngắn (100 - 120 từ) chia sẻ về các thói quen sinh hoạt và phân công việc nhà trong gia đình bạn.",
                    vocab: [
                        { word: "Bonding", phonetic: "/ˈbɒndɪŋ/", meaning: "Sự gắn kết" },
                        { word: "Strengthen", phonetic: "/ˈstreŋθn/", meaning: "Củng cố, làm mạnh thêm" }
                    ],
                    quiz: [
                        { question: "Spending time together on weekends helps __________ family bonds.", options: ["strengthen", "weak", "damage", "destroy"], answer: 0 }
                    ]
                },
                {
                    id: "u1-communication",
                    title: "Communication and Culture",
                    subtitle: "Family Values Across Cultures",
                    theory: "Tìm hiểu sự khác biệt và nét đẹp trong giá trị gia đình giữa văn hóa Việt Nam và các nước phương Tây.",
                    vocab: [
                        { word: "Cultural values", phonetic: "/ˈkʌltʃərəl ˈvæljuːz/", meaning: "Giá trị văn hóa" },
                        { word: "Respect", phonetic: "/rɪˈspekt/", meaning: "Sự tôn trọng" }
                    ],
                    quiz: [
                        { question: "Children in Asia are taught to show deep __________ to their elders.", options: ["respect", "dislike", "fear", "hatred"], answer: 0 }
                    ]
                },
                {
                    id: "u1-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Review Vocabulary, Grammar & Mini Project",
                    theory: "Củng cố lại toàn bộ từ vựng và cấu trúc thì Hiện tại đơn / Hiện tại tiếp diễn của Unit 1. Đề xuất ý tưởng cho dự án góc gia đình.",
                    vocab: [
                        { word: "Review", phonetic: "/rɪˈvjuː/", meaning: "Ôn tập" }
                    ],
                    quiz: [
                        { question: "Which tense is used for permanent truths and daily habits?", options: ["Present Simple", "Present Continuous", "Past Simple", "Future Simple"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u2",
            title: "Unit 2: Humans And The Environment",
            description: "Chủ đề Con người và Môi trường, lối sống xanh và bảo vệ thiên nhiên.",
            lessons: [
                {
                    id: "u2-getting-started",
                    title: "Getting Started",
                    subtitle: "Go Green Club - Lối sống xanh",
                    theory: "Mở đầu với cuộc trò chuyện về CLB Sống Xanh, thảo luận về tác hại của rác thải nhựa và các biện pháp bảo vệ môi trường trường học.",
                    vocab: [
                        { word: "Eco-friendly", phonetic: "/ˌiːkəʊ ˈfrendli/", meaning: "Thân thiện với môi trường" },
                        { word: "Green lifestyle", phonetic: "/ɡriːn ˈlaɪfstaɪl/", meaning: "Lối sống xanh" }
                    ],
                    quiz: [
                        { question: "We should buy __________ products to protect our environment.", options: ["toxic", "harmful", "eco-friendly", "expensive"], answer: 2 }
                    ]
                },
                {
                    id: "u2-language",
                    title: "Language",
                    subtitle: "Pronunciation (/pr/, /tr/) & Grammar (Will vs Be going to / Passive voice)",
                    theory: "1. Phát âm: Nhận biết âm /pr/ và /tr/.\n2. Ngữ pháp: Phân biệt 'Will' (dự đoán/quyết định bộc phát) và 'Be going to' (kế hoạch có sẵn); Ôn tập câu bị động cơ bản.",
                    vocab: [
                        { word: "Carbon footprint", phonetic: "/ˌkɑːbən ˈfʊtprɪnt/", meaning: "Dấu chân carbon" },
                        { word: "Adopt", phonetic: "/əˈdɒpt/", meaning: "Thực hiện, áp dụng (lối sống)" }
                    ],
                    quiz: [
                        { question: "Look at those dark clouds! It __________ rain soon.", options: ["will", "is going to", "rains", "is raining"], answer: 1 },
                        { question: "Using reusable bags is a great way to reduce your carbon __________.", options: ["footprint", "handprint", "waste", "garbage"], answer: 0 }
                    ]
                },
                {
                    id: "u2-reading",
                    title: "Reading",
                    subtitle: "A Green Organisation",
                    theory: "Bài đọc giới thiệu về hoạt động của các tổ chức bảo vệ môi trường và những việc cá nhân có thể làm để giảm dấu chân carbon.",
                    vocab: [
                        { word: "Recycle", phonetic: "/ˌriːˈsaɪkl/", meaning: "Tái chế" },
                        { word: "Single-use", phonetic: "/ˌsɪŋɡl ˈjuːs/", meaning: "Dùng một lần" }
                    ],
                    quiz: [
                        { question: "To protect nature, we should reduce the use of __________ plastic items.", options: ["single-use", "reusable", "durable", "natural"], answer: 0 }
                    ]
                },
                {
                    id: "u2-speaking",
                    title: "Speaking",
                    subtitle: "Ideas for a Green Lifestyle",
                    theory: "Thảo luận và đưa ra lời khuyên về các thói quen tốt như tiết kiệm điện, đi xe đạp hoặc phân loại rác.",
                    vocab: [
                        { word: "Sort", phonetic: "/sɔːt/", meaning: "Phân loại (rác)" },
                        { word: "Appliances", phonetic: "/əˈplaɪənsɪz/", meaning: "Thiết bị điện gia dụng" }
                    ],
                    quiz: [
                        { question: "Remember to turn off electrical __________ when leaving the room.", options: ["appliances", "tools", "machines", "furniture"], answer: 0 }
                    ]
                },
                {
                    id: "u2-listening",
                    title: "Listening",
                    subtitle: "School Green Campaign",
                    theory: "Nghe thông tin về sự kiện chiến dịch phủ xanh trường học và các hoạt động thu gom tái chế của học sinh.",
                    vocab: [
                        { word: "Campaign", phonetic: "/kæmˈpeɪn/", meaning: "Chiến dịch" },
                        { word: "Litter", phonetic: "/ˈlɪtə(r)/", meaning: "Rác thải vứt bừa bãi" }
                    ],
                    quiz: [
                        { question: "Students were asked not to drop __________ in the schoolyard.", options: ["litter", "plants", "trees", "water"], answer: 0 }
                    ]
                },
                {
                    id: "u2-writing",
                    title: "Writing",
                    subtitle: "Writing About Green Events",
                    theory: "Hướng dẫn kĩ năng viết bài báo cáo ngắn hoặc đoạn văn mô tả một hoạt động/sự kiện môi trường đã tham gia.",
                    vocab: [
                        { word: "Organise", phonetic: "/ˈɔːɡənaɪz/", meaning: "Tổ chức" },
                        { word: "Participate", phonetic: "/pɑːˈtɪsɪpeɪt/", meaning: "Tham gia" }
                    ],
                    quiz: [
                        { question: "Many students volunteered to __________ in the beach cleanup event.", options: ["participate", "take", "hold", "make"], answer: 0 }
                    ]
                },
                {
                    id: "u2-communication",
                    title: "Communication and Culture",
                    subtitle: "Organic Food & Living Green in Other Countries",
                    theory: "Mở rộng hiểu biết về xu hướng sử dụng thực phẩm hữu cơ (organic) và các phong trào sống xanh trên toàn cầu.",
                    vocab: [
                        { word: "Organic", phonetic: "/ɔːˈɡænɪk/", meaning: "Hữu cơ" },
                        { word: "Chemical", phonetic: "/ˈkemɪkl/", meaning: "Hóa chất" }
                    ],
                    quiz: [
                        { question: "Organic food is produced without using harmful __________.", options: ["chemicals", "water", "soil", "sunlight"], answer: 0 }
                    ]
                },
                {
                    id: "u2-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 2 Review & Green School Project",
                    theory: "Tổng hợp kiến thức ngữ pháp (will/be going to, passive voice) và trình bày dự án xanh trường học.",
                    vocab: [
                        { word: "Preserve", phonetic: "/prɪˈzɜːv/", meaning: "Bảo tồn" }
                    ],
                    quiz: [
                        { question: "The environmental campaign __________ by the youth union next week.", options: ["will be launched", "launched", "launches", "was launching"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u3",
            title: "Unit 3: Music",
            description: "Chủ đề Âm nhạc, các thể loại nhạc và các cuộc thi âm nhạc.",
            lessons: [
                {
                    id: "u3-getting-started",
                    title: "Getting Started",
                    subtitle: "A Music Show - Thảo luận về âm nhạc",
                    theory: "Cuộc trò chuyện giữa học sinh về chương trình âm nhạc thực tế và ca sĩ yêu thích.",
                    vocab: [
                        { word: "Genre", phonetic: "/ˈʒɒnrə/", meaning: "Thể loại âm nhạc" },
                        { word: "Talent show", phonetic: "/ˈtælənt ʃəʊ/", meaning: "Cuộc thi tìm kiếm tài năng" }
                    ],
                    quiz: [
                        { question: "Pop and rock are two different musical __________.", options: ["instruments", "genres", "singers", "concerts"], answer: 1 }
                    ]
                },
                {
                    id: "u3-language",
                    title: "Language",
                    subtitle: "Pronunciation (/est/, /ant/) & Grammar (Compound sentences / To-infinitive & Bare infinitive)",
                    theory: "1. Phát âm: Các đuôi âm /est/ và /ant/.\n2. Ngữ pháp: Câu ghép dùng liên từ (and, or, but, so); Động từ đi kèm To-V hoặc V-nguyên thể.",
                    vocab: [
                        { word: "Audition", phonetic: "/ɔːˈdɪʃn/", meaning: "Buổi thử giọng" },
                        { word: "Melody", phonetic: "/ˈmelədi/", meaning: "Giai điệu" }
                    ],
                    quiz: [
                        { question: "Her parents let her __________ part in the national singing contest.", options: ["take", "to take", "taking", "took"], answer: 0 },
                        { question: "She decided __________ for the music competition.", options: ["to sign up", "sign up", "signing up", "signed up"], answer: 0 }
                    ]
                },
                {
                    id: "u3-reading",
                    title: "Reading",
                    subtitle: "Traditional Music - Quan Ho Singing",
                    theory: "Tìm hiểu về Hát Quan Họ Bắc Ninh - di sản văn hóa phi vật thể của Việt Nam.",
                    vocab: [
                        { word: "Folk music", phonetic: "/ˈfəʊk mjuːzɪk/", meaning: "Nhạc dân gian" },
                        { word: "Perform", phonetic: "/pəˈfɔːm/", meaning: "Biểu diễn" }
                    ],
                    quiz: [
                        { question: "Quan Ho singing is a famous form of Vietnamese __________ music.", options: ["folk", "pop", "rock", "jazz"], answer: 0 }
                    ]
                },
                {
                    id: "u3-speaking",
                    title: "Speaking",
                    subtitle: "Talking About A Favorite Musician or Band",
                    theory: "Luyện tập giới thiệu về một ca sĩ, nhạc sĩ hoặc nhóm nhạc mà bạn thần tượng.",
                    vocab: [
                        { word: "Passionate", phonetic: "/ˈpæʃənət/", meaning: "Đam mê" },
                        { word: "Hit song", phonetic: "/hɪt sɒŋ/", meaning: "Bài hát nổi tiếng/Hit" }
                    ],
                    quiz: [
                        { question: "He has a great __________ for writing inspiring songs.", options: ["passion", "passionate", "passionately", "passive"], answer: 0 }
                    ]
                },
                {
                    id: "u3-listening",
                    title: "Listening",
                    subtitle: "An Interview With A Young Singer",
                    theory: "Nghe bài phỏng vấn một ca sĩ trẻ về chặng đường chinh phục ước mơ âm nhạc.",
                    vocab: [
                        { word: "Inspirational", phonetic: "/ˌɪnspəˈreɪʃənl/", meaning: "Truyền cảm hứng" },
                        { word: "Release", phonetic: "/rɪˈliːs/", meaning: "Phát hành (album, bài hát)" }
                    ],
                    quiz: [
                        { question: "The young artist plans to __________ his new album next month.", options: ["release", "buy", "destroy", "hide"], answer: 0 }
                    ]
                },
                {
                    id: "u3-writing",
                    title: "Writing",
                    subtitle: "Writing A Blog Post About A Music Event",
                    theory: "Hướng dẫn kĩ năng viết bài Blog cá nhân chia sẻ trải nghiệm tham gia một buổi hòa nhạc.",
                    vocab: [
                        { word: "Atmosphere", phonetic: "/ˈætməsfɪə(r)/", meaning: "Bầu không khí" },
                        { word: "Enthusiastic", phonetic: "/ɪnˌθjuːziˈæstɪk/", meaning: "Nhiệt huyết, hào hứng" }
                    ],
                    quiz: [
                        { question: "The concert __________ was full of energy and excitement.", options: ["atmosphere", "weather", "climate", "nature"], answer: 0 }
                    ]
                },
                {
                    id: "u3-communication",
                    title: "Communication and Culture",
                    subtitle: "Music Competitions Around The World",
                    theory: "Khám phá các cuộc thi âm nhạc nổi tiếng toàn cầu như American Idol, Eurovision...",
                    vocab: [
                        { word: "Contestant", phonetic: "/kənˈtestənt/", meaning: "Thí sinh" },
                        { word: "Phenomenon", phonetic: "/fəˈnɒmɪnən/", meaning: "Hiện tượng" }
                    ],
                    quiz: [
                        { question: "Thousands of __________ applied to join the national talent show.", options: ["contestants", "judges", "hosts", "viewers"], answer: 0 }
                    ]
                },
                {
                    id: "u3-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 3 Review & Music Festival Project",
                    theory: "Ôn tập tổng hợp ngữ pháp To-V / V-bare và lập kế hoạch tổ chức ngày hội âm nhạc trường.",
                    vocab: [
                        { word: "Rhythm", phonetic: "/ˈrɪðəm/", meaning: "Nhịp điệu" }
                    ],
                    quiz: [
                        { question: "She has a great sense of __________ when dancing to music.", options: ["rhythm", "melody", "song", "band"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u4",
            title: "Unit 4: For A Better Community",
            description: "Chủ đề Hoạt động Tình nguyện và công tác phát triển cộng đồng.",
            lessons: [
                {
                    id: "u4-getting-started",
                    title: "Getting Started",
                    subtitle: "Volunteer Work - Hoạt động vì cộng đồng",
                    theory: "Giới thiệu các hình thức hoạt động tình nguyện phổ biến của học sinh THPT.",
                    vocab: [
                        { word: "Volunteer", phonetic: "/ˌvɒlənˈtɪə(r)/", meaning: "Tình nguyện viên" },
                        { word: "Community service", phonetic: "/kəˈmjuːnəti ˈsɜːvɪs/", meaning: "Công tác cộng đồng" }
                    ],
                    quiz: [
                        { question: "Participating in __________ helps teenagers develop soft skills.", options: ["community service", "computer games", "heavy work", "exams"], answer: 0 }
                    ]
                },
                {
                    id: "u4-language",
                    title: "Language",
                    subtitle: "Pronunciation (/nd/, /ŋ/) & Grammar (Past Simple vs Past Continuous with When/While)",
                    theory: "1. Phát âm: Các cụm phụ âm /nd/ và /ŋ/.\n2. Ngữ pháp: Kết hợp thì Quá khứ đơn và Quá khứ tiếp diễn với liên từ When và While.",
                    vocab: [
                        { word: "Donate", phonetic: "/dəʊˈneɪt/", meaning: "Quyên góp" },
                        { word: "Non-profit", phonetic: "/ˌnɒn ˈprɒfɪt/", meaning: "Phi lợi nhuận" }
                    ],
                    quiz: [
                        { question: "While we __________ old books, it started to rain heavily.", options: ["were sorting", "sorted", "are sorting", "sort"], answer: 0 },
                        { question: "Many students __________ books and clothes to poor children last week.", options: ["donated", "donate", "are donating", "were donating"], answer: 0 }
                    ]
                },
                {
                    id: "u4-reading",
                    title: "Reading",
                    subtitle: "Volunteering in the Local Area",
                    theory: "Tìm hiểu ý nghĩa của các dự án tình nguyện địa phương như dạy học miễn phí, dọn dẹp vệ sinh.",
                    vocab: [
                        { word: "Disadvantaged", phonetic: "/ˌdɪsədˈvɑːntɪdʒd/", meaning: "Thiệt thòi, hoàn cảnh khó khăn" },
                        { word: "Make a difference", phonetic: "/meɪk ə ˈdɪfrəns/", meaning: "Tạo sự thay đổi tích cực" }
                    ],
                    quiz: [
                        { question: "Volunteers work hard to help __________ children in rural areas.", options: ["disadvantaged", "wealthy", "rich", "famous"], answer: 0 }
                    ]
                },
                {
                    id: "u4-speaking",
                    title: "Speaking",
                    subtitle: "Benefits of Volunteer Work",
                    theory: "Thảo luận về những bài học và kỹ năng gặt hái được từ hoạt động tình nguyện.",
                    vocab: [
                        { word: "Self-confidence", phonetic: "/ˌself ˈkɒnfɪdəns/", meaning: "Sự tự tin" },
                        { word: "Empathy", phonetic: "/ˈempəθi/", meaning: "Sự đồng cảm" }
                    ],
                    quiz: [
                        { question: "Helping others develops __________ and kindness in young people.", options: ["empathy", "anger", "selfishness", "greed"], answer: 0 }
                    ]
                },
                {
                    id: "u4-listening",
                    title: "Listening",
                    subtitle: "A Local Volunteer Project",
                    theory: "Luyện nghe chọn lọc chi tiết bài phỏng vấn đại diện một tổ chức từ thiện.",
                    vocab: [
                        { word: "Orphanage", phonetic: "/ˈɔːfənɪdʒ/", meaning: "Trại trẻ mồ côi" },
                        { word: "Raise funds", phonetic: "/reɪz fʌndz/", meaning: "Gây quỹ" }
                    ],
                    quiz: [
                        { question: "The club organized a fair to __________ for poor patients.", options: ["raise funds", "make money", "spend cash", "borrow loans"], answer: 0 }
                    ]
                },
                {
                    id: "u4-writing",
                    title: "Writing",
                    subtitle: "Writing An Application Letter For Volunteer Work",
                    theory: "Hướng dẫn cấu trúc một lá thư xin làm tình nguyện viên đầy đủ và lịch sự.",
                    vocab: [
                        { word: "Application letter", phonetic: "/ˌæplɪˈkeɪʃn ˈletə(r)/", meaning: "Thư xin việc/tình nguyện" },
                        { word: "Reliable", phonetic: "/rɪˈlaɪəbl/", meaning: "Đáng tin cậy" }
                    ],
                    quiz: [
                        { question: "In an application letter, you should state your skills and __________.", options: ["experiences", "toys", "friends", "secrets"], answer: 0 }
                    ]
                },
                {
                    id: "u4-communication",
                    title: "Communication and Culture",
                    subtitle: "International Volunteer Day",
                    theory: "Tìm hiểu về Ngày Tình nguyện Quốc tế và các tổ chức tình nguyện toàn cầu.",
                    vocab: [
                        { word: "Global network", phonetic: "/ˈɡləʊbl ˈnetwɜːk/", meaning: "Mạng lưới toàn cầu" }
                    ],
                    quiz: [
                        { question: "International Volunteer Day is celebrated on __________ December.", options: ["5th", "1st", "10th", "25th"], answer: 0 }
                    ]
                },
                {
                    id: "u4-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 4 Review & Community Project Proposal",
                    theory: "Tổng kết thì Quá khứ đơn/Quá khứ tiếp diễn và lên kế hoạch dự án tình nguyện lớp.",
                    vocab: [
                        { word: "Contribution", phonetic: "/ˌkɒntrɪˈbjuːʃn/", meaning: "Sự đóng góp" }
                    ],
                    quiz: [
                        { question: "We appreciate your valuable __________ to our charity campaign.", options: ["contribution", "destruction", "neglect", "refusal"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u5",
            title: "Unit 5: Inventions",
            description: "Chủ đề Các phát minh công nghệ và ứng dụng trong đời sống.",
            lessons: [
                {
                    id: "u5-getting-started",
                    title: "Getting Started",
                    subtitle: "Useful Inventions - Phát minh hữu ích",
                    theory: "Thảo luận về các phát minh quan trọng trong cuộc sống hiện đại như điện thoại thông minh, máy tính.",
                    vocab: [
                        { word: "Invention", phonetic: "/ɪnˈvenʃn/", meaning: "Phát minh" },
                        { word: "Convenient", phonetic: "/kənˈviːniənt/", meaning: "Tiện lợi" }
                    ],
                    quiz: [
                        { question: "The smartphone is one of the most useful __________ of the 21st century.", options: ["inventions", "inventors", "invent", "inventive"], answer: 0 }
                    ]
                },
                {
                    id: "u5-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in 3-syllable nouns) & Grammar (Present Perfect / Gerunds vs Infinitives)",
                    theory: "1. Trọng âm danh từ 3 âm tiết.\n2. Ngữ pháp: Thì Hiện tại hoàn thành; Cách dùng danh động từ (V-ing) và động từ nguyên thể (To-V) chỉ mục đích.",
                    vocab: [
                        { word: "Device", phonetic: "/dɪˈvaɪs/", meaning: "Thiết bị" },
                        { word: "Durable", phonetic: "/ˈdjʊərəbl/", meaning: "Bền bỉ" }
                    ],
                    quiz: [
                        { question: "Laptops are used for __________ information and studying online.", options: ["storing", "store", "stored", "to store"], answer: 0 },
                        { question: "Scientists __________ many advanced devices since last year.", options: ["have developed", "developed", "develop", "are developing"], answer: 0 }
                    ]
                },
                {
                    id: "u5-reading",
                    title: "Reading",
                    subtitle: "AI and Smart Devices",
                    theory: "Bài đọc về ứng dụng của trí tuệ nhân tạo (AI) và thiết bị thông minh phục vụ học tập.",
                    vocab: [
                        { word: "Artificial intelligence", phonetic: "/ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns/", meaning: "Trí tuệ nhân tạo" },
                        { word: "Automate", phonetic: "/ˈɔːtəmeɪt/", meaning: "Tự động hóa" }
                    ],
                    quiz: [
                        { question: "Smart devices help us __________ many daily tasks quickly.", options: ["automate", "destroy", "slow", "delay"], answer: 0 }
                    ]
                },
                {
                    id: "u5-speaking",
                    title: "Speaking",
                    subtitle: "Talking About Inventions and Their Uses",
                    theory: "Trình bày về công dụng, ưu điểm và nhược điểm của một món đồ công nghệ.",
                    vocab: [
                        { word: "Portable", phonetic: "/ˈpɔːtəbl/", meaning: "Dễ mang theo, di động" },
                        { word: "Versatile", phonetic: "/ˈvɜːsətaɪl/", meaning: "Đa năng" }
                    ],
                    quiz: [
                        { question: "Laptops are very __________ because you can easily carry them anywhere.", options: ["portable", "heavy", "fixed", "immovable"], answer: 0 }
                    ]
                },
                {
                    id: "u5-listening",
                    title: "Listening",
                    subtitle: "Inventions Inspired by Nature",
                    theory: "Nghe về công nghệ mô phỏng sinh học (biomimicry) - các phát minh truyền cảm hứng từ tự nhiên.",
                    vocab: [
                        { word: "Inspire", phonetic: "/ɪnˈspaɪə(r)/", meaning: "Truyền cảm hứng" },
                        { word: "Submarine", phonetic: "/ˌsʌbməˈriːn/", meaning: "Tàu ngầm" }
                    ],
                    quiz: [
                        { question: "The design of airplanes was originally __________ by birds.", options: ["inspired", "stopped", "prevented", "broken"], answer: 0 }
                    ]
                },
                {
                    id: "u5-writing",
                    title: "Writing",
                    subtitle: "Writing About An Invention's Benefits",
                    theory: "Hướng dẫn cấu trúc viết đoạn văn miêu tả lợi ích của một phát minh đối với đời sống.",
                    vocab: [
                        { word: "Benefit", phonetic: "/ˈbenɪfɪt/", meaning: "Lợi ích" },
                        { word: "Drawback", phonetic: "/ˈdrɔːbæk/", meaning: "Hạn chế, nhược điểm" }
                    ],
                    quiz: [
                        { question: "Besides its advantages, using smartphones too much has some __________.", options: ["drawbacks", "benefits", "helps", "pros"], answer: 0 }
                    ]
                },
                {
                    id: "u5-communication",
                    title: "Communication and Culture",
                    subtitle: "Famous Inventors Around The World",
                    theory: "Khám phá các nhà phát minh vĩ đại như Thomas Edison, Alexander Graham Bell...",
                    vocab: [
                        { word: "Inventor", phonetic: "/ɪnˈventə(r)/", meaning: "Nhà phát minh" },
                        { word: "Patent", phonetic: "/ˈpeɪtnt/", meaning: "Bằng sáng chế" }
                    ],
                    quiz: [
                        { question: "Thomas Edison was a world-famous American __________.", options: ["inventor", "invention", "invent", "inventive"], answer: 0 }
                    ]
                },
                {
                    id: "u5-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 5 Review & Ideal Invention Project",
                    theory: "Củng cố thì Hiện tại hoàn thành và thiết kế ý tưởng phát minh tương lai.",
                    vocab: [
                        { word: "Innovative", phonetic: "/ˈɪnəveɪtɪv/", meaning: "Mang tính đổi mới, sáng tạo" }
                    ],
                    quiz: [
                        { question: "This washing machine is very __________; it saves both time and power.", options: ["convenient", "expensive", "heavy", "complex"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u6",
            title: "Unit 6: Gender Equality",
            description: "Chủ đề Bình đẳng giới trong giáo dục, việc làm và xã hội.",
            lessons: [
                {
                    id: "u6-getting-started",
                    title: "Getting Started",
                    subtitle: "Equal Opportunities - Cơ hội bình đẳng",
                    theory: "Mở đầu với cuộc thảo luận về cơ hội học tập và lựa chọn nghề nghiệp không phân biệt nam nữ.",
                    vocab: [
                        { word: "Gender equality", phonetic: "/ˈdʒendə(r) iˈkwɒləti/", meaning: "Bình đẳng giới" },
                        { word: "Opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", meaning: "Cơ hội" }
                    ],
                    quiz: [
                        { question: "Both men and women should be given equal __________ in education.", options: ["opportunities", "problems", "difficulties", "salaries"], answer: 0 }
                    ]
                },
                {
                    id: "u6-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in 2-syllable words) & Grammar (Modals in Passive Voice)",
                    theory: "1. Trọng âm của từ 2 âm tiết.\n2. Ngữ pháp: Câu bị động chứa động từ khuyết thiếu (Modal verbs in Passive voice: should be done, must be given...).",
                    vocab: [
                        { word: "Discrimination", phonetic: "/dɪˌskrɪmɪˈneɪʃn/", meaning: "Sự phân biệt đối xử" },
                        { word: "Eliminate", phonetic: "/ɪˈlɪmɪneɪt/", meaning: "Xóa bỏ, loại bỏ" }
                    ],
                    quiz: [
                        { question: "Gender discrimination should __________ completely in modern society.", options: ["be eliminated", "eliminate", "is eliminated", "eliminating"], answer: 0 }
                    ]
                },
                {
                    id: "u6-reading",
                    title: "Reading",
                    subtitle: "Gender Equality in Employment",
                    theory: "Bài đọc phân tích về tình hình bình đẳng giới trong môi trường lao động và trả lương.",
                    vocab: [
                        { word: "Wage gap", phonetic: "/ˈweɪdʒ ɡæp/", meaning: "Khoảng cách thu nhập" },
                        { word: "Promotion", phonetic: "/prəˈməʊʃn/", meaning: "Sự thăng tiến" }
                    ],
                    quiz: [
                        { question: "Women should have the same rights to career __________ as men.", options: ["promotion", "loss", "refusal", "stop"], answer: 0 }
                    ]
                },
                {
                    id: "u6-speaking",
                    title: "Speaking",
                    subtitle: "Jobs for Men and Women",
                    theory: "Thảo luận bác bỏ định kiến về 'việc nam' và 'việc nữ' trong chọn lựa ngành nghề.",
                    vocab: [
                        { word: "Stereotype", phonetic: "/ˈsteriətaɪp/", meaning: "Định kiến, khuôn mẫu" },
                        { word: "Surgeon", phonetic: "/ˈsɜːdʒən/", meaning: "Bác sĩ phẫu thuật" }
                    ],
                    quiz: [
                        { question: "We must break down traditional gender __________ about career choices.", options: ["stereotypes", "rules", "laws", "agreements"], answer: 0 }
                    ]
                },
                {
                    id: "u6-listening",
                    title: "Listening",
                    subtitle: "First Female Air Force Pilot",
                    theory: "Nghe câu chuyện truyền cảm hứng về nữ phi công quân sự đầu tiên.",
                    vocab: [
                        { word: "Courage", phonetic: "/ˈkʌrɪdʒ/", meaning: "Dũng khí, sự can đảm" },
                        { word: "Force", phonetic: "/fɔːs/", meaning: "Lực lượng" }
                    ],
                    quiz: [
                        { question: "She showed great __________ to overcome all barriers and become a pilot.", options: ["courage", "fear", "weakness", "laziness"], answer: 0 }
                    ]
                },
                {
                    id: "u6-writing",
                    title: "Writing",
                    subtitle: "Writing About An Inspirational Woman",
                    theory: "Hướng dẫn kĩ năng viết bài luận ngắn giới thiệu về một người phụ nữ xuất sắc.",
                    vocab: [
                        { word: "Role model", phonetic: "/ˈrəʊl mɒdl/", meaning: "Hình mẫu lý tưởng" },
                        { word: "Admire", phonetic: "/ədˈmaɪə(r)/", meaning: "Ngưỡng mộ" }
                    ],
                    quiz: [
                        { question: "She is a great __________ for young girls who want to study science.", options: ["role model", "actor", "stranger", "rival"], answer: 0 }
                    ]
                },
                {
                    id: "u6-communication",
                    title: "Communication and Culture",
                    subtitle: "Girls' Education in Developing Countries",
                    theory: "Tìm hiểu thực trạng nâng cao quyền tiếp cận giáo dục cho trẻ em gái ở các nước phát triển.",
                    vocab: [
                        { word: "Literacy rate", phonetic: "/ˈlɪtərəsi reɪt/", meaning: "Tỷ lệ biết chữ" }
                    ],
                    quiz: [
                        { question: "Improving girls' education helps boost the national __________.", options: ["literacy rate", "traffic jam", "pollution", "crime"], answer: 0 }
                    ]
                },
                {
                    id: "u6-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 6 Review & Gender Equality Campaign",
                    theory: "Ôn tập câu bị động với Modal Verbs và thuyết trình dự án tuyên truyền bình đẳng giới.",
                    vocab: [
                        { word: "Treat", phonetic: "/triːt/", meaning: "Đối xử" }
                    ],
                    quiz: [
                        { question: "__________ ensures everyone has the same rights regardless of sex.", options: ["Gender equality", "Gender gap", "Child labor", "Violence"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u7",
            title: "Unit 7: Viet Nam And International Organisations",
            description: "Chủ đề Việt Nam và các tổ chức quốc tế (UN, ASEAN, UNESCO, UNICEF...).",
            lessons: [
                {
                    id: "u7-getting-started",
                    title: "Getting Started",
                    subtitle: "Viet Nam's Integration - Hội nhập quốc tế",
                    theory: "Mở đầu cuộc thảo luận về vai trò thành viên của Việt Nam trong các tổ chức lớn.",
                    vocab: [
                        { word: "Organisation", phonetic: "/ˌɔːɡənaɪˈzeɪʃn/", meaning: "Tổ chức" },
                        { word: "Member", phonetic: "/ˈmembə(r)/", meaning: "Thành viên" }
                    ],
                    quiz: [
                        { question: "Viet Nam has been an active __________ of ASEAN since 1995.", options: ["leader", "member", "guest", "boss"], answer: 1 }
                    ]
                },
                {
                    id: "u7-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in words ending in -ion, -ic) & Grammar (Comparative & Superlative adjectives)",
                    theory: "1. Trọng âm từ có đuôi -ion, -ic.\n2. Ngữ pháp: So sánh hơn và So sánh nhất của tính từ.",
                    vocab: [
                        { word: "Promote", phonetic: "/prəˈməʊt/", meaning: "Thúc đẩy" },
                        { word: "Global", phonetic: "/ˈɡləʊbl/", meaning: "Toàn cầu" }
                    ],
                    quiz: [
                        { question: "This is the __________ international event ever held in our city.", options: ["biggest", "bigger", "big", "more big"], answer: 0 },
                        { question: "International trade helps Viet Nam become __________ prosperous than before.", options: ["more", "most", "as", "the"], answer: 0 }
                    ]
                },
                {
                    id: "u7-reading",
                    title: "Reading",
                    subtitle: "UNICEF Support for Viet Nam",
                    theory: "Bài đọc tìm hiểu về những chương trình hỗ trợ giáo dục và y tế của UNICEF cho trẻ em Việt Nam.",
                    vocab: [
                        { word: "Educational program", phonetic: "/ˌedʒuˈkeɪʃənl ˈprəʊɡræm/", meaning: "Chương trình giáo dục" },
                        { word: "Healthcare", phonetic: "/ˈhelθkeə(r)/", meaning: "Chăm sóc y tế" }
                    ],
                    quiz: [
                        { question: "UNICEF works to protect children's rights and improve their __________.", options: ["healthcare", "wealth", "business", "cars"], answer: 0 }
                    ]
                },
                {
                    id: "u7-speaking",
                    title: "Speaking",
                    subtitle: "Programs for Local Communities",
                    theory: "Thảo luận về lợi ích của các dự án quốc tế đối với sự phát triển địa phương.",
                    vocab: [
                        { word: "Technical support", phonetic: "/ˈteknɪkl səˈpɔːt/", meaning: "Hỗ trợ kỹ thuật" },
                        { word: "Expert", phonetic: "/ˈekspɜːt/", meaning: "Chuyên gia" }
                    ],
                    quiz: [
                        { question: "Foreign __________ helped local farmers apply new technology.", options: ["experts", "strangers", "enemies", "tourists"], answer: 0 }
                    ]
                },
                {
                    id: "u7-listening",
                    title: "Listening",
                    subtitle: "WTO Membership and Economic Growth",
                    theory: "Nghe về những cơ hội kinh tế khi Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO).",
                    vocab: [
                        { word: "Economic growth", phonetic: "/ˌiːkəˈnɒmɪk ɡrəʊθ/", meaning: "Tăng trưởng kinh tế" },
                        { word: "Export", phonetic: "/ˈekspɔːt/", meaning: "Xuất khẩu" }
                    ],
                    quiz: [
                        { question: "Joining WTO helped Viet Nam boost its product __________.", options: ["exports", "imports", "waste", "debts"], answer: 0 }
                    ]
                },
                {
                    id: "u7-writing",
                    title: "Writing",
                    subtitle: "Writing About Viet Nam's Participation in an Organisation",
                    theory: "Hướng dẫn kĩ năng viết đoạn văn giới thiệu đóng góp của Việt Nam cho tổ chức quốc tế.",
                    vocab: [
                        { word: "Commitment", phonetic: "/kəˈmɪtmənt/", meaning: "Cam kết" },
                        { word: "Cooperation", phonetic: "/kəʊˌɒpəˈreɪʃn/", meaning: "Sự hợp tác" }
                    ],
                    quiz: [
                        { question: "International __________ brings mutual benefits to all member nations.", options: ["cooperation", "conflict", "war", "argument"], answer: 0 }
                    ]
                },
                {
                    id: "u7-communication",
                    title: "Communication and Culture",
                    subtitle: "FAO Projects in Viet Nam",
                    theory: "Tìm hiểu các dự án của Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc (FAO) tại Việt Nam.",
                    vocab: [
                        { word: "Agriculture", phonetic: "/ˈæɡrɪkʌltʃə(r)/", meaning: "Nông nghiệp" }
                    ],
                    quiz: [
                        { question: "FAO aims to eliminate hunger and improve sustainable __________.", options: ["agriculture", "industry", "mining", "traffic"], answer: 0 }
                    ]
                },
                {
                    id: "u7-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 7 Review & Poster Competition",
                    theory: "Ôn tập kiến thức so sánh tính từ và thiết kế Poster giới thiệu tổ chức quốc tế.",
                    vocab: [
                        { word: "Partnership", phonetic: "/ˈpɑːtnəʃɪp/", meaning: "Quan hệ đối tác" }
                    ],
                    quiz: [
                        { question: "UNESCO works to __________ peace through international cooperation.", options: ["promote", "prevent", "destroy", "stop"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u8",
            title: "Unit 8: New Ways To Learn",
            description: "Chủ đề Phương pháp học tập mới và ứng dụng công nghệ thông tin trong giáo dục.",
            lessons: [
                {
                    id: "u8-getting-started",
                    title: "Getting Started",
                    subtitle: "Modern Classrooms - Lớp học hiện đại",
                    theory: "Khám phá các thiết bị thông minh như bảng tương tác, máy tính bảng phục vụ học tập.",
                    vocab: [
                        { word: "Platform", phonetic: "/ˈplætfɔːm/", meaning: "Nền tảng học tập" },
                        { word: "Interactive", phonetic: "/ˌɪntərˈæktɪv/", meaning: "Tương tác" }
                    ],
                    quiz: [
                        { question: "__________ classrooms allow students to study anytime and anywhere.", options: ["Virtual", "Traditional", "Wooden", "Crowded"], answer: 0 }
                    ]
                },
                {
                    id: "u8-language",
                    title: "Language",
                    subtitle: "Pronunciation (Stress in 3-syllable adjectives) & Grammar (Relative clauses: Who, Which, That)",
                    theory: "1. Trọng âm tính từ 3 âm tiết.\n2. Ngữ pháp: Mệnh đề quan hệ xác định sử dụng đại từ quan hệ Who, Which, That.",
                    vocab: [
                        { word: "Flexibility", phonetic: "/ˌfleksəˈbɪləti/", meaning: "Sự linh hoạt" },
                        { word: "Virtual", phonetic: "/ˈvɜːtʃuəl/", meaning: "Ảo (lớp học ảo)" }
                    ],
                    quiz: [
                        { question: "The laptop __________ my father bought me is very useful for online learning.", options: ["which", "who", "whom", "whose"], answer: 0 },
                        { question: "The teacher __________ explains the lesson clearly is very popular.", options: ["who", "which", "where", "when"], answer: 0 }
                    ]
                },
                {
                    id: "u8-reading",
                    title: "Reading",
                    subtitle: "Blended Learning",
                    theory: "Bài đọc tìm hiểu mô hình học tập kết hợp (Blended Learning) - kết hợp học trực tiếp và học qua mạng.",
                    vocab: [
                        { word: "Blended learning", phonetic: "/ˌblendɪd ˈlɜːnɪŋ/", meaning: "Học tập kết hợp" },
                        { word: "Self-study", phonetic: "/ˌself ˈstʌdi/", meaning: "Tự học" }
                    ],
                    quiz: [
                        { question: "Blended learning encourages students to develop high __________ skills.", options: ["self-study", "sleeping", "fighting", "gaming"], answer: 0 }
                    ]
                },
                {
                    id: "u8-speaking",
                    title: "Speaking",
                    subtitle: "Online vs Offline Learning",
                    theory: "Thảo luận so sánh ưu điểm và nhược điểm giữa học trực tuyến và học trực tiếp.",
                    vocab: [
                        { word: "Convenience", phonetic: "/kənˈviːniəns/", meaning: "Sự tiện lợi" },
                        { word: "Distraction", phonetic: "/dɪˈstrækʃn/", meaning: "Sự xao nhãng" }
                    ],
                    quiz: [
                        { question: "One main disadvantage of online learning is internet __________.", options: ["distraction", "speed", "benefit", "flexibility"], answer: 0 }
                    ]
                },
                {
                    id: "u8-listening",
                    title: "Listening",
                    subtitle: "Educational Apps for High School Students",
                    theory: "Nghe giới thiệu về các ứng dụng học tập thông minh giúp rèn luyện từ vựng và bài tập.",
                    vocab: [
                        { word: "Download", phonetic: "/ˌdaʊnˈləʊd/", meaning: "Tải về" },
                        { word: "Feature", phonetic: "/ˈfiːtʃə(r)/", meaning: "Tính năng" }
                    ],
                    quiz: [
                        { question: "This app offers many interactive __________ to practice English vocabulary.", options: ["features", "problems", "errors", "bugs"], answer: 0 }
                    ]
                },
                {
                    id: "u8-writing",
                    title: "Writing",
                    subtitle: "Writing About Advantages of Learning Apps",
                    theory: "Hướng dẫn kĩ năng viết đoạn văn phân tích các lợi ích của ứng dụng học tập di động.",
                    vocab: [
                        { word: "Improve", phonetic: "/ɪmˈpruːv/", meaning: "Cải thiện" },
                        { word: "Access", phonetic: "/ˈækses/", meaning: "Truy cập" }
                    ],
                    quiz: [
                        { question: "Learning apps make it easy for students to __________ study materials.", options: ["access", "lose", "destroy", "hide"], answer: 0 }
                    ]
                },
                {
                    id: "u8-communication",
                    title: "Communication and Culture",
                    subtitle: "Learning Styles Around The World",
                    theory: "Khám phá phong cách học tập chủ động của học sinh ở các quốc gia tiên tiến.",
                    vocab: [
                        { word: "Autonomous", phonetic: "/ɔːˈtɒnəməs/", meaning: "Tự chủ" }
                    ],
                    quiz: [
                        { question: "Modern education encourages students to become __________ learners.", options: ["autonomous", "passive", "lazy", "dependent"], answer: 0 }
                    ]
                },
                {
                    id: "u8-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 8 Review & Smart Classroom Project",
                    theory: "Củng cố mệnh đề quan hệ và thuyết trình ý tưởng lớp học thông minh tương lai.",
                    vocab: [
                        { word: "Efficiency", phonetic: "/ɪˈfɪʃnsi/", meaning: "Hiệu quả" }
                    ],
                    quiz: [
                        { question: "Online learning offers great __________ because students study anywhere.", options: ["flexibility", "difficulty", "boredom", "pressure"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u9",
            title: "Unit 9: Protecting The Environment",
            description: "Chủ đề Bảo vệ môi trường sống, hệ sinh thái và động vật hoang dã.",
            lessons: [
                {
                    id: "u9-getting-started",
                    title: "Getting Started",
                    subtitle: "Environmental Threats - Hiểm họa môi trường",
                    theory: "Mở đầu cuộc thảo luận về biến đổi khí hậu, nạn phá rừng và ô nhiễm nguồn nước.",
                    vocab: [
                        { word: "Endangered", phonetic: "/ɪnˈdeɪndʒəd/", meaning: "Có nguy cơ tuyệt chủng" },
                        { word: "Habitat", phonetic: "/ˈhæbɪtæt/", meaning: "Môi trường sống" }
                    ],
                    quiz: [
                        { question: "Deforestation destroys the natural __________ of many wild animals.", options: ["habitat", "factory", "city", "house"], answer: 0 }
                    ]
                },
                {
                    id: "u9-language",
                    title: "Language",
                    subtitle: "Pronunciation (Rhythm in sentences) & Grammar (Reported speech: Statements)",
                    theory: "1. Nhịp điệu và ngữ điệu trong câu.\n2. Ngữ pháp: Câu tường thuật (Reported Speech) dạng câu kể cơ bản (lùi thì, đổi đại từ và từ chỉ thời gian/nơi chốn).",
                    vocab: [
                        { word: "Conservation", phonetic: "/ˌkɒnsəˈveɪʃn/", meaning: "Sự bảo tồn" },
                        { word: "Poaching", phonetic: "/ˈpəʊtʃɪŋ/", meaning: "Nạn săn bắt trộm" }
                    ],
                    quiz: [
                        { question: "He said that they __________ a tree planting campaign the following week.", options: ["would start", "will start", "start", "started"], answer: 0 },
                        { question: "Many species are under threat of becoming __________.", options: ["endangered", "safe", "healthy", "numerous"], answer: 0 }
                    ]
                },
                {
                    id: "u9-reading",
                    title: "Reading",
                    subtitle: "National Parks and Wildlife Protection",
                    theory: "Bài đọc tìm hiểu vai trò của các vườn quốc gia (như Cúc Phương) trong việc bảo tồn động vật quý hiếm.",
                    vocab: [
                        { word: "National park", phonetic: "/ˌnæʃnəl ˈpɑːk/", meaning: "Vườn quốc gia" },
                        { word: "Flora and fauna", phonetic: "/ˈflɔːrə ənd ˈfɔːnə/", meaning: "Thực vật và động vật" }
                    ],
                    quiz: [
                        { question: "National parks are created to protect rare __________.", options: ["flora and fauna", "factories", "cities", "buildings"], answer: 0 }
                    ]
                },
                {
                    id: "u9-speaking",
                    title: "Speaking",
                    subtitle: "Solutions for Environmental Problems",
                    theory: "Thảo luận đưa ra giải pháp khắc phục các vấn đề môi trường địa phương.",
                    vocab: [
                        { word: "Ban", phonetic: "/bæn/", meaning: "Cấm" },
                        { word: "Raise awareness", phonetic: "/reɪz əˈweənəs/", meaning: "Nâng cao nhận thức" }
                    ],
                    quiz: [
                        { question: "The government should __________ illegal hunting of wild animals.", options: ["ban", "allow", "support", "encourage"], answer: 0 }
                    ]
                },
                {
                    id: "u9-listening",
                    title: "Listening",
                    subtitle: "Saving Endangered Animals",
                    theory: "Nghe về nỗ lực cứu hộ và nhân giống bảo tồn động vật nguy cấp.",
                    vocab: [
                        { word: "Extinct", phonetic: "/ɪkˈstɪŋkt/", meaning: "Tuyệt chủng" },
                        { word: "Rescue center", phonetic: "/ˈreskjuː ˈsentə(r)/", meaning: "Trung tâm cứu hộ" }
                    ],
                    quiz: [
                        { question: "If we don't act now, many species will soon become __________.", options: ["extinct", "alive", "safe", "numerous"], answer: 0 }
                    ]
                },
                {
                    id: "u9-writing",
                    title: "Writing",
                    subtitle: "Writing About Environmental Solutions",
                    theory: "Hướng dẫn cấu trúc bài luận đưa ra nguyên nhân và giải pháp bảo vệ tài nguyên.",
                    vocab: [
                        { word: "Measure", phonetic: "/ˈmeʒə(r)/", meaning: "Biện pháp" },
                        { word: "Implement", phonetic: "/ˈɪmplɪment/", meaning: "Thực thi" }
                    ],
                    quiz: [
                        { question: "We need to take immediate __________ to reduce plastic pollution.", options: ["measures", "problems", "dangers", "accidents"], answer: 0 }
                    ]
                },
                {
                    id: "u9-communication",
                    title: "Communication and Culture",
                    subtitle: "World Earth Day",
                    theory: "Tìm hiểu thông điệp và ý nghĩa các hoạt động trong Ngày Trái Đất thế giới.",
                    vocab: [
                        { word: "Ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", meaning: "Hệ sinh thái" }
                    ],
                    quiz: [
                        { question: "Earth Day encourages global actions to restore our __________.", options: ["ecosystems", "factories", "machines", "roads"], answer: 0 }
                    ]
                },
                {
                    id: "u9-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 9 Review & Eco-project Presentation",
                    theory: "Tổng hợp kiến thức câu tường thuật và hoàn thiện bài thuyết trình bảo vệ môi trường.",
                    vocab: [
                        { word: "Biodiversity", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", meaning: "Đa dạng sinh học" }
                    ],
                    quiz: [
                        { question: "Protecting forests helps maintain global __________.", options: ["biodiversity", "traffic", "poverty", "noise"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g10-u10",
            title: "Unit 10: Ecotourism",
            description: "Chủ đề Du lịch sinh thái, du lịch trải nghiệm và phát triển bền vững.",
            lessons: [
                {
                    id: "u10-getting-started",
                    title: "Getting Started",
                    subtitle: "An Eco-tour - Chuyến du lịch sinh thái",
                    theory: "Cuộc thảo luận về chuyến đi trải nghiệm thiên nhiên không gây hại tới môi trường địa phương.",
                    vocab: [
                        { word: "Ecotourism", phonetic: "/ˈiːkəʊtʊərɪzəm/", meaning: "Du lịch sinh thái" },
                        { word: "Sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "Bền vững" }
                    ],
                    quiz: [
                        { question: "__________ helps protect nature while supporting local communities.", options: ["Mass tourism", "Ecotourism", "Industrialization", "Urbanization"], answer: 1 }
                    ]
                },
                {
                    id: "u10-language",
                    title: "Language",
                    subtitle: "Pronunciation (Intonation in questions) & Grammar (Conditional Sentences Type 1 & Type 2)",
                    theory: "1. Ngữ điệu trong câu hỏi Yes/No và Wh-questions.\n2. Ngữ pháp: Phân biệt Câu điều kiện Loại 1 (có thật ở hiện tại/tương lai) và Câu điều kiện Loại 2 (không có thật ở hiện tại).",
                    vocab: [
                        { word: "Destination", phonetic: "/ˌdestɪˈneɪʃn/", meaning: "Điểm đến" },
                        { word: "Impact", phonetic: "/ˈɪmpækt/", meaning: "Tác động, ảnh hưởng" }
                    ],
                    quiz: [
                        { question: "If I were you, I __________ an ecotour instead of a luxury resort trip.", options: ["would choose", "will choose", "choose", "chose"], answer: 0 },
                        { question: "If tourists drop litter, they __________ fined heavily.", options: ["will be", "would be", "were", "are"], answer: 0 }
                    ]
                },
                {
                    id: "u10-reading",
                    title: "Reading",
                    subtitle: "Ecotourism Destinations in Viet Nam",
                    theory: "Bài đọc tìm hiểu các địa điểm du lịch sinh thái nổi tiếng như Phong Nha - Kẻ Bàng, Cần Giờ...",
                    vocab: [
                        { word: "Souvenir", phonetic: "/ˌsuːvəˈnɪə(r)/", meaning: "Quà lưu niệm" },
                        { word: "Craft village", phonetic: "/krɑːft ˈvɪlɪdʒ/", meaning: "Làng nghề thủ công" }
                    ],
                    quiz: [
                        { question: "Buying local __________ supports craft villages and local economy.", options: ["souvenirs", "waste", "trash", "factories"], answer: 0 }
                    ]
                },
                {
                    id: "u10-speaking",
                    title: "Speaking",
                    subtitle: "Do's and Don'ts for Eco-tourists",
                    theory: "Thảo luận về các quy tắc ứng xử văn minh và thân thiện môi trường dành cho khách du lịch.",
                    vocab: [
                        { word: "Respect", phonetic: "/rɪˈspekt/", meaning: "Tôn trọng" },
                        { word: "Disrupt", phonetic: "/dɪsˈrʌpt/", meaning: "Làm gián đoạn, ảnh hưởng" }
                    ],
                    quiz: [
                        { question: "Tourists should not __________ wild animals during their trip.", options: ["disrupt", "protect", "save", "feed"], answer: 0 }
                    ]
                },
                {
                    id: "u10-listening",
                    title: "Listening",
                    subtitle: "A Tour Guide's Announcement",
                    theory: "Nghe hướng dẫn viên du lịch nhắc nhở các lưu ý quan trọng trước khi tham quan khu bảo tồn.",
                    vocab: [
                        { word: "Trail", phonetic: "/treɪl/", meaning: "Đường mòn (trong rừng)" },
                        { word: "Guide", phonetic: "/ɡaɪd/", meaning: "Hướng dẫn viên" }
                    ],
                    quiz: [
                        { question: "Visitors are advised to stay on the walking __________ to avoid getting lost.", options: ["trail", "highway", "road", "street"], answer: 0 }
                    ]
                },
                {
                    id: "u10-writing",
                    title: "Writing",
                    subtitle: "Writing A Travel Brochure for an Eco-tour",
                    theory: "Hướng dẫn kĩ năng thiết kế tờ rơi (brochure) giới thiệu tour du lịch sinh thái.",
                    vocab: [
                        { word: "Brochure", phonetic: "/ˈbrəʊʃə(r)/", meaning: "Tờ rơi quảng cáo" },
                        { word: "Itinerary", phonetic: "/aɪˈtɪnərəri/", meaning: "Lịch trình chuyến đi" }
                    ],
                    quiz: [
                        { question: "A travel brochure should include the trip's detailed __________ and price.", options: ["itinerary", "problem", "fault", "error"], answer: 0 }
                    ]
                },
                {
                    id: "u10-communication",
                    title: "Communication and Culture",
                    subtitle: "Sustainable Tourism Trends",
                    theory: "Khám phá xu hướng du lịch bền vững bảo vệ văn hóa bản địa trên thế giới.",
                    vocab: [
                        { word: "Benefit", phonetic: "/ˈbenɪfɪt/", meaning: "Lợi ích" }
                    ],
                    quiz: [
                        { question: "Sustainable tourism aims to protect the natural environment and local __________.", options: ["culture", "industry", "pollution", "factories"], answer: 0 }
                    ]
                },
                {
                    id: "u10-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 10 Review & Eco-tour Presentation",
                    theory: "Củng cố câu điều kiện loại 1 & 2 và thuyết trình dự án quảng bá du lịch sinh thái.",
                    vocab: [
                        { word: "Minimize", phonetic: "/ˈmɪnɪmaɪz/", meaning: "Giảm thiểu" }
                    ],
                    quiz: [
                        { question: "We should minimize negative __________ on the environment when traveling.", options: ["impacts", "benefits", "advantages", "improvements"], answer: 0 }
                    ]
                }
            ]
        }
    ]
};
