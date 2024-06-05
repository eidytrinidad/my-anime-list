import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlertModel } from '../models/notifications.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  public swalNotification({
    title,
    text,
    icon = 'success',
    showCancelButton = true,
    confirmText = 'Ok',
    cancelText = 'Cancelar',
  }: SweetAlertModel) {
    let swal = Swal.fire({
      title,

      html: `<p class='font-semibold'>${text}</p>`,
      icon,
      showCancelButton,
      confirmButtonColor: '#0f172a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });
    return swal;
  }
}
