import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { RegistrationFormComponent } from './user/registration-form/registration-form.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { MovieDetailComponent } from './user/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './user/movies/movies-now/movies.component';
import { SliderComponent } from './user/slider/slider.component';
import { DiscountComponent } from './user/discount/discount.component';
import { ModalOrderComponent } from './user/modal-order/modal-order.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './user/layout/layout.component';
import { FilmComponent } from './admin/film/movies/film.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CatmoviecreateComponent } from './admin/categorymovie/catmoviecreate/catmoviecreate.component';
import { CatmovieeditComponent } from './admin/categorymovie/catmovieedit/catmovieedit.component';
import { CatmovielistComponent } from './admin/categorymovie/catmovielist/catmovielist.component';
import { CreateCsComponent } from './admin/categoryseat/create-cs/create-cs.component';
import { EditCsComponent } from './admin/categoryseat/edit-cs/edit-cs.component';
import { ListCsComponent } from './admin/categoryseat/list-cs/list-cs.component';
import { MoviesComingComponent } from './user/movies/movies-coming/movies-coming.component';
import { PaymentComponent } from './user/payment/payment.component';
import { MyTicketComponent } from './user/my-ticket/my-ticket.component';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './admin/film/filmcreate/create.component';
import { EditComponent } from './admin/film/filmedit/edit.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { AuthInterceptor } from './services/api/auth.interceptor';
import { CreateCinemaComponent } from './admin/cinema/create-cinema/create-cinema.component';
import { EditCinemaComponent } from './admin/cinema/edit-cinema/edit-cinema.component';
import { ListCinemaComponent } from './admin/cinema/list-cinema/list-cinema.component';
import { CreateNewComponent } from './admin/new/create-new/create-new.component';
import { EditNewComponent } from './admin/new/edit-new/edit-new.component';
import { ListNewComponent } from './admin/new/list-new/list-new.component';
import { CreateShiftComponent } from './admin/shift/create-shift/create-shift.component';
import { EditShiftComponent } from './admin/shift/edit-shift/edit-shift.component';
import { ListShiftComponent } from './admin/shift/list-shift/list-shift.component';
import { CreateRoomComponent } from './admin/room/create-room/create-room.component';
import { EditRoomComponent } from './admin/room/edit-room/edit-room.component';
import { ListRoomComponent } from './admin/room/list-room/list-room.component';
import { CreateShowtimeComponent } from './admin/showtime/create-showtime/create-showtime.component';
import { EditShowtimeComponent } from './admin/showtime/edit-showtime/edit-showtime.component';
import { ListShowtimeComponent } from './admin/showtime/list-showtime/list-showtime.component';
import { CreateSeatComponent } from './admin/seat/create-seat/create-seat.component';
import { EditSeatComponent } from './admin/seat/edit-seat/edit-seat.component';
import { ListSeatComponent } from './admin/seat/list-seat/list-seat.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegistrationFormComponent,
        SignInComponent,
        AboutUsComponent,
        MovieDetailComponent,
        MoviesComponent,
        SliderComponent,
        DiscountComponent,
        ModalOrderComponent,
        NotFoundComponent,
        ForgotPasswordComponent,
        LayoutComponent,
        FilmComponent,
        LayoutAdminComponent,
        ProfileComponent,
        CatmoviecreateComponent,
        CatmovieeditComponent,
        CatmovielistComponent,
        CreateCsComponent,
        EditCsComponent,
        ListCsComponent,
        MoviesComingComponent,
        PaymentComponent,
        MyTicketComponent,
        CreateComponent,
        EditComponent,
        MyProfileComponent,
        CreateCinemaComponent,
        EditCinemaComponent,
        ListCinemaComponent,
        CreateNewComponent,
        EditNewComponent,
        ListNewComponent,
        CreateShiftComponent,
        EditShiftComponent,
        ListShiftComponent,
        CreateRoomComponent,
        EditRoomComponent,
        ListRoomComponent,
        CreateShowtimeComponent,
        EditShowtimeComponent,
        ListShowtimeComponent,
        CreateSeatComponent,
        EditSeatComponent,
        ListSeatComponent,
        AdminLoginComponent,

    ],
    imports: [BrowserModule, CommonModule, AppRoutingModule,NgxPaginationModule, HttpClientModule, FormsModule,ReactiveFormsModule],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
