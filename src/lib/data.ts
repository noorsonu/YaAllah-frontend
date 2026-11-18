import { Article, Category, LibraryResource } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Daily Duas',
    slug: 'daily-duas',
    description: 'Essential morning, evening, and daily prayers for peace, protection, and continuous remembrance.',
    icon: 'Sun',
    count: 48,
  },
  {
    id: 'cat-2',
    name: 'Important Wazaif',
    slug: 'wazaif',
    description: 'Authentic tested wazaif and spiritual practices for specific needs, hardships, and life challenges.',
    icon: 'Sparkles',
    count: 65,
  },
  {
    id: 'cat-3',
    name: 'Islamic Knowledge',
    slug: 'islamic-knowledge',
    description: 'Comprehensive guides, Sunnah etiquette, Quranic insights, and foundational Islamic teachings.',
    icon: 'BookOpen',
    count: 82,
  },
  {
    id: 'cat-4',
    name: 'Islamic Library',
    slug: 'library',
    description: 'Curated collection of downloadable PDF books, Masnoon dua sheets, and educational resources.',
    icon: 'Library',
    count: 34,
  },
  {
    id: 'cat-5',
    name: 'Marriage & Family',
    slug: 'marriage-related',
    description: 'Duas for pious spouse, marriage proposals, resolving family discord, and blissful marital life.',
    icon: 'HeartHandshake',
    count: 42,
  },
  {
    id: 'cat-6',
    name: 'Spiritual Healing',
    slug: 'spiritual-healing',
    description: 'Ruqyah Shari’ah, Quranic shifa for sickness, anxiety relief, and evil-eye protection.',
    icon: 'ShieldCheck',
    count: 39,
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'nad-e-ali-shareef',
    title: 'Nad e Ali Shareef: Meaning, Full Transliteration & Method of Recitation',
    excerpt: 'Comprehensive guide on reciting the renowned Nad-e-Ali invocation for overcoming insurmountable obstacles, distress, and seeking divine aid.',
    category: {
      name: 'Important Wazaif',
      slug: 'wazaif',
    },
    author: {
      name: 'Al-Hajj Imran Raza',
      bio: 'Islamic scholar and author specializing in authentic Sunnah supplications and traditional wazaif.',
    },
    publishedAt: 'October 14, 2026',
    readTime: '6 min read',
    featuredImage: '/images/mosque-hero.jpg',
    featured: true,
    isPopular: true,
    commentCount: 28,
    tags: ['Nad-e-Ali', 'Difficulties', 'Protection', 'Tried & Tested'],
    arabicDua: {
      arabic: 'نَادِ عَلِيّاً مَظْهَرَ الْعَجَائِبِ تَجِدْهُ عَوْناً لَّكَ فِي النَّوَائِبِ كُلُّ هَمٍّ وَّغَمٍّ سَيَنْجَلِيْ بِعَظَمَتِكَ يَا اَللهُ، بِنُبُوَّتِكَ يَا رَسُوْلَ اللهِ',
      transliteration: 'Naad-e-Aliyyan Mazhar-al-Ajaa-ib, Tajid-hu Aunan Laka Fin-Nawaa-ib, Kullu Hamminw Wa Ghammin Sayanjali Bi-Azamatika Ya Allah, Bi-Nubuwwatika Ya Rasool Allah.',
      englishTranslation: 'Call upon Ali, the revealer of wonders; you will find him a helper in distress. Every grief and sorrow will soon disperse, by Your majesty O Allah, and by your prophethood O Messenger of Allah.',
      hindiTranslation: 'नादे अली को पुकारो जो अजूबों के ज़ाहिर करने वाले हैं, हर परेशानी और ग़म दूर हो जाएगा तेरी अज़मत के सदके या अल्लाह।',
      reference: 'Classical Islamic Supplication Compendiums',
      benefits: [
        'Relief from prolonged distress, financial strain, and anxiety.',
        'Protection against hostile adversaries and unseen harm.',
        'Spiritual fortitude when undertaking crucial life decisions.',
      ],
    },
    content: `
      <p>Supplication (Dua) is the essence of worship. When faced with trials that seem beyond human capacity, turning to Allah Ta’ala with sincerity and established wazaif provides unshakeable spiritual relief.</p>
      
      <h3>Virtue and Context of Nad e Ali</h3>
      <p>Nad e Ali is widely known across traditional Islamic devotional literature as a potent supplication for divine assistance in times of grief, oppression, or sudden hardships. While maintaining firm Tawheed and trusting completely in the decree of Allah Almighty, reciting this dua opens doors of ease through divine mercy.</p>
      
      <h3>Prerequisites and Etiquette</h3>
      <ul>
        <li>Ensure complete physical purity (Taharah / Wudu) and clean clothes.</li>
        <li>Sit in a quiet space facing the Qiblah with focused concentration.</li>
        <li>Begin and end with 11 times Durood Shareef (Salawat upon the Prophet ﷺ).</li>
        <li>Make sincere Istighfar (repentance) before commencing your plea.</li>
      </ul>
      
      <h3>Recommended Schedule</h3>
      <p>Recite 7 times after Fajr or Isha prayer continuously for 7, 11, or 21 days with firm conviction in the mercy of Allah Subhanahu Wa Ta'ala.</p>
    `,
  },
  {
    id: 'art-2',
    slug: 'facing-hardships-make-a-dua',
    title: 'Facing Hardships? The Complete Prophetic Dua for Relief and Ease',
    excerpt: 'The authentic supplication taught by Prophet Muhammad ﷺ to remove distress, dissolve debts, and grant inner peace during difficult moments.',
    category: {
      name: 'Daily Duas',
      slug: 'daily-duas',
    },
    author: {
      name: 'Sheikh Farhan Qasmi',
      bio: 'Senior researcher in Hadith literature and daily Sunnah supplications.',
    },
    publishedAt: 'November 02, 2026',
    readTime: '5 min read',
    featuredImage: '/images/blue-mosque.jpg',
    featured: true,
    isPopular: true,
    commentCount: 42,
    tags: ['Anxiety', 'Depression', 'Hardship', 'Sunnah Dua'],
    arabicDua: {
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
      transliteration: 'Allahumma inni a’udhu bika minal-hammi wal-hazani, wa a’udhu bika minal-’ajzi wal-kasali, wa a’udhu bika minal-jubni wal-bukhli, wa a’udhu bika min ghalabatid-dayni wa qahrir-rijal.',
      englishTranslation: 'O Allah, I seek refuge in You from grief and sadness, from weakness and laziness, from cowardice and stinginess, and from the burden of debt and the oppression of men.',
      hindiTranslation: 'ऐ अल्लाह, मैं रंज और ग़म से, लाचारी और सुस्ती से, बुज़दिली और कंजूसी से, क़र्ज़ के बोझ और लोगों के दबाव से तेरी पनाह चाहता हूँ।',
      reference: 'Sahih al-Bukhari 2893',
      benefits: [
        'Protects the mind against anxiety and paralyzing grief.',
        'Grants motivation against procrastination and lethargy.',
        'Shields from insurmountable debts and social subjugation.',
      ],
    },
    content: `
      <p>Life in this world is inherently accompanied by trials and tribulations. The Quran assures believers: <em>"Indeed, with hardship comes ease"</em> (Surah Ash-Sharh 94:6).</p>
      
      <h3>The Hadith of Abu Umamah (RA)</h3>
      <p>Abu Sa’id al-Khudri reported that the Messenger of Allah ﷺ entered the mosque one day and saw an Ansari man named Abu Umamah sitting in deep sorrow. The Prophet ﷺ said: <em>"Shall I not teach you words by which Allah will remove your worry and settle your debt?"</em> He replied yes, and the Prophet ﷺ instructed him to recite this Dua morning and evening.</p>
    `,
  },
  {
    id: 'art-3',
    slug: 'ayatul-kursi-virtues-and-benefits',
    title: 'Ayatul Kursi: Virtues, Spiritual Protection & Authentic Hadith References',
    excerpt: 'Discover why the Verse of the Throne (Surah Al-Baqarah 2:255) is the greatest verse in the Noble Quran and how to implement it into your daily fortress.',
    category: {
      name: 'Islamic Knowledge',
      slug: 'islamic-knowledge',
    },
    author: {
      name: 'Dr. Tariq Al-Madani',
      bio: 'Lecturer in Quranic Exegesis and Islamic Creed.',
    },
    publishedAt: 'November 10, 2026',
    readTime: '7 min read',
    featuredImage: '/images/quran.jpg',
    featured: true,
    isPopular: false,
    commentCount: 19,
    tags: ['Ayatul Kursi', 'Quran', 'Protection', 'Angels'],
    arabicDua: {
      arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
      transliteration: 'Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum. La ta’khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard...',
      englishTranslation: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.',
      reference: 'Surah Al-Baqarah (2:255)',
      benefits: [
        'An angel is assigned to protect your home throughout the night until morning.',
        'Whoever recites it after every obligatory prayer, nothing stands between him and Paradise except death (Sunan an-Nasa’i).',
        'Clears the mind of demonic whispers, nightmares, and restlessness.',
      ],
    },
    content: `
      <p>Ayatul Kursi is widely regarded as the crown jewel of Quranic revelations. It declares the transcendent Majesty, absolute Sovereignty, and eternal Life of the Creator.</p>
    `,
  },
  {
    id: 'art-4',
    slug: 'dua-for-love-marriage-and-pious-spouse',
    title: 'Tried and Tested Wazifa for Marriage and Overcoming Relationship Hurdles',
    excerpt: 'Authentic Quranic invocations to attract a compatible righteous spouse and dissolve misunderstandings between families with dignity and barakah.',
    category: {
      name: 'Important Wazaif',
      slug: 'wazaif',
    },
    author: {
      name: 'Al-Hajj Imran Raza',
      bio: 'Islamic scholar and author specializing in authentic Sunnah supplications.',
    },
    publishedAt: 'October 28, 2026',
    readTime: '8 min read',
    featuredImage: '/images/mosque-hero.jpg',
    featured: false,
    isPopular: true,
    commentCount: 56,
    tags: ['Marriage', 'Spouse', 'Istikhara', 'Family Harmony'],
    arabicDua: {
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَاماً',
      transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a’yunin waj’alna lil-muttaqina imama.',
      englishTranslation: 'Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader for the righteous.',
      reference: 'Surah Al-Furqan (25:74)',
      benefits: [
        'Draws pious affection and mutual respect between husband and wife.',
        'Eases parental consent and dissolves communication obstacles.',
        'Grants righteous progeny who will be a source of joy.',
      ],
    },
    content: `
      <p>Marriage in Islam is half of one's faith. Seeking Allah’s guidance through Istikhara and regular Quranic supplications protects the sacred bond from bitterness and despair.</p>
    `,
  },
  {
    id: 'art-5',
    slug: 'ruqyah-and-spiritual-healing-for-illness',
    title: 'Ruqyah Shari’ah: Quranic Healer for Body, Mind & Evil Eye (Ayn)',
    excerpt: 'How to perform authentic prophetic spiritual healing using Surah Al-Fatihah, the Mu’awwidhatayn, and established prophetic supplications.',
    category: {
      name: 'Spiritual Healing',
      slug: 'spiritual-healing',
    },
    author: {
      name: 'Sheikh Farhan Qasmi',
      bio: 'Senior researcher in Hadith literature.',
    },
    publishedAt: 'November 05, 2026',
    readTime: '6 min read',
    featuredImage: '/images/quran.jpg',
    featured: false,
    isPopular: false,
    commentCount: 15,
    tags: ['Ruqyah', 'Shifa', 'Health', 'Protection'],
    arabicDua: {
      arabic: 'أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَماً',
      transliteration: 'Adh-hibil-ba’sa Rabban-nas, ishfi wa Antash-Shafi, la shifa’a illa shifa’uka, shifa’an la yughadiru saqama.',
      englishTranslation: 'Remove the harm, O Lord of humanity, and heal; You are the Healer. There is no healing except Your healing—a healing that leaves no illness behind.',
      reference: 'Sahih al-Bukhari 5743',
      benefits: [
        'Prophetic prayer recited by the Messenger ﷺ over the sick.',
        'Spiritual complement to medical treatments approved by qualified doctors.',
        'Brings serenity, patience, and swift recuperation.',
      ],
    },
    content: `
      <p>Medical treatments and spiritual supplications complement one another. One must consult qualified doctors while simultaneously seeking Shifa from the ultimate Healer, Allah.</p>
    `,
  },
  {
    id: 'art-6',
    slug: 'morning-and-evening-azkar-sunnah',
    title: 'Essential Morning & Evening Azkar (Subah Sham Ke Masnoon Azkar)',
    excerpt: 'The daily shield of the believer: key supplications to recite every sunrise and sunset for unwavering peace, barakah, and divine preservation.',
    category: {
      name: 'Daily Duas',
      slug: 'daily-duas',
    },
    author: {
      name: 'Dr. Tariq Al-Madani',
      bio: 'Lecturer in Quranic Exegesis and Islamic Creed.',
    },
    publishedAt: 'November 12, 2026',
    readTime: '9 min read',
    featuredImage: '/images/blue-mosque.jpg',
    featured: false,
    isPopular: true,
    commentCount: 33,
    tags: ['Azkar', 'Morning', 'Evening', 'Barakah'],
    arabicDua: {
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
      transliteration: 'Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah.',
      englishTranslation: 'We have entered the morning, and the dominion belongs to Allah; all praise is for Allah. There is no deity worthy of worship except Allah alone, without partner.',
      reference: 'Sahih Muslim 2723',
      benefits: [
        'Anchors the heart in gratitude at the dawn of every day.',
        'Bestows spiritual clarity and productivity throughout daily tasks.',
        'Shields against unexpected calamities and spiritual exhaustion.',
      ],
    },
    content: `
      <p>Reciting morning and evening adhkar is like putting on a suit of armor against life’s spiritual, mental, and physical trials.</p>
    `,
  },
];

