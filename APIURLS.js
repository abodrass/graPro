

export const url={
    LoginURL:"http://192.168.1.241:5126/UserAPI/Login",
    SingUpURL:"http://192.168.1.241:5126/UserAPI/Register",
    CreateApptment:"http://192.168.1.241:5126/AppointmentAPI/Create appointment",
    GetAllCategorys:"http://192.168.1.241:5126/CategoryAPI/GetAllCategorys",
    GetALLPostForThisCategory:"http://192.168.1.241:5126/AppointmentAPI/",
    allActiveAppotments:"http://192.168.1.241:5126/AppointmentAPI/MyAppointmentsByDintistToken",
    AppointmentDelete:"http://192.168.1.241:5126/AppointmentAPI",
    AppointmentBook:"http://192.168.1.241:5126/AppointmentBookedAPI/CreateAppointmentBooked",
    GetAllWaitingApprovalAppointments:"http://192.168.1.241:5126/AppointmentBookedAPI/GetAllWaitingApprovalAppointments",
    AppointmentBookedAccepted:"http://192.168.1.241:5126/AppointmentBookedAPI/AppointmentBooked Accepted",
    AppointmentBookedRejected:"http://192.168.1.241:5126/AppointmentBookedAPI/AppointmentBooked Rejected",
    GetAllActiveAppointmentBookedForPatient:"http://192.168.1.241:5126/AppointmentBookedAPI/GetAllActiveAppointmentBookedForPatient",
    GetAllMyAppointmentNotBookedYet:"http://192.168.1.241:5126/AppointmentAPI/GetAllMyAppointmentNotBookedYet",
    GetAllActiveAppointmentBookedForDentist:"http://192.168.1.241:5126/AppointmentBookedAPI/GetAllActiveAppointmentBookedForDentist?Status=Active",
    GetAllRejectAppointmentBookedForDentist:"http://192.168.1.241:5126/AppointmentBookedAPI/GetAllActiveAppointmentBookedForDentist?Status=Closed",
}