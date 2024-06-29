# Readme

## ⭐️ TODO
- Storybook

---

## ⭐️ Applications
- https://github.com/anton-sergeenkov/anton-sergeenkov.github.io
- https://github.com/letscode-dev/letscode-dev.github.io

---

## ⭐️ Development
1. В родительской директории проекта должен быть репозиторий `-sawyer-react-lib-`
```
📂 Parent Folder
    📑 -sawyer-react-lib-
    📑 Проект на Next.js
```

2. Клонирование проекта
```
git clone https://github.com/anton-sergeenkov/-sawyer-react-lib-.git
```

3. Установка зависимостей у проекта `-sawyer-react-lib-`
```
npm i
```

---

## ⭐️ Known Issues

### Ошибка MUI для компонента <Menu />
- Описание проблемы: При клике на кнопку открывается выпадающий список, при этом скрывается скролл и происходит смещение части интерфейса
- Что происходит в коде: На body навешивается `<body style="padding-right: 11px; overflow: hidden;">`
- Решение 1: резервировать место для скролла, чтобы он был виден всегда. Реализовано в https://letscode-dev.github.io/
- Решение 2: добавить стили
```css
body {
  overflow: auto !important;
  padding-right: 0 !important;
}
```

### Ошибка build CSS при использовании CSS nesting

- Локально работает корректно, но при build не работает

> Свойства для `.item` не сработают. Нельзя объявлять `.container` два раза

```css
.container {
  backdround-color: green;
}
.container {
  .item {
    color: blue;
  }
}
```

> Корректный вариант. Нужно указать дочерние элементы внутри первого указания `.container`

```css
.container {
  backdround-color: green;

  .item {
    color: blue;
  }
}
```
