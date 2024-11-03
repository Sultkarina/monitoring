#!/usr/bin/env sh

# остановить скрипт при ошибке
set -e

# сборка проекта
npm run build

# перейти в каталог сборки
cd dist

# если вы деплоите на кастомный домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы деплоите на https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:sultkarina/sultkarina.github.io.git master

cd -
