import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl){
    const password = control.get('pass');
    const cnfmpassword = control.get('cnfmpass');
    console.log(password,cnfmpassword);

    if(!password?.pristine && cnfmpassword?.pristine){
        return null;
    }
    return password && cnfmpassword && password.value !== cnfmpassword.value
    ? { doNotMatch: true}
    : null;


}