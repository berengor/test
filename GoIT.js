                         БАЗОВЫЕ КОМАНДЫ GIT
mkdir ___ - создать папку
cd ___ - перейти в папку
Индекс - временное хранилище данных, со временем переносится
git status - проверить статус репозитория
git add . - добавить файл в Индекс
Коммит - точка в истории файла, благодаря которой отслеживаются изменения файла
git commit -m "___" - описание Коммита
git config --global user.email "you@example.com" - указать свою почту
git config --global user.name "Ваше Имя" - указать свое имя
git config --global core.autocrlf input - настройка окончаний
git config --global core.safecrlf true - настройка окончаний
  *стрелка вверх* - история команд
885209c] - git hash, состоит из 16 знаков, id Коммита
git log - история изменений
 ctrl+z - возобновить работу консоли
git diff -  разница изменений (зеленый - добавленные изменения)
git commit --amend - добавить изменения в предидущий Коммит + смотреть историю.

                      GIT. СОЗДАНИЕ УДАЛЕННОГО РЕПОЗИТОРИЯ
git clone *url* - скачать гит проект на комп
SSH - тип подключения, это файл (ключ к основному файлу)
ls -la - показать список всех файлов в папке
git push - отправить изменения на гит
git pull - выгрузить изменения из гита