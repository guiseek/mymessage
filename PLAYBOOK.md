```bash
➜  mymessage git:(master) ✗ nx add @nrwl/angular                                                          
Installing packages for tooling via npm.
Installed packages for tooling via npm.
? Which Unit Test Runner would you like to use for the application? Jest  [ https://jestjs.io ]
? Which E2E Test Runner would you like to use? Cypress    [ https://www.cypress.io ]
CREATE jest.config.js (38 bytes)
CREATE jest.preset.js (82 bytes)
UPDATE angular.json (292 bytes)
UPDATE package.json (2158 bytes)
UPDATE .vscode/extensions.json (200 bytes)
✔ Packages installed successfully.

```
```bash

➜  mymessage git:(master) ✗ npm i --save-dev @ngrx/schematics                                        
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.

+ @ngrx/schematics@10.0.1
added 1 package from 1 contributor, removed 1 package and audited 2027 packages in 13.897s

92 packages are looking for funding
  run `npm fund` for details

found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

```
```bash

  ➜  mymessage git:(master) ✗ nx generate @angular-architects/ddd:domain --name=client --addApp --ngrx --no-interactive --dry-run
CREATE tslint.json (2453 bytes)
CREATE libs/client/domain/README.md (150 bytes)
CREATE libs/client/domain/ng-package.json (169 bytes)
CREATE libs/client/domain/package.json (204 bytes)
CREATE libs/client/domain/tsconfig.lib.json (465 bytes)
CREATE libs/client/domain/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/domain/tslint.json (247 bytes)
CREATE libs/client/domain/src/index.ts (44 bytes)
CREATE libs/client/domain/src/lib/client-domain.module.ts (168 bytes)
CREATE libs/client/domain/tsconfig.json (200 bytes)
CREATE libs/client/domain/jest.config.js (761 bytes)
CREATE libs/client/domain/tsconfig.spec.json (236 bytes)
CREATE libs/client/domain/src/test-setup.ts (30 bytes)
CREATE apps/client/tsconfig.editor.json (119 bytes)
CREATE apps/client/tsconfig.json (249 bytes)
CREATE apps/client/src/favicon.ico (15086 bytes)
CREATE apps/client/.browserslistrc (853 bytes)
CREATE apps/client/tsconfig.app.json (163 bytes)
CREATE apps/client/tslint.json (250 bytes)
CREATE apps/client/src/index.html (332 bytes)
CREATE apps/client/src/main.ts (377 bytes)
CREATE apps/client/src/polyfills.ts (2833 bytes)
CREATE apps/client/src/styles.scss (80 bytes)
CREATE apps/client/src/assets/.gitkeep (0 bytes)
CREATE apps/client/src/environments/environment.prod.ts (52 bytes)
CREATE apps/client/src/environments/environment.ts (663 bytes)
CREATE apps/client/src/app/app.module.ts (622 bytes)
CREATE apps/client/src/app/app.component.scss (2088 bytes)
CREATE apps/client/src/app/app.component.html (2968 bytes)
CREATE apps/client/src/app/app.component.spec.ts (921 bytes)
CREATE apps/client/src/app/app.component.ts (218 bytes)
CREATE apps/client/jest.config.js (741 bytes)
CREATE apps/client/tsconfig.spec.json (233 bytes)
CREATE apps/client/src/test-setup.ts (30 bytes)
CREATE apps/client-e2e/tslint.json (97 bytes)
CREATE apps/client-e2e/cypress.json (412 bytes)
CREATE apps/client-e2e/tsconfig.e2e.json (222 bytes)
CREATE apps/client-e2e/tsconfig.json (147 bytes)
CREATE apps/client-e2e/src/fixtures/example.json (80 bytes)
CREATE apps/client-e2e/src/integration/app.spec.ts (404 bytes)
CREATE apps/client-e2e/src/plugins/index.js (832 bytes)
CREATE apps/client-e2e/src/support/app.po.ts (47 bytes)
CREATE apps/client-e2e/src/support/commands.ts (1009 bytes)
CREATE apps/client-e2e/src/support/index.ts (599 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (5358 bytes)
UPDATE nx.json (781 bytes)
UPDATE tsconfig.base.json (584 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (93 bytes)

NOTE: The "dryRun" flag means no changes were made.

```
```bash

➜  mymessage git:(master) ✗ nx generate @angular-architects/ddd:domain --name=client --addApp --ngrx --no-interactive          
CREATE tslint.json (2453 bytes)
CREATE libs/client/domain/README.md (150 bytes)
CREATE libs/client/domain/ng-package.json (169 bytes)
CREATE libs/client/domain/package.json (204 bytes)
CREATE libs/client/domain/tsconfig.lib.json (465 bytes)
CREATE libs/client/domain/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/domain/tslint.json (247 bytes)
CREATE libs/client/domain/src/index.ts (44 bytes)
CREATE libs/client/domain/src/lib/client-domain.module.ts (168 bytes)
CREATE libs/client/domain/tsconfig.json (200 bytes)
CREATE libs/client/domain/jest.config.js (761 bytes)
CREATE libs/client/domain/tsconfig.spec.json (236 bytes)
CREATE libs/client/domain/src/test-setup.ts (30 bytes)
CREATE apps/client/tsconfig.editor.json (119 bytes)
CREATE apps/client/tsconfig.json (249 bytes)
CREATE apps/client/src/favicon.ico (15086 bytes)
CREATE apps/client/.browserslistrc (853 bytes)
CREATE apps/client/tsconfig.app.json (163 bytes)
CREATE apps/client/tslint.json (250 bytes)
CREATE apps/client/src/index.html (332 bytes)
CREATE apps/client/src/main.ts (377 bytes)
CREATE apps/client/src/polyfills.ts (2833 bytes)
CREATE apps/client/src/styles.scss (80 bytes)
CREATE apps/client/src/assets/.gitkeep (0 bytes)
CREATE apps/client/src/environments/environment.prod.ts (52 bytes)
CREATE apps/client/src/environments/environment.ts (663 bytes)
CREATE apps/client/src/app/app.module.ts (622 bytes)
CREATE apps/client/src/app/app.component.scss (2088 bytes)
CREATE apps/client/src/app/app.component.html (2968 bytes)
CREATE apps/client/src/app/app.component.spec.ts (921 bytes)
CREATE apps/client/src/app/app.component.ts (218 bytes)
CREATE apps/client/jest.config.js (741 bytes)
CREATE apps/client/tsconfig.spec.json (233 bytes)
CREATE apps/client/src/test-setup.ts (30 bytes)
CREATE apps/client-e2e/tslint.json (97 bytes)
CREATE apps/client-e2e/cypress.json (412 bytes)
CREATE apps/client-e2e/tsconfig.e2e.json (222 bytes)
CREATE apps/client-e2e/tsconfig.json (147 bytes)
CREATE apps/client-e2e/src/fixtures/example.json (80 bytes)
CREATE apps/client-e2e/src/integration/app.spec.ts (404 bytes)
CREATE apps/client-e2e/src/plugins/index.js (832 bytes)
CREATE apps/client-e2e/src/support/app.po.ts (47 bytes)
CREATE apps/client-e2e/src/support/commands.ts (1009 bytes)
CREATE apps/client-e2e/src/support/index.ts (599 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (5358 bytes)
UPDATE nx.json (781 bytes)
UPDATE tsconfig.base.json (584 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (93 bytes)
✔ Packages installed successfully.
✔ Packages installed successfully.
```
```bash
> Executing task: ng generate @angular-architects/ddd:feature --name=acc --no-interactive --dry-run <

Schematic input does not validate against the Schema: {"name":"acc"}
Errors:

  Data path "" should have required property 'domain'.
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:feature --name=acc --no-interactive --dry-run', 'ng generate @angular-architects/ddd:feature --name=acc --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash
> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --no-interactive --dry-run <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (162 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (25 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (409 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (95 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --no-interactive --dry-run <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (162 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (25 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (409 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (95 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --entity=user --no-interactive --dry-run <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (735 bytes)
CREATE libs/client/domain/src/lib/entities/user.ts (90 bytes)
CREATE libs/client/domain/src/lib/infrastructure/user.data.service.ts (994 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (221 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (553 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (189 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --entity=user --ngrx --no-interactive --dry-run <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.actions.ts (386 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.effects.ts (865 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.reducer.ts (1330 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.selectors.ts (1059 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (643 bytes)
CREATE libs/client/domain/src/lib/entities/user.ts (90 bytes)
CREATE libs/client/domain/src/lib/infrastructure/user.data.service.ts (996 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (221 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (577 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (238 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (482 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --entity=user --lazy --ngrx --no-interactive --dry-run <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.actions.ts (386 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.effects.ts (865 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.reducer.ts (1330 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.selectors.ts (1059 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (643 bytes)
CREATE libs/client/domain/src/lib/entities/user.ts (90 bytes)
CREATE libs/client/domain/src/lib/infrastructure/user.data.service.ts (996 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (221 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (577 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE libs/client/domain/src/index.ts (238 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (482 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --entity=user --lazy --ngrx <

CREATE libs/client/feature-account/README.md (168 bytes)
CREATE libs/client/feature-account/ng-package.json (178 bytes)
CREATE libs/client/feature-account/package.json (213 bytes)
CREATE libs/client/feature-account/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-account/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-account/tslint.json (247 bytes)
CREATE libs/client/feature-account/src/index.ts (95 bytes)
CREATE libs/client/feature-account/src/lib/client-feature-account.module.ts (382 bytes)
CREATE libs/client/feature-account/tsconfig.json (200 bytes)
CREATE libs/client/feature-account/jest.config.js (779 bytes)
CREATE libs/client/feature-account/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-account/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.actions.ts (386 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.effects.ts (865 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.reducer.ts (1330 bytes)
CREATE libs/client/domain/src/lib/+state/user/user.selectors.ts (1059 bytes)
CREATE libs/client/domain/src/lib/application/account.facade.ts (643 bytes)
CREATE libs/client/domain/src/lib/entities/user.ts (90 bytes)
CREATE libs/client/domain/src/lib/infrastructure/user.data.service.ts (996 bytes)
CREATE libs/client/feature-account/src/lib/account.component.html (221 bytes)
CREATE libs/client/feature-account/src/lib/account.component.scss (57 bytes)
CREATE libs/client/feature-account/src/lib/account.component.ts (577 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (6747 bytes)
UPDATE nx.json (868 bytes)
UPDATE tsconfig.base.json (689 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (151 bytes)
UPDATE libs/client/domain/src/index.ts (238 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (482 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=peer --no-interactive --dry-run <

A UI library should either belong to a domain or be shared globally.
      Please provide either of these two options: --domain / --shared
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:ui --name=peer --no-interactive --dry-run', 'ng generate @angular-architects/ddd:ui --name=peer --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.

> Executing task: ng generate @angular-architects/ddd:ui --name=peer --domain=client --no-interactive --dry-run <

CREATE libs/client/ui-peer/README.md (152 bytes)
CREATE libs/client/ui-peer/ng-package.json (170 bytes)
CREATE libs/client/ui-peer/package.json (205 bytes)
CREATE libs/client/ui-peer/tsconfig.lib.json (465 bytes)
CREATE libs/client/ui-peer/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/ui-peer/tslint.json (243 bytes)
CREATE libs/client/ui-peer/src/index.ts (45 bytes)
CREATE libs/client/ui-peer/src/lib/client-ui-peer.module.ts (168 bytes)
CREATE libs/client/ui-peer/tsconfig.json (200 bytes)
CREATE libs/client/ui-peer/jest.config.js (763 bytes)
CREATE libs/client/ui-peer/tsconfig.spec.json (236 bytes)
CREATE libs/client/ui-peer/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (8012 bytes)
UPDATE nx.json (942 bytes)
UPDATE tsconfig.base.json (762 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (188 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --domain=client --no-interactive --dry-run <

CREATE libs/client/ui-message/README.md (158 bytes)
CREATE libs/client/ui-message/ng-package.json (173 bytes)
CREATE libs/client/ui-message/package.json (208 bytes)
CREATE libs/client/ui-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/ui-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/ui-message/tslint.json (249 bytes)
CREATE libs/client/ui-message/src/index.ts (48 bytes)
CREATE libs/client/ui-message/src/lib/client-ui-message.module.ts (171 bytes)
CREATE libs/client/ui-message/tsconfig.json (200 bytes)
CREATE libs/client/ui-message/jest.config.js (769 bytes)
CREATE libs/client/ui-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/ui-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (8045 bytes)
UPDATE nx.json (945 bytes)
UPDATE tsconfig.base.json (768 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (191 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --domain=client --shared --no-interactive --dry-run <

A UI library should either belong to a specific domain or be shared globally. 
      If you want to share a UI library across multiple specific domains, 
      consider using an API library. Hence, you should not provide the shared option in combination
      with the domain option.
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:ui --name=message --domain=client --shared --no-interactive --dry-run', 'ng generate @angular-architects/ddd:ui --name=message --domain=client --shared --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --directory=shared --domain=client --shared --no-interactive --dry-run <

A UI library should either belong to a specific domain or be shared globally. 
      If you want to share a UI library across multiple specific domains, 
      consider using an API library. Hence, you should not provide the shared option in combination
      with the domain option.
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:ui --name=message --directory=shared --domain=client --shared --no-interactive --dry-run', 'ng generate @angular-architects/ddd:ui --name=message --directory=shared --domain=client --shared --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --directory=shared --domain=client --no-interactive --dry-run <

CREATE libs/client/shared/ui-message/README.md (172 bytes)
CREATE libs/client/shared/ui-message/ng-package.json (186 bytes)
CREATE libs/client/shared/ui-message/package.json (215 bytes)
CREATE libs/client/shared/ui-message/tsconfig.lib.json (468 bytes)
CREATE libs/client/shared/ui-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/shared/ui-message/tslint.json (252 bytes)
CREATE libs/client/shared/ui-message/src/index.ts (55 bytes)
CREATE libs/client/shared/ui-message/src/lib/client-shared-ui-message.module.ts (177 bytes)
CREATE libs/client/shared/ui-message/tsconfig.json (203 bytes)
CREATE libs/client/shared/ui-message/jest.config.js (789 bytes)
CREATE libs/client/shared/ui-message/tsconfig.spec.json (239 bytes)
CREATE libs/client/shared/ui-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (8157 bytes)
UPDATE nx.json (952 bytes)
UPDATE tsconfig.base.json (798 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (198 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --domain=client --no-interactive --dry-run <

CREATE libs/client/ui-message/README.md (158 bytes)
CREATE libs/client/ui-message/ng-package.json (173 bytes)
CREATE libs/client/ui-message/package.json (208 bytes)
CREATE libs/client/ui-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/ui-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/ui-message/tslint.json (249 bytes)
CREATE libs/client/ui-message/src/index.ts (48 bytes)
CREATE libs/client/ui-message/src/lib/client-ui-message.module.ts (171 bytes)
CREATE libs/client/ui-message/tsconfig.json (200 bytes)
CREATE libs/client/ui-message/jest.config.js (769 bytes)
CREATE libs/client/ui-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/ui-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (8045 bytes)
UPDATE nx.json (945 bytes)
UPDATE tsconfig.base.json (768 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (191 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:ui --name=message --domain=client <

CREATE libs/client/ui-message/README.md (158 bytes)
CREATE libs/client/ui-message/ng-package.json (173 bytes)
CREATE libs/client/ui-message/package.json (208 bytes)
CREATE libs/client/ui-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/ui-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/ui-message/tslint.json (249 bytes)
CREATE libs/client/ui-message/src/index.ts (48 bytes)
CREATE libs/client/ui-message/src/lib/client-ui-message.module.ts (171 bytes)
CREATE libs/client/ui-message/tsconfig.json (200 bytes)
CREATE libs/client/ui-message/jest.config.js (769 bytes)
CREATE libs/client/ui-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/ui-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (8045 bytes)
UPDATE nx.json (945 bytes)
UPDATE tsconfig.base.json (768 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (191 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=rt --no-interactive --dry-run <

A UI library should either belong to a domain or be shared globally.
      Please provide either of these two options: --domain / --shared
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:util --name=rt --no-interactive --dry-run', 'ng generate @angular-architects/ddd:util --name=rt --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=rtc --domain=client --no-interactive --dry-run <

CREATE libs/client/util-rtc/README.md (154 bytes)
CREATE libs/client/util-rtc/ng-package.json (171 bytes)
CREATE libs/client/util-rtc/package.json (206 bytes)
CREATE libs/client/util-rtc/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-rtc/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-rtc/tslint.json (241 bytes)
CREATE libs/client/util-rtc/src/index.ts (46 bytes)
CREATE libs/client/util-rtc/src/lib/client-util-rtc.module.ts (169 bytes)
CREATE libs/client/util-rtc/tsconfig.json (200 bytes)
CREATE libs/client/util-rtc/jest.config.js (765 bytes)
CREATE libs/client/util-rtc/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-rtc/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9319 bytes)
UPDATE nx.json (1022 bytes)
UPDATE tsconfig.base.json (843 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (229 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=rtc --domain=client --shared --no-interactive --dry-run <

A UI library should either belong to a specific domain or be shared globally. 
      If you want to share a UI library across multiple specific domains, 
      consider using an API library. Hence, you should not provide the shared option in combination
      with the domain option.
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:util --name=rtc --domain=client --shared --no-interactive --dry-run', 'ng generate @angular-architects/ddd:util --name=rtc --domain=client --shared --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=rtc --domain=client --no-interactive --dry-run <

CREATE libs/client/util-rtc/README.md (154 bytes)
CREATE libs/client/util-rtc/ng-package.json (171 bytes)
CREATE libs/client/util-rtc/package.json (206 bytes)
CREATE libs/client/util-rtc/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-rtc/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-rtc/tslint.json (241 bytes)
CREATE libs/client/util-rtc/src/index.ts (46 bytes)
CREATE libs/client/util-rtc/src/lib/client-util-rtc.module.ts (169 bytes)
CREATE libs/client/util-rtc/tsconfig.json (200 bytes)
CREATE libs/client/util-rtc/jest.config.js (765 bytes)
CREATE libs/client/util-rtc/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-rtc/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9319 bytes)
UPDATE nx.json (1022 bytes)
UPDATE tsconfig.base.json (843 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (229 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=connection --domain=client --no-interactive --dry-run <

CREATE libs/client/util-connection/README.md (168 bytes)
CREATE libs/client/util-connection/ng-package.json (178 bytes)
CREATE libs/client/util-connection/package.json (213 bytes)
CREATE libs/client/util-connection/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-connection/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-connection/tslint.json (255 bytes)
CREATE libs/client/util-connection/src/index.ts (53 bytes)
CREATE libs/client/util-connection/src/lib/client-util-connection.module.ts (176 bytes)
CREATE libs/client/util-connection/tsconfig.json (200 bytes)
CREATE libs/client/util-connection/jest.config.js (779 bytes)
CREATE libs/client/util-connection/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-connection/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9438 bytes)
UPDATE nx.json (1029 bytes)
UPDATE tsconfig.base.json (873 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (236 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=peer --domain=client --no-interactive --dry-run <

CREATE libs/client/util-peer/README.md (156 bytes)
CREATE libs/client/util-peer/ng-package.json (172 bytes)
CREATE libs/client/util-peer/package.json (207 bytes)
CREATE libs/client/util-peer/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-peer/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-peer/tslint.json (243 bytes)
CREATE libs/client/util-peer/src/index.ts (47 bytes)
CREATE libs/client/util-peer/src/lib/client-util-peer.module.ts (170 bytes)
CREATE libs/client/util-peer/tsconfig.json (200 bytes)
CREATE libs/client/util-peer/jest.config.js (767 bytes)
CREATE libs/client/util-peer/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-peer/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9330 bytes)
UPDATE nx.json (1023 bytes)
UPDATE tsconfig.base.json (845 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (230 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=webrtc --domain=client --no-interactive --dry-run <

CREATE libs/client/util-webrtc/README.md (160 bytes)
CREATE libs/client/util-webrtc/ng-package.json (174 bytes)
CREATE libs/client/util-webrtc/package.json (209 bytes)
CREATE libs/client/util-webrtc/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-webrtc/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-webrtc/tslint.json (247 bytes)
CREATE libs/client/util-webrtc/src/index.ts (49 bytes)
CREATE libs/client/util-webrtc/src/lib/client-util-webrtc.module.ts (172 bytes)
CREATE libs/client/util-webrtc/tsconfig.json (200 bytes)
CREATE libs/client/util-webrtc/jest.config.js (771 bytes)
CREATE libs/client/util-webrtc/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-webrtc/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9352 bytes)
UPDATE nx.json (1025 bytes)
UPDATE tsconfig.base.json (849 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (232 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=message --domain=client --no-interactive --dry-run <

CREATE libs/client/util-message/README.md (162 bytes)
CREATE libs/client/util-message/ng-package.json (175 bytes)
CREATE libs/client/util-message/package.json (210 bytes)
CREATE libs/client/util-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-message/tslint.json (249 bytes)
CREATE libs/client/util-message/src/index.ts (50 bytes)
CREATE libs/client/util-message/src/lib/client-util-message.module.ts (173 bytes)
CREATE libs/client/util-message/tsconfig.json (200 bytes)
CREATE libs/client/util-message/jest.config.js (773 bytes)
CREATE libs/client/util-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9363 bytes)
UPDATE nx.json (1026 bytes)
UPDATE tsconfig.base.json (867 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (233 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=message --domain=client <

CREATE libs/client/util-message/README.md (162 bytes)
CREATE libs/client/util-message/ng-package.json (175 bytes)
CREATE libs/client/util-message/package.json (210 bytes)
CREATE libs/client/util-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-message/tslint.json (249 bytes)
CREATE libs/client/util-message/src/index.ts (50 bytes)
CREATE libs/client/util-message/src/lib/client-util-message.module.ts (173 bytes)
CREATE libs/client/util-message/tsconfig.json (200 bytes)
CREATE libs/client/util-message/jest.config.js (773 bytes)
CREATE libs/client/util-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-message/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (9363 bytes)
UPDATE nx.json (1026 bytes)
UPDATE tsconfig.base.json (867 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (233 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=peers --domain=client --no-interactive --dry-run <

CREATE libs/client/util-peers/README.md (158 bytes)
CREATE libs/client/util-peers/ng-package.json (173 bytes)
CREATE libs/client/util-peers/package.json (208 bytes)
CREATE libs/client/util-peers/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-peers/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-peers/tslint.json (245 bytes)
CREATE libs/client/util-peers/src/index.ts (48 bytes)
CREATE libs/client/util-peers/src/lib/client-util-peers.module.ts (171 bytes)
CREATE libs/client/util-peers/tsconfig.json (200 bytes)
CREATE libs/client/util-peers/jest.config.js (769 bytes)
CREATE libs/client/util-peers/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-peers/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (10659 bytes)
UPDATE nx.json (1105 bytes)
UPDATE tsconfig.base.json (946 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (273 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:util --name=peers --domain=client <

CREATE libs/client/util-peers/README.md (158 bytes)
CREATE libs/client/util-peers/ng-package.json (173 bytes)
CREATE libs/client/util-peers/package.json (208 bytes)
CREATE libs/client/util-peers/tsconfig.lib.json (465 bytes)
CREATE libs/client/util-peers/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/util-peers/tslint.json (245 bytes)
CREATE libs/client/util-peers/src/index.ts (48 bytes)
CREATE libs/client/util-peers/src/lib/client-util-peers.module.ts (171 bytes)
CREATE libs/client/util-peers/tsconfig.json (200 bytes)
CREATE libs/client/util-peers/jest.config.js (769 bytes)
CREATE libs/client/util-peers/tsconfig.spec.json (236 bytes)
CREATE libs/client/util-peers/src/test-setup.ts (30 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (10659 bytes)
UPDATE nx.json (1105 bytes)
UPDATE tsconfig.base.json (946 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (273 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --no-interactive --dry-run <

Schematic input does not validate against the Schema: {"name":"message"}
Errors:

  Data path "" should have required property 'domain'.
The terminal process "/bin/bash '-l', '-c', '/Users/guiseek/dev/projects/mymessage/node_modules/.bin/ng generate @angular-architects/ddd:feature --name=message --no-interactive --dry-run', 'ng generate @angular-architects/ddd:feature --name=message --no-interactive --dry-run'" terminated with exit code: 1.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --domain=client --no-interactive --dry-run <

CREATE libs/client/feature-message/README.md (168 bytes)
CREATE libs/client/feature-message/ng-package.json (178 bytes)
CREATE libs/client/feature-message/package.json (213 bytes)
CREATE libs/client/feature-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-message/tslint.json (247 bytes)
CREATE libs/client/feature-message/src/index.ts (95 bytes)
CREATE libs/client/feature-message/src/lib/client-feature-message.module.ts (382 bytes)
CREATE libs/client/feature-message/tsconfig.json (200 bytes)
CREATE libs/client/feature-message/jest.config.js (779 bytes)
CREATE libs/client/feature-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-message/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/message.facade.ts (162 bytes)
CREATE libs/client/feature-message/src/lib/message.component.html (25 bytes)
CREATE libs/client/feature-message/src/lib/message.component.scss (57 bytes)
CREATE libs/client/feature-message/src/lib/message.component.ts (409 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (12048 bytes)
UPDATE nx.json (1192 bytes)
UPDATE tsconfig.base.json (1051 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (318 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (289 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --domain=client --app=client --no-interactive --dry-run <

CREATE libs/client/feature-message/README.md (168 bytes)
CREATE libs/client/feature-message/ng-package.json (178 bytes)
CREATE libs/client/feature-message/package.json (213 bytes)
CREATE libs/client/feature-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-message/tslint.json (247 bytes)
CREATE libs/client/feature-message/src/index.ts (95 bytes)
CREATE libs/client/feature-message/src/lib/client-feature-message.module.ts (382 bytes)
CREATE libs/client/feature-message/tsconfig.json (200 bytes)
CREATE libs/client/feature-message/jest.config.js (779 bytes)
CREATE libs/client/feature-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-message/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/message.facade.ts (162 bytes)
CREATE libs/client/feature-message/src/lib/message.component.html (25 bytes)
CREATE libs/client/feature-message/src/lib/message.component.scss (57 bytes)
CREATE libs/client/feature-message/src/lib/message.component.ts (409 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (12048 bytes)
UPDATE nx.json (1192 bytes)
UPDATE tsconfig.base.json (1051 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (318 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (289 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --domain=client --app=client --entity=message --no-interactive --dry-run <

CREATE libs/client/feature-message/README.md (168 bytes)
CREATE libs/client/feature-message/ng-package.json (178 bytes)
CREATE libs/client/feature-message/package.json (213 bytes)
CREATE libs/client/feature-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-message/tslint.json (247 bytes)
CREATE libs/client/feature-message/src/index.ts (95 bytes)
CREATE libs/client/feature-message/src/lib/client-feature-message.module.ts (382 bytes)
CREATE libs/client/feature-message/tsconfig.json (200 bytes)
CREATE libs/client/feature-message/jest.config.js (779 bytes)
CREATE libs/client/feature-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-message/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/application/message.facade.ts (777 bytes)
CREATE libs/client/domain/src/lib/entities/message.ts (93 bytes)
CREATE libs/client/domain/src/lib/infrastructure/message.data.service.ts (1009 bytes)
CREATE libs/client/feature-message/src/lib/message.component.html (236 bytes)
CREATE libs/client/feature-message/src/lib/message.component.scss (57 bytes)
CREATE libs/client/feature-message/src/lib/message.component.ts (559 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (12048 bytes)
UPDATE nx.json (1192 bytes)
UPDATE tsconfig.base.json (1051 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (318 bytes)
UPDATE apps/client/src/app/app.module.ts (805 bytes)
UPDATE libs/client/domain/src/index.ts (389 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --domain=client --app=client --entity=message --lazy --ngrx --no-interactive --dry-run <

CREATE libs/client/feature-message/README.md (168 bytes)
CREATE libs/client/feature-message/ng-package.json (178 bytes)
CREATE libs/client/feature-message/package.json (213 bytes)
CREATE libs/client/feature-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-message/tslint.json (247 bytes)
CREATE libs/client/feature-message/src/index.ts (95 bytes)
CREATE libs/client/feature-message/src/lib/client-feature-message.module.ts (382 bytes)
CREATE libs/client/feature-message/tsconfig.json (200 bytes)
CREATE libs/client/feature-message/jest.config.js (779 bytes)
CREATE libs/client/feature-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-message/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.actions.ts (425 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.effects.ts (916 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.reducer.ts (1408 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.selectors.ts (1116 bytes)
CREATE libs/client/domain/src/lib/application/message.facade.ts (688 bytes)
CREATE libs/client/domain/src/lib/entities/message.ts (93 bytes)
CREATE libs/client/domain/src/lib/infrastructure/message.data.service.ts (1011 bytes)
CREATE libs/client/feature-message/src/lib/message.component.html (236 bytes)
CREATE libs/client/feature-message/src/lib/message.component.scss (57 bytes)
CREATE libs/client/feature-message/src/lib/message.component.ts (589 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (12048 bytes)
UPDATE nx.json (1192 bytes)
UPDATE tsconfig.base.json (1051 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (318 bytes)
UPDATE libs/client/domain/src/index.ts (444 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (736 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash

> Executing task: ng generate @angular-architects/ddd:feature --name=message --domain=client --app=client --entity=message --lazy --ngrx <

CREATE libs/client/feature-message/README.md (168 bytes)
CREATE libs/client/feature-message/ng-package.json (178 bytes)
CREATE libs/client/feature-message/package.json (213 bytes)
CREATE libs/client/feature-message/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-message/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-message/tslint.json (247 bytes)
CREATE libs/client/feature-message/src/index.ts (95 bytes)
CREATE libs/client/feature-message/src/lib/client-feature-message.module.ts (382 bytes)
CREATE libs/client/feature-message/tsconfig.json (200 bytes)
CREATE libs/client/feature-message/jest.config.js (779 bytes)
CREATE libs/client/feature-message/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-message/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.actions.ts (425 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.effects.ts (916 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.reducer.ts (1408 bytes)
CREATE libs/client/domain/src/lib/+state/message/message.selectors.ts (1116 bytes)
CREATE libs/client/domain/src/lib/application/message.facade.ts (688 bytes)
CREATE libs/client/domain/src/lib/entities/message.ts (93 bytes)
CREATE libs/client/domain/src/lib/infrastructure/message.data.service.ts (1011 bytes)
CREATE libs/client/feature-message/src/lib/message.component.html (236 bytes)
CREATE libs/client/feature-message/src/lib/message.component.scss (57 bytes)
CREATE libs/client/feature-message/src/lib/message.component.ts (589 bytes)
UPDATE package.json (2350 bytes)
UPDATE angular.json (12048 bytes)
UPDATE nx.json (1192 bytes)
UPDATE tsconfig.base.json (1051 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (318 bytes)
UPDATE libs/client/domain/src/index.ts (444 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (736 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```

