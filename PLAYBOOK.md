> _run_
>
> ```bash
> nx add @nrwl/angular
> ```

```bash
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

> _run_
>
> ```bash
> npm i --save-dev @ngrx/schematics
> ```

```bash
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

# App

> _run_> Cmd
>
> ```bash
> nx generate @angular-architects/ddd:domain --name=client --addApp --ngrx --no-interactive
> ```

```bash
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

# Feature

> _run_
>
> ```bash
> ng generate @angular-architects/ddd:feature --name=account --domain=client --app=client --entity=user --lazy --ngrx <
> ```

```bash
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

> _run_
>
> ```bash
> ng generate @angular-architects/ddd:ui --name=message --domain=client <
> ```

```bash
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

> _run_
>
> ```bash
> ng generate @angular-architects/ddd:util --name=message --domain=client <
> ```

```bash
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

> _run_
>
> ```bash
> ng generate @angular-architects/ddd:util --name=peer --domain=client <
> ```

```bash
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
UPDATE package.json (2433 bytes)
UPDATE angular.json (15510 bytes)
UPDATE nx.json (1336 bytes)
UPDATE tsconfig.base.json (1223 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (437 bytes)
✔ Packages installed successfully.

Terminal will be reused by tasks, press any key to close it.
```

> _run_
>
> ```bash
> ng generate @angular-architects/ddd:feature --name=message --domain=client --app=client --entity=message --lazy --ngrx <
> ```

```bash
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

> _run_
>
> ```bash
> ng generate @schematics/angular:appShell --clientProject=client <
> ```

```bash
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

> _run_
>
> ```bash
> ng generate @nrwl/angular:library --name=shell --style=scss --directory=client --lazy --parentModule=apps/client/src/app/app.module.ts --routing --tags=type:shell <
> ```

```bash
CREATE libs/client/shell/README.md (148 bytes)
CREATE libs/client/shell/tsconfig.lib.json (465 bytes)
CREATE libs/client/shell/tslint.json (253 bytes)
CREATE libs/client/shell/src/index.ts (43 bytes)
CREATE libs/client/shell/src/lib/client-shell.module.ts (339 bytes)
CREATE libs/client/shell/tsconfig.json (200 bytes)
CREATE libs/client/shell/jest.config.js (759 bytes)
CREATE libs/client/shell/tsconfig.spec.json (236 bytes)
CREATE libs/client/shell/src/test-setup.ts (30 bytes)
UPDATE package.json (2393 bytes)
UPDATE angular.json (14132 bytes)
UPDATE nx.json (1250 bytes)
UPDATE tsconfig.base.json (1120 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (353 bytes)
UPDATE apps/client/src/app/app.module.ts (1123 bytes)

Terminal will be reused by tasks, press any key to close it.
```

> _run_
>
> ```bash
> ng generate @schematics/angular:component --name=client-shell --project=client-shell --style=scss --changeDetection=OnPush --displayBlock --flat --skipSelector --type=Container <
> ```

```bash
CREATE libs/client/shell/src/lib/client-shell.container.scss (28 bytes)
CREATE libs/client/shell/src/lib/client-shell.container.html (27 bytes)
CREATE libs/client/shell/src/lib/client-shell.container.spec.ts (662 bytes)
CREATE libs/client/shell/src/lib/client-shell.container.ts (343 bytes)
UPDATE libs/client/shell/src/lib/client-shell.module.ts (444 bytes)

Terminal will be reused by tasks, press any key to close it.
```

> _run_
>
> ```bash
> nx generate @angular-architects/ddd:feature --name=meeting --domain=client --app=client --entity=room --lazy --ngrx
> ```

