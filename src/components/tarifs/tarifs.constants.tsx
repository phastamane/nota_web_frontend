import type { JSX } from "react";

type PricingFeatureType = {
  title: string;
  description: string;
};

type PricingPlanType = {
  id: string;
  icon: JSX.Element;
  label: string;
  title: string;
  subtitle: string;
  flatLicense: string;
  license: string;
  flatRate: string;
  rate: string;
  cta: string;
  features: PricingFeatureType[];
};

export const PRICING_PLANS: PricingPlanType[] = [
  {
    id: "cloud",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
        />
      </svg>
    ),
    label: "CLOUD",
    title: "Свяжитесь с нами",
    subtitle: "Для независимых нотариусов",
    flatLicense: "1",
    license: "лицензия нотариуса",
    flatRate: "Фиксированная",
    rate: "ставка за транзакцию",
    cta: "Связаться с отделом продаж",
    features: [
      {
        title: "Хранение видео и документов.",
        description: "Детали транзакций доступны тогда, когда они вам нужны.",
      },
      {
        title: "Поддержка PDF-документов.",
        description: "Загружайте любые PDF-файлы для нотариального заверения.",
      },
    ],
  },
  {
    id: "team",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
    label: "TEAM",
    title: "Свяжитесь с нами",
    subtitle: "Для компаний и команд нотариусов",
    flatLicense: "2",
    license: "лицензии нотариуса",
    flatRate: "Фиксированная",
    rate: "ставка за транзакцию",
    cta: "Связаться с отделом продаж",
    features: [
      {
        title: "API для разработчиков.",
        description: "Доступ к API включён в планы Team и Enterprise.",
      },
      {
        title: "Частная платформа.",
        description:
          "Размещается на частном облачном сервере для конфиденциальности и безопасности.",
      },
    ],
  },
  {
    id: "enterprise",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    label: "ENTERPRISE",
    title: "Свяжитесь с нами",
    subtitle: "Для крупных предприятий",
    flatLicense: "24/7/365",
    license: "Техническая поддержка",
    flatRate: "Включены",
    rate: "функции уровня Enterprise",
    cta: "Связаться с отделом продаж",
    features: [
      {
        title: "Функции для организаций и подразделений.",
        description:
          "Приглашайте свои команды нотариусов со всей территории США прямо в платформе.",
      },
      {
        title: "Соответствие корпоративным стандартам.",
        description:
          "SOC II (Type 2) и MISMO-сертификация — подтверждено с 2021 года.",
      },
    ],
  },
];
