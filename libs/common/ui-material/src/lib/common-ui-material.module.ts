import { NgModule } from '@angular/core'
import { A11yModule } from '@angular/cdk/a11y'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { LayoutModule } from '@angular/cdk/layout'
// import {} from '@angular/cdk'
// util pra linhas adicionais
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
// import { Mat Module } from '@angular/material'
// util pra linhas adicionais

@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    LayoutModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
})
export class CommonUiMaterialModule {}
