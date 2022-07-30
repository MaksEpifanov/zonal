<div id="top"></div>

[Техническое задание](./docs/technical_requirements.md)

# Zonal

Zonal - SPA состоящее из нескольких частей (далее модулей):
 - часы с возможностью выбора определенных городов;
 - секундомер; 
 - помидора (["Метод помидора"](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0));
 - список дел (Todo).

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#links">Links</a></li>
      </ul>
    </li>
    <li>
      <a href="#my-process">My process</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#what-i-learned">What I learned</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Overview

### Screenshots

### Links

-   [Live Site URL](https://MaksEpifanov.github.io/zonal/)

-   [Figma](https://www.figma.com/file/u1bCuOvcB0PK0LfC0F06zD/Zonal?node-id=0%3A1)

<p align="right">(<a href="#top">back to top</a>)</p>

### Technologies

![React](https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![ContextAPI](https://img.shields.io/badge/Context-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![React router](https://img.shields.io/badge/react_router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=white)

![SCSS](https://img.shields.io/badge/SASS/SCSS-CC6699.svg?style=for-the-badge&logo=react&logoColor=white)
![CSS modules](https://img.shields.io/badge/CSS_modules-000000.svg?style=for-the-badge&logo=cssmodules&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-000000.svg?style=for-the-badge&logo=bem&logoColor=white)

![i18next](https://img.shields.io/badge/i18next-26A69A.svg?style=for-the-badge&logo=i18next&logoColor=white)

![ESlint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Features

- Адаптивное приложение.
- Переключение светлой/темной темы. Реализация: native CSS variables.
- Выбор языка. Реализация: i18next (react-i18next).
- Часы. Возможность добавлять города и выбирать город из списка с изменением времени (устанавливается временная зона выбранного города).
- Секундомер. Возможность измерять интервалы времени с записью результатов в таблицу.
- Помидора. Техника ["помидора"](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0). Простой инструмент для улучшения производительности. Возможность настройки времени (для перерывов и рабочего времени). После каждого рабочего "помидора" включается короткий перерыв, после 4 включается длинный перерыв.
- Список дел (todo). Сортировка по категориям, возможность создавать, удалять и переключаться между категориями. Задачи сортируются по категориям, возможность создания, удаления, выполнения задачи.

<p align="right">(<a href="#top">back to top</a>)</p>

### What I learned

- Базовая проработка технического задания.
- Context API (c useReducer).
- i18next framework для локализации.
- Комбинация [CSS modules](https://github.com/css-modules/css-modules) + [SCSS](https://sass-lang.com/) + [classnames](https://www.npmjs.com/package/classnames) + [BEM](https://ru.bem.info/).
- [ESlint](https://eslint.org/) + [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [ ] Разбить Global state на несколько. Для каждого модуля свой стейт (Избавит от перерисовок).
- [ ] Улучшить производительность (Lazy function, memoization ...).
- [ ] Часы. Подключение API с городами для увеличения вариантов выбора.
- [ ] Добавление дополнительных языков.
- [ ] Увеличение адаптированных разрешений.

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

1. Клонировать репозиторий 
  ```sh
  git clone https://github.com/MaksEpifanov/zonal
  ```
2. Установить зависимости
  ```sh
  npm install
  ```
3. 
Запустить проект
  ```sh
  npm start
  ```
Собрать проект
  ```sh
  npm build
  ```
4. Для размещения на github pages в `package.json` изменить `homepage`
  ```sh
  npm deploy
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Maks Epifanov

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/klimov4_maks)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/maksepifanov)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maksepifanovbr@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>

