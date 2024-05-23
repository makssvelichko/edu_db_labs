# Проєктування бази даних

## Модель бізнес-об'єктів 
@startuml

top to bottom direction

entity User

entity User.username
entity User.emailAddress
entity User.photo
entity User.passcode
entity User.isBlocked

User.username -d-* User
User.emailAddress -u-* User
User.photo -l-* User
User.passcode -d-* User
User.isBlocked -u-* User

entity Collaborator
Collaborator "0,*" -r- "1,1" User

entity Role
Collaborator "0,*" -d- "1,1" Role

entity Access
Access "0,*" -u- "1,1" Role

entity Permission
Permission "1,1" -r- "0,*" Access

entity Team
Collaborator "0,*" -l- "1,1" Team

entity Project
Project "1,1" -r- "0,*" Team

entity Project.title
entity Project.details

Project.title -r-* Project
Project.details -u-* Project

entity Task
entity Assignment

Task "1,1" -d- "0,*" Assignment
Collaborator "1,1" -u- "0,*" Assignment

entity Task.name
entity Task.details
entity Task.deadLine
entity Tag
entity Label
entity Task.notes

Task.name -d-* Task
Task.details -d-* Task
Task.deadLine -d-* Task

Label "0,*" -l- "1,1" Task
Tag "1,1" -l- "0,*" Label

Task.notes "0,*" -l- "1,1" Task
Task.notes "0,*" - "1,1" Collaborator :Author

entity Action
entity Action.timestamp

Action.timestamp -r-* Action

Action "0,*" -r- "0,1" Assignment
Action "0,*" -d- "0,1" Collaborator
Action "0,*" -u- "0,1" Task

@enduml





- ER-модель
- реляційна схема

