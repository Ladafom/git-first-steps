# Инструкция по GIT и Linux командам

## Работа с Git

* Чтобы настроить свое имя, пишем git config --global user.name "имя пользователя"
* Чтобы настроить свой адрес электронной почты, пишем git config --global user.email "электронная почта"
* Чтобы подготавить папку для Git репозитория пишем git init
* Чтобв связать папку с удаленным репозиторием пишем git remote add origin https:ссылка на репозиторий
* Чтобы создать папку, нужно набрать в командной строке mkdir-имя папки 
* Чтобы проверить целостность папки пишем ls -la
* Чтобы "тронуть" объект пишем touch
* Чтобы зайти в папку пишем cd "имя папки"
* Чтобы добавить содержание рабочей директории в индекс пишем git add
* Чтобы посмотреть сосотояние файлов пишем git status
* Чтобы отправить изменения на сервер пишем git push origin "ветка. (Например master)"
* Чтобы пулучить сведения из удаленного репозитория пишем git pull
* Чтобы опубликовать твой данный комментарий пишем git commit -m "комментарий"
* Чтобы вставить ссылку нужно нажать  shift+insert
* Чтобы отредактировать файл нужно зайти в vim
* Чтобы проверить целостность дерева папки. пишем ls -ls
* Чтобы посмотреть список изменений в проекте git confid --list
* Чтобы раскрасить текст пишем git config colour.ui true

## Терминология
* Репозиторий - место, где хранятся и поддерживаются какие-либо данные
* Директория- это одна из структур в git, в ней хранятся файлы, с которыми мы работаем

## Команды
* Чтобы сбросить команду пишем Ctrl+с
* Чтобы  не печатать полностью названия можно написать первые буквы и нажать Tab
* Чтобы вставить текст из буфера обмена, нужно нажать Shift + Insert

### Работа с индексом 
* Чтобы создать файл в индекс надо набрать git add fineline
* Чтобы удалить файл из индекса: git rm fineline
* Чтобы удалить файл из индекса, но оставить в рабочей директории git rm --cached finelin

### Работа с ветками
* Чтобы создать новую ветку, необходимо прописать git checkout -b new-branch-name
* Чтобы переключится на ветку: git checkout branch-name
* Чтобы включить изменения из другой ветки в текущую (замерджить): git merge branch-name:

## Работа с vim

* В unix-среде существует достаточно сложный, но гибкий функциональный текстовый редактор под названием vim 
    * Чтобы созлать или редактировать файл с именем * READEME.md*

        vim READEME.md

* Режиме в vim:
    * Основной режим- режим в котором можно только выбирать другие режимы, просматривать содержимое файла
* Чтобы зайти в vim нужно написать vin "название папки"
* Чтобы выйти из vim нужно написать двоеточие: (shift+ж на англ) а потом нажать q 
* Чтобы перейти в режим вставки нужно нажать i при входе в vim
* Чтобы сохранить тект в vim нужно нажать w
* Чтобы поставить заголовок, пишем #"название заголовка". Чем больше "#" перед заголовком,тем он меньше (максимально 6 "#")
* Чтобы создать точку перед пунктом, нужно поставить звездочку и пробел перед текстом
* Чтобы создать пондпункт, нужно поставить 4 пробела перед звездочкой 


## Работа с Markdown


     Markdown - язык разметки, с помощью которого написанна данная документация, на нем написанно большинство простых инструкций для программистов и системных администраторов. Это просто язык разметки который позволяет выделять определения части текста с помощью несколько видов выделений:

* Список

     * Маркированный список 
     
        * Первый элемент
	+ Второй элемент
	- Третий элемент

* Ссылки. Чтобы создать ссылку пишем [Название для ссылки](https://qeep.pro)
    * Фотография вставляется с помощью ссылки с восклицательным знаком: ![Фотография](https://www.google.ru/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjsnv3d6_rcAhUkmIsKHYmpDuYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.pavelin.ru%2Ffauna%2F512-loshadka.html&psig=AOvVaw3JNe_77EGxdUPGk88AI7OA&ust=1534827376861871)


### Таблицы
Первая колонка|Вторая колонка
--------------|--------------
Ячейка 1      | Ячейка 2
Ячейка 3      | Ячейка 4