```bash
> Executing task: ng generate @schematics/angular:appShell --clientProject=client --no-interactive --dry-run <

Option "tsconfigFileName" is deprecated: This option has no effect.
CREATE apps/client/src/main.server.ts (298 bytes)
CREATE apps/client/src/app/app.server.module.ts (590 bytes)
CREATE apps/client/tsconfig.server.json (383 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.scss (0 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.html (24 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.spec.ts (641 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.ts (293 bytes)
UPDATE package.json (2393 bytes)
UPDATE angular.json (13277 bytes)
UPDATE apps/client/src/main.ts (437 bytes)
UPDATE apps/client/src/app/app.module.ts (1325 bytes)

NOTE: The "dryRun" flag means no changes were made.

Terminal will be reused by tasks, press any key to close it.
```
```bash
> Executing task: ng generate @schematics/angular:appShell --clientProject=client <

Option "tsconfigFileName" is deprecated: This option has no effect.
CREATE apps/client/src/main.server.ts (298 bytes)
CREATE apps/client/src/app/app.server.module.ts (590 bytes)
CREATE apps/client/tsconfig.server.json (383 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.scss (0 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.html (24 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.spec.ts (641 bytes)
CREATE apps/client/src/app/app-shell/app-shell.component.ts (293 bytes)
UPDATE package.json (2393 bytes)
UPDATE angular.json (13277 bytes)
UPDATE apps/client/src/main.ts (437 bytes)
UPDATE apps/client/src/app/app.module.ts (1325 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```
