const teachersData = [
  { id: "t-math", initials: "—", subjectKey: "subj_math",
    translations: {
      "uz-latin": { name: "Tez kunda e'lon qilinadi", bio: "Matematika ustozimiz haqida ma'lumot tez kunda qo'shiladi." },
      "uz-cyrillic": { name: "Тез кунда эълон қилинади", bio: "Математика устозимиз ҳақида маълумот тез кунда қўшилади." },
      "ru": { name: "Скоро будет объявлено", bio: "Информация о преподавателе математики появится скоро." },
      "en": { name: "Coming soon", bio: "Details about our math teacher will be added soon." }
    }
  },
  { id: "t-english", initials: "—", subjectKey: "subj_english",
    translations: {
      "uz-latin": { name: "Tez kunda e'lon qilinadi", bio: "Ingliz tili ustozimiz haqida ma'lumot tez kunda qo'shiladi." },
      "uz-cyrillic": { name: "Тез кунда эълон қилинади", bio: "Инглиз тили устозимиз ҳақида маълумот тез кунда қўшилади." },
      "ru": { name: "Скоро будет объявлено", bio: "Информация о преподавателе английского появится скоро." },
      "en": { name: "Coming soon", bio: "Details about our English teacher will be added soon." }
    }
  },
  { id: "t-history", initials: "—", subjectKey: "subj_history",
    translations: {
      "uz-latin": { name: "Tez kunda e'lon qilinadi", bio: "Tarix ustozimiz haqida ma'lumot tez kunda qo'shiladi." },
      "uz-cyrillic": { name: "Тез кунда эълон қилинади", bio: "Тарих устозимиз ҳақида маълумот тез кунда қўшилади." },
      "ru": { name: "Скоро будет объявлено", bio: "Информация о преподавателе истории появится скоро." },
      "en": { name: "Coming soon", bio: "Details about our history teacher will be added soon." }
    }
  },
  { id: "t-native", initials: "—", subjectKey: "subj_native",
    translations: {
      "uz-latin": { name: "Tez kunda e'lon qilinadi", bio: "Ona tili ustozimiz haqida ma'lumot tez kunda qo'shiladi." },
      "uz-cyrillic": { name: "Тез кунда эълон қилинади", bio: "Она тили устозимиз ҳақида маълумот тез кунда қўшилади." },
      "ru": { name: "Скоро будет объявлено", bio: "Информация о преподавателе родного языка появится скоро." },
      "en": { name: "Coming soon", bio: "Details about our native language teacher will be added soon." }
    }
  },
  { id: "t-russian", initials: "—", subjectKey: "subj_russian",
    translations: {
      "uz-latin": { name: "Tez kunda e'lon qilinadi", bio: "Rus tili ustozimiz haqida ma'lumot tez kunda qo'shiladi." },
      "uz-cyrillic": { name: "Тез кунда эълон қилинади", bio: "Рус тили устозимиз ҳақида маълумот тез кунда қўшилади." },
      "ru": { name: "Скоро будет объявлено", bio: "Информация о преподавателе русского языка появится скоро." },
      "en": { name: "Coming soon", bio: "Details about our Russian teacher will be added soon." }
    }
  }
];

const teacherUiLabels = {
  "uz-latin": { experience: "Tajribali ustoz" },
  "uz-cyrillic": { experience: "Тажрибали устоз" },
  "ru": { experience: "Опытный преподаватель" },
  "en": { experience: "Experienced teacher" }
};