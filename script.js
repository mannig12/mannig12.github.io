const translations = {
    ru: {
        name: "Магомед Гаджиев",
        roles: "Режиссер и Креативный продюсер",
        about_text: "Веду полный цикл производства: от концепции и брифа до финальной сдачи клиенту и платформе. Работал с OKKO, СБЕР, Кортрос, Tekta Group, ведущими рекламными агентствами и продакшнами. Управляю большими командами и крупными бюджетами. Специализируюсь на координации проектов с высоким объёмом CGI/VFX и параллельных производственных процессов. Создаю анимационные, художественные и рекламные проекты с использованием ИИ. Мои работы участвовали и побеждали в фестивалях (Original+ Doc, «Пилот», «Послание к человеку», WOW awards)."
    },
    en: {
        name: "Muhammad Gadzhiev",
        roles: "Director & Creative Producer",
        about_text: "I lead full-cycle production: from concept and brief to final delivery. Selected clients include OKKO, SBER, Kortros, Tekta Group, along with leading creative agencies. I manage large teams and major budgets, specializing in heavy CGI/VFX coordination and complex parallel production pipelines. I develop animated, narrative, and commercial projects utilizing AI. My work has been featured and awarded at festivals including Original+ Doc, Pilot, Message to Man, and WOW Awards."
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
