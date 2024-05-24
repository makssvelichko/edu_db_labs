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

## ER-модель
@startuml

skinparam entity {
    BackgroundColor #f7f711
}

top to bottom direction

package UserAdministration {
entity User {
    id: INT
    username: VARCHAR
    emailAddress: VARCHAR
    passcode: VARCHAR
    photo: IMAGE
    isBlocked: TINYINT
}
}

package TaskManagement {
entity Task {
    id: INT
    name: VARCHAR
    details: VARCHAR
    creationDate: DATETIME
    deadline: DATETIME
}

entity Assignment {
    id: INT
    datetime: DATETIME
}

entity Task_note {
    id: INT
    subject: VARCHAR
    text: VARCHAR
    datetime: DATETIME
}

entity Label {
}

enum Tag {
    id: INT
    name: VARCHAR
    description: VARCHAR
}
}

package AccessControl {
entity Collaborator {
    id: INT
}

entity Permission {
    id: INT
    action: VARCHAR
}

entity Grant {
}

enum Role <<ENUMERATION>> #f7f711 {
    id: INT
    name: VARCHAR
    description: VARCHAR
}

object developer
object teamlead
object administrator

developer .u.> Role :instanceOf
teamlead .u.> Role :instanceOf
administrator .u.> Role :instanceOf
}

entity Action {
    id: INT
    timestamp: DATETIME
}

entity Team {
    id: INT
    name: VARCHAR
    motto: VARCHAR
}

entity Project {
    id: INT
    title: VARCHAR
    details: VARCHAR
}

Collaborator "0,*" -d- "1,1" User
Team "1,1" -u- "0,*" Collaborator
Team "0,*" -u- "1,1" Project
Collaborator "0,*" -d- "1,1" Role
Grant "0,*" -d- "1,1" Role
Grant "0,*" -r- "1,1" Permission
Assignment "0,*" -d- "1,1" Collaborator
Assignment "0,*" -r- "1,1" Task
Label "0,*" -l- "1,1" Task
Label "0,*" -d- "1,1" Tag
Task_note "0,*" -u- "1,1" Task
Task_note "0,*" -d- "1,1" Collaborator :author

Action "0,*" -u- "0,1" Collaborator
Action "0,*" -r- "0,1" Task
Action "0,*" -d- "0,1" Assignment

@enduml





## Реляційна схема

![реляційна схема](https://i.ibb.co/1d4XXsk/image.png)
