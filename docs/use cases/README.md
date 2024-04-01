# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>

## Сценарії використання

| ID                | SignUp |
|-------------------|---|
| Назва             | Зареєструвати користувача (Sign In) |
| Учасники          |  Користувач, Система |
| Передумови        |  Користувач не має облікового запису у системі |
| Результат         |  Створений обліковий запис користувача   |
| Виключні ситуації |  <font color="Maroon">NullReferenceException</font> - Користувач не заповнив усі обов'язкові поля </br> <font color="Maroon">AccountAlreadyExistException</font> - Обліковий запис с такими данними вже існує </br> <font color="Maroon">NotStrongPasswordException</font> - Користувач увів пароль, який не відповідає всім вимогам "надійного паролю" (A-Z, a-z, 0-9, !-*, мінімум 8 символів) |

@startuml

    |Користувач|
    start;
    : Натискає кнопку "Реєстрація";

    |Система|
        : Перенаправляє на сторінку реєстрації;

    |Користувач|
    : Вводить реєстраційні дані;
    : Натискає кнопку "Зареєструватися";
    note right #FFCCCC
    <b> NullReferenceException
    <b> NotStrongPasswordException
    end note
    
    |Система|
    : Перевіряє наявність облікового запису користувача;
    note right #FFCCCC
    <b> AccountAlreadyExistException
    end note
    
    : Створює новий обліковий запис;
    : Аутентифікує користувача;

    |Користувач|
    : Переходить до головної сторінки під своїм акаунтом;
    stop;
@enduml

| ID                | GoogleSignUp |
|-------------------|---|
| Назва             | Зареєструвати користувача (Sign In) за допомогою GoogleApi |
| Учасники          |  Користувач, Система |
| Передумови        |  Користувач не має облікового запису у системі |
| Результат         |  Створений обліковий запис користувача через інформацію, отриману з профілю користувача |
| Виключні ситуації |  <font color="Maroon">InvalidCredentialsException</font> - Помилкові облікові дані Google або доступ до облікового запису відмовлено<br> <font color="Maroon">UserAlreadyExistException</font> - Обліковий запис, створений за допомогою GoogleApi, вже існує в системі  |

@startuml

    |Користувач|
    start;
    : Натискає кнопку "Реєстрація";

     |Система|
        : Перенаправляє на сторінку реєстрації;

    |Користувач|
    : Обирає варіант "Зареєструватися за допомогою Google";
    : Вводить дані облікового запису Google;
    
    |Система|
    : Перевіряє наявність облікового запису користувача;
    note right #FFCCCC
    <b> InvalidCredentialsException
    <b> UserAlreadyExistException
    end note
    
    : Створює новий обліковий запис;
    : Аутентифікує користувача;

    |Користувач|
    : Переходить до головної сторінки під своїм акаунтом;
    stop;

@enduml

| ID                | SignIn |
|-------------------|---|
| Назва             |  Авторизація |
| Учасники          |  Користувач, Система |
| Передумови        |  1. Користувач зареєстрований у системі </br> 2. Користувач не авторизований |
| Результат         |  Користувач авторизований у системі |
| Виключні ситуації |  <font color="Maroon">NullReferenceException</font> - Користувач не заповнив усі обов'язкові поля </br>  <font color="Maroon">InvalidUserException</font> - Користувача з такими даними не існує, пароль або пошта вказані невірно</br>|

@startuml

    |Користувач|
     : Натискає кнопку "Увійти";
    start;

     |Система|
        : Перенаправляє на сторінку авторизації;

    |Користувач|
    : Вводить дані авторизації;
    : Натискає кнопку "Увійти";
    note right #FFCCCC
    <b> NullReferenceException
    end note
    
    |Система|
    : Перевіряє наявність облікового запису користувача;
    note right #FFCCCC
    <b> InvalidUserException
    end note
    
    : Аутентифікує користувача;
    
    |Користувач|
    : Переходить до головної сторінки під своїм акаунтом;
        stop;

@enduml


| ID                | GoogleSignIn |
|-------------------|---|
| Назва             |  Авторизація за допомогою облікового запису Google |
| Учасники          |  Користувач, Система |
| Передумови        |  1. Користувач зареєстрований у системі (за допомогою GoogleApi)</br> 2. Користувач не авторизований |
| Результат         |  Користувач авторизований у системі |
| Виключні ситуації |  <font color="Maroon">NullInstanceException</font> - Користувач не зареєстрований у системі </br>  <font color="Maroon">InvalidCredentialsException</font> - Помилкові облікові дані Google або доступ до облікового запису відмовлено<br>|

@startuml

    |Користувач|
     : Натискає кнопку "Увійти";
    start;

    |Система|
        : Перенаправляє на сторінку авторизації;

    |Користувач|
    : Натискає на "Увійти за допомогою Google";
    : Вводить дані облікового запису Google;
    
    |Система|
    : Перевіряє наявність облікового запису користувача;
    note right #FFCCCC
    <b> NullInstanceException
    end note
    : Перевіряє отримані дані, введені користувачем;
    note right #FFCCCC
    <b> InvalidCredentialsException
    end note
    : Аутентифікує користувача;
    
    |Користувач|
    : Переходить до головної сторінки під своїм акаунтом;
        stop;

@enduml