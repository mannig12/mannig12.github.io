const translations = {
    ru: {
        name: "МАГОМЕД ГАДЖИЕВ",
        roles: "Режиссер / Креативный продюсер",
        filter_all: "Все проекты",
        filter_narrative: "Кино и Сериалы",
        filter_commercial: "Реклама",
        about_title: "ОБО МНЕ",
        about_text: "Веду полный цикл производства: от концепции и брифа до финальной сдачи клиенту и платформе. Работал с OKKO, СБЕР, Кортрос, Tekta Group, ведущими рекламными агентствами и продакшнами. Управляю большими командами и крупными бюджетами. Специализируюсь на координации проектов с высоким объёмом CGI/VFX и параллельных производственных процессов. Создаю полностью основанные на искусственном интеллекте анимационные, художественные и рекламные проекты. Мои работы участвовали и побеждали в фестивалях (Original+ Doc, «Пилот», «Послание к человеку», WOW awards).",
        clients_title: "С КЕМ Я РАБОТАЛ",
        footer_heading: "СВЯЗАТЬСЯ"
    },
    en: {
        name: "MUHAMMAD GADZHIEV",
        roles: "Director / Creative Producer",
        filter_all: "All Projects",
        filter_narrative: "Narrative",
        filter_commercial: "Commercial",
        about_title: "ABOUT ME",
        about_text: "I lead full-cycle production: from concept and brief to final delivery. Selected clients include OKKO, SBER, Kortros, Tekta Group, along with leading creative agencies. I manage large teams and major budgets, specializing in heavy CGI/VFX coordination and complex parallel production pipelines. I develop fully AI-animated, narrative, and commercial projects. My work has been featured and awarded at festivals including Original+ Doc, Pilot, Message to Man, and WOW Awards.",
        clients_title: "SELECTED CLIENTS",
        footer_heading: "GET IN TOUCH"
    }
};

let currentLang = 'ru';
const langBtn = document.getElementById('lang-switch');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const videoItems = document.querySelectorAll('.video-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        videoItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