```bash
CREATE libs/client/feature-meeting/README.md (168 bytes)
CREATE libs/client/feature-meeting/ng-package.json (178 bytes)
CREATE libs/client/feature-meeting/package.json (213 bytes)
CREATE libs/client/feature-meeting/tsconfig.lib.json (465 bytes)
CREATE libs/client/feature-meeting/tsconfig.lib.prod.json (230 bytes)
CREATE libs/client/feature-meeting/tslint.json (247 bytes)
CREATE libs/client/feature-meeting/src/index.ts (95 bytes)
CREATE libs/client/feature-meeting/src/lib/client-feature-meeting.module.ts (382 bytes)
CREATE libs/client/feature-meeting/tsconfig.json (200 bytes)
CREATE libs/client/feature-meeting/jest.config.js (779 bytes)
CREATE libs/client/feature-meeting/tsconfig.spec.json (236 bytes)
CREATE libs/client/feature-meeting/src/test-setup.ts (30 bytes)
CREATE libs/client/domain/src/lib/+state/room/room.actions.ts (386 bytes)
CREATE libs/client/domain/src/lib/+state/room/room.effects.ts (865 bytes)
CREATE libs/client/domain/src/lib/+state/room/room.reducer.ts (1330 bytes)
CREATE libs/client/domain/src/lib/+state/room/room.selectors.ts (1059 bytes)
CREATE libs/client/domain/src/lib/application/meeting.facade.ts (643 bytes)
CREATE libs/client/domain/src/lib/entities/room.ts (90 bytes)
CREATE libs/client/domain/src/lib/infrastructure/room.data.service.ts (996 bytes)
CREATE libs/client/feature-meeting/src/lib/meeting.component.html (221 bytes)
CREATE libs/client/feature-meeting/src/lib/meeting.component.scss (57 bytes)
CREATE libs/client/feature-meeting/src/lib/meeting.component.ts (577 bytes)
UPDATE package.json (2433 bytes)
UPDATE angular.json (15521 bytes)
UPDATE nx.json (1337 bytes)
UPDATE tsconfig.base.json (1225 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE libs/client/domain/src/index.ts (638 bytes)
UPDATE libs/client/domain/src/lib/client-domain.module.ts (1011 bytes)
✔ Packages installed successfully.
```
>*run*
>```bash
>nx add @nrwl/nest
>```

```bash
Installing packages for tooling via npm.
Installed packages for tooling via npm.
UPDATE .vscode/extensions.json (200 bytes)
UPDATE package.json (2697 bytes)
✔ Packages installed successfully.
```
>*run*
>```bash
>npm audit
>```

```bash
                       === npm audit security report ===                        
                                                                                
# Run  npm install --save-dev @angular-devkit/build-angular@0.1100.2  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ object-path                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @angular-devkit/build-angular [dev]                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ @angular-devkit/build-angular > resolve-url-loader >         │
│               │ adjust-sourcemap-loader > object-path                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1573                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


found 1 high severity vulnerability in 2178 scanned packages
  run `npm audit fix` to fix 1 of them.
```
>*run*
>```bash
>npm install --save-dev @angular-devkit/build-angular@0.1100.2
>```

