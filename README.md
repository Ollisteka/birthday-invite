# birthday-invite

Приглашение на день рождения, созданное с помощью React и Vite.

## Разработка

```bash
# Установка зависимостей
yarn install

# Запуск dev-сервера
yarn dev

# Сборка проекта
yarn build

# Предпросмотр production сборки
yarn preview
```

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Первоначальная настройка

1. Перейдите в настройки репозитория на GitHub: `Settings` → `Pages`
2. В разделе `Source` выберите `GitHub Actions`
3. Workflow автоматически запустится при пуше в ветку `master` или `main`

### Автоматический деплой

После настройки, каждый push в ветку `master` или `main` автоматически:
- Соберет проект
- Опубликует его на GitHub Pages

Сайт будет доступен по адресу: `https://<username>.github.io/birthday-invite/`

### Ручной запуск деплоя

Вы также можете запустить деплой вручную:
1. Перейдите на вкладку `Actions` в репозитории
2. Выберите workflow `Deploy to GitHub Pages`
3. Нажмите `Run workflow`

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
