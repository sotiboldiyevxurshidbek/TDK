const coursesData = [
  {
    id: "math",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19V11"/><path d="M10 19V6"/><path d="M16 19v-8"/><path d="M3 19h18"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Matematika",
        tagline: "Mantiqiy fikrlashdan murakkab masalalar yechimigacha",
        description: "Matematika kursi o'quvchilarda mantiqiy fikrlash, masalalarni tahlil qilish va aniq yechim topish ko'nikmalarini shakllantiradi. Dars rejasi maktab dasturi va olimpiada darajasidagi mavzularni qamrab oladi.",
        audience: "5–11-sinf o'quvchilari, shu jumladan Prezident maktablariga tayyorlanayotganlar uchun.",
        learn: ["Algebra va geometriya asoslari", "Masala yechish strategiyalari", "Olimpiada va test topshiriqlari", "Mantiqiy fikrlash mashqlari"],
        duration: "10 oy, haftada 3 marta, 90 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Kichik guruhlarda individual yondashuv", "Har oylik nazorat testlari", "Uyga vazifalar bo'yicha qo'llab-quvvatlash"]
      }
    }
  },
  {
    id: "english",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12c0 4.4-4 8-9 8-1 0-2-.1-2.9-.4L4 21l1.3-4A8.6 8.6 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Ingliz tili",
        tagline: "So'zlashuvdan xalqaro sertifikatlargacha",
        description: "Ingliz tili kursi o'quvchilarni amaliy muloqotga va xalqaro imtihonlarga tayyorlaydi. Darslar tinglash, gapirish, o'qish va yozish ko'nikmalarini teng darajada rivojlantiradi.",
        audience: "Boshlang'ich darajadan yuqori darajagacha barcha yosh guruhlari uchun.",
        learn: ["Grammatika va lug'at boyligi", "Erkin muloqot mashqlari", "IELTS/CEFR formatidagi testlar", "Yozma ish ko'nikmalari"],
        duration: "8 oy, haftada 3 marta, 80 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Native audio materiallar bilan mashq", "Darajaga ko'ra guruhlash", "Har semestrda sinov imtihoni"]
      }
    }
  },
  {
    id: "history",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21h16M5 21V9M9 21V9M15 21V9M19 21V9M3 9l9-5 9 5"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Tarix",
        tagline: "O'tmishni anglash, bugunni tushunish",
        description: "Tarix kursi jahon va O'zbekiston tarixini tizimli tarzda o'rgatadi, voqealar o'rtasidagi bog'liqlikni tushunishga va tahliliy fikrlashga o'rgatadi.",
        audience: "Maktab dasturi bo'yicha tarix faniga ehtiyoj sezadigan o'quvchilar uchun.",
        learn: ["Jahon tarixi asosiy davrlari", "O'zbekiston tarixi", "Voqealarni tahlil qilish", "Test va insho yozish ko'nikmalari"],
        duration: "9 oy, haftada 2 marta, 90 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Vizual va interaktiv materiallar", "Muntazam test sinovlari", "Insho yozish bo'yicha individual fikr-mulohaza"]
      }
    }
  },
  {
    id: "native",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Ona tili",
        tagline: "To'g'ri va ravon ifoda etish san'ati",
        description: "Ona tili kursi grammatika, imlo va nutq madaniyatini chuqur o'rgatadi, o'quvchida ravon va savodli yozish ko'nikmalarini shakllantiradi.",
        audience: "Savodxonligini oshirishni istagan barcha sinf o'quvchilari uchun.",
        learn: ["Grammatika va imlo qoidalari", "Insho va matn yozish", "Nutq madaniyati", "Test topshiriqlari"],
        duration: "9 oy, haftada 2 marta, 80 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Har bir o'quvchiga yozma ish bo'yicha izoh", "Doimiy lug'at boyitish mashqlari", "Test va insho bo'yicha tayyorgarlik"]
      }
    }
  },
  {
    id: "russian",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Rus tili",
        tagline: "Amaliy muloqotdan adabiy matngacha",
        description: "Rus tili kursi grammatika asoslaridan tortib erkin muloqotgacha bo'lgan barcha bosqichlarni qamrab oladi, o'quvchilarni amaliyotda erkin foydalanishga tayyorlaydi.",
        audience: "Boshlang'ich darajadan o'rta darajagacha bo'lgan o'quvchilar uchun.",
        learn: ["Grammatika va lug'at", "Erkin muloqot mashqlari", "O'qish va tushunish", "Yozma ish ko'nikmalari"],
        duration: "8 oy, haftada 3 marta, 80 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Amaliy muloqot mashg'ulotlari", "Darajaga ko'ra guruhlash", "Muntazam progress nazorati"]
      }
    }
  },
  {
    id: "programming",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16"/></svg>`,
    translations: {
      "uz-latin": {
        title: "Dasturlash",
        tagline: "G'oyadan ishlaydigan dasturgacha",
        description: "Dasturlash kursi o'quvchilarni zamonaviy dasturlash tillari va algoritmik fikrlash asoslari bilan tanishtiradi, amaliy loyihalar orqali bilimni mustahkamlaydi.",
        audience: "Mantiqiy fikrlashni rivojlantirishni va IT sohasida rivojlanishni istagan o'quvchilar uchun.",
        learn: ["Dasturlash asoslari va algoritmlar", "Veb-sahifalar yaratish (HTML, CSS, JavaScript)", "Kichik amaliy loyihalar", "Muammolarni mantiqiy yechish ko'nikmalari"],
        duration: "10 oy, haftada 2 marta, 90 daqiqa",
        teacherPlaceholder: "Ustoz ma'lumotlari tez kunda qo'shiladi",
        benefits: ["Amaliyotga yo'naltirilgan darslar", "Real loyihalar ustida ishlash", "IT sohasidagi kelajakka tayyorgarlik"]
      }
    }
  }
];

const courseUiLabels = {
  "uz-latin": { audience: "Kimlar uchun", learn: "Nimalar o'rgatiladi", duration: "Davomiyligi", benefits: "Afzalliklari", teacher: "Ustoz", more: "Batafsil", register: "Ro'yxatdan o'tish", notFound: "Kurs topilmadi", back: "Kurslarga qaytish" },
  "uz-cyrillic": { audience: "Кимлар учун", learn: "Нималар ўргатилади", duration: "Давомийлиги", benefits: "Афзалликлари", teacher: "Устоз", more: "Батафсил", register: "Рўйхатдан ўтиш", notFound: "Курс топилмади", back: "Курсларга қайтиш" },
  "ru": { audience: "Для кого", learn: "Чему вы научитесь", duration: "Продолжительность", benefits: "Преимущества", teacher: "Преподаватель", more: "Подробнее", register: "Подать заявку", notFound: "Курс не найден", back: "Назад к курсам" },
  "en": { audience: "Who it's for", learn: "What you'll learn", duration: "Duration", benefits: "Benefits", teacher: "Teacher", more: "Learn more", register: "Apply now", notFound: "Course not found", back: "Back to courses" }
};