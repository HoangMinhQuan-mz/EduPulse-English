/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 12 (Chuẩn GDPT 2018 - Global Success)
   Cấu trúc bài học phân tầng theo từng Lesson (Getting Started -> Looking Back)
   ========================================================= */

const grade12Data = {
    title: "Khối 12 - Tiếng Anh THPT",
    description: "Chương trình ôn thi tốt nghiệp THPT và luyện thi Đại học khối D/C03 bám sát SGK Tiếng Anh 12 (Global Success).",
    units: [
        {
            id: "g12-u1",
            title: "Unit 1: Life Stories We Admire",
            description: "Chủ đề Câu chuyện cuộc đời các nhân vật vĩ đại và danh nhân đáng ngưỡng mộ.",
            lessons: [
                {
                    id: "u1-getting-started",
                    title: "Getting Started",
                    subtitle: "Admired Figures - Những nhân vật được ngưỡng mộ",
                    theory: "Mở đầu với cuộc trò chuyện về tiểu sử và những cống hiến to lớn của các danh nhân lịch sử, nhà khoa học.",
                    vocab: [
                        { word: "Biography", phonetic: "/baɪˈɒɡrəfi/", meaning: "Tiểu sử" },
                        { word: "Dedication", phonetic: "/ˌdedɪˈkeɪʃn/", meaning: "Sự cống hiến, tận tụy" }
                    ],
                    quiz: [
                        { question: "Reading the __________ of great scientists can motivate young people to pursue research.", options: ["biography", "novel", "fiction", "comic"], answer: 0 }
                    ]
                },
                {
                    id: "u1-language",
                    title: "Language",
                    subtitle: "Pronunciation (Word stress in four-syllable words) & Grammar (Past simple vs Past continuous / Past perfect)",
                    theory: "1. Trọng âm trong từ có 4 âm tiết.\n2. Ngữ pháp: Phân biệt các thì quá khứ (Quá khứ đơn, Quá khứ tiếp diễn, Quá khứ hoàn thành).",
                    vocab: [
                        { word: "Inspire", phonetic: "/ɪnˈspaɪə(r)/", meaning: "Truyền cảm hứng" },
                        { word: "Achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "Thành tựu" }
                    ],
                    quiz: [
                        { question: "Her lifelong __________ to medical science has saved thousands of lives.", options: ["dedication", "abandonment", "indifference", "neglect"], answer: 0 },
                        { question: "By the time he came home, his parents __________ dinner.", options: ["had finished", "finished", "have finished", "were finishing"], answer: 0 }
                    ]
                },
                {
                    id: "u1-reading",
                    title: "Reading",
                    subtitle: "A Great Leader's Life Story",
                    theory: "Bài đọc tìm hiểu về cuộc đời và sự nghiệp cách mạng lẫy lừng của Chủ tịch Hồ Chí Minh.",
                    vocab: [
                        { word: "Devotion", phonetic: "/dɪˈvəʊʃn/", meaning: "Lòng tận tụy, sự hihi sinh" },
                        { word: "Revolutionary", phonetic: "/ˌrevəˈluːʃənəri/", meaning: "Nhà cách mạng" }
                    ],
                    quiz: [
                        { question: "He dedicated his entire life to the national __________ struggle.", options: ["revolutionary", "leisure", "commercial", "sport"], answer: 0 }
                    ]
                },
                {
                    id: "u1-speaking",
                    title: "Speaking",
                    subtitle: "Talking About A Famous Person's Achievements",
                    theory: "Luyện tập trình bày và thảo luận về các mốc son trong cuộc đời của một nhân vật nổi tiếng.",
                    vocab: [
                        { word: "Outstanding", phonetic: "/aʊtˈstændɪŋ/", meaning: "Nổi bật, xuất chúng" },
                        { word: "Contribute", phonetic: "/kənˈtrɪbjuːt/", meaning: "Đóng góp" }
                    ],
                    quiz: [
                        { question: "She made __________ contributions to physics and chemistry.", options: ["outstanding", "poor", "weak", "bad"], answer: 0 }
                    ]
                },
                {
                    id: "u1-listening",
                    title: "Listening",
                    subtitle: "An Interview With A Biographer",
                    theory: "Nghe bài phỏng vấn nhà viết tiểu sử về quá trình thu thập tài liệu viết về các danh nhân.",
                    vocab: [
                        { word: "Historical figure", phonetic: "/hɪˈstɒrɪkl ˈfɪɡə(r)/", meaning: "Nhân vật lịch sử" },
                        { word: "Source", phonetic: "/sɔːs/", meaning: "Nguồn tài liệu" }
                    ],
                    quiz: [
                        { question: "Writers must check primary __________ carefully before writing a biography.", options: ["sources", "rumors", "fictions", "jokes"], answer: 0 }
                    ]
                },
                {
                    id: "u1-writing",
                    title: "Writing",
                    subtitle: "Writing A Short Biography",
                    theory: "Hướng dẫn kĩ năng viết tóm tắt tiểu sử một nhân vật lịch sử hoặc khoa học bằng tiếng Anh.",
                    vocab: [
                        { word: "Chronological", phonetic: "/ˌkrɒnəˈlɒdʒɪkl/", meaning: "Theo trình tự thời gian" }
                    ],
                    quiz: [
                        { question: "A biography should present life events in strict __________ order.", options: ["chronological", "random", "messy", "reverse"], answer: 0 }
                    ]
                },
                {
                    id: "u1-communication",
                    title: "Communication and Culture",
                    subtitle: "Icons Around The World",
                    theory: "Khám phá các biểu tượng vĩ đại thay đổi thế giới như Nelson Mandela, Mahatma Gandhi...",
                    vocab: [
                        { word: "Humanitarian", phonetic: "/hjuːˌmænɪˈteəriən/", meaning: "Nhà nhân đạo" }
                    ],
                    quiz: [
                        { question: "Nelson Mandela was a great __________ who fought against apartheid.", options: ["humanitarian", "criminal", "rival", "stranger"], answer: 0 }
                    ]
                },
                {
                    id: "u1-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 1 Review & Biographical Presentation",
                    theory: "Ôn tập tổng hợp các thì quá khứ và thuyết trình dự án về danh nhân ưu tú.",
                    vocab: [
                        { word: "Legacy", phonetic: "/ˈleɡəsi/", meaning: "Di sản" }
                    ],
                    quiz: [
                        { question: "Great leaders leave behind an enduring __________ of peace and freedom.", options: ["legacy", "debt", "loss", "damage"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g12-u2",
            title: "Unit 2: A Multicultural World",
            description: "Chủ đề Thế giới đa văn hóa, sự giao thoa và hội nhập toàn cầu.",
            lessons: [
                {
                    id: "g12-u2",
                    title: "Unit 2: A Multicultural World",
                    description: "Chủ đề Thế giới đa văn hóa, sự giao thoa và hội nhập toàn cầu.",
                    lessons: [
                        {
                            id: "u2-getting-started",
                            title: "Getting Started",
                            subtitle: "Cultural Exchange - Giao lưu văn hóa toàn cầu",
                            theory: "Mở đầu với cuộc trò chuyện về trải nghiệm sống và học tập trong môi trường đa văn hóa.",
                            vocab: [
                                { word: "Cultural diversity", phonetic: "/ˈkʌltʃərəl daɪˈvɜːsəti/", meaning: "Sự đa dạng văn hóa" },
                                { word: "Integration", phonetic: "/ˌɪntɪˈɡreɪʃn/", meaning: "Sự hội nhập" }
                            ],
                            quiz: [
                                { question: "Globalisation encourages international __________ while maintaining local identities.", options: ["integration", "isolation", "separation", "conflict"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-language",
                            title: "Language",
                            subtitle: "Pronunciation (Weak forms of conjunctions) & Grammar (Articles: a, an, the, zero article)",
                            theory: "1. Dạng yếu của từ nối trong câu.\n2. Ngữ pháp: Cách sử dụng mạo từ (a, an, the) và trường hợp không dùng mạo từ (zero article).",
                            vocab: [
                                { word: "Assimilation", phonetic: "/əˌsɪməˈleɪʃn/", meaning: "Sự đồng hóa văn hóa" },
                                { word: "Preserve", phonetic: "/prɪˈzɜːv/", meaning: "Bảo tồn bản sắc" }
                            ],
                            quiz: [
                                { question: "Schools should celebrate __________ to teach students respect for different traditions.", options: ["cultural diversity", "uniformity", "sameness", "isolation"], answer: 0 },
                                { question: "English has become __________ global language of business and technology.", options: ["the", "a", "an", "Ø"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-reading",
                            title: "Reading",
                            subtitle: "Living in a Multicultural Society",
                            theory: "Bài đọc tìm hiểu những thách thức và cơ hội khi cư trú trong các thành phố đa văn hóa.",
                            vocab: [
                                { word: "Multicultural", phonetic: "/ˌmʌltiˈkʌltʃərəl/", meaning: "Đa văn hóa" },
                                { word: "Custom", phonetic: "/ˈkʌstəm/", meaning: "Phong tục, tập quán" }
                            ],
                            quiz: [
                                { question: "Immigrants often adapt to new local __________ while keeping their roots.", options: ["customs", "laws", "taxes", "debts"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Cultural Differences and Taboos",
                            theory: "Thảo luận về các nét văn hóa ứng xử và điều cấm kỵ ở các quốc gia khác nhau.",
                            vocab: [
                                { word: "Taboo", phonetic: "/təˈbuː/", meaning: "Điều cấm kỵ, kiêng kị" },
                                { word: "Etiquette", phonetic: "/ˈetɪket/", meaning: "Phép xã giao, nghi thức" }
                            ],
                            quiz: [
                                { question: "Knowing local table __________ is essential when traveling abroad.", options: ["etiquette", "waste", "pollution", "traffic"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-listening",
                            title: "Listening",
                            subtitle: "An International Student's Experience",
                            theory: "Nghe chia sẻ thực tế của du học sinh về cú sốc văn hóa và cách hòa nhập.",
                            vocab: [
                                { word: "Culture shock", phonetic: "/ˈkʌltʃə(r) ʃɒk/", meaning: "Sốc văn hóa" },
                                { word: "Adapt", phonetic: "/əˈdæpt/", meaning: "Thích nghi" }
                            ],
                            quiz: [
                                { question: "Many students experience __________ during their first months abroad.", options: ["culture shock", "happiness", "boredom", "relaxation"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-writing",
                            title: "Writing",
                            subtitle: "Writing An Opinion Essay on Globalisation",
                            theory: "Hướng dẫn viết bài luận bày tỏ quan điểm về ưu và nhược điểm của toàn cầu hóa văn hóa.",
                            vocab: [
                                { word: "Perspective", phonetic: "/pəˈspektɪv/", meaning: "Góc nhìn, quan điểm" }
                            ],
                            quiz: [
                                { question: "People from different backgrounds offer unique __________ on global issues.", options: ["perspectives", "errors", "faults", "bugs"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-communication",
                            title: "Communication and Culture",
                            subtitle: "Traditional Costumes Around the World",
                            theory: "Khám phá trang phục truyền thống độc đáo như áo dài Việt Nam, Kimono Nhật Bản.",
                            vocab: [
                                { word: "Costume", phonetic: "/ˈkɒstjuːm/", meaning: "Trang phục truyền thống" }
                            ],
                            quiz: [
                                { question: "Ao Dai is the traditional national __________ of Vietnamese women.", options: ["costume", "food", "music", "sport"], answer: 0 }
                            ]
                        },
                        {
                            id: "u2-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 2 Review & Multicultural Festival Project",
                            theory: "Ôn tập mạo từ và tổ chức ngày hội văn hóa quốc tế.",
                            vocab: [
                                { word: "Identity", phonetic: "/aɪˈdentəti/", meaning: "Bản sắc, tính nhận diện" }
                            ],
                            quiz: [
                                { question: "Global integration should not destroy a nation's unique cultural __________.", options: ["identity", "economy", "industry", "infrastructure"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u3",
            title: "Unit 3: Green Living",
            description: "Chủ đề Lối sống xanh, bảo vệ môi trường và phát triển bền vững.",
            lessons: [
                {
                    id: "u3-getting-started",
                    title: "Getting Started",
                    subtitle: "Green Lifestyle - Lối sống xanh bền vững",
                    theory: "Mở đầu cuộc thảo luận về lối sống tối giản, giảm rác thải nhựa và tiết kiệm năng lượng.",
                    vocab: [
                        { word: "Conservation", phonetic: "/ˌkɒnsəˈveɪʃn/", meaning: "Sự bảo tồn" },
                        { word: "Renewable energy", phonetic: "/rɪˈnjuːəbl ˈenədʒi/", meaning: "Năng lượng tái tạo" }
                    ],
                    quiz: [
                        { question: "Solar and wind power are popular forms of __________.", options: ["renewable energy", "fossil fuels", "coal", "nuclear waste"], answer: 0 }
                    ]
                },
                {
                    id: "u3-language",
                    title: "Language",
                    subtitle: "Pronunciation (Intonation in compound sentences) & Grammar (Relative clauses with relative adverbs: where, when, why)",
                    theory: "1. Ngữ điệu trong câu ghép.\n2. Ngữ pháp: Mệnh đề quan hệ với trạng từ quan hệ (where, when, why).",
                    vocab: [
                        { word: "Footprint", phonetic: "/ˈfʊtprɪnt/", meaning: "Dấu chân carbon" },
                        { word: "Biodegradable", phonetic: "/ˌbaɪəʊdɪˈɡreɪdəbl/", meaning: "Phân hủy sinh học" }
                    ],
                    quiz: [
                        { question: "Using __________ packaging helps reduce plastic pollution in oceans.", options: ["biodegradable", "toxic", "plastic", "artificial"], answer: 0 },
                        { question: "This is the eco-resort __________ we spent our summer holiday last year.", options: ["where", "which", "when", "who"], answer: 0 }
                    ]
                },
                {
                    id: "u3-reading",
                    title: "Reading",
                    subtitle: "Zero-Waste Lifestyle",
                    theory: "Bài đọc tìm hiểu phong trào sống không rác thải (zero-waste) và cách tái chế đồ dùng.",
                    vocab: [
                        { word: "Zero-waste", phonetic: "/ˌzɪərəʊ ˈweɪst/", meaning: "Không rác thải" },
                        { word: "Compost", phonetic: "/ˈkɒmpɒst/", meaning: "Phân hủy hữu cơ / Ủ phân hữu cơ" }
                    ],
                    quiz: [
                        { question: "Food scraps can be turned into organic __________ for plants in the garden.", options: ["compost", "plastic", "fuel", "metal"], answer: 0 }
                    ]
                },
                {
                    id: "u3-speaking",
                    title: "Speaking",
                    subtitle: "Discussing Ways to Go Green",
                    theory: "Luyện tập thảo luận và đề xuất các hành động xanh cá nhân bảo vệ tài nguyên trái đất.",
                    vocab: [
                        { word: "Conserve", phonetic: "/kənˈsɜːv/", meaning: "Tiết kiệm, bảo tồn" },
                        { word: "Eco-friendly", phonetic: "/ˌiːkəʊ ˈfrendli/", meaning: "Thân thiện sinh thái" }
                    ],
                    quiz: [
                        { question: "We must __________ water and electricity in daily life.", options: ["conserve", "waste", "destroy", "ruin"], answer: 0 }
                    ]
                },
                {
                    id: "u3-listening",
                    title: "Listening",
                    subtitle: "An Eco-friendly Household",
                    theory: "Nghe chia sẻ mẹo thiết kế một ngôi nhà thông minh thân thiện với môi trường.",
                    vocab: [
                        { word: "Energy-saving", phonetic: "/ˈenədʒi ˈseɪvɪŋ/", meaning: "Tiết kiệm năng lượng" },
                        { word: "Appliance", phonetic: "/əˈplaɪəns/", meaning: "Thiết bị gia dụng" }
                    ],
                    quiz: [
                        { question: "Using __________ light bulbs helps reduce household electricity bills.", options: ["energy-saving", "power-consuming", "expensive", "dim"], answer: 0 }
                    ]
                },
                {
                    id: "u3-writing",
                    title: "Writing",
                    subtitle: "Writing An Essay on Benefits of Green Living",
                    theory: "Hướng dẫn viết bài luận phân tích lợi ích của việc chuyển đổi sang lối sống xanh.",
                    vocab: [
                        { word: "Sustainability", phonetic: "/səˌsteɪnəˈbɪləti/", meaning: "Tính bền vững" }
                    ],
                    quiz: [
                        { question: "Green living guarantees environmental __________ for future generations.", options: ["sustainability", "collapse", "destruction", "pollution"], answer: 0 }
                    ]
                },
                {
                    id: "u3-communication",
                    title: "Communication and Culture",
                    subtitle: "Green Cities Around the World",
                    theory: "Khám phá các thành phố xanh sạch nhất thế giới như Singapore, Copenhagen.",
                    vocab: [
                        { word: "Green space", phonetic: "/ɡriːn speɪs/", meaning: "Không gian xanh" }
                    ],
                    quiz: [
                        { question: "Urban planners try to increase public __________ like parks and gardens.", options: ["green spaces", "parking lots", "factories", "highways"], answer: 0 }
                    ]
                },
                {
                    id: "u3-looking-back",
                    title: "Looking Back & Project",
                    subtitle: "Unit 3 Review & Green School Campaign Project",
                    theory: "Ôn tập trạng từ quan hệ và tổ chức chiến dịch xanh trường học.",
                    vocab: [
                        { word: "Eco-warrior", phonetic: "/ˈiːkəʊ ˈwɒriə(r)/", meaning: "Chiến sĩ bảo vệ môi trường" }
                    ],
                    quiz: [
                        { question: "Every student can become an __________ by practicing recycling.", options: ["eco-warrior", "polluter", "destroyer", "waste"], answer: 0 }
                    ]
                }
            ]
        },
        {
            id: "g12-u4",
            title: "Unit 4: Urbanisation",
            description: "Chủ đề Quá trình đô thị hóa, sự phát triển thành phố và các vấn đề xã hội.",
            lessons: [
                {
                    id: "g12-u4",
                    title: "Unit 4: Urbanisation",
                    description: "Chủ đề Quá trình đô thị hóa, sự phát triển thành phố và các vấn đề xã hội.",
                    lessons: [
                        {
                            id: "u4-getting-started",
                            title: "Getting Started",
                            subtitle: "City Growth - Sự phát triển đô thị",
                            theory: "Mở đầu cuộc thảo luận về làn sóng di cư từ nông thôn lên thành thị và hệ quả.",
                            vocab: [
                                { word: "Urbanisation", phonetic: "/ˌɜːbənaɪˈzeɪʃn/", meaning: "Quá trình đô thị hóa" },
                                { word: "Migration", phonetic: "/maɪˈɡreɪʃn/", meaning: "Sự di cư" }
                            ],
                            quiz: [
                                { question: "Rapid __________ leads to the movement of millions of people from rural to urban areas.", options: ["urbanisation", "globalization", "industrialization", "education"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-language",
                            title: "Language",
                            subtitle: "Pronunciation (Stress shift in word families) & Grammar (Reduced relative clauses)",
                            theory: "1. Sự dịch chuyển trọng âm trong các họ từ.\n2. Ngữ pháp: Rút gọn mệnh đề quan hệ bằng phân từ và to-infinitive.",
                            vocab: [
                                { word: "Infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə(r)/", meaning: "Cơ sở hạ tầng" },
                                { word: "Overcrowded", phonetic: "/ˌəʊvəˈkraʊdɪd/", meaning: "Quá tải, đông đúc" }
                            ],
                            quiz: [
                                { question: "Many big cities suffer from traffic jams because their __________ is outdated.", options: ["infrastructure", "population", "atmosphere", "landscape"], answer: 0 },
                                { question: "The city __________ fast attracts thousands of job seekers.", options: ["growing", "grow", "grown", "who grow"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-reading",
                            title: "Reading",
                            subtitle: "Pros and Cons of Urbanisation",
                            theory: "Bài đọc phân tích hai mặt lợi và hại của quá trình phát triển đô thị hóa nhanh chóng.",
                            vocab: [
                                { word: "Employment", phonetic: "/ɪmˈplɔɪmənt/", meaning: "Việc làm" },
                                { word: "Slum", phonetic: "/slʌm/", meaning: "Khu ổ chuột" }
                            ],
                            quiz: [
                                { question: "Cities offer better __________ opportunities, attracting rural workers.", options: ["employment", "farming", "fishing", "hunting"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Urban Problems and Solutions",
                            theory: "Luyện tập thảo luận về các vấn đề ùn tắc giao thông, ô nhiễm không khí đô thị.",
                            vocab: [
                                { word: "Congestion", phonetic: "/kənˈdʒestʃn/", meaning: "Sự tắc nghẽn" },
                                { word: "Public transport", phonetic: "/ˈpʌblɪk ˈtrænspɔːt/", meaning: "Phương tiện công cộng" }
                            ],
                            quiz: [
                                { question: "Using __________ helps ease traffic __________ during rush hours.", options: ["public transport / congestion", "cars / pollution", "bikes / weather", "trains / climate"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-listening",
                            title: "Listening",
                            subtitle: "Urban Planning for the Future",
                            theory: "Nghe chuyên gia quy hoạch đô thị bàn về giải pháp xây dựng thành phố thông minh bền vững.",
                            vocab: [
                                { word: "Urban planner", phonetic: "/ˈɜːbən ˈplænə(r)/", meaning: "Nhà quy hoạch đô thị" },
                                { word: "Sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "Bền vững" }
                            ],
                            quiz: [
                                { question: "Modern __________ design cities with more green spaces and clean transit.", options: ["urban planners", "farmers", "builders", "drivers"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-writing",
                            title: "Writing",
                            subtitle: "Writing A Cause-and-Effect Essay on Urbanisation",
                            theory: "Hướng dẫn viết bài luận phân tích nguyên nhân và hệ quả của đô thị hóa.",
                            vocab: [
                                { word: "Consequence", phonetic: "/ˈkɒnsɪkwəns/", meaning: "Hệ quả, hậu quả" }
                            ],
                            quiz: [
                                { question: "Housing shortage is a direct __________ of rapid urban population growth.", options: ["consequence", "benefit", "help", "cause"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-communication",
                            title: "Communication and Culture",
                            subtitle: "Megacities Around the World",
                            theory: "Khám phá các siêu đô thị (megacities) lớn nhất hành tinh như Tokyo, New York, Mumbai.",
                            vocab: [
                                { word: "Megacity", phonetic: "/ˈmeɡəsɪti/", meaning: "Siêu đô thị (dân số trên 10 triệu)" }
                            ],
                            quiz: [
                                { question: "Tokyo is widely known as one of the largest __________ in the world.", options: ["megacities", "villages", "towns", "farms"], answer: 0 }
                            ]
                        },
                        {
                            id: "u4-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 4 Review & Urban Solutions Project",
                            theory: "Ôn tập rút gọn mệnh đề quan hệ và thuyết trình giải pháp hạ tầng đô thị.",
                            vocab: [
                                { word: "Expansion", phonetic: "/ɪkˈspænʃn/", meaning: "Sự mở rộng" }
                            ],
                            quiz: [
                                { question: "Uncontrolled city __________ swallows up surrounding agricultural land.", options: ["expansion", "reduction", "decrease", "decline"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u5",
            title: "Unit 5: The World Of Work",
            description: "Chủ đề Thế giới việc làm, kỹ năng phỏng vấn và xu hướng nghề nghiệp mới.",
            lessons: [
                {
                    id: "g12-u5",
                    title: "Unit 5: The World Of Work",
                    description: "Chủ đề Thế giới việc làm, kỹ năng phỏng vấn và xu hướng nghề nghiệp mới.",
                    lessons: [
                        {
                            id: "u5-getting-started",
                            title: "Getting Started",
                            subtitle: "Job Interviews - Chuẩn bị phỏng vấn xin việc",
                            theory: "Mở đầu cuộc trò chuyện về kỹ năng nộp hồ sơ, viết CV và phỏng vấn chuyên nghiệp.",
                            vocab: [
                                { word: "Employment", phonetic: "/ɪmˈplɔɪmənt/", meaning: "Việc làm" },
                                { word: "Candidate", phonetic: "/ˈkændɪdət/", meaning: "Ứng viên" }
                            ],
                            quiz: [
                                { question: "All __________ for this position are required to submit their CVs in English.", options: ["candidates", "employers", "interviewers", "bosses"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-language",
                            title: "Language",
                            subtitle: "Pronunciation (Intonation in job interviews) & Grammar (Conditional sentences in reported speech)",
                            theory: "1. Ngữ điệu trong phỏng vấn.\n2. Ngữ pháp: Câu điều kiện trong câu tường thuật.",
                            vocab: [
                                { word: "Qualification", phonetic: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "Bằng cấp chuyên môn" },
                                { word: "Interpersonal skills", phonetic: "/ˌɪntəˈpɜːsənl skɪlz/", meaning: "Kỹ năng giao tiếp ứng xử" }
                            ],
                            quiz: [
                                { question: "Good __________ are essential for working effectively in a multicultural team.", options: ["interpersonal skills", "manual skills", "bad habits", "weaknesses"], answer: 0 },
                                { question: "The manager asked me if I __________ overtime if required.", options: ["could work", "can work", "work", "worked"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-reading",
                            title: "Reading",
                            subtitle: "Skills for the Future Job Market",
                            theory: "Bài đọc tìm hiểu những kỹ năng cốt lõi cần thiết trong kỷ nguyên tự động hóa và AI.",
                            vocab: [
                                { word: "Adaptability", phonetic: "/əˌdæptəˈbɪləti/", meaning: "Khả năng thích ứng" },
                                { word: "Resilience", phonetic: "/rɪˈzɪliəns/", meaning: "Khả năng kiên cường vượt khó" }
                            ],
                            quiz: [
                                { question: "In a fast-changing job market, __________ is more important than fixed knowledge.", options: ["adaptability", "stubbornness", "laziness", "slowness"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-speaking",
                            title: "Speaking",
                            subtitle: "Simulating a Job Interview",
                            theory: "Luyện tập cách trả lời các câu hỏi phỏng vấn thường gặp một cách tự tin.",
                            vocab: [
                                { word: "Strength", phonetic: "/streŋθ/", meaning: "Thế mạnh, điểm mạnh" },
                                { word: "Weakness", phonetic: "/wiːknəs/", meaning: "Điểm yếu" }
                            ],
                            quiz: [
                                { question: "During an interview, you should highlight your professional __________.", options: ["strengths", "weaknesses", "errors", "failures"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-listening",
                            title: "Listening",
                            subtitle: "Tips for Writing a Winning CV",
                            theory: "Nghe chuyên gia tuyển dụng chia sẻ bí quyết viết hồ sơ xin việc gây ấn tượng mạnh.",
                            vocab: [
                                { word: "Curriculum Vitae (CV)", phonetic: "/kəˌrɪkjələm ˈviːtaɪ/", meaning: "Hồ sơ lý lịch / CV" },
                                { word: "Referee", phonetic: "/ˌrefəˈriː/", meaning: "Người giới thiệu (việc làm)" }
                            ],
                            quiz: [
                                { question: "A professional __________ should be concise and free of spelling errors.", options: ["CV", "comic", "novel", "diary"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-writing",
                            title: "Writing",
                            subtitle: "Writing A Cover Letter",
                            theory: "Hướng dẫn cách viết thư xin việc (Cover Letter) chuyên nghiệp và thuyết phục nhà tuyển dụng.",
                            vocab: [
                                { word: "Cover letter", phonetic: "/ˈkʌvə(r) ˈletə(r)/", meaning: "Thư xin việc" }
                            ],
                            quiz: [
                                { question: "A __________ accompanies your CV to explain why you are suitable for the job.", options: ["cover letter", "shopping list", "ticket", "bill"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-communication",
                            title: "Communication and Culture",
                            subtitle: "Workplace Culture Around the World",
                            theory: "Khám phá văn hóa làm việc công sở tại các quốc gia như Nhật Bản, Mỹ, Đức.",
                            vocab: [
                                { word: "Punctuality", phonetic: "/ˌpʌŋktʃuˈæləti/", meaning: "Tính đúng giờ" }
                            ],
                            quiz: [
                                { question: "In Germany and Japan, strict __________ is highly valued in the workplace.", options: ["punctuality", "laziness", "rudeness", "slowness"], answer: 0 }
                            ]
                        },
                        {
                            id: "u5-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 5 Review & Mock Job Fair Project",
                            theory: "Ôn tập câu tường thuật với câu điều kiện và tổ chức hội chợ việc làm giả định.",
                            vocab: [
                                { word: "Profession", phonetic: "/prəˈfeʃn/", meaning: "Nghề nghiệp chuyên môn" }
                            ],
                            quiz: [
                                { question: "Choosing the right __________ guarantees long-term career satisfaction.", options: ["profession", "hobby", "game", "toy"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u6",
            title: "Unit 6: Artificial Intelligence",
            description: "Chủ đề Trí tuệ nhân tạo (AI), công nghệ tự động hóa và tương lai nhân loại.",
            lessons: [
                {
                    id: "g12-u6",
                    title: "Unit 6: Artificial Intelligence",
                    description: "Chủ đề Trí tuệ nhân tạo (AI), công nghệ tự động hóa và tương lai nhân loại.",
                    lessons: [
                        {
                            id: "u6-getting-started",
                            title: "Getting Started",
                            subtitle: "AI Applications - Ứng dụng trí tuệ nhân tạo",
                            theory: "Mở đầu cuộc thảo luận về cách AI đang thay đổi mọi mặt đời sống từ y tế đến giáo dục.",
                            vocab: [
                                { word: "Artificial Intelligence (AI)", phonetic: "/ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns/", meaning: "Trí tuệ nhân tạo" },
                                { word: "Automation", phonetic: "/ˌɔːtəˈmeɪʃn/", meaning: "Sự tự động hóa" }
                            ],
                            quiz: [
                                { question: "__________ allows machines to learn from experience and perform human-like tasks.", options: ["Artificial Intelligence", "Agriculture", "Architecture", "Astronomy"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-language",
                            title: "Language",
                            subtitle: "Pronunciation (Stress in words ending in -logy, -graphy) & Grammar (Subjunctive forms)",
                            theory: "1. Trọng âm từ tận cùng -logy, -graphy.\n2. Ngữ pháp: Thức giả định (Subjunctive) sau một số động từ và tính từ đặc biệt.",
                            vocab: [
                                { word: "Algorithm", phonetic: "/ˈælɡərɪðəm/", meaning: "Thuật toán" },
                                { word: "Revolutionary", phonetic: "/ˌrevəˈluːʃənəri/", meaning: "Mang tính cách mạng" }
                            ],
                            quiz: [
                                { question: "The rise of __________ in factories has increased production efficiency.", options: ["automation", "unemployment", "poverty", "pollution"], answer: 0 },
                                { question: "The scientist suggested that the robot __________ tested in simulated environments first.", options: ["be", "is", "was", "were"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-reading",
                            title: "Reading",
                            subtitle: "AI: Friend or Foe?",
                            theory: "Bài đọc phân tích hai luồng ý kiến liệu AI là người bạn đồng hành hay mối đe dọa tương lai.",
                            vocab: [
                                { word: "Threat", phonetic: "/θret/", meaning: "Mối đe dọa" },
                                { word: "Breakthrough", phonetic: "/ˈbreɪkθruː/", meaning: "Bước đột phá" }
                            ],
                            quiz: [
                                { question: "Generative AI represents a massive technological __________ in recent years.", options: ["breakthrough", "failure", "delay", "loss"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-speaking",
                            title: "Speaking",
                            subtitle: "Debating the Pros and Cons of AI",
                            theory: "Luyện tập tranh biện về tác động của AI đối với thị trường lao động và quyền riêng tư.",
                            vocab: [
                                { word: "Privacy", phonetic: "/ˈprɪvəsi/", meaning: "Sự riêng tư" },
                                { word: "Data security", phonetic: "/ˈdeɪtə sɪˈkjʊərəti/", meaning: "Bảo mật dữ liệu" }
                            ],
                            quiz: [
                                { question: "Using smart devices improperly can risk users' personal __________.", options: ["privacy", "health", "wealth", "grades"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-listening",
                            title: "Listening",
                            subtitle: "AI in Modern Healthcare",
                            theory: "Nghe về cách thuật toán AI hỗ trợ bác sĩ chẩn đoán bệnh chính xác và nhanh chóng.",
                            vocab: [
                                { word: "Diagnosis", phonetic: "/ˌdaɪəɡˈnəʊsɪs/", meaning: "Sự chẩn đoán bệnh" },
                                { word: "Treatment", phonetic: "/ˈtriːtmənt/", meaning: "Phương pháp điều trị" }
                            ],
                            quiz: [
                                { question: "AI helps doctors make faster and more accurate disease __________.", options: ["diagnoses", "mistakes", "delays", "errors"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-writing",
                            title: "Writing",
                            subtitle: "Writing An Argumentative Essay on AI",
                            theory: "Hướng dẫn viết bài luận tranh luận về việc kiểm soát sự phát triển của trí tuệ nhân tạo.",
                            vocab: [
                                { word: "Regulation", phonetic: "/ˌreɡjuˈleɪʃn/", meaning: "Sự quản lý, quy định pháp lý" }
                            ],
                            quiz: [
                                { question: "Governments should establish strict __________ on AI development to ensure safety.", options: ["regulations", "toys", "games", "songs"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-communication",
                            title: "Communication and Culture",
                            subtitle: "Robotics Around the World",
                            theory: "Khám phá sự phát triển robot thông minh phục vụ đời sống tại Nhật Bản và phương Tây.",
                            vocab: [
                                { word: "Humanoid robot", phonetic: "/ˈhjuːmənɔɪd ˈrəʊbɒt/", meaning: "Robot hình người" }
                            ],
                            quiz: [
                                { question: "Japan is a pioneer in developing advanced __________ for elderly care.", options: ["humanoid robots", "wooden chairs", "stone tools", "paper books"], answer: 0 }
                            ]
                        },
                        {
                            id: "u6-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 6 Review & AI Tech Exhibition Project",
                            theory: "Ôn tập thức giả định và tổ chức triển lãm công nghệ AI tương lai.",
                            vocab: [
                                { word: "Intelligence", phonetic: "/ɪnˈtelɪdʒəns/", meaning: "Trí thông minh" }
                            ],
                            quiz: [
                                { question: "Artificial __________ is reshaping how we solve complex global problems.", options: ["intelligence", "ignorance", "laziness", "darkness"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u7",
            title: "Unit 7: The World Of Mass Media",
            description: "Chủ đề Vai trò, sức ảnh hưởng và sự tiến hóa của truyền thông trong kỷ nguyên số.",
            lessons: [
                {
                    id: "g12-u7",
                    title: "Unit 7: The World Of Mass Media",
                    description: "Chủ đề Vai trò, sức ảnh hưởng và sự tiến hóa của truyền thông trong kỷ nguyên số.",
                    lessons: [
                        {
                            id: "u7-getting-started",
                            title: "Getting Started",
                            subtitle: "Mass Media Channels - Các phương tiện thông tin đại chúng",
                            theory: "Mở đầu thảo luận về sự bùng nổ của mạng xã hội so với báo giấy truyền thống.",
                            vocab: [
                                { word: "Mass media", phonetic: "/mæs ˈmiːdiə/", meaning: "Truyền thông đại chúng" },
                                { word: "Social network", phonetic: "/ˈsəʊʃl ˈnetwɜːk/", meaning: "Mạng xã hội" }
                            ],
                            quiz: [
                                { question: "Television, radio, and newspapers are traditional forms of __________.", options: ["mass media", "social media", "private communication", "telecommunications"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-language",
                            title: "Language",
                            subtitle: "Pronunciation (Stress in compound adjectives) & Grammar (Inversion with negative adverbs)",
                            theory: "1. Trọng âm trong tính từ ghép.\n2. Ngữ pháp: Cấu trúc đảo ngữ với trạng từ phủ định (Hardly, Never, Seldom...).",
                            vocab: [
                                { word: "Broadcast", phonetic: "/ˈbrɔːdkɑːst/", meaning: "Phát sóng" },
                                { word: "Sensational", phonetic: "/senˈseɪʃənl/", meaning: "Gây giật gân, câu view" }
                            ],
                            quiz: [
                                { question: "Some newspapers publish __________ headlines just to attract readers.", options: ["sensational", "accurate", "objective", "informative"], answer: 0 },
                                { question: "Hardly __________ watched TV since he started using social media.", options: ["had he", "he had", "did he", "he did"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-reading",
                            title: "Reading",
                            subtitle: "Fake News in the Digital Age",
                            theory: "Bài đọc tìm hiểu hiểm họa của tin giả (fake news) và cách nhận biết thông tin chính thống.",
                            vocab: [
                                { word: "Fake news", phonetic: "/feɪk njuːz/", meaning: "Tin giả, tin thất thiệt" },
                                { word: "Verify", phonetic: "/ˈverɪfaɪ/", meaning: "Xác minh, kiểm chứng" }
                            ],
                            quiz: [
                                { question: "Readers should always __________ information before sharing it online.", options: ["verify", "hide", "destroy", "ignore"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-speaking",
                            title: "Speaking",
                            subtitle: "Discussing the Impact of Social Media",
                            theory: "Luyện tập thảo luận ưu và nhược điểm của việc tiếp nhận tin tức qua mạng xã hội.",
                            vocab: [
                                { word: "Influencer", phonetic: "/ˈɪnfluənsə(r)/", meaning: "Người có tầm ảnh hưởng trên mạng" },
                                { word: "Viral", phonetic: "/ˈvaɪrəl/", meaning: "Lan truyền nhanh chóng" }
                            ],
                            quiz: [
                                { question: "A funny video can go __________ on social media within a few hours.", options: ["viral", "dead", "silent", "slow"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-listening",
                            title: "Listening",
                            subtitle: "A Talk About Journalistic Ethics",
                            theory: "Nghe về đạo đức nghề báo và trách nhiệm đưa tin trung thực của phóng viên.",
                            vocab: [
                                { word: "Journalist", phonetic: "/ˈdʒɜːnəlɪst/", meaning: "Nhà báo, phóng viên" },
                                { word: "Credibility", phonetic: "/ˌkredəˈbɪləti/", meaning: "Độ tin cậy" }
                            ],
                            quiz: [
                                { question: "Reliable newspapers maintain high standards of journalistic __________.", options: ["credibility", "dishonesty", "laziness", "falsity"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-writing",
                            title: "Writing",
                            subtitle: "Writing A Reaction Essay to a News Article",
                            theory: "Hướng dẫn viết bài luận bày tỏ phản hồi và quan điểm về một bài báo thời sự.",
                            vocab: [
                                { word: "Editorial", phonetic: "/ˌedɪˈtɔːriəl/", meaning: "Bài xã luận, ý kiến tòa soạn" }
                            ],
                            quiz: [
                                { question: "The newspaper published an insightful __________ on climate change policies.", options: ["editorial", "comic", "novel", "recipe"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-communication",
                            title: "Communication and Culture",
                            subtitle: "Citizen Journalism",
                            theory: "Khám phá xu hướng báo chí công dân (mọi người đều có thể đưa tin sự kiện qua điện thoại).",
                            vocab: [
                                { word: "Citizen journalist", phonetic: "/ˈsɪtɪzn ˈdʒɜːnəlɪst/", meaning: "Nhà báo công dân" }
                            ],
                            quiz: [
                                { question: "Ordinary people acting as __________ often record breaking news with smartphones.", options: ["citizen journalists", "astronauts", "farmers", "miners"], answer: 0 }
                            ]
                        },
                        {
                            id: "u7-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 7 Review & Media Campaign Project",
                            theory: "Ôn tập cấu trúc đảo ngữ và thuyết trình dự án phòng chống tin giả.",
                            vocab: [
                                { word: "Censorship", phonetic: "/ˈsensəʃɪp/", meaning: "Sự kiểm duyệt thông tin" }
                            ],
                            quiz: [
                                { question: "Governments apply strict __________ on harmful contents online.", options: ["censorship", "freedom", "liberty", "support"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u8",
            title: "Unit 8: Wildlife Conservation",
            description: "Chủ đề Bảo tồn động thực vật hoang dã và phòng chống nạn săn trộm.",
            lessons: [
                {
                    id: "g12-u8",
                    title: "Unit 8: Wildlife Conservation",
                    description: "Chủ đề Bảo tồn động thực vật hoang dã và phòng chống nạn săn trộm.",
                    lessons: [
                        {
                            id: "u8-getting-started",
                            title: "Getting Started",
                            subtitle: "Endangered Species - Các loài có nguy cơ tuyệt chủng",
                            theory: "Mở đầu thảo luận về thực trạng suy giảm động vật hoang dã do nạn săn bắn trộm.",
                            vocab: [
                                { word: "Endangered species", phonetic: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/", meaning: "Loài có nguy cơ tuyệt chủng" },
                                { word: "Poaching", phonetic: "/ˈpəʊtʃɪŋ/", meaning: "Nạn săn bắt trộm" }
                            ],
                            quiz: [
                                { question: "Governments should impose stricter punishments on illegal __________ and wildlife trade.", options: ["poaching", "gardening", "farming", "fishing"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-language",
                            title: "Language",
                            subtitle: "Pronunciation (Intonation in exclamation sentences) & Grammar (Passive voice with modals and perfect tenses)",
                            theory: "1. Ngữ điệu trong câu cảm thán.\n2. Ngữ pháp: Câu bị động với động từ khuyết thiếu và thì hoàn thành.",
                            vocab: [
                                { word: "Habitat destruction", phonetic: "/ˈhæbɪtæt dɪˈstrʌkʃn/", meaning: "Sự phá hủy môi trường sống" },
                                { word: "Sanctuary", phonetic: "/ˈsæŋktʃuəri/", meaning: "Khu bảo tồn thiên nhiên" }
                            ],
                            quiz: [
                                { question: "Many national parks serve as a safe __________ for rare animals.", options: ["sanctuary", "factory", "market", "prison"], answer: 0 },
                                { question: "Rare animals must __________ protected from illegal hunters.", options: ["be", "have", "are", "were"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-reading",
                            title: "Reading",
                            subtitle: "Saving the Rhinos and Elephants",
                            theory: "Bài đọc tìm hiểu nỗ lực bảo vệ tê giác và voi trước thảm họa săn lấy ngà và sừng.",
                            vocab: [
                                { word: "Ivory", phonetic: "/ˈaɪvəri/", meaning: "Ngà (voi)" },
                                { word: "Horn", phonetic: "/hɔːn/", meaning: "Sừng (tê giác)" }
                            ],
                            quiz: [
                                { question: "Illegal hunting for rhino __________ has driven species to near extinction.", options: ["horns", "tails", "wings", "feet"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Wildlife Protection Measures",
                            theory: "Luyện tập thảo luận đưa ra biện pháp ngăn chặn buôn bán động vật hoang dã trái phép.",
                            vocab: [
                                { word: "Smuggling", phonetic: "/ˈsmʌɡlɪŋ/", meaning: "Nạn buôn lậu" },
                                { word: "Penalise", phonetic: "/ˈpiːnəlaɪz/", meaning: "Xử phạt hình sự" }
                            ],
                            quiz: [
                                { question: "Wildlife __________ must be punished with severe prison sentences.", options: ["smuggling", "gardening", "camping", "hiking"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-listening",
                            title: "Listening",
                            subtitle: "An Interview with a Ranger",
                            theory: "Nghe kiểm lâm viên chia sẻ hiểm nguy và vất vả trong công tác tuần tra rừng sâu bảo vệ thú.",
                            vocab: [
                                { word: "Ranger", phonetic: "/ˈreɪndʒə(r)/", meaning: "Nhân viên kiểm lâm" },
                                { word: "Patrol", phonetic: "/pəˈtrəʊl/", meaning: "Tuần tra" }
                            ],
                            quiz: [
                                { question: "Forest __________ risk their lives daily to protect animals from poachers.", options: ["rangers", "chefs", "pilots", "teachers"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-writing",
                            title: "Writing",
                            subtitle: "Writing A Proposal to Protect Endangered Animals",
                            theory: "Hướng dẫn viết bản đề xuất gửi cơ quan chức năng tăng cường bảo vệ động vật quý hiếm.",
                            vocab: [
                                { word: "Enforcement", phonetic: "/ɪnˈfɔːsmənt/", meaning: "Sự thi hành (luật pháp)" }
                            ],
                            quiz: [
                                { question: "Strict law __________ is key to stopping illegal wildlife markets.", options: ["enforcement", "breaking", "ignoring", "avoiding"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-communication",
                            title: "Communication and Culture",
                            subtitle: "Animal Symbols in Different Cultures",
                            theory: "Tìm hiểu ý nghĩa biểu tượng của các loài linh vật và động vật trong văn hóa thế giới.",
                            vocab: [
                                { word: "Symbol", phonetic: "/ˈsɪmbəl/", meaning: "Biểu tượng" }
                            ],
                            quiz: [
                                { question: "The tiger is a powerful __________ of strength and bravery in Asian culture.", options: ["symbol", "toy", "tool", "machine"], answer: 0 }
                            ]
                        },
                        {
                            id: "u8-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 8 Review & Wildlife Protection Campaign Project",
                            theory: "Ôn tập câu bị động nâng cao và thuyết trình dự án bảo vệ động vật hoang dã.",
                            vocab: [
                                { word: "Extinction", phonetic: "/ɪkˈstɪŋkʃn/", meaning: "Sự tuyệt chủng" }
                            ],
                            quiz: [
                                { question: "Conservationists work hard to save vulnerable species from __________.", options: ["extinction", "growth", "prosperity", "success"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u9",
            title: "Unit 9: Career Paths",
            description: "Chủ đề Định hướng con đường sự nghiệp và chuẩn bị hành trang tương lai sau phổ thông.",
            lessons: [
                {
                    id: "g12-u9",
                    title: "Unit 9: Career Paths",
                    description: "Chủ đề Định hướng con đường sự nghiệp và chuẩn bị hành trang tương lai sau phổ thông.",
                    lessons: [
                        {
                            id: "u9-getting-started",
                            title: "Getting Started",
                            subtitle: "Future Careers - Định hướng nghề nghiệp tương lai",
                            theory: "Mở đầu cuộc thảo luận về sở thích, năng lực và lựa chọn con đường sự nghiệp sau lớp 12.",
                            vocab: [
                                { word: "Career path", phonetic: "/kəˈrɪə pɑːθ/", meaning: "Con đường sự nghiệp" },
                                { word: "Guidance", phonetic: "/ˈɡaɪdns/", meaning: "Sự định hướng, tư vấn" }
                            ],
                            quiz: [
                                { question: "High school students often need career __________ before making major choices.", options: ["guidance", "pressure", "punishment", "neglect"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-language",
                            title: "Language",
                            subtitle: "Pronunciation (Stress in words ending in -ity, -ify) & Grammar (Relative clauses with quantifiers)",
                            theory: "1. Trọng âm từ tận cùng -ity, -ify.\n2. Ngữ pháp: Mệnh đề quan hệ đi kèm lượng từ (all of which, many of whom...).",
                            vocab: [
                                { word: "Apprenticeship", phonetic: "/əˈprentɪsʃɪp/", meaning: "Chương trình học nghề" },
                                { word: "Prospects", phonetic: "/ˈprɒspekts/", meaning: "Triển vọng nghề nghiệp" }
                            ],
                            quiz: [
                                { question: "Choosing a clear __________ helps young people stay focused on professional goals.", options: ["career path", "dead end", "hobby", "vacation"], answer: 0 },
                                { question: "She applied for three jobs, __________ were successfully accepted.", options: ["all of which", "all of them", "which", "whom"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-reading",
                            title: "Reading",
                            subtitle: "Non-Traditional Career Paths",
                            theory: "Bài đọc tìm hiểu các hướng đi sự nghiệp mới lạ như freelancer, creator, startup.",
                            vocab: [
                                { word: "Freelancer", phonetic: "/ˈfriːlɑːnsə(r)/", meaning: "Người làm tự do" },
                                { word: "Entrepreneur", phonetic: "/ˌɒntrəprəˈnɜː(r)/", meaning: "Nhà khởi nghiệp, doanh nhân" }
                            ],
                            quiz: [
                                { question: "Many young people choose to become __________ to enjoy working flexibility.", options: ["freelancers", "slaves", "prisoners", "patients"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-speaking",
                            title: "Speaking",
                            subtitle: "Discussing Career Choices and Aspirations",
                            theory: "Luyện tập chia sẻ ước mơ và khát vọng nghề nghiệp cá nhân trước hội đồng giả định.",
                            vocab: [
                                { word: "Aspiration", phonetic: "/ˌæspəˈreɪʃn/", meaning: "Khát vọng, hoài bão" },
                                { word: "Ambition", phonetic: "/æmˈbɪʃn/", meaning: "Tham vọng, ý chí lớn" }
                            ],
                            quiz: [
                                { question: "Having high __________ pushes young people to study and work harder.", options: ["aspirations", "laziness", "fears", "doubts"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-listening",
                            title: "Listening",
                            subtitle: "A Success Story of a Young Startup Founder",
                            theory: "Nghe câu chuyện khởi nghiệp thành công của một bạn trẻ đầy bản lĩnh.",
                            vocab: [
                                { word: "Startup", phonetic: "/ˈstɑːtʌp/", meaning: "Công ty khởi nghiệp" },
                                { word: "Risk-taker", phonetic: "/ˈrɪsk teɪkə(r)/", meaning: "Người dám mạo hiểm" }
                            ],
                            quiz: [
                                { question: "Successful entrepreneurs are often bold __________ who embrace challenges.", options: ["risk-takers", "cowards", "losers", "quitters"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-writing",
                            title: "Writing",
                            subtitle: "Writing A Personal Statement for University/Job",
                            theory: "Hướng dẫn viết bài luận cá nhân (Personal Statement) nêu bật điểm mạnh và mục tiêu.",
                            vocab: [
                                { word: "Personal statement", phonetic: "/ˈpɜːsənl ˈsteɪtmənt/", meaning: "Bài luận giới thiệu bản thân" }
                            ],
                            quiz: [
                                { question: "A __________ outlines your academic achievements and career goals.", options: ["personal statement", "shopping list", "menu", "ticket"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-communication",
                            title: "Communication and Culture",
                            subtitle: "Job Interview Styles Across Cultures",
                            theory: "Khám phá phong cách phỏng vấn xin việc và chuẩn mực ứng xử chuyên nghiệp toàn cầu.",
                            vocab: [
                                { word: "Professionalism", phonetic: "/prəˈfeʃənəlɪzəm/", meaning: "Tính chuyên nghiệp" }
                            ],
                            quiz: [
                                { question: "Showing high __________ in an interview increases your chance of getting hired.", options: ["professionalism", "rudeness", "carelessness", "laziness"], answer: 0 }
                            ]
                        },
                        {
                            id: "u9-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 9 Review & Career Planning Project",
                            theory: "Ôn tập mệnh đề quan hệ với lượng từ và thuyết trình bản đồ tư duy hướng nghiệp.",
                            vocab: [
                                { word: "Achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "Thành tựu sự nghiệp" }
                            ],
                            quiz: [
                                { question: "Setting clear milestones helps you measure career __________ accurately.", options: ["achievement", "failure", "loss", "delay"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "g12-u10",
            title: "Unit 10: Lifelong Learning",
            description: "Chủ đề Tinh thần học tập suốt đời trong kỷ nguyên số và không ngừng nâng cao bản thân.",
            lessons: [
                {
                    id: "g12-u10",
                    title: "Unit 10: Lifelong Learning",
                    description: "Chủ đề Tinh thần học tập suốt đời trong kỷ nguyên số và không ngừng nâng cao bản thân.",
                    lessons: [
                        {
                            id: "u10-getting-started",
                            title: "Getting Started",
                            subtitle: "Learning Without Limits - Học tập không giới hạn",
                            theory: "Mở đầu cuộc thảo luận về tầm quan trọng của việc trau dồi kiến thức mới mỗi ngày sau khi ra trường.",
                            vocab: [
                                { word: "Lifelong learning", phonetic: "/ˈlaɪflɒŋ ˈlɜːnɪŋ/", meaning: "Học tập suốt đời" },
                                { word: "Upskill", phonetic: "/ˌʌpˈskɪl/", meaning: "Nâng cao kỹ năng" }
                            ],
                            quiz: [
                                { question: "In a fast-changing world, __________ is crucial for career advancement.", options: ["lifelong learning", "idleness", "ignorance", "stubbornness"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-language",
                            title: "Language",
                            subtitle: "Pronunciation (Intonation in encouraging statements) & Grammar (Articles and quantifiers review)",
                            theory: "1. Ngữ điệu trong câu khích lệ.\n2. Ngữ pháp: Ôn tập tổng hợp về mạo từ và lượng từ nâng cao.",
                            vocab: [
                                { word: "Curiosity", phonetic: "/ˌkjʊəriˈɒsəti/", meaning: "Sự tò mò, ham học hỏi" },
                                { word: "Adaptability", phonetic: "/əˌdæptəˈbɪləti/", meaning: "Khả năng thích ứng" }
                            ],
                            quiz: [
                                { question: "Employees need to __________ regularly to keep up with new technology.", options: ["upskill", "retire", "quit", "delay"], answer: 0 },
                                { question: "__________ student in our class has access to online learning platforms.", options: ["Every", "All", "Both", "Several"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-reading",
                            title: "Reading",
                            subtitle: "E-Learning and Massive Open Online Courses (MOOCs)",
                            theory: "Bài đọc tìm hiểu các khóa học trực tuyến mở đại trà (MOOCs) phục vụ việc tự học toàn cầu.",
                            vocab: [
                                { word: "MOOCs", phonetic: "/muːks/", meaning: "Khóa học trực tuyến mở đại trà" },
                                { word: "Flexible", phonetic: "/ˈfleksəbl/", meaning: "Linh hoạt" }
                            ],
                            quiz: [
                                { question: "Online platforms offer __________ learning schedules for busy working adults.", options: ["flexible", "rigid", "fixed", "strict"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-speaking",
                            title: "Speaking",
                            subtitle: "Sharing Self-Study Methods and Experiences",
                            theory: "Luyện tập trao đổi về phương pháp tự học ngoại ngữ và kỹ năng mềm hiệu quả.",
                            vocab: [
                                { word: "Self-discipline", phonetic: "/ˌself ˈdɪsəplɪn/", meaning: "Tính kỷ luật tự giác" },
                                { word: "Motivation", phonetic: "/ˌməʊtɪˈveɪʃn/", meaning: "Động lực học tập" }
                            ],
                            quiz: [
                                { question: "Successful online learners require high levels of __________ and focus.", options: ["self-discipline", "laziness", "boredom", "confusion"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-listening",
                            title: "Listening",
                            subtitle: "An Expert Talk on Continuous Education",
                            theory: "Nghe chuyên gia giáo dục chia sẻ xu hướng đào tạo lại kỹ năng cho người lao động.",
                            vocab: [
                                { word: "Reskill", phonetic: "/ˌriːˈskɪl/", meaning: "Đào tạo lại kỹ năng mới" },
                                { word: "Workforce", phonetic: "/ˈwɜːkfɔːs/", meaning: "Lực lượng lao động" }
                            ],
                            quiz: [
                                { question: "Companies invest heavily to __________ their workforce for digital transformation.", options: ["reskill", "fire", "dismiss", "reduce"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-writing",
                            title: "Writing",
                            subtitle: "Writing An Essay on Value of Lifelong Learning",
                            theory: "Hướng dẫn viết bài luận phân tích tại sao học tập suốt đời là chìa khóa thành công.",
                            vocab: [
                                { word: "Intellectual", phonetic: "/ˌɪntəˈlektʃuəl/", meaning: "Thuộc về trí tuệ" }
                            ],
                            quiz: [
                                { question: "Reading books stimulates personal growth and __________ development.", options: ["intellectual", "physical", "manual", "material"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-communication",
                            title: "Communication and Culture",
                            subtitle: "Libraries of the Future",
                            theory: "Khám phá các thư viện thông minh không giấy tờ và kho tàng tri thức số toàn cầu.",
                            vocab: [
                                { word: "Digital archive", phonetic: "/ˈdɪdʒɪtl ˈɑːkaɪv/", meaning: "Kho lưu trữ kỹ thuật số" }
                            ],
                            quiz: [
                                { question: "Modern universities store millions of books in online __________.", options: ["digital archives", "warehouses", "garages", "factories"], answer: 0 }
                            ]
                        },
                        {
                            id: "u10-looking-back",
                            title: "Looking Back & Project",
                            subtitle: "Unit 10 Review & Lifelong Learning Portfolio Project",
                            theory: "Ôn tập tổng hợp ngữ pháp lớp 12 và hoàn thành dự án hồ sơ học tập suốt đời.",
                            vocab: [
                                { word: "Enlightenment", phonetic: "/ɪnˈlaɪtnmənt/", meaning: "Sự khai sáng, hiểu biết sâu sắc" }
                            ],
                            quiz: [
                                { question: "Education brings lifelong __________ and opens doors to new opportunities.", options: ["enlightenment", "darkness", "confusion", "ignorance"], answer: 0 }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
