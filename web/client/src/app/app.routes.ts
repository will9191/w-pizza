import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { LayoutComponent } from './shared/layouts/layout/layout.component';
import { ProductListComponent } from './features/product/pages/product-list/product-list.component';
import { IngredientListComponent } from './features/ingredient/pages/ingredient-list/ingredient-list.component';
import { UtensilsComponent } from './features/utensil/pages/utensils/utensils.component';
import { EmployeesComponent } from './features/employee/pages/employees/employees.component';
import { RegisterComponent } from './core/auth/pages/register/register.component';
import { ProductDetailsComponent } from './features/product/pages/product-details/product-details.component';
import { OrderListComponent } from './features/order/order-list/order-list.component';
import { OrderDetailsComponent } from './features/order/order-details/order-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductListComponent,
        title: 'Products',
      },
      {
        path: 'products/1',
        component: ProductDetailsComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent, title: 'Orders'
      }, {
        path: 'orders/1',
        component: OrderDetailsComponent
      },
      {
        path: 'ingredients',
        component: IngredientListComponent,
        title: 'Ingredients',
      },
      {
        path: 'utensils',
        component: UtensilsComponent,
        title: 'Utensils',
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        title: 'Employees',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
