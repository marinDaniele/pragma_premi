#!bin/bash
flag=1
sed -i -- 's/method.tmpl/notConstrMeth.tmpl/g' $PWD/node_modules/jsdoc/templates/default/tmpl/container.tmpl;
node node_modules/jsdoc/jsdoc.js ./app/controllers/ ./app/controllers/users/ ./app/controllers/projects/ ./app/controllers/errors/ ./app/models/ ./app/routers/ ./public/modules/premi/app/ ./public/modules/premi/app/services ./public/modules/premi/app/model ./public/modules/premi/app/controllers ./public/modules/premi/app/directives/ ./public/modules/premi/app/directives/addToPath ./public/modules/premi/app/directives/associationAdder ./public/modules/premi/app/directives/contextMenu ./public/modules/premi/app/directives/editableNodeContent ./public/modules/premi/app/directives/errorMessage ./public/modules/premi/app/directives/footer ./public/modules/premi/app/directives/header ./public/modules/premi/app/directives/hierarchicalMenu ./public/modules/premi/app/directives/mindmap ./public/modules/premi/app/directives/node ./public/modules/premi/app/directives/nodeContent ./public/modules/premi/app/directives/nodeContentsEditor ./public/modules/premi/app/directives/path ./public/modules/premi/app/directives/pathsList ./public/modules/premi/app/directives/presentation ./public/modules/premi/app/directives/projectSettingsEditor ./public/modules/premi/app/directives/projectsList ./public/modules/premi/app/directives/smartMenu/*.js
echo "Documentation compiled!"