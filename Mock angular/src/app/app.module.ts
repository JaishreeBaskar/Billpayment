import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCustomerComponent } from './register/register-customer/register-customer.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { RegistervendorComponent } from './register/registervendor/registervendor.component';
import { ViewComponent } from './view/view.component';
import { CustomerComponent } from './customer/customer.component';
import { PaytmComponent } from './customer/paytm/paytm.component';
import { GooglePayComponent } from './customer/google-pay/google-pay.component';
import { EWalletComponent } from './customer/e-wallet/e-wallet.component';
import { InternetBankingComponent } from './customer/internet-banking/internet-banking.component';
import { DebitCardComponent } from './customer/credit/debit-card/debit-card.component';
import { CreditDebitCardComponent } from './customer/credit-debit-card/credit-debit-card.component';
import { ElectricityComponent } from './customer/electricity/electricity.component';
import { DthComponent } from './customer/dth/dth.component';
import { TelephoneComponent } from './customer/telephone/telephone.component';
import { InsuranceComponent } from './customer/insurance/insurance.component';
import { TaxComponent } from './customer/tax/tax.component';
import { CreditCardComponent } from './customer/credit-card/credit-card.component';
import { LoanAccountComponent } from './customer/loan-account/loan-account.component';
import { OthersComponent } from './customer/others/others.component';
import { EditComponent } from './vendor/edit/edit.component';
import { NewregisterComponent } from './site/newregister/newregister.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [ 
  { path: 'login',component: LoginComponent},
  { path: 'reg1', component: RegisterCustomerComponent},
  { path: 'reg2', component: RegistervendorComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'view/:nov', component: ViewComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'edit/:nov', component: EditComponent },
  { path: 'paybill', component: ElectricityComponent },
  { path: 'PayTm', component: PaytmComponent },
  { path: 'Google Pay', component: GooglePayComponent },
  { path: 'Internet Banking', component: InternetBankingComponent },
  { path: 'Credit/Debit Card', component: CreditDebitCardComponent },
  { path: 'e-wallet', component: EWalletComponent },
  { path: 'reg', component:NewregisterComponent },
  { path: 'help', component:HelpComponent }
];


@NgModule({ 
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    RegistervendorComponent,
    LoginComponent,
    AdminComponent,
    VendorComponent,
    RegistervendorComponent,
    ViewComponent,
    CustomerComponent,
    PaytmComponent,
    GooglePayComponent,
    EWalletComponent,
    InternetBankingComponent,
    DebitCardComponent,
    CreditDebitCardComponent,
    ElectricityComponent,
    DthComponent,
    TelephoneComponent,
    InsuranceComponent,
    TaxComponent,
    CreditCardComponent,
    LoanAccountComponent,
    OthersComponent,
    EditComponent,
    NewregisterComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
