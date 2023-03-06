describe('Магазин', function () {

it('Покупки на сайте магазина', function () {
	cy.visit('https://sh3910517.c.had.su/')
	cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
	cy.get('#content').contains('(В наличии)');
	cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
	cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
	cy.wait(500).get('.header-left-items > .site-branding > .logo > .logo-dark').click();
	cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
	cy.get('#content').contains('(В наличии)');
	cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
	cy.get('.header-right-items > .header-cart > a').click();
	cy.get('.checkout').click();
	cy.get('#billing_first_name').type('Екатерина');
	cy.get('#billing_last_name').type('Ханданова');
	cy.get('#select2-billing_country-container').click();
	cy.get('.select2-search__field').type('Россия').click();
	cy.get('#select2-billing_country-container').contains('Россия').click({ force: true });
	cy.get('#billing_address_1').type('ул. Сезам, дом 1');
	cy.get('#billing_address_2').type('2 этаж, вход со двора');
	cy.get('#billing_city').type('Сезам-сити');
	cy.get('#billing_state').type('Районный район');
	cy.get('#billing_postcode').type('123123');
	cy.get('#billing_phone').type('89219219219');
	cy.get('#billing_email').type('khandanova@mail.ru')
	cy.get('#place_order').click();
	cy.get('#content').contains('Ваш заказ принят. Благодарим вас.');

})
})