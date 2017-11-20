/**
 * File: getCurrentProject.js
 * @author fvedovato - blacky_grp@yahoo.com
 * Data: 2015-05-18
 * Descrizione: Test di integrazione TI5 Premi::Front-End::Services::ProjectService metodo "getCurrentProject"
 */
'use strict';
describe('TI5 Premi::Front-End::Services::ProjectService metodo "getCurrentProject"', function () {
	var $httpBackend, SERVER_URL, projectService;
	beforeEach(function(){
		module('premi.services');
		module(function($provide){
			$provide.constant('SERVER_URL', 'http://localhost:3000');
		});
		inject(function(_projectService_, _$httpBackend_, _SERVER_URL_){
			projectService = _projectService_;
			$httpBackend = _$httpBackend_;
			SERVER_URL = _SERVER_URL_;
		});
		$httpBackend.whenGET(SERVER_URL + '/projects/556445fa9bb810da06778091')
			.respond({
				'root': '556445fa9bb810da06778092',
				'name': 'Progetto per test',
				'fontFamily': 'sans-serif',
				'fontColor': 'default',
				'bkgColor': 'default',
				'relations': [],
				'nodes': [
					{
						'_id': '556445fa9bb810da06778092',
						'contents': [
							{
								'_id': '556445fa9bb810da06778093',
								'class': 'title',
								'width': 0,
								'height': 0,
								'y': 5.8,
								'x': 28,
								'content': 'Nuovo nodo'
							}
						]
					}
				]
			});
		$httpBackend.expectGET(SERVER_URL+'/projects/556445fa9bb810da06778091');
		projectService.loadProject('556445fa9bb810da06778091');
		$httpBackend.flush();
	});
	//test
	it('Dovrebbe restituire il progetto correntemente caricato in memoria', function () {
		var _currentProject = new Project('556445fa9bb810da06778091','Progetto per test',
			'default', 'sans-serif', 'default', '556445fa9bb810da06778092');
		expect(projectService.getCurrentProject()).toMatch(_currentProject);
	});
});
