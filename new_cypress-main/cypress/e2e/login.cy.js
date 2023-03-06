describe('Форма логина и пароля', function () {

it('Правильный логин, правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#form > .header').contains('Форма логина');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.reload();
    })
it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#form > .header').contains('Форма логина');
    cy.get('#forgotEmailButton').should('be.visible');
    cy.get('#forgotEmailButton').click();
    cy.contains('Восстановите пароль');
    cy.get('#exitRestoreButton').should('be.visible');
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
it('Неправильный логин, правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#form > .header').contains('Форма логина');
    cy.get('#mail').type('germAn@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.reload();
    })
it('Логин без @, правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#form > .header').contains('Форма логина');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.reload();
    })
it('Проверка на приведение логина к единому регистру, правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#form > .header').contains('Форма логина');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.reload();
    })
})