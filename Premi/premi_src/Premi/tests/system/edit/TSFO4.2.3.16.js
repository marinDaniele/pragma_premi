/**
 * Created by gmanzoli on 15/06/15.
 * Perché il test funzioni deve essere presente un progetto chiamato
 * projectName con il nodo radice e almeno due figli.
 * Viene verificato che la conferma delle modifiche non scateni errori.
 */
var projectName = 'PROTRACTOR';

var path = require('path');
var DashboardPage = require(path.resolve('./tests/system/pages/DashboardPage'));
var LoginPage = require(path.resolve('./tests/system/pages/LoginPage'));
var EditorPage = require(path.resolve('./tests/system/pages/EditorPage'));


describe('TSFO4.2.3.16 - Viene verificato che il sistema modifichi' +
	' correttamente il titolo del nodo selezionato.' +
	'(Vale anche come TSFO4.2.3.15)',function () {
	
	var dashboardPage = new DashboardPage();
	var loginPage = new LoginPage();
	var editorPage = new EditorPage();
	beforeEach(function () {
		browser.get('#/login');
		loginPage.login('giacomo2@pragma.it','qwerty12');
	});
	
	it('Deve venir visualizzato il menù contestuale \n' +
		'Deve essere possibile modificare un nodo\n' +
		'Deve essere possibile modificare il titolo del nodo\n'+
		'Deve essere possibile confermare le modifiche al nodo\n' +
		'Non devono verificarsi errori', function (){
		dashboardPage.editProjctWithName(projectName);
		expect(browser.getLocationAbsUrl()).toMatch('/editor');
		
		browser.actions()
			.mouseMove(editorPage.nodeCanvas, {x: 524, y: 200})
			.click()
			.perform();
		//Controllo che sia stato visualizzato il menù
		//usando la visibilità del pulsante per chiuderlo
		expect(editorPage.contextMenu.btnClose.isDisplayed()).toBeTruthy();
		
		editorPage.editNode();

		var textDiv = element(by.css('*[style="font-size: 114.2%; ' +
			'top: 87.4651810584958%; left: 0%; width: auto; height: ' +
			'auto; position: absolute;"]'));
		
		textDiv.click();
		
		editorPage.editWindow.txtContent.clear();
		editorPage.editWindow.txtContent.sendKeys('Pippo');
		
		expect(textDiv.getText()).toBe('Pippo');
		editorPage.editWindow.btnSalva.click();
		//Sembra non essere possibile verificare il cambiamento del canvas.
		//Viene adottata quindi la strategia: "Nessun errore --> tutto ok"
		//che controlla che non si siano verificati errori
		expect(element(by.id('error-message')).isPresent()).toBe(false);
		
		
	});
});
