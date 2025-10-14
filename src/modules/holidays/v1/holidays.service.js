// Function to calculate Easter Sunday for a given year
const calculateEaster = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
};

// Function to get the Romanian name of the weekday
const getWeekday = (date) => {
  const weekdays = [
    "Duminică",
    "Luni",
    "Marți",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sâmbătă",
  ];
  return weekdays[date.getDay()];
};

class HolidaysService {
  static getHolidays(year) {
    if (!year) year = new Date().getFullYear();

    const easter = calculateEaster(year);
    const easterMonday = new Date(easter);
    easterMonday.setDate(easter.getDate() + 1);

    const holidays = [
      { name: "Anul Nou", date: new Date(year, 0, 1) },
      { name: "A doua zi de Anul Nou", date: new Date(year, 0, 2) },
      { name: "Ziua Unirii Principatelor Române", date: new Date(year, 0, 24) },
      { name: "Paștele", date: easter },
      { name: "Paștele - a doua zi", date: easterMonday },
      { name: "Ziua Muncii", date: new Date(year, 4, 1) },
      { name: "Ziua Copilului", date: new Date(year, 5, 1) },
      { name: "Adormirea Maicii Domnului", date: new Date(year, 7, 15) },
      { name: "Sfântul Andrei", date: new Date(year, 10, 30) },
      { name: "Ziua Națională a României", date: new Date(year, 11, 1) },
      { name: "Crăciunul", date: new Date(year, 11, 25) },
      { name: "A doua zi de Crăciun", date: new Date(year, 11, 26) },
    ];

    return holidays.map((h) => ({
      name: h.name,
      date: h.date.toISOString().split("T")[0],
      weekday: getWeekday(h.date),
    }));
  }
}

export default HolidaysService;
