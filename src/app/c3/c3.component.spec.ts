// // tslint:disable
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { of } from 'rxjs';
// import { SpeedGoService } from '../speedgo.service';
// import { ReviewComponent } from './review.component';
// import { DATES, RoutesUtilsService } from '@vfde-fe/ng-modules';
// import { NgxSmartModalService } from 'ngx-smart-modal';
// import { Router } from '@angular/router';
// import { MODALS, NOTIFICATIONS, SPEED_GO } from '../../common/constants/Defines';


// // Mock data for speedgo reviw component
// namespace Mock {

//     export class SpeedGoService {
//         public checkAvailability = () => {}

//         public submitDeactivation = () => {}

//         public getbillCycleEndDate = () => of({billCycleEndDate: 'some date'});
//     }

//     export class RoutesUtilsService {
//         public navigateToURL ( url, replaceURL, target) {

//         }
//     }

//     export class Router {
//         public navigate = () => {

//         }
//     }

//     export class NgxSmartModalService {
//         /** getModal */
//         public getModal (modalName) {
//             return { open: function () {} , close: function () {} };
//         }
//     }

//     export class TranslateService {
//         public instant () {
//             return '/date/{{date}}';
//         }
//         public get () {
//             return of('');
//         }
//     }
// }

// xdescribe('SPEED_GO ReviewComponent', () => {
//     let component: ReviewComponent;
//     let fixture: ComponentFixture<ReviewComponent>;
//     let SOC_LIST: string[];

//     // beforeEach(() => {
//     //     SOC_LIST = [
//     //         'SO_BARASB' /* perm deactivated SOC */,
//     //         'BARASBBC'  /* temp deactivated SOC */,
//     //         'BARASBBC2' /* temp deactivated SOC */,
//     //         'BARASBBC3' /* temp deactivated SOC */,
//     //     ];
//     // });

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [ReviewComponent],
//             imports: [RouterTestingModule, TranslateModule.forRoot()],
//             providers: [
//                 { provide: SpeedGoService,          useClass: Mock.SpeedGoService },
//                 { provide: RoutesUtilsService,      useClass: Mock.RoutesUtilsService },
//                 { provide: Router,                  useClass: Mock.Router },
//                 { provide: NgxSmartModalService,    useClass: Mock.NgxSmartModalService },
//                 { provide: TranslateService,        useClass: Mock.TranslateService },
//             ],
//             schemas: [NO_ERRORS_SCHEMA],
//         });


//         fixture = TestBed.createComponent(ReviewComponent);
//         component = fixture.componentInstance;
//     });

//     it('should create instance', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should call checkAvailability from service when component is initialized',
//         inject([SpeedGoService], (service: SpeedGoService) => {
//             spyOn(service, 'getbillCycleEndDate').and.returnValue(of("date"));

//             let spy = spyOn(service, 'checkAvailability').and.returnValue(of('some value'));
//             component.ngOnInit();
//             expect(spy).toHaveBeenCalled();
//         })
//     );

//     it('should load warning after bill cycle end date', inject([SpeedGoService], (service: SpeedGoService) => {
//         spyOn(service, 'getbillCycleEndDate').and.returnValue(of("date"));
//         spyOn(service, 'checkAvailability').and.returnValue(of('some value'));
//         component.ngOnInit();
//         expect(service.getbillCycleEndDate).toHaveBeenCalled();
//         expect(component.wariningDetails.class).toBe('warning');
//         expect(component.wariningDetails.text).toBeDefined();
//     })
// );

//     it('should call submitDeactivation from service when deacivate function is called',
//         inject([SpeedGoService], (service: SpeedGoService) => {
//             let spy = spyOn(service, 'submitDeactivation').and.returnValue(of({}));
//             component.deacivate();
//             expect(spy).toHaveBeenCalled();
//         })
//     );

//     it('should navigate to prv page when cancel btn is clicked', () => {
//         let spy = spyOn(component.routesUtilsService, 'navigateToURL').and.callThrough();
//             component.cancel();
//             expect(spy).toHaveBeenCalledWith(SPEED_GO.BACK_LINK);
//     });


//     it('should update flages when switcher is toggled', () => {
//             component.toggle();
//             expect(component.isActivated).toBe(false);
//             expect(component.isDisabled).toBe(true);
//     });

//     describe('Overlay', () => {
//         it('should display modal when function called', () => {
//             let spy = spyOn(component.ngxSmartModalService, 'getModal')
//                 .and.returnValue({open: function () {}});
//             component.openOverlay();
//             expect(spy).toHaveBeenCalled();
//         });
//         it('should display modal when function called', () => {
//             let spy = spyOn(component.ngxSmartModalService, 'getModal')
//                 .and.returnValue({close: function () {}});
//             component.closeOverlay();
//             expect(spy).toHaveBeenCalled();
//         })
//     });

// });
