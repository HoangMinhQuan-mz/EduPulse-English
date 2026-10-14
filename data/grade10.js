/* =========================================================
   DỰ ÁN KHKT: EDUPULSE ENGLISH
   Mục đích: Ngân hàng dữ liệu Tiếng Anh Khối 10 (Chuẩn GDPT 2018)
   ========================================================= */

const grade10Data = {
    
   title: "Khối 10 - Tiếng Anh THPT",
    description: "Chương trình cốt lõi bám sát SGK Tiếng Anh 10 (Global Success) đầy đủ các Unit theo định hướng phát triển năng lực.",
    units: [
        {
            id: "g10-u1",
            title: "Unit 1: Family Life",
            description: "Chủ đề Cuộc sống Gia đình, việc nhà và sự phân chia công việc giữa các thành viên.",
            vocab: [
                { word: "Routine", phonetic: "/ruːˈtiːn/", meaning: "Thói quen hàng ngày" },
                { word: "Household chores", phonetic: "/ˈhaʊshəʊld tʃɔːz/", meaning: "Việc nhà" },
                { word: "Breadwinner", phonetic: "/ˈbredwɪnə(r)/", meaning: "Trụ cột gia đình" },
                { word: "Homemaker", phonetic: "/ˈhəʊmmeɪkə(r)/", meaning: "Người nội trợ" }
            ],
            quiz: [
                {
                    question: "My mother usually takes responsibility for doing the __________ in our house.",
                    options: ["homework", "housework", "business", "job"],
                    answer: 1
                },
                {
                    question: "He is the main __________ of the family, working hard to support his wife and children.",
                    options: ["homemaker", "breadwinner", "househusband", "worker"],
                    answer: 1
                }
            ]
        },
        {
            id: "g10-u2",
            title: "Unit 2: Humans and the Environment",
            description: "Chủ đề Con người và Môi trường, lối sống xanh và bảo vệ thiên nhiên.",
            vocab: [
                { word: "Carbon footprint", phonetic: "/ˌkɑːbən ˈfʊtprɪnt/", meaning: "Dấu chân carbon (lượng khí thải CO2)" },
                { word: "Eco-friendly", phonetic: "/ˌiːkəʊ ˈfrendli/", meaning: "Thân thiện với môi trường" },
                { word: "Recycle", phonetic: "/ˌriːˈsaɪkl/", meaning: "Tái chế" },
                { word: "Preserve", phonetic: "/prɪˈzɜːv/", meaning: "Bảo tồn" }
            ],
            quiz: [
                {
                    question: "Using reusable bags is a great way to reduce your plastic __________.",
                    options: ["footprint", "handprint", "waste", "garbage"],
                    answer: 0
                },
                {
                    question: "We should buy __________ products to protect our environment.",
                    options: ["toxic", "harmful", "eco-friendly", "expensive"],
                    answer: 2
                }
            ]
        },
        {
            id: "g10-u3",
            title: "Unit 3: Music",
            description: "Chủ đề Âm nhạc, các thể loại nhạc và cảm xúc trong âm nhạc.",
            vocab: [
                { word: "Genre", phonetic: "/ˈʒɒnrə/", meaning: "Thể loại (nhạc, nghệ thuật)" },
                { word: "Audition", phonetic: "/ɔːˈdɪʃn/", meaning: "Buổi thử giọng / Biểu diễn thử" },
                { word: "Melody", phonetic: "/ˈmelədi/", meaning: "Giai điệu" },
                { word: "Passionate", phonetic: "/ˈpæʃənət/", meaning: "Đam mê, nhiệt huyết" }
            ],
            quiz: [
                {
                    question: "Pop and rock are two different musical __________.",
                    options: ["instruments", "genres", "singers", "concerts"],
                    answer: 1
                },
                {
                    question: "She has a beautiful voice and a great sense of __________.",
                    options: ["rhythm", "melody", "song", "band"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u4",
            title: "Unit 4: For a Better Community",
            description: "Chủ đề Hoạt động Tình nguyện và công tác cộng đồng.",
            vocab: [
                { word: "Volunteer", phonetic: "/ˌvɒlənˈtɪə(r)/", meaning: "Tình nguyện viên / Làm tình nguyện" },
                { word: "Donate", phonetic: "/dəʊˈneɪt/", meaning: "Quyên góp, tặng" },
                { word: "Community service", phonetic: "/kəˈmjuːnəti ˈsɜːvɪs/", meaning: "Công tác cộng đồng" },
                { word: "Make a difference", phonetic: "/meɪk ə ˈdɪfrəns/", meaning: "Tạo ra sự thay đổi tích cực" }
            ],
            quiz: [
                {
                    question: "Many students in our school __________ books and clothes to poor children.",
                    options: ["donate", "buy", "steal", "borrow"],
                    answer: 0
                },
                {
                    question: "Participating in __________ helps teenagers develop soft skills.",
                    options: ["community service", "computer games", "heavy work", "exams"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u5",
            title: "Unit 5: Inventions",
            description: "Chủ đề Các phát minh công nghệ và ứng dụng trong đời sống.",
            vocab: [
                { word: "Invention", phonetic: "/ɪnˈvenʃn/", meaning: "Sự phát minh, vật phát minh" },
                { word: "Convenient", phonetic: "/kənˈviːniənt/", meaning: "Thuận tiện, tiện lợi" },
                { word: "Device", phonetic: "/dɪˈvaɪs/", meaning: "Thiết bị, dụng cụ" },
                { word: "Durable", phonetic: "/ˈdʊrəbl/", meaning: "Bền, lâu bền" }
            ],
            quiz: [
                {
                    question: "The smartphone is one of the most useful __________ of the 21st century.",
                    options: ["inventions", "inventors", "invent", "inventive"],
                    answer: 0
                },
                {
                    question: "This washing machine is very __________; it saves both time and electricity.",
                    options: ["expensive", "convenient", "heavy", "complex"],
                    answer: 1
                }
            ]
        },
        {
            id: "g10-u6",
            title: "Unit 6: Gender Equality",
            description: "Chủ đề Bình đẳng giới trong giáo dục, việc làm và gia đình.",
            vocab: [
                { word: "Gender equality", phonetic: "/ˈdʒendər iˈkwɒləti/", meaning: "Bình đẳng giới" },
                { word: "Opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", meaning: "Cơ hội" },
                { word: "Treat", phonetic: "/triːt/", meaning: "Đối xử, đối đãi" },
                { word: "Courage", phonetic: "/ˈkʌrɪdʒ/", meaning: "Sự can đảm, dũng khí" }
            ],
            quiz: [
                {
                    question: "Both men and women should be given equal __________ in education and employment.",
                    options: ["opportunities", "salaries", "difficulties", "problems"],
                    answer: 0
                },
                {
                    question: "__________ ensures that everyone has the same rights regardless of their sex.",
                    options: ["Gender equality", "Gender gap", "Child labor", "Discrimination"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u7",
            title: "Unit 7: Viet Nam and International Organisations",
            description: "Chủ đề Việt Nam và các tổ chức quốc tế (UN, ASEAN, UNESCO...).",
            vocab: [
                { word: "Organisation", phonetic: "/ˌɔːɡənaɪˈzeɪʃn/", meaning: "Tổ chức, cơ quan" },
                { word: "Global", phonetic: "/ˈgləʊbl/", meaning: "Toàn cầu" },
                { word: "Promote", phonetic: "/prəˈməʊt/", meaning: "Thúc đẩy, quảng bá" },
                { word: "MEMBER", phonetic: "/ˈmembə(r)/", meaning: "Thành viên" }
            ],
            quiz: [
                {
                    question: "Viet Nam has been an active __________ of ASEAN since 1995.",
                    options: ["leader", "member", "guest", "boss"],
                    answer: 1
                },
                {
                    question: "UNESCO works to __________ peace and security through international cooperation.",
                    options: ["promote", "prevent", "destroy", "stop"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u8",
            title: "Unit 8: New Ways to Learn",
            description: "Chủ đề Phương pháp học tập mới, công nghệ thông tin trong giáo dục.",
            vocab: [
                { word: "Platform", phonetic: "/ˈplætfɔːm/", meaning: "Nền tảng (công nghệ, giáo dục)" },
                { word: "Interactive", phonetic: "/ˌɪntərˈæktɪv/", meaning: "Tương tác" },
                { word: "Flexibility", phonetic: "/ˌfleksəˈbɪləti/", meaning: "Sự linh hoạt" },
                { word: "Virtual", phonetic: "/ˈvɜːtʃuəl/", meaning: "Ảo (thực tế ảo, lớp học ảo)" }
            ],
            quiz: [
                {
                    question: "Online learning offers great __________ because students can study anywhere.",
                    options: ["flexibility", "difficulty", "boredom", "pressure"],
                    answer: 0
                },
                {
                    question: "__________ classrooms allow students from different countries to study together.",
                    options: ["Virtual", "Traditional", "Wooden", "Crowded"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u9",
            title: "Unit 9: Protecting the Environment",
            description: "Chủ đề Bảo vệ môi trường sống, động vật hoang dã và hệ sinh thái.",
            vocab: [
                { word: "Endangered", phonetic: "/ɪnˈdeɪndʒəd/", meaning: "Có nguy cơ tuyệt chủng" },
                { word: "Habitat", phonetic: "/ˈhæbɪtæt/", meaning: "Môi trường sống, nơi sống tự nhiên" },
                { word: "Poaching", phonetic: "/ˈpəʊtʃɪŋ/", meaning: "Sắn bắt trộm động vật" },
                { word: "Conservation", phonetic: "/ˌkɒnsəˈveɪʃn/", meaning: "Sự bảo tồn" }
            ],
            quiz: [
                {
                    question: "Many species of animals are now under threat of becoming __________.",
                    options: ["endangered", "safe", "numerous", "healthy"],
                    answer: 0
                },
                {
                    question: "Deforestation destroys the natural __________ of many wild animals.",
                    options: ["habitat", "factory", "city", "house"],
                    answer: 0
                }
            ]
        },
        {
            id: "g10-u10",
            title: "Unit 10: Ecotourism",
            description: "Chủ đề Du lịch sinh thái và du lịch bền vững.",
            vocab: [
                { word: "Ecotourism", phonetic: "/ˈiːkəʊtʊərɪzəm/", meaning: "Du lịch sinh thái" },
                { word: "Sustainable", phonetic: "/səˈsteɪnəbl/", meaning: "Bền vững" },
                { word: "Destination", phonetic: "/ˌdestɪˈneɪʃn/", meaning: "Điểm đến" },
                { word: "Impact", phonetic: "/ˈɪmpækt/", meaning: "Tác động, ảnh hưởng" }
            ],
            quiz: [
                {
                    question: "__________ helps protect nature while supporting local communities.",
                    options: ["Mass tourism", "Ecotourism", "Industrialization", "Urbanization"],
                    answer: 1
                },
                {
                    question: "We should minimize negative __________ on the local environment when traveling.",
                    options: ["impacts", "benefits", "advantages", "improvements"],
                    answer: 0
                }
            ]
        }
    ]
};