```bash
Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular-devkit/build-angular@0.1100.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @ngtools/webpack@11.0.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.

+ @angular-devkit/build-angular@0.1100.2
added 61 packages from 62 contributors, removed 26 packages, updated 32 packages and audited 2214 packages in 27.881s

104 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
>*run*
>```bash
>ng generate @nrwl/nest:application --name=server --frontendProject=client --linter=tslint --tags=side:server <
>```

```bash
CREATE apps/server/tslint.json (97 bytes)
CREATE apps/server/tsconfig.app.json (237 bytes)
CREATE apps/server/tsconfig.json (197 bytes)
CREATE apps/server/src/main.ts (553 bytes)
CREATE apps/server/src/app/.gitkeep (0 bytes)
CREATE apps/server/src/assets/.gitkeep (0 bytes)
CREATE apps/server/src/environments/environment.prod.ts (52 bytes)
CREATE apps/server/src/environments/environment.ts (53 bytes)
CREATE apps/server/jest.config.js (319 bytes)
CREATE apps/server/tsconfig.spec.json (199 bytes)
CREATE apps/client/proxy.conf.json (79 bytes)
CREATE apps/server/src/app/app.controller.spec.ts (638 bytes)
CREATE apps/server/src/app/app.controller.ts (265 bytes)
CREATE apps/server/src/app/app.module.ts (250 bytes)
CREATE apps/server/src/app/app.service.spec.ts (501 bytes)
CREATE apps/server/src/app/app.service.ts (173 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE package.json (2697 bytes)
UPDATE angular.json (17184 bytes)
UPDATE nx.json (1389 bytes)
UPDATE jest.config.js (466 bytes)

Terminal will be reused by tasks, press any key to close it.
```

>*run*
>```bash
>npm install --save @nestjs/mongoose mongoose
>```

```bash
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mongoose@7.1.2 requires a peer of @types/mongoose@^5.0.0 but none is installed. You must install peer dependencies yourself.

+ mongoose@5.10.16
+ @nestjs/mongoose@7.1.2
added 23 packages from 17 contributors, removed 1 package and audited 2175 packages in 14.779s

101 packages are looking for funding
  run `npm fund` for details
```

>*run*
>```bash
>npm install --save-dev @types/mongoose
>```

```bash
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.

+ @types/mongoose@5.10.1
added 3 packages from 73 contributors and audited 2178 packages in 15.158s
```

>*run*
>```bash
>npm install --save @nestjs/swagger swagger-ui-express
>```

```bash
npm WARN @angular-devkit/build-angular@0.1100.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @ngtools/webpack@11.0.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-transformer@^0.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-validator@^0.11.1 || ^0.12.0 but none is installed. You must install peer dependencies yourself.

+ swagger-ui-express@4.1.5
+ @nestjs/swagger@4.7.5
added 5 packages from 9 contributors and audited 2219 packages in 26.428s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```




>*run*
>```bash
>npm i --save @nestjs/websockets @nestjs/platform-socket.io
>```

```bash
npm WARN @angular-devkit/build-angular@0.1100.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-transformer@^0.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-validator@^0.11.1 || ^0.12.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngtools/webpack@11.0.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.

+ @nestjs/websockets@7.5.5
+ @nestjs/platform-socket.io@7.5.5
added 45 packages from 28 contributors, removed 1 package and audited 2272 packages in 18.113s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```



>*run*
>```bash
>npm i --save-dev @types/socket.io socket.io-client
>```

```bash
npm WARN @angular-devkit/build-angular@0.1100.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-transformer@^0.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN @nestjs/mapped-types@0.1.1 requires a peer of class-validator@^0.11.1 || ^0.12.0 but none is installed. You must install peer dependencies yourself.
npm WARN @ngtools/webpack@11.0.2 requires a peer of @angular/compiler-cli@^11.0.0 || ^11.0.0-next but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/compiler@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of @angular/core@>=2.3.1 <9.0.0 || >8.0.0-beta <9.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN codelyzer@5.0.1 requires a peer of tslint@^5.0.0 but none is installed. You must install peer dependencies yourself.

+ @types/socket.io@2.1.11
+ @types/socket.io-client@1.4.34
added 2 packages from 8 contributors and audited 2274 packages in 15.618s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

>*run*
>```bash
>ng generate @nrwl/nest:gateway --name=meeting --project=server --directory=app/client/room --flat <
>```

```bash
CREATE apps/server/src/app/client/room/meeting.gateway.spec.ts (467 bytes)
CREATE apps/server/src/app/client/room/meeting.gateway.ts (241 bytes)
UPDATE apps/server/src/app/client/client.module.ts (909 bytes)

Terminal will be reused by tasks, press any key to close it.
```



>*run*
>```bash
>ng generate @nrwl/node:library --name=entities --directory=core --buildable --importPath=@mymessage/core/entities --linter=tslint <
>```


```bash
CREATE libs/core/entities/tslint.json (100 bytes)
CREATE libs/core/entities/README.md (180 bytes)
CREATE libs/core/entities/tsconfig.json (200 bytes)
CREATE libs/core/entities/tsconfig.lib.json (232 bytes)
CREATE libs/core/entities/src/index.ts (37 bytes)
CREATE libs/core/entities/src/lib/core-entities.spec.ts (173 bytes)
CREATE libs/core/entities/src/lib/core-entities.ts (69 bytes)
CREATE libs/core/entities/jest.config.js (347 bytes)
CREATE libs/core/entities/tsconfig.spec.json (276 bytes)
CREATE libs/core/entities/package.json (63 bytes)
UPDATE tsconfig.base.json (1294 bytes)
UPDATE angular.json (18388 bytes)
UPDATE nx.json (1436 bytes)
UPDATE .vscode/extensions.json (200 bytes)
UPDATE jest.config.js (502 bytes)

Terminal will be reused by tasks, press any key to close it.
```

>*run*
>```bash
>
>```

```bash
```



>*run*
>```bash
>
>```

```bash
```

