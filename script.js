const translations = {
    ru: {
        name: "МАГОМЕД ГАДЖИЕВ",
        roles: "РЕЖИССЕР / КРЕАТИВНЫЙ ПРОДЮСЕР",
        filter_all: "ВСЕ ПРОЕКТЫ",
        filter_narrative: "КИНО И СЕРИАЛЫ",
        filter_commercial: "РЕКЛАМА",
        title_skazki: "Русские народные: вся правда о сказках",
        title_sex: "История русского секса",
        title_scam: "На крючке: когда звонит мошенник",
        about_title: "ОБО МНЕ",
        about_text: "Веду полный цикл производства: от концепции и брифа до финальной сдачи клиенту. Работал с OKKO, СБЕР, Кортрос, Tekta Group, ведущими рекламными агентствами и продакшнами. Управляю большими командами и крупными бюджетами. Специализируюсь на координации проектов с высоким объёмом компьютерной графики и визуальных эффектов и параллельных производственных процессов. Создаю проекты, где всё — ИИ-анимация, а не реальные съемки, и где фундаментальная наука пересекается с реальным производством и бизнесом. Мои работы участвовали и побеждали в фестивалях (Original+ Doc, «Пилот», «Послание к человеку», WOW awards).",
        clients_title: "КЛИЕНТЫ",
        footer_contact: "КОНТАКТЫ",
        footer_social: "СОЦСЕТИ"
    },
    en: {
        name: "MUHAMMAD GADZHIEV",
        roles: "DIRECTOR / CREATIVE PRODUCER",
        filter_all: "ALL PROJECTS",
        filter_narrative: "NARRATIVE",
        filter_commercial: "COMMERCIAL",
        title_skazki: "Russian Folktales: The Whole Truth About Fairy Tales",
        title_sex: "History of Russian Sex",
        title_scam: "On the Hook: When a Scammer Calls",
        about_title: "ABOUT ME",
        about_text: "I lead full-cycle production: from concept and brief to final delivery. Selected clients include OKKO, SBER, Kortros, Tekta Group, along with leading creative agencies and production companies. I manage large teams and major budgets. I specialize in the coordination of projects with a high volume of computer graphics and visual effects, and complex parallel production pipelines. I create projects where everything is AI animation, not live-action filming, and where fundamental science intersects with real production and business. My work has been featured and awarded at festivals including Original+ Doc, Pilot, Message to Man, and WOW Awards.",
        clients_title: "CLIENTS",
        footer_contact: "CONTACTS",
        footer_social: "SOCIAL"
    }
};

let currentLang = 'ru';
const langBtn = document.getElementById('lang-switch');

// Функция обновления текста
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
}

// Принудительно применяем язык при первой загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});

// Переключение по клику
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    updateLanguage();
});

// Логика фильтров
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