export const LIBRARY_RESOURCES: LibraryResource[] = [
  {
    id: 'lib-1',
    title: 'Daily Masnoon Duas Pocket Guide',
    description: 'A comprehensive printable booklet covering morning, evening, sleep, travel, and meal supplications with Arabic, transliteration, and translation.',
    category: 'Daily Duas',
    fileType: 'PDF',
    fileSize: '3.4 MB',
    pages: 48,
    language: 'Arabic, English & Urdu',
    downloadUrl: '#download-guide-1',
    publishedAt: '2026-10-15',
  },
  {
    id: 'lib-2',
    title: 'Complete 40 Rabbana Duas from the Holy Quran',
    description: 'All 40 supplications starting with "Rabbana" extracted directly from the Quran with authentic tafsir notes, context, and phonetic pronunciation guide.',
    category: 'Quranic Duas',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    pages: 36,
    language: 'Arabic, English & Hindi',
    downloadUrl: '#download-guide-2',
    publishedAt: '2026-10-22',
  },
  {
    id: 'lib-3',
    title: 'Hisnul Muslim: Fortress of the Muslim (Verified Edition)',
    description: 'The world-renowned collection of authentic Hadith supplications compiled by Sa\'id bin Ali bin Wahf Al-Qahtani, meticulously formatted for mobile & print.',
    category: 'Hadith Supplications',
    fileType: 'BOOK',
    fileSize: '12.1 MB',
    pages: 210,
    language: 'Arabic & English',
    downloadUrl: '#download-guide-3',
    publishedAt: '2026-11-01',
  },
  {
    id: 'lib-4',
    title: 'The Guide to Istikhara & Making Right Decisions',
    description: 'Clear step-by-step instructions on performing Salat al-Istikhara, its exact dua, interpreting signs, and debunking common myths.',
    category: 'Islamic Guides',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    pages: 24,
    language: 'English & Urdu',
    downloadUrl: '#download-guide-4',
    publishedAt: '2026-11-08',
  },
  {
    id: 'lib-5',
    title: 'Ruqyah Shari’ah: Self-Treatment Recitation Audio & Sheet',
    description: 'High-clarity audio recitation sheet of the protective Quranic verses for evil-eye, spiritual ailments, and household protection.',
    category: 'Spiritual Healing',
    fileType: 'AUDIO',
    fileSize: '24.5 MB',
    pages: 12,
    language: 'Arabic & English',
    downloadUrl: '#download-guide-5',
    publishedAt: '2026-11-14',
  },
];
